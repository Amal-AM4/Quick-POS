import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import UpdateProfile from '../views/UpdateProfile.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
        },
        {
            path: '/UpdateProfile',
            name: 'updateProfile',
            component: UpdateProfile,
        },
    ],
})

export default router