import Vue from 'vue'
import VueRouter from 'vue-router'


import center from './routers/center'
import filmRouter from "./routers/film";
import cinemaRouter from "./routers/cinema";
Vue.use(VueRouter)

const routes = [
  ...center,
  ...filmRouter,
  cinemaRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
