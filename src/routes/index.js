import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../components/pages/Dashboard";
import Messages from "../components/pages/Messages";
import Products from "../components/pages/Products";
import Updates from "../components/pages/Updates";
import Cart from "../components/pages/Cart";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/dashboard'},
    {path: '/dashboard', component: Dashboard},
    {path: '/messages', component: Messages},
    {path: '/products', component: Products, props: (router) => ({link: router.query.link})},
    {path: '/updates', component: Updates},
    {path: '/cart', component: Cart},
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;