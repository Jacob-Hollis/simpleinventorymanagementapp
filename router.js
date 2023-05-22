import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/inventory',
            name: 'inventory',
            component: () => import('./src/views/InventoryView.vue'),
        },
        {
            path: '/metrics',
            name: 'metrics',
            component: () => import('./src/views/MetricsView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./src/views/AboutView.vue')
        }
    ]
});

export default router;