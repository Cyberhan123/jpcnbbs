import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/',
            redirect: '/home/seek'
        },
        {
            path: '/article',
            name: 'article',
            component: () => import('./views/Article.vue')
        },
        {
            path: '/sendMessage',
            name: 'sendMessage',
            component: () => import(/* webpackChunkName: "about" */ './views/SendMessage.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue'),
            children: [
                {
                    path: 'seek',
                    name: 'seek',
                    component: () => import(/* webpackChunkName: "about" */ './views/Seek.vue')
                },
                {
                    path: 'study',
                    name: 'Study',
                    component: () => import(/* webpackChunkName: "about" */ './views/Study.vue')
                },
                {
                    path: 'communication',
                    name: 'communication',
                    component: () => import(/* webpackChunkName: "about" */ './views/Communication.vue')
                },
                {
                    path: 'message',
                    name: 'message',
                    component: () => import ('./views/Message.vue')
                },
            ]
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: () => import('./views/Authorization.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import ('./views/Login.vue')
                },
                {
                    path: 'signin',
                    name: 'signin',
                    component: () => import ('./views/Signin.vue')
                }

            ]
        },





    ]
})
