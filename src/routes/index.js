import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../components/pages/Dashboard";
import Messages from "../components/pages/Messages";
import Profiles from "../components/pages/Profiles";
import Updates from "../components/pages/Updates";
import Cart from "../components/pages/Cart";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: Dashboard},
    {path: '/messages', component: Messages},
    {path: '/profiles', component: Profiles},
    {path: '/updates', component: Updates},
    {path: '/cart', component: Cart},
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;