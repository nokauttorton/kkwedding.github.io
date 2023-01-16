import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue'

Vue.use(Router);

const ROUTES = [
    {
        path: '*',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
]

const router = new Router({
    routes: ROUTES,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
});

router.beforeEach((to, from, next) => {
    next();
});

export default router
