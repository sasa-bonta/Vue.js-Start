import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../components/pages/Dashboard";
import Messages from "../components/pages/Messages";
import Products from "../components/pages/Products";
import Updates from "../components/pages/Updates";
import Cart from "../components/pages/Cart";
import Item from "../components/Item";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/dashboard'},
    {name: 'dashboard',path: '/dashboard', component: Dashboard},
    {name: 'messages',path: '/messages', component: Messages},
    {name: 'products',path: '/products', component: Products, props: (router) => ({link: router.query.link})},
    {name: 'updates',path: '/updates', component: Updates},
    {name: 'cart',path: '/cart', component: Cart},
    {name: 'item',path: '/item/:id', component: Item, props: true},
]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router;