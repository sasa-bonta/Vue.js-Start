import router from "../../routes";

router.beforeEach((to, from, next) => {
    console.log(from)
    console.log(to)
    next()
})