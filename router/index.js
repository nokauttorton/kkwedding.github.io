import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const ROUTES = []

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

});

export default router
