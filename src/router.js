import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import Inventory from './views/InventoryView.vue'
import Metrics from './views/MetricsView.vue'
import About from './views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory
    },
    {
        path: '/metrics',
        name: 'Metrics',
        component: Metrics
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router