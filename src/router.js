import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import Inventory from './views/InventoryView.vue'

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
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router