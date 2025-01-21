import { createRouter, createWebHistory } from 'vue-router'
// import pages
import Blog from '@/pages/BlogPages.vue'
import AdminPanel from '@/pages/AdminPages.vue'
// import views
import Homepage from '../pages/views/Homepage.vue'
import Post from '../pages/views/Post.vue'
import PostList from '@/pages/views/PostList.vue'
import PostCreate from '@/pages/views/PostCreate.vue'
import PostEdit from '@/pages/views/PostEdit.vue'
import Authentication from '@/pages/views/Autentication.vue'
import EmailVerivication from'@/components/EmailConfirmation.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "",
            name: "main-app",
            component: Blog,
            children: [
                {
                    path: "",
                    name: "homepage",
                    component: Homepage
                },
                {
                    path: "post/:id",
                    name: "post",
                    component : Post
                }      
            ]
        },
        {
            path: "/dashboard",
            name: "admin-panel",
            component: AdminPanel,
            children: [
                {
                    path: "",
                    name: 'listPost',
                    component: PostList
                },
                {
                    path: "create",
                    name: "createPost",
                    component: PostCreate
                },
                {
                    path: "edit/:id",
                    name: "editPost",
                    component: PostEdit
                },
            ]
        },
        {
            path: "/signup",
            name: "signup",
            component: Authentication
        },
        {
            path: "/verivication",
            name: "verivication",
            component: EmailVerivication
        },

    ] 
})

export default router