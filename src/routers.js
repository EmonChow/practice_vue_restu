import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import AddRes from './components/AddRes'
import UpdateRes from './components/UpdateRes'
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
        path:"/update-restuarant"
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;