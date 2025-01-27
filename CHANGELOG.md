# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/simwrapper/simwrapper/compare/v2.0.1...v2.1.0) (2023-01-08)


### Features

* Dashboard files no longer need "props:" subsection: less indentation! ([777a85e](https://github.com/simwrapper/simwrapper/commit/777a85e638327831d1fa39c207e40f42102fe3ed))


### Bug Fixes

* **flowmap:** 2.0 merge caused some flowmap problems ([4d2e4f4](https://github.com/simwrapper/simwrapper/commit/4d2e4f4a297f8f1d7ee0ef2cc5b153efb062544d)), closes [#189](https://github.com/simwrapper/simwrapper/issues/189)
* folder browser thumbnail colors are not consistent ([d74964c](https://github.com/simwrapper/simwrapper/commit/d74964c0bedaf054f5568a3233a736f933adad27))
* Sankey plot and others had ill-formed div ID's ([b179d6b](https://github.com/simwrapper/simwrapper/commit/b179d6bb02bc8052e30ab0b3c43d7c3656d6ccc6))
* Shapefile data tooltips went missing ([76f0931](https://github.com/simwrapper/simwrapper/commit/76f0931d0f0e36fa7b193c4c0a0771effc13119a)), closes [#188](https://github.com/simwrapper/simwrapper/issues/188)

### [2.0.1](https://github.com/simwrapper/simwrapper/compare/v2.0.0...v2.0.1) (2022-12-22)

### Bug Fixes

- memory optimization for shapefile and transit viewers
- camera is not shifting when user specified a center in YAML ([ffd981f](https://github.com/simwrapper/simwrapper/commit/ffd981f57645353146c069cdce3af5210eb822c5))

## [2.0.0](https://github.com/simwrapper/simwrapper/compare/v1.10.0...v2.0.0) (2022-12-16)

### ⚠ BREAKING CHANGES

- several new config files require new parameters

### Features

- add keep/drop params for datasets and shapefiles ([efc4819](https://github.com/simwrapper/simwrapper/commit/efc481988e1605605f139db8f056ae9f73359a1e))
- Add user-defined data sources and URL shortcuts ([1861090](https://github.com/simwrapper/simwrapper/commit/1861090ccf5f9c4d8f2c979d824dbc8a63080cb7))
- **carriers:** enable carrier multi-select ([fbcfa00](https://github.com/simwrapper/simwrapper/commit/fbcfa00a0f2ac4a8e8c7b0d119c51c76ce90d196)), closes [#185](https://github.com/simwrapper/simwrapper/issues/185)
- **charts:** Filter basic chart types with values and ranges ([c684fe3](https://github.com/simwrapper/simwrapper/commit/c684fe3b5a27ad12e153fa8efc986218b9ea4042))
- **dashboards:** Render README.md folder contents above tab bar ([19b2800](https://github.com/simwrapper/simwrapper/commit/19b2800756cc3725fd79c0399d1f6c0491079283))
- **dashboards:** Skip dashboards using .nodashboards and triggerPattern ([23486ba](https://github.com/simwrapper/simwrapper/commit/23486ba060c7d1b5825b16f0506da552ce159677))
- Drag and Drop support for splitting views ([6aabf72](https://github.com/simwrapper/simwrapper/commit/6aabf723940fe74e0236bd62ede9ff53ac1a2255))
- embed EPSG code in CSV files with a comment line # EPSG:xxxx ([20cddb7](https://github.com/simwrapper/simwrapper/commit/20cddb7dcc133203a09cbc22136498df18012c8f))
- Filter shapes by property values such as facility types ([c37f91d](https://github.com/simwrapper/simwrapper/commit/c37f91d55132f403b47692250529a90128908425))
- Filter shapes by property values such as facility types ([a5dc632](https://github.com/simwrapper/simwrapper/commit/a5dc6326c722b23c159279dc77a77b9a1c157e0f))
- **links:** Support SFCTA-style daysim networks ([f8974be](https://github.com/simwrapper/simwrapper/commit/f8974bef94ae9b6f27c4f50c40be95b7fc9a0550))
- **map:** Filters work on datasets now ([a1437ba](https://github.com/simwrapper/simwrapper/commit/a1437ba93fc9d2f3253165f072321b449f7a95e4))
- **map:** Legends now auto-generated based on map colors, widths, etc ([#156](https://github.com/simwrapper/simwrapper/issues/156)) ([af4fee6](https://github.com/simwrapper/simwrapper/commit/af4fee67c27bb7659fee854cb524ea5ef830906f))
- **map:** Legends now auto-generated based on map colors, widths, etc ([#156](https://github.com/simwrapper/simwrapper/issues/156)) ([0f9b062](https://github.com/simwrapper/simwrapper/commit/0f9b062e65818d8e7d78e727f6667a11fa34e222))
- **map:** Map learned relative-difference mode "relative: true" ([779a8dc](https://github.com/simwrapper/simwrapper/commit/779a8dcc811fd0687cb281dd8fab01943d2306d6))
- **maps:** Shapefile viewer learned fill height, circle radius, and more ([93653f4](https://github.com/simwrapper/simwrapper/commit/93653f4f252955bc00174ffd8c771d8e50fe1e3b))
- Redesigned left-side navigation for quick access to files & settings ([9fee32c](https://github.com/simwrapper/simwrapper/commit/9fee32c4d77a1642cf8a55a0688275f37d66cd01))
- Serve /public/data files from /data URL ([93408d8](https://github.com/simwrapper/simwrapper/commit/93408d861c23c6ef4de59bb38dbe950508a20813))

### Bug Fixes

- add background to back-button on full-screen visualizations ([9f0c314](https://github.com/simwrapper/simwrapper/commit/9f0c3140df50b2ea093f616288bf908835d43a51))
- Add pitch/bearing to map export yaml ([2370b54](https://github.com/simwrapper/simwrapper/commit/2370b545cc6454e2b66946c7efd1f72e2a17a184))
- adjust MapLibre logo so it's always in the proper corner ([a4000bd](https://github.com/simwrapper/simwrapper/commit/a4000bd3c2536b830a1df586c3ceec6fa6839668))
- BASE_URL must be imported correctly with latest Vite 3.1.x ([223935f](https://github.com/simwrapper/simwrapper/commit/223935f0559c7e8ee1af2049086f77e743f30ef0))
- **calcs:** Old calc/topsheets using {dataset.column} instead of [@sum](https://github.com/sum) work ([b088eac](https://github.com/simwrapper/simwrapper/commit/b088eac8c2cd15698b1b262435a68c04769aff45))
- dark mode charts had wrong background color ([0f09d6f](https://github.com/simwrapper/simwrapper/commit/0f09d6fa90827a31b35166178f6e8f9b9c304e6c))
- **dashboards:** allow .nodashboards, nodashboards, nodashboards.txt ([abf166f](https://github.com/simwrapper/simwrapper/commit/abf166fc70ab57d333b5047520753168e0553a1e))
- **dashboards:** allow "type: markdown" as synonym for "type: text" block ([1ebeb66](https://github.com/simwrapper/simwrapper/commit/1ebeb663bea7cbed297b6fdb0b3060717895527f))
- double slash in path names can sometimes break file loading ([d73b2e8](https://github.com/simwrapper/simwrapper/commit/d73b2e8f7f9d4e9fadba3003594e0e8e89a444a1))
- downgrade vite to 2.5.10 until we can figure out the base_url problem ([6a356c3](https://github.com/simwrapper/simwrapper/commit/6a356c300e81f36d732a440c6ad26734d8941b16))
- fix shapefile export by patching dbf package ([7870994](https://github.com/simwrapper/simwrapper/commit/78709948accb83a4778b3ce0d53d7da3e25c7952))
- link viz no longer fails when some link-ids are parseable as numbers ([2bc224f](https://github.com/simwrapper/simwrapper/commit/2bc224f099c1d825e69c3920322dfa02db6b9c3a))
- **links:** prompt user for EPSG if network doesn't contain crs attribute ([711ef4e](https://github.com/simwrapper/simwrapper/commit/711ef4e5f1101009b52ca56ed27f786213dd85ff))
- Load geojson-encoded MATSim networks in background ([a4fefcb](https://github.com/simwrapper/simwrapper/commit/a4fefcb07f8c17ffe946906fc0ef2e7a0e779307))
- memory leak in shapefile viewer ([d23184b](https://github.com/simwrapper/simwrapper/commit/d23184b51dc4c31e803bec35da0da3e31669f776))
- move logo based on ResizeObserver API - instead of window.resize ([9bee707](https://github.com/simwrapper/simwrapper/commit/9bee7078ec01b4dcb55ce70ef3c2a48550482355))
- **shapes:** transparency slider was invisible ([eb7151c](https://github.com/simwrapper/simwrapper/commit/eb7151c4b0988eda8e6078bf92ad00574531e6a5))
- simwrapper folder in root of filesystem might get ignored ([2b81f68](https://github.com/simwrapper/simwrapper/commit/2b81f6899ba518eaae6f1ced082584a628d86577))
- switch "simwrapper here" ports from 9039 -> 8050 ([6a2efb2](https://github.com/simwrapper/simwrapper/commit/6a2efb25fb270dfef74947fc08455d9557647c72))
- Topsheet configs don't handle \*asterisk properly ([#166](https://github.com/simwrapper/simwrapper/issues/166)) ([d51b250](https://github.com/simwrapper/simwrapper/commit/d51b250e21c71a77fd32f4f5ce81a8dc02c4a586)), closes [#154](https://github.com/simwrapper/simwrapper/issues/154)
- topsheets don't load local files with '..' in path ([9e85b3a](https://github.com/simwrapper/simwrapper/commit/9e85b3ae93f626e8d8c100c12646729fa4f1f27a))
- **transit:** fix [#149](https://github.com/simwrapper/simwrapper/issues/149), transit network crashes if route has just one stop ([3230a81](https://github.com/simwrapper/simwrapper/commit/3230a81cd49a37669c3a57f6823e133504062cca))
- **transit:** Some pt_stop2stop_departures files were not loading ([f6aab04](https://github.com/simwrapper/simwrapper/commit/f6aab04f9ee0f4de0a7fcda17ece68c2c2f525e3))
- update supported browser list: any browser from the past 3 years ([5057f17](https://github.com/simwrapper/simwrapper/commit/5057f17e491c5e537c54975240cc25a1f5a4f194))
- **xy:** handle \*wildcards and input CSVs with CRLF line endings ([e9f30c1](https://github.com/simwrapper/simwrapper/commit/e9f30c1c97a4891e4ecc8a5982548b885e244fe7))
- **xyt:** Ask user for coordinate system if it is needed ([d27ed95](https://github.com/simwrapper/simwrapper/commit/d27ed9517d91e8be32b70a4742a75e76c9c1b10b))
- **xyt:** time slider was crashing chrome with some x/y/t datasets ([35f16ee](https://github.com/simwrapper/simwrapper/commit/35f16eeb40b479132eb93c7b81f3afcb59eb1ea8))
- **xyt:** XYT can now load huge files from Subversion and the web ([fd9a090](https://github.com/simwrapper/simwrapper/commit/fd9a090cac0d4a94a39f9f1f215e2851008ced76))
- **xyt:** XYT map no longer always centered on Berlin ([502102b](https://github.com/simwrapper/simwrapper/commit/502102b1e479128349caf2f8802014965907aaf4))

- bump version to 2.0.0 ([ae2afac](https://github.com/simwrapper/simwrapper/commit/ae2afac5ed99c666ba15952a325f49f626ba3168))

## [1.10.0](https://github.com/simwrapper/simwrapper/compare/v1.9.0...v1.10.0) (2022-04-25)

### Features

- Aggregate-OD learned dashboards, lineWidths, and hideSmallerThan ([b8035c2](https://github.com/simwrapper/simwrapper/commit/b8035c2a522d67272b26a255177c39b60dfca0de))
- Calculation tables can now be 'table' type, and use table\*.yaml config ([2868708](https://github.com/simwrapper/simwrapper/commit/28687085dce957d62fb336d5dcce2ce6b783a7a3))
- Dashboards learned "text" block type, for including readme content ([7d7b4f4](https://github.com/simwrapper/simwrapper/commit/7d7b4f4a71cdeafcc21a0d435c49a7ee6c81b20f))
- **map:** give user feedback while loading files ([ef919d5](https://github.com/simwrapper/simwrapper/commit/ef919d5a2e7ab3bf32f297f5e0585de145e13ce1))
- new "Area Map" viz type for zone maps, etc: viz-map\*.yaml ([9bf2a8d](https://github.com/simwrapper/simwrapper/commit/9bf2a8d084da6e17e389ab634f431b43843ef576))
- Save PNG screenshot of all DeckMap-based views ([059e43a](https://github.com/simwrapper/simwrapper/commit/059e43ab146df028abb87a95a2b2a63a6bc59d6f))
- **tables:** add @sum, @count, @first, @last, @mean, @min, @max functions to tables ([9b2020a](https://github.com/simwrapper/simwrapper/commit/9b2020ab9d07124fd39a2e18636030b6559d1ab2)), closes [#35](https://github.com/simwrapper/simwrapper/issues/35)

### Bug Fixes

- Allow _wildcards_ in network path loader ([dd70112](https://github.com/simwrapper/simwrapper/commit/dd70112bd12c7640726629824108a01b52a53610)), closes [#117](https://github.com/simwrapper/simwrapper/issues/117)
- Autoplay option for video ([cce6922](https://github.com/simwrapper/simwrapper/commit/cce69228ffa2adc649d8827bfe38ca79b2d14f1a)), closes [#135](https://github.com/simwrapper/simwrapper/issues/135)
- DBF data loader wasn't calculating max column values ([2ef2336](https://github.com/simwrapper/simwrapper/commit/2ef2336a1a5562497c17b3427f68767b39b5905c))
- drawing tool placement conflicts with map settings ([72ad432](https://github.com/simwrapper/simwrapper/commit/72ad43285bf7a6eab51bc4f7f4c9b246750dbee8))
- fix [#138](https://github.com/simwrapper/simwrapper/issues/138), images don't reload on tabs in chrome-local-mode ([f7ba932](https://github.com/simwrapper/simwrapper/commit/f7ba93276e90a0ed3bc294b6631b1da3219bed7b))
- gunzip JSON files if necessary ([0832c4f](https://github.com/simwrapper/simwrapper/commit/0832c4f0439b9c6862c53765c494e50cf0cee202))
- Honor simwrapper/ folder contents for SUBFOLDER dashboards only ([373685a](https://github.com/simwrapper/simwrapper/commit/373685a6813b1bf761ec7340c189188af161996e)), closes [#108](https://github.com/simwrapper/simwrapper/issues/108)
- Image plugin now handles asterisks ([e216e4b](https://github.com/simwrapper/simwrapper/commit/e216e4be244c015ca981954eb7a943d1849964a0)), closes [#136](https://github.com/simwrapper/simwrapper/issues/136)
- **map:** better tooltip with value at top ([a92937a](https://github.com/simwrapper/simwrapper/commit/a92937aed5c2d5c3d8a9d76f5c0c4bab1cbc0bb1))
- **map:** improved export with more fields populated ([3dabf6f](https://github.com/simwrapper/simwrapper/commit/3dabf6fadc869b39ef96a57077bf13bb3ab76378))
- **map:** Massive speed boost by turning off shape border-lines ([372c94d](https://github.com/simwrapper/simwrapper/commit/372c94d24e4b814c18b27c19d5b257d8c7698358))
- **maps:** handle large number of columns, filters in UI ([d35274e](https://github.com/simwrapper/simwrapper/commit/d35274e0749112bf1f89abb7c8477922a7683409))
- **map:** still show TAZ boundaries for smaller geojson files ([ee632cf](https://github.com/simwrapper/simwrapper/commit/ee632cf3fbec12cf461ff8a659b0cbe5dd806560))
- overall layout bugs - left panel, close buttons, etc ([7f185f1](https://github.com/simwrapper/simwrapper/commit/7f185f138e4fa0d33cd8c65a1cf131fb81147c19))
- Parse space-delimited CSVs properly ([79da8bd](https://github.com/simwrapper/simwrapper/commit/79da8bdd5b58ae999c399d09c02d9579e7f0275e))
- Support GeoJSON networks with feature.id or feature.properties.id ([dbbaf7e](https://github.com/simwrapper/simwrapper/commit/dbbaf7e1851cf89c24b624618f83a0c9b29f3525)), closes [/datatracker.ietf.org/doc/html/rfc7946#section-6](https://github.com/simwrapper//datatracker.ietf.org/doc/html/rfc7946/issues/section-6) [/datatracker.ietf.org/doc/html/rfc7946#section-6](https://github.com/simwrapper//datatracker.ietf.org/doc/html/rfc7946/issues/section-6)
- Tables and topsheets now shown as thumbnails on Files tab ([2c79733](https://github.com/simwrapper/simwrapper/commit/2c7973350b2e93f21c9461e6a485f23d90b84d86)), closes [#106](https://github.com/simwrapper/simwrapper/issues/106)
- Xy-hexagon YAML now has zoom,center,maxHeight,radius enabled ([d50ba3b](https://github.com/simwrapper/simwrapper/commit/d50ba3b3ea2c1abc499be611f1d2c29647d22ade))

## [1.9.0](https://github.com/simwrapper/simwrapper/compare/v1.8.0...v1.9.0) (2022-03-17)

### Features

- Add dashboard row-id as a CSS class name, to enable custom css ([97f9a7d](https://github.com/simwrapper/simwrapper/commit/97f9a7da79c646a10f6211dfc89862727738cbca)), closes [#122](https://github.com/simwrapper/simwrapper/issues/122)
- Dashboard widths in simwrapper-config.yaml; width: [100%|70rem] etc ([131fca6](https://github.com/simwrapper/simwrapper/commit/131fca67c572a90e3c0b0dccef94a602408801cb)), closes [#120](https://github.com/simwrapper/simwrapper/issues/120)
- Enable Chrome local file browsing ([5bb3bed](https://github.com/simwrapper/simwrapper/commit/5bb3bedfd27bf741cd54e036e037f5fff691703a))
- New 'slideshow' or 'image' dashboard panel type ([e010ca3](https://github.com/simwrapper/simwrapper/commit/e010ca398b364f832f6c7552bc82e7c80de8c433)), closes [#113](https://github.com/simwrapper/simwrapper/issues/113)
- save tab in URL bar ([f85f2a6](https://github.com/simwrapper/simwrapper/commit/f85f2a66ffb50c2239ae0590f496bf70ac7d6722)), closes [#134](https://github.com/simwrapper/simwrapper/issues/134)
- Site headers, footers, and standalone dashboards ([#116](https://github.com/simwrapper/simwrapper/issues/116)) ([3669579](https://github.com/simwrapper/simwrapper/commit/3669579c9bd28b07c0bb0393a93563ac266545a8))

### Bug Fixes

- Don't flash footer at top of page while tabs are switching ([2f19ade](https://github.com/simwrapper/simwrapper/commit/2f19adecfab111b5ef8d8bc0abc686cf11d172c8)), closes [#123](https://github.com/simwrapper/simwrapper/issues/123)
- Sankey ordering should be based on data input, not inconsistent ([04f6a12](https://github.com/simwrapper/simwrapper/commit/04f6a12db850178b3312ed77324294b99be46886)), closes [#114](https://github.com/simwrapper/simwrapper/issues/114)
- topsheet doesn't parse XML correctly ([107c277](https://github.com/simwrapper/simwrapper/commit/107c277512def600aedd5a636208eb40a38a9566))
- Vega-chart layout broken in multi-facted charts ([714b29b](https://github.com/simwrapper/simwrapper/commit/714b29b2a2a28433dd420f22a723887e608480b8)), closes [#133](https://github.com/simwrapper/simwrapper/issues/133)

## [1.8.0](https://github.com/simwrapper/simwrapper/compare/v1.7.2...v1.8.0) (2022-03-03)

### Features

- Dashboards learned "video" panel type ([#107](https://github.com/simwrapper/simwrapper/issues/107)) ([a2670a4](https://github.com/simwrapper/simwrapper/commit/a2670a4dec989b1b794b5843c05875116dce74a7))
- **links:** configurable viewport ([#103](https://github.com/simwrapper/simwrapper/issues/103)) ([5011174](https://github.com/simwrapper/simwrapper/commit/5011174e2662e53ea8e55edb7123558ba71d9c43))

### Bug Fixes

- Fix [#105](https://github.com/simwrapper/simwrapper/issues/105), bar charts not grouping properly ([#112](https://github.com/simwrapper/simwrapper/issues/112)) ([b43cfc2](https://github.com/simwrapper/simwrapper/commit/b43cfc27aab6e27f1a770ed553ed6fbb8b64158a))

### [1.7.2](https://github.com/simwrapper/simwrapper/compare/v1.7.1...v1.7.2) (2022-02-11)

### Bug Fixes

- Clean up Plotly chart margins and layouts ([cb52138](https://github.com/simwrapper/simwrapper/commit/cb52138e80813d5449867a32c14404ac0b7c188a))
- **flowmap:** flowmap link volumes not showing up in latest build ([b95984e](https://github.com/simwrapper/simwrapper/commit/b95984e60564f38aa6bbdb2ef795ffd82247594f))
- support simwrapper command-line tool "here" mode ([231f70d](https://github.com/simwrapper/simwrapper/commit/231f70d6e2d4ec02ddfd80d28461b9a9816176d3))
- **vega:** reformulate non-FQDN data URLs to point to file storage ([2ed4c74](https://github.com/simwrapper/simwrapper/commit/2ed4c74cd25e3c4df7dd69342724883b31a02a48))

### [1.7.1](https://github.com/simwrapper/simwrapper/compare/v1.7.0...v1.7.1) (2022-02-10)

### Bug Fixes

- improve vega chart backgrounds in dark mode ([b95807c](https://github.com/simwrapper/simwrapper/commit/b95807cfdbceeb23ce60f39c08348abf8c5c46ee))
- **links:** colors and widths of bare networks not set correctly ([af13e2f](https://github.com/simwrapper/simwrapper/commit/af13e2fe39c68c42c72b347d53403df06cfe1768))
- Markdown table formatting needs spacing and shading. ([f7cbd72](https://github.com/simwrapper/simwrapper/commit/f7cbd72c6c2835ebca53c16f6b7c364919f1a227))
- Sankey label widths should be based on data, not hard-coded ([3eb120d](https://github.com/simwrapper/simwrapper/commit/3eb120db342a168c95d7298d54f9950d76ea0a18))

## [1.7.0](https://github.com/simwrapper/simwrapper/compare/v1.6.0...v1.7.0) (2022-02-09)

### Features

- Dashboards learned "text" block type, for including readme content ([94a2087](https://github.com/simwrapper/simwrapper/commit/94a2087c017021a51b80111734498786a5c87b5d))

### Bug Fixes

- Add more helpful error messages when files don't load ([53f994f](https://github.com/simwrapper/simwrapper/commit/53f994f067b874fa27ff8cc139e92cd0524f6092))
- Bug in SAFARI prevents topsheets from loading ([e1b4907](https://github.com/simwrapper/simwrapper/commit/e1b4907c2892bf01fb4b622654fa13717458a9df))
- Dashboards should respect locale for title/title_en/title_de and desc ([f27bf70](https://github.com/simwrapper/simwrapper/commit/f27bf70298baa7271f777d19fcdf1df92a28d8a0))
- firefox on windows hangs on background worker dataset load ([f1fdb87](https://github.com/simwrapper/simwrapper/commit/f1fdb8790b9e0ea4768b93f38061cb0ad638b6ac))
- **links:** Diff mode plot could show wrong data in some situations ([6d34252](https://github.com/simwrapper/simwrapper/commit/6d34252e1bedab64f0a22bb93b39c25b378bdb48))
- load dashboard panels in sequence, WIP ([8e42dec](https://github.com/simwrapper/simwrapper/commit/8e42decf2749d7c0e5be1ecb37badf71273c407f))
- Pie charts should use column order, not "largest first" ([3cb622d](https://github.com/simwrapper/simwrapper/commit/3cb622dbfdf4aec657f1700c0f83095dbd0203ac))
- Support GeoJSON networks with feature.id or feature.properties.id ([825546a](https://github.com/simwrapper/simwrapper/commit/825546a2c27e9ac429eb6e2a9120ab709c2ded36)), closes [/datatracker.ietf.org/doc/html/rfc7946#section-6](https://github.com/simwrapper//datatracker.ietf.org/doc/html/rfc7946/issues/section-6) [/datatracker.ietf.org/doc/html/rfc7946#section-6](https://github.com/simwrapper//datatracker.ietf.org/doc/html/rfc7946/issues/section-6)
- topsheets can reference parent folders in /file/../paths ([d1bb736](https://github.com/simwrapper/simwrapper/commit/d1bb736d75a2aed82d8a10abadb22c505dacb756))
- Vega-lite chart sizes & subfolder paths were not calculated correctly ([3d76add](https://github.com/simwrapper/simwrapper/commit/3d76add5dc90b6a8691ce98dd7da7c77e741a79c))

### [1.6.1](https://github.com/simwrapper/simwrapper/compare/v1.6.0...v1.6.1) (2022-02-07)

### Bug Fixes

- **topsheets:** Bug in SAFARI prevents topsheets from loading ([e1b4907](https://github.com/simwrapper/simwrapper/commit/e1b4907c2892bf01fb4b622654fa13717458a9df))
- **dashboards:** Dashboards should respect locale for title/title_en/title_de and desc ([f27bf70](https://github.com/simwrapper/simwrapper/commit/f27bf70298baa7271f777d19fcdf1df92a28d8a0))
- **links:** Diff mode plot could show wrong data in some situations ([6d34252](https://github.com/simwrapper/simwrapper/commit/6d34252e1bedab64f0a22bb93b39c25b378bdb48))
- **topsheets:** topsheets can reference parent folders in /file/../paths ([d1bb736](https://github.com/simwrapper/simwrapper/commit/d1bb736d75a2aed82d8a10abadb22c505dacb756))

## [1.6.0](https://github.com/simwrapper/simwrapper/compare/v1.5.0...v1.6.0) (2022-01-31)

### Features

- DBF files now supported in most places where CSVs are allowed ([3866379](https://github.com/simwrapper/simwrapper/commit/38663796e78936dd5c72e36aa43d76119ae4e645))
- Enable drag/drop to load datasets (CSV,.GZ) ([a4bd4ce](https://github.com/simwrapper/simwrapper/commit/a4bd4ce2c276dbb0f88902bfdabbe450ea912521))
- **links:** Categorical link data can be used for colors ([2e00fa5](https://github.com/simwrapper/simwrapper/commit/2e00fa50c2e77220ead36e29e9860d65d5958ce3))
- **links:** Export YAML config with full color & width settings ([2fd285e](https://github.com/simwrapper/simwrapper/commit/2fd285eedad8af6cb2fcb1ad368b37f239ba7749))
- **links:** Load detailed color and width settings from YAML ([fa02c9e](https://github.com/simwrapper/simwrapper/commit/fa02c9e2078354adeeef047893bc020528b606d0))
- New configuration panel for colors & widths ([84c7c35](https://github.com/simwrapper/simwrapper/commit/84c7c35bddfb7deac841d818bcf0640dab631b33)), closes [#98](https://github.com/simwrapper/simwrapper/issues/98)

### Bug Fixes

- area map should center on geojson data center instead of San Francisco ([37b5430](https://github.com/simwrapper/simwrapper/commit/37b54307f251dbbf8651c1774f5996b7f42af9df))
- create-geojson.network fails because Python 3.9 flipped coordinate x/y for projections ([4bc9e9d](https://github.com/simwrapper/simwrapper/commit/4bc9e9d47113e54afba1327157997ed78d7c640b))
- Dark mode map zoom/center buttons should follow map theme ([2858907](https://github.com/simwrapper/simwrapper/commit/2858907c381408f588dd0c1b5ee54defb17037d9))
- Fix single-panel navigation; URL of YAML file should load the viz ([ba79c79](https://github.com/simwrapper/simwrapper/commit/ba79c79e6939d793d5c885ffd700208bad7215a2))
- **links:** diff mode better, but still WIP ([f19b954](https://github.com/simwrapper/simwrapper/commit/f19b954bf512b264f49fe0f87532d63da2c20468))
- **links:** Diff tooltip not showing difference values ([74b4c79](https://github.com/simwrapper/simwrapper/commit/74b4c794f3e79b86a45d693a007043b4ff14e153))
- **links:** Firefox crashes when large network.xml.gz files are read ([5453401](https://github.com/simwrapper/simwrapper/commit/545340157eba660046adca22f3fcafdcd92d042f))
- **links:** Link widths could show wrong data if multiple datafiles loaded ([10b234b](https://github.com/simwrapper/simwrapper/commit/10b234bc22b3de247fd35f07e614a0005d0f7309))
- Zoom buttons & drawing tool aren't drawn nicely together (z-indexes) ([8b299ba](https://github.com/simwrapper/simwrapper/commit/8b299ba2ae9de2ba137575f75d52f7bdcc2691f3))

## [1.5.0](https://github.com/simwrapper/simwrapper/compare/v1.4.0...v1.5.0) (2021-12-22)

### Features

- **aggregate-od:** Aggregate O/D Spider diagrams learned to be in dashboards ([8485d45](https://github.com/simwrapper/simwrapper/commit/8485d45debf569c906554a76a80ff06dbb4362d4))
- **carriers:** Carrier viewer learned how to be in a dashboard ([7e32b23](https://github.com/simwrapper/simwrapper/commit/7e32b23c0bbf68f438cb9ac85614297eb169dd1a))
- **vega:** Vega-Lite charts now embeddable in dashboards ([b365bd0](https://github.com/simwrapper/simwrapper/commit/b365bd04098e074f7a2aa046c4dda6874d02eebd))

### Bug Fixes

- **carriers:** Carriers viewer should be available when output_carriers file exists ([86ce42a](https://github.com/simwrapper/simwrapper/commit/86ce42ad2baff406f8e81a05f74a7337866eedca))
- **links:** Strange sadface appears instead of background map on Chrome ([c502ae8](https://github.com/simwrapper/simwrapper/commit/c502ae8fa32fe7efeb07ab8b01d13c6efc19eff3))
- **sankey:** Sankey has resize problems ([e38f5cd](https://github.com/simwrapper/simwrapper/commit/e38f5cd5245f0f35ce0da5d4963f5b3f84d4e626)), closes [#82](https://github.com/simwrapper/simwrapper/issues/82)
- **transit:** Improve transit dashboard layout ([7935a54](https://github.com/simwrapper/simwrapper/commit/7935a542c6bccd91f284ef0f563e1531d310eb97))
- Zoom buttons are missing from area-maps ([9bb4bea](https://github.com/simwrapper/simwrapper/commit/9bb4beab87a97a7507a7931c3f92549ae6f32b2b))

## [1.4.0](https://github.com/simwrapper/simwrapper/compare/v1.3.3...v1.4.0) (2021-12-20)

### Features

- Add interactive map scale to all maps, near the zoom buttons ([8021fce](https://github.com/simwrapper/simwrapper/commit/8021fce4c18862d89cf95b94be19b113c1b54254)), closes [#69](https://github.com/simwrapper/simwrapper/issues/69)
- **dash:** Project-level dashboards, vizes, and calculation topsheets ([b920e63](https://github.com/simwrapper/simwrapper/commit/b920e634bb68277b2b6fbb4accf2fa812c8702aa))
- **hexagons:** XY Hexagon viz learned how to embed in dashboards ([3b495ae](https://github.com/simwrapper/simwrapper/commit/3b495ae5bbadb5d4445bff3a7989427bd39dd1e9))
- Maps learned zoom-in, zoom-on, and reset-view on all views ([244c4f5](https://github.com/simwrapper/simwrapper/commit/244c4f5b7d4474bef09a8908a652f52ef97d2968)), closes [#70](https://github.com/simwrapper/simwrapper/issues/70)
- **sankey:** Sankey learned "only show changes" and can be embedded in dashboards ([a96c190](https://github.com/simwrapper/simwrapper/commit/a96c1901a75ffdc42ed424ad6d4d64362ed38309))
- **transit:** add transit viz to dashboards too' ([12eb429](https://github.com/simwrapper/simwrapper/commit/12eb429246d7f5208a7965b81ad2c6fef16e30a2))

### Bug Fixes

- **charts:** Better filenames for exported charts ([d97041d](https://github.com/simwrapper/simwrapper/commit/d97041da790bb48f9b0890480a844fe5fd7c8a8e)), closes [#79](https://github.com/simwrapper/simwrapper/issues/79)
- Hovering on a map shows a weird card title when it shouldn't ([d10c1ce](https://github.com/simwrapper/simwrapper/commit/d10c1ce68c3833b32e66439e715dd1660025ffcf))
- Re-enable some error messages when files can't be loaded ([a709f7c](https://github.com/simwrapper/simwrapper/commit/a709f7cf371744b234c8cdd7897d1aeb0ad50729))
- Transit viewer asks nicely for coordinate system EPSG now ([4c601bc](https://github.com/simwrapper/simwrapper/commit/4c601bcc9f985121fc8abf5351dbe39a1735ae48))

### [1.3.3](https://github.com/simwrapper/simwrapper/compare/v1.3.2...v1.3.3) (2021-12-14)

### Bug Fixes

- **charts:** bar/line charts now for standard matsim \*stats.txt files ([aeb8fc9](https://github.com/simwrapper/simwrapper/commit/aeb8fc96f14f9646deaa7db86065dc25957d0a90))
- **links:** Time-slider and colorramp buttons don't work together. ([77a7965](https://github.com/simwrapper/simwrapper/commit/77a79652cbd5cc68e0b714f64978132eeb9b0995))
- **topsheet:** topsheets lost their user-entry fields and titles ([2312659](https://github.com/simwrapper/simwrapper/commit/23126594516b734c1f92b000e7061803a84e6aeb))

### [1.3.2](https://github.com/simwrapper/simwrapper/compare/v1.3.1...v1.3.2) (2021-12-13)

### Bug Fixes

- **xy:** Ask for coordinate system if loading output_trips ([c1b5e91](https://github.com/simwrapper/simwrapper/commit/c1b5e91645da62380fc8134c119bd17fb10e6057))

## [1.3.1](https://github.com/simwrapper/simwrapper/compare/v1.3.0...v1.3.1) (2021-12-09)

### Features

- **heatmap:** Heatmap learned flipAxes true/false, to flip the heatmap :-) ([5aa3c07](https://github.com/simwrapper/simwrapper/commit/5aa3c0789fa7118f532832cefea072e7c88bc656))

## [1.3.0](https://github.com/simwrapper/simwrapper/compare/v1.1.0...v1.3.0) (2021-12-09)

### Features

- **dashboard:** Charts can zoom/unzoom fullscreen now ([2587521](https://github.com/simwrapper/simwrapper/commit/2587521053270a1b897c93ed4c12c2b65bda7ba2))
- Support multiple local servers on ports 8000-8500 ([8ca422f](https://github.com/simwrapper/simwrapper/commit/8ca422f4e262027bae5a87d8c3386fe6fb0bef33))

### Bug Fixes

- Fix [#71](https://github.com/simwrapper/simwrapper/issues/71), DrawingTool broke with big Vite merge ([9f23d79](https://github.com/simwrapper/simwrapper/commit/9f23d79d660e9955cbf9e6f3774c84d26fadf189))
- Fix dark/light mode watcher in dashboard charts ([1291ef7](https://github.com/simwrapper/simwrapper/commit/1291ef724861f7ee5e112176747f45cbe3e9f226))
- Plotly charts don't resize properly when switching dashboard tabs ([affccab](https://github.com/simwrapper/simwrapper/commit/affccab53759107d8256bad8db733078c88c77fc))
- **sankey:** handle commas,semicolons,tabs as separators ([8b2cacb](https://github.com/simwrapper/simwrapper/commit/8b2cacbf900e7c5113e463e82a93874c88526269))
- **sankey:** plot size on Chrome/Safari ([5a31fb0](https://github.com/simwrapper/simwrapper/commit/5a31fb038a092253c860a7d0aff9d953ed9827fd))
- **sankey:** Sankey text colors follow dark/light theme now ([5500a8d](https://github.com/simwrapper/simwrapper/commit/5500a8d91a815f9c6022d2c28e02147f526db1ac))
- useLastRow and ignoreColumns are leaking into other dashboard views ([1d690b2](https://github.com/simwrapper/simwrapper/commit/1d690b25fd868ac8acbad7892835128ea793df1e)), closes [#75](https://github.com/simwrapper/simwrapper/issues/75)
- video-player resizing bugs ([e480798](https://github.com/simwrapper/simwrapper/commit/e48079806acdcf30347be6719f2072dc13960b49))
- Vite: faster builds & fewer dependencies ([a4d92c0](https://github.com/simwrapper/simwrapper/commit/a4d92c0c7c9bbc7aa88770ff1ada75ae4e366b5d))

## [1.1.0](https://github.com/simwrapper/simwrapper/compare/v1.0.1...v1.1.0) (2021-11-24)

### Features

- New "heatmap" chart type ([c15b21f](https://github.com/simwrapper/simwrapper/commit/c15b21fdf2fbe711ca7ccddaae53a4c956c02cdd))

### Bug Fixes

- Back Button Bug ([#59](https://github.com/simwrapper/simwrapper/issues/59)) ([89d12d5](https://github.com/simwrapper/simwrapper/commit/89d12d50a1813d6dc265001f4a99b7b5ddc0b0db))

### [1.0.1](https://github.com/simwrapper/simwrapper/compare/v1.0.0...v1.0.1) (2021-11-08)

- Fix Stacked Bar Chart [edbe0a2](https://github.com/simwrapper/simwrapper/commit/edbe0a205a87fde1b23ab118d384804dec5c98e9))

## 1.0.0 (2021-11-03)

We are starting to use "semantic versioning" now, so we can track builds since our number of users is increasing.

Version numbers are MAJOR.MINOR.POINT where

- MAJOR: major new releases; breaking changes, etc
- MINOR: feature releases, new functionality
- POINT: bugfixes and internal improvements

This seems as good a time as any to stamp a "1.0.0" release. Woot!

### Features

- Color schemes ([3d19f36](https://github.com/simwrapper/simwrapper/commit/3d19f36ee96b6bfc475743ab68678f532d9b61a7))
- **carriers:** update carrier viewer for simwrapper ([4090e20](https://github.com/simwrapper/simwrapper/commit/4090e20e82846ee622c4ca8d77fb9ae0d4208744))
- **charts:** allow relative paths for dataset ([2350993](https://github.com/simwrapper/simwrapper/commit/235099307efb6370239e445454a426cd62d6e4fc))
- **dash:** Area charts ([d715ea5](https://github.com/simwrapper/simwrapper/commit/d715ea575865fd01ecabb14f25ae12b6ffe7f620))
- **dash:** Choro-CIRCLES plot on map! ([40b4b1c](https://github.com/simwrapper/simwrapper/commit/40b4b1ccdb395dd16df0e1c7350ff1a997d496c6))
- **dash:** Choropleth maps! ([fe43f09](https://github.com/simwrapper/simwrapper/commit/fe43f09d64cb337c1b5468e4472909b335b5d0bb))
- **dash:** fullscreen button on card headers ([e252f8e](https://github.com/simwrapper/simwrapper/commit/e252f8ecae07a24ac3cc433d951fef4fd4f6ae31))
- **dash:** Load any dashboard from /gist/123456789 ([5668974](https://github.com/simwrapper/simwrapper/commit/56689741068344e36c1f2385e663b8641ee1499a))
- **dash:** Tabbed dashboards! ([96acf3e](https://github.com/simwrapper/simwrapper/commit/96acf3efe2efb8c14a8ff861e73985ac7259a939))
- **flowmap:** FlowMap based on FlowmapBlue (WIP) ([f667347](https://github.com/simwrapper/simwrapper/commit/f66734762da91201fbac749cd7d50c24d2ce8a07))
- **topsheet:** allow hard-coded paths in topsheet config ([0472807](https://github.com/simwrapper/simwrapper/commit/04728074ae1ba9f9d3111a38f6d5078fb971ef7a))
- add [@filter](https://github.com/filter) to topsheet calcs ([5aa8623](https://github.com/simwrapper/simwrapper/commit/5aa86231730363af826325ad6196b86a189828dd))
- Add DrawingTool to XY plot ([065e198](https://github.com/simwrapper/simwrapper/commit/065e1988d83df73c9271822c0bec8c9bf7b46ab0)), closes [#39](https://github.com/simwrapper/simwrapper/issues/39)
- add EN/DE locale support ([161897f](https://github.com/simwrapper/simwrapper/commit/161897f09dc8e6a3337e8cdd6eb40baac81460df))
- Dark mode! ([0556c2c](https://github.com/simwrapper/simwrapper/commit/0556c2ca53019fb012aa053a941827f7e847e630))
- Move main site to https://vsp.berlin/simwrapper ([5782022](https://github.com/simwrapper/simwrapper/commit/5782022084472258bd3a8f46cf218ed276ea2622))
- new Vega-Lite charting plugin ([16d25f4](https://github.com/simwrapper/simwrapper/commit/16d25f43aaa7c983a84c81f26f4dabe687788e81))
- run-finder panel treeview ([d8725db](https://github.com/simwrapper/simwrapper/commit/d8725dba0bd96b0c7b57ce9cf755b61eccbb5ae7))
- Show transit viewer thumbnail whenever _output_transitSchedule_ is present ([f67f38c](https://github.com/simwrapper/simwrapper/commit/f67f38cfed0e19b7663b22be555c329be0fddf4b))
- topsheet filters ==,<=,>=,!=,<,> ([866a1c0](https://github.com/simwrapper/simwrapper/commit/866a1c0516742617031ef0e5c6cb92d3088ad5d6))
- topsheet title comes from title/title_en/title_de fields ([3d7e25f](https://github.com/simwrapper/simwrapper/commit/3d7e25fa904a8b7bae977bc0bf7c63fb3d4d3130))
- Try to find coordinate system in output_config.xml ([5ce8766](https://github.com/simwrapper/simwrapper/commit/5ce8766a73e69583444d465c67c1cc56c8170359))
- **carriers:** add shipment tooltips and drive on left/right side ([fd7d056](https://github.com/simwrapper/simwrapper/commit/fd7d056e13827a2e79eedc9f6d21115a2bfb5505))
- **carriers:** fix [#8](https://github.com/simwrapper/simwrapper/issues/8) - add +/- to carriers treeview ([fcb7d57](https://github.com/simwrapper/simwrapper/commit/fcb7d57b0a51cd85eead749c75519514794e66c6))
- **dash:** Topsheet + Pie are more or less working ([3698bc1](https://github.com/simwrapper/simwrapper/commit/3698bc1ab775e9d151c1395347262850cbce9c73))
- **shapefile:** a bit better at guessing CRS projections ([209e060](https://github.com/simwrapper/simwrapper/commit/209e060463919a2a91a1fc905ced19439f8f1a70))
- **shapefile:** Add opacity slider ([5df86a8](https://github.com/simwrapper/simwrapper/commit/5df86a89e4728db785cca07268819b755208add9)), closes [#38](https://github.com/simwrapper/simwrapper/issues/38)
- **video:** add video plugin ([442c408](https://github.com/simwrapper/simwrapper/commit/442c408a6eafba9b1b5c20f9caa34a57d4858e10))
- **video:** video player plugin ([c250a11](https://github.com/simwrapper/simwrapper/commit/c250a117c87df0ac54374c5d0b48a66cd3454183))

### Bug Fixes

- Charts learned dark/light modes ([97c77fc](https://github.com/simwrapper/simwrapper/commit/97c77fc0ad8468f725c46693ab62fc6d5cbf58c2))
- **carriers:** fix [#1](https://github.com/simwrapper/simwrapper/issues/1) use link midpoint for shipment locations ([3e589f6](https://github.com/simwrapper/simwrapper/commit/3e589f6ac2108d971830e107e1f5a2b972e80fae))
- **dash:** allow map geojson to be on Url or local file path ([17e79e6](https://github.com/simwrapper/simwrapper/commit/17e79e6c77c78df42bdd4f9a5ba055f74446decc))
- **dash:** bg colors in dark mode ([f6b5776](https://github.com/simwrapper/simwrapper/commit/f6b57766cc96ca421f53f06d5d93d9f16d843df7))
- **dash:** Dashboard max 110rem width. Too wide is too wide. ([ec4dcaf](https://github.com/simwrapper/simwrapper/commit/ec4dcaf3c85cfbeb0b61febdc3dbc23a840d3e93))
- **dash:** loose threads causing bad card reloads ([90c74ed](https://github.com/simwrapper/simwrapper/commit/90c74ede9e4f44c974418685e991f2acd4c99073))
- **dash:** nicer shape/circle buttons ([81a2e46](https://github.com/simwrapper/simwrapper/commit/81a2e46faf48513a1eff1cb78f3f562e30d68775))
- **dash:** No need for dashboards to have a max width ([79d6d9d](https://github.com/simwrapper/simwrapper/commit/79d6d9d979a6ccd07b861efe0acc17f5e8ea55db))
- **dashboard:** links-gl layout improvements ([af78cde](https://github.com/simwrapper/simwrapper/commit/af78cde06389bad2677f6d33bc50f6a8f7d21aa0))
- **links:** column names with hours were being mangled ([f61a6fd](https://github.com/simwrapper/simwrapper/commit/f61a6fdce905e0c71b31613c0b0240099f950877))
- **links:** config panel layout ([eb8b6ec](https://github.com/simwrapper/simwrapper/commit/eb8b6ec1fed9d1c03a9188755d8f04b99f13b124))
- **links:** config panel layout ([0d750f0](https://github.com/simwrapper/simwrapper/commit/0d750f0a159a9db9c78a407bcc8f3658f612e34b))
- **links:** diff plots are always red/blue now ([5903c4c](https://github.com/simwrapper/simwrapper/commit/5903c4c11efca3c452029acf8a6a858245dce092))
- **links:** handle .gz and non-.gz inputs ([fd44328](https://github.com/simwrapper/simwrapper/commit/fd44328c889b8e353e745ec8915b475af1a23ef3))
- **links:** thumbnail images ([3e0324a](https://github.com/simwrapper/simwrapper/commit/3e0324a2c6ec89d1423d053664be007f1b2233f3))
- **links:** time-slider was too narrow ([218cac7](https://github.com/simwrapper/simwrapper/commit/218cac72012aa0b9f937bd36689993d8da0e59ae))
- **links:** use network center ([7a7d86a](https://github.com/simwrapper/simwrapper/commit/7a7d86a93b366b3516b039f21d2030899090be7a))
- **shapefile:** guess more EPSG codes ([e941f07](https://github.com/simwrapper/simwrapper/commit/e941f072a982fa87fc416584028aece6ec27279d))
- back button is broken ([109d672](https://github.com/simwrapper/simwrapper/commit/109d672402a22affd1492b2cad2671d6b1f4d722)), closes [#21](https://github.com/simwrapper/simwrapper/issues/21)
- better navigation when clicking on viz thumbnails ([d5a7892](https://github.com/simwrapper/simwrapper/commit/d5a78924509e1f73dd45732e2178f60a011f6d37))
- dashboard tabs sometimes show old labels ([8804b2a](https://github.com/simwrapper/simwrapper/commit/8804b2a4f6fee57f1cf813235f894a01e4312128))
- Draw shapefile exports as EPSG:31468 instead of WGS84 (needs work) ([9176141](https://github.com/simwrapper/simwrapper/commit/9176141e2f9e6c034331c2228abd7301ccb1a508))
- draw tool should not hide underlying layers ([89b9fde](https://github.com/simwrapper/simwrapper/commit/89b9fde9bd04df534eb9059e69a163da11aff061))
- **transit:** try to find correct transitSchedule, network, demand files ([8a4beef](https://github.com/simwrapper/simwrapper/commit/8a4beefcf75a00fa6d93f737c0255d044217ab94))
- clean up RunFinder layout ([c03ef5c](https://github.com/simwrapper/simwrapper/commit/c03ef5caa4970f58dc83e5be57aca293725f5f96))
- gist viewer wasn't loading ([3d194f5](https://github.com/simwrapper/simwrapper/commit/3d194f5fc87b185268d57a55f663397d46b1c5f0))
- host font-awesome locally so site works offline ([af0b4d7](https://github.com/simwrapper/simwrapper/commit/af0b4d701e9887ea519aabef71cdd635d181fde6))
- shapefile drawer should export as WGS84, always ([f75c202](https://github.com/simwrapper/simwrapper/commit/f75c202791c36e44f38ee554ce0c1c1388e63f96)), closes [#29](https://github.com/simwrapper/simwrapper/issues/29) [#31](https://github.com/simwrapper/simwrapper/issues/31)
- shapefile tooltip ([4222877](https://github.com/simwrapper/simwrapper/commit/42228772643c99aff27be6a8a467c115684e66aa))
- shapefile zoom and tooltip ([705a233](https://github.com/simwrapper/simwrapper/commit/705a233bd1e98dd48eccdad41fb947ae70c7d7e2))
- thumbnail image heights ([55132d8](https://github.com/simwrapper/simwrapper/commit/55132d896d53d42b8b97e3fc31bd64d8c90fc26d))

### 0.1.1 (2020-08-25)

### Features

- **video:** add video plugin ([442c408](https://github.com/simwrapper/simwrapper.github.io/commit/442c408a6eafba9b1b5c20f9caa34a57d4858e10))
- **video:** video player plugin ([c250a11](https://github.com/simwrapper/simwrapper.github.io/commit/c250a117c87df0ac54374c5d0b48a66cd3454183))
