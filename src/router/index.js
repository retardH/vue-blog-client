import {createRouter,createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView/index.vue";
import BlogView from "@/views/BlogView/index.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogView

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;