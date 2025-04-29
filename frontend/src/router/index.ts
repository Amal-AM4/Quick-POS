import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import { useAuthStore } from '../store/auth'

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

// protect routes
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    const publicPages = ['login']
    const authRequired = !publicPages.includes(to.name as string)

    console.log(authStore.loggedIn)

    if (authRequired && !authStore.loggedIn) {
        return next({ name: 'login' })
    }

    next()
})

export default router