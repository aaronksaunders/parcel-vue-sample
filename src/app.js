import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import One from './components/One.vue'
import Two from './components/Two.vue'
import './css/main.css'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'one'
        },
        {
            path: '/one',
            name: 'one',
            component: One
        },
        {
            path: '/two',
            name: 'two',
            component: Two
        }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
})