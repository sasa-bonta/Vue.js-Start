import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "../layouts/Auth";
import authRoutes from "./auth"
import Dashboard from "../layouts/Dashboard";
import dashboardRoutes from "./dashboard";
import Error404 from "../components/Error404";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/dashboard'},
    {
        path: '/dashboard',
        component: Dashboard,
        children: dashboardRoutes,
    },
    {
        path: '/auth',
        component: Auth,
        children: authRoutes,
    },
    {
        path: '*',
        component: Error404,
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router;