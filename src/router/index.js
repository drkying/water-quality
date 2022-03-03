import Vue from "vue";
import VueRouter from "vue-router";
import temp from "@/router/temp";
import route from "@/router/route";

Vue.use(VueRouter)

let routes = [
    ...temp,
    ...route
]
const router = new VueRouter({
    routes
});


export default router;