import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'

import globalStore from '@/store'

Vue.use(VueRouter)

const BASE_URL = import.meta.env.BASE_URL

const routes = [
  {
    path: BASE_URL + 'gist/:id',
    component: () => import('@/layout-manager/GistView.vue'),
    props: (route: Route) => ({
      id: route.params.id,
    }),
  },
  {
    path: BASE_URL + '*',
    component: () => import('@/layout-manager/LayoutManager.vue'),
  },
  {
    // catch-all back to home page
    path: '*',
    redirect: BASE_URL,
  },
]

// // individual viz plugins all go into /v/* subpaths
function vizPlugins(): any[] {
  const plugins = []
  for (const plugin of globalStore.state.visualizationTypes.values()) {
    plugins.push({
      path: BASE_URL + 'v/' + plugin.kebabName + '/:slug/*',
      name: plugin.kebabName,
      component: plugin.component,
      props: (route: Route) => {
        const match = route.params.pathMatch
        const subfolder = match.substring(0, match.lastIndexOf('/'))
        const yamlConfig = match.substring(match.lastIndexOf('/') + 1)
        return {
          root: route.params.slug,
          subfolder,
          yamlConfig,
          thumbnail: false,
        }
      },
    })
  }

  return plugins
}

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  // routes: vizPlugins().concat(routes),
  // native-like back/forward and top-of-page routing
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   next()
// })

export default router
