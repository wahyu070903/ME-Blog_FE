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
import UserRegister from '@/pages/views/UserRegister.vue'
import UserLogin from '@/pages/views/UserLogin.vue'
import EmailVerivication from'@/components/EmailConfirmation.vue'
import NotFound from '@/pages/views/NotFound.vue'

let registration_sent = false

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
            path: "/register",
            name: "register",
            component: UserRegister
        },
        {
            path: "/login",
            name: "login",
            component: UserLogin
        },
        {
            path: "/verivication",
            name: "verivication",
            component: EmailVerivication,
            beforeEnter: (to, from, next) => {
                if(registration_sent){
                    next();
                }else{
                    next('/signup')
                }
            }
        },
        {
            path: "/not-found",
            name: "not-found",
            component: NotFound,
        },

    ] 
})

export default router