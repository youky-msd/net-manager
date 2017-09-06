import Vue from 'vue'
import Router from 'vue-router'
// refactor later
import Home from '@/views/Home'
import Notfound from '@/views/404'
import aisle from './aisle'
import baasnet from './baasnet'
import ordernode from './ordernode'
import kafka from './kafka'
import alliance from './alliance'
import organize from './organize'
import { loadView } from '@/utils/lazyload'

Vue.use(Router)

function generateRoutes (items, needAuth) {
  let routes = []
  let filename = items.name
  let parentpath = items.path
  let childItme = items.children

  for (let i = 0, l = childItme.length; i < l; i++) {
    let route
    let item = childItme[i]
    let components = loadView(filename, item.file)
    route = {
      name: item.name,
      path: parentpath + '/' + item.path,
      component: components,
      meta: {
        label: item.label,
        icon: item.icon,
        needAuth: (item.needAuth !== undefined) ? item.needAuth : needAuth
      }
    }
    routes.push(route)
  }

  return routes
}

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/',
    redirect: '/home'
  }, {
    path: '/404',
    name: '404',
    component: Notfound
  },
    ...generateRoutes(baasnet, false),
    ...generateRoutes(ordernode, false),
    ...generateRoutes(kafka, false),
    ...generateRoutes(organize, false),
    ...generateRoutes(alliance, false),
    ...generateRoutes(aisle, false)
  ]
})
