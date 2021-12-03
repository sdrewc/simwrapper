/**
 * Load a gzip file, parse its contents and return a set of ArrayBuffers for display.
 */
import pako from 'pako'
import Papaparse from 'papaparse'

import { FileSystemConfig } from '@/Globals'
import HTTPFileSystem from '@/js/HTTPFileSystem'
import Coords from '@/js/Coords'

// -----------------------------------------------------------
onmessage = function (e) {
  startLoading(e.data)
}
// -----------------------------------------------------------

interface RowCache {
  [id: string]: { raw: Float32Array; length: number; coordColumns: number[] }
}

interface Aggregations {
  [heading: string]: {
    title: string
    x: string
    y: string
  }[]
}

let allAggregations: Aggregations = {}
let totalLines = 0
let proj = 'EPSG:4326'

const rowCache: RowCache = {}
const columnLookup: number[] = []

/**
 * Begin loading the file, and return status updates
 * as observables. When observable is complete, the
 * processing is finished and results can be obtained
 * by calling results().
 */
function startLoading(props: {
  filepath: string
  fileSystem: FileSystemConfig
  aggregations: Aggregations
  projection: string
}) {
  console.log('csvGzipParser worker starting')
  allAggregations = props.aggregations
  proj = props.projection

  postMessage({ status: `Loading ${props.filepath}...` })
  step1fetchFile(props.filepath, props.fileSystem)
}

// export type CSVParser = typeof csvParser

// --- helper functions ------------------------------------------------

/**
 * Return the results after processing is complete.
 * @returns RowCache, ColumnLookup
 */
function postResults() {
  console.log('WORKER RESULTS')
  console.log({ rowCache, columnLookup })
  postMessage(
    { rowCache, columnLookup },
    Object.values(rowCache).map((cache) => cache.raw.buffer)
  )
}

async function step1fetchFile(filepath: string, fileSystem: FileSystemConfig) {
  try {
    const httpFileSystem = new HTTPFileSystem(fileSystem)
    const blob = await httpFileSystem.getFileBlob(filepath)
    if (!blob) throw Error('BLOB IS NULL')
    const buffer = await blob.arrayBuffer()

    // this will recursively gunzip until it can gunzip no more:
    const unzipped = gUnzip(buffer)

    step2examineUnzippedData(unzipped)
  } catch (e) {
    throw Error('LOAD FAIL !')
  }
}

function step2examineUnzippedData(unzipped: Uint8Array) {
  postMessage({ status: 'Decoding CSV...' })

  // Figure out which columns to save
  const decoder = new TextDecoder()

  const header = decoder.decode(unzipped.subarray(0, 1024)).split('\n')[0]
  const endOfHeader = header.length + 1

  const separator = header.indexOf(';') > -1 ? ';' : header.indexOf('\t') > -1 ? '\t' : ','
  const headerColumns = header.split(separator)
  console.log(headerColumns)

  // split uint8 array into subarrays
  const startOfData = endOfHeader + 1
  let half = Math.floor(unzipped.length / 2)
  while (unzipped[half] !== 10) {
    // \n
    half -= 1
  }
  const section1 = unzipped.subarray(startOfData, half)
  const section2 = unzipped.subarray(half)

  const sections = [section1, section2]

  // how many lines
  let count = 0
  for (let i = startOfData; i < unzipped.length; i++) {
    if (unzipped[i] === 10) count++
  }
  console.log(count, 'newlines')

  totalLines = count

  // only save the relevant columns to save memory and not die

  for (const group of Object.keys(allAggregations)) {
    const aggregations = allAggregations[group]
    let i = 0
    for (const agg of aggregations) {
      const xCol = headerColumns.indexOf(agg.x)
      const yCol = headerColumns.indexOf(agg.y)
      columnLookup.push(...[xCol, yCol])
      rowCache[`${group}${i}`] = {
        raw: new Float32Array(count * 2),
        coordColumns: [xCol, yCol],
        length: count,
      }
      i++
    }
  }

  step3parseCSVdata(sections)
}

function step3parseCSVdata(sections: Uint8Array[]) {
  let offset = 0

  const decoder = new TextDecoder()

  for (const section of sections) {
    const text = decoder.decode(section)

    Papaparse.parse(text, {
      header: false,
      // preview: 100,
      skipEmptyLines: true,
      dynamicTyping: true,
      step: (results: any, parser) => {
        if (offset % 65536 === 0) {
          console.log(offset)
          postMessage({ status: `Processing CSV: ${Math.floor((50.0 * offset) / totalLines)}%` })
        }
        for (const key of Object.keys(rowCache)) {
          const wgs84 = Coords.toLngLat(proj, [
            results.data[rowCache[key].coordColumns[0] as any],
            results.data[rowCache[key].coordColumns[1] as any],
          ])
          rowCache[key].raw.set(wgs84, offset)
        }
        offset += 2
        return results
      },
    })
  }

  postMessage({ status: 'Trimming results...' })
  // now filter zero-cells out: some rows don't have coordinates, and they
  // will mess up the total calculations
  for (const key of Object.keys(rowCache)) {
    // this is dangerous: only works if BOTH the x and the y are zero; otherwise
    // it will get out of sync and things will look crazy or crash HAHahahAHHAA

    // rowCache[key].raw = rowCache[key].raw.filter(elem => elem !== 0) // filter zeroes
    rowCache[key].length = rowCache[key].raw.length / 2
  }

  postResults()
}

/**
 * This recursive function gunzips the buffer. It is recursive because
 * some combinations of subversion, nginx, and various web browsers
 * can single- or double-gzip .gz files on the wire. It's insane but true.
 */
function gUnzip(buffer: any): Uint8Array {
  // GZIP always starts with a magic number, hex $1f8b
  const header = new Uint8Array(buffer.slice(0, 2))
  if (header[0] === 0x1f && header[1] === 0x8b) {
    return gUnzip(pako.inflate(buffer))
  }
  return buffer
}