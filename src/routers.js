import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import AddRes from './components/AddRes'
import UpdateRes from './components/UpdateRes'
import AboutPage from './components/Frontend/AboutPage'
import BlogPage from './components/Frontend/BlogPage'
import ContactPage from './components/Frontend/ContactPage'
import IndexPage from './components/Frontend/IndexPage'
import ReviewsPage from './components/Frontend/ReviewsPage'
import ServicePage from './components/Frontend/ServicePage'
import WorkPage from './components/Frontend/WorkPage'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
         name: "HomePage",
         component: HomePage,
         path:"/"
    },

    { 
        name: "RegisterPage",
        component: RegisterPage,
        path:"/register"
    },
    { 
        name: "LoginPage",
        component: LoginPage,
        path:"/login"
    },
    
    { 
        name: "AddRes",
        component: AddRes,
        path:"/add-restuarant"
    },
    { 
        name: "UpdateRes",
        component: UpdateRes,
        path:"/update-restuarant/:id"
    },
    // frontend routes
    { 
        name: "IndexPage",
        component: IndexPage,
        path:"/home"
    },
    { 
        name: "WorkPage",
        component: WorkPage,
        path:"/work"
    },
    { 
        name: "ServicePage",
        component: ServicePage,
        path:"/services"
    },
    { 
        name: "ReviewsPage",
        component: ReviewsPage,
        path:"/reviews"
    },
    { 
        name: "ContactPage",
        component: ContactPage,
        path:"/contact"
    },
    { 
        name: "BlogPage",
        component: BlogPage,
        path:"/blogs"
    },
    { 
        name: "AboutPage",
        component: AboutPage,
        path:"/about"
    },




]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;