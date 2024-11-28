import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Post from '../views/Post.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "homepage",
            component: Homepage
        },
        {
            path: "/post/:id",
            name: "post",
            component : Post
        },
    ] 
})

export default router