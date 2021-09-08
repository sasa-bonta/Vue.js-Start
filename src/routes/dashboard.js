import Home from "../components/pages/Home";
import Messages from "../components/pages/Messages";
import Products from "../components/pages/Products";
import Updates from "../components/pages/Updates";
import Cart from "../components/pages/Cart";
import Item from "../components/Item";

export default [
    {path: '/', redirect: 'home'},
    {name: 'home', path: 'home', component: Home},
    {name: 'messages', path: 'messages', component: Messages},
    {name: 'products', path: 'products', component: Products, props: (router) => ({link: router.query.link})},
    {name: 'updates', path: 'updates', component: Updates},
    {name: 'cart', path: 'cart', component: Cart},
    {name: 'item', path: 'item/:id', component: Item, props: true},
]