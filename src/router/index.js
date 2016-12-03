import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true
})

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['App.vue'], resolve)
        }
    },
    '/themes': {
        name: 'themes',
        component: (resolve) => {
            require(['../views/Listdata.vue'], resolve)
        }
    }
})

export default router
