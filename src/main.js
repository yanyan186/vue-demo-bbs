import Vue from 'vue'
import VueRouter from 'vue-router'
import vueRsource from 'vue-resource'
import Moment from 'vue-moment'
import WB from './App'
import List from './views/Listdata'

require('./../static/css/index.less')
Vue.use(VueRouter)
Vue.use(vueRsource)
Vue.use(Moment)

const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/wb', name: 'wb', component: WB },
    { path: '/list', name: 'list', component: List },
    { path: '/bar', name: 'bar', component: Bar }
  ]
})
new Vue({
  router,
  template: `
    <div id="app">
      <div class="clear">
        <ul class="clear">
          <li><router-link :to="{ name: 'wb' }">留言板</router-link></li>
          <li><router-link :to="{ name: 'list' }">数据列表</router-link></li>
          <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
        </ul>
        <p class="path">当前组件: {{ $route.name }}</p>
      </div>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
