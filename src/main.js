import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from "@/components/Home";
import Login from "@/components/Login";

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Antd)

Vue.config.productionTip = false

//define routers in vue
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        }
    ]
})

const store = new Vuex.Store({
    state:{
        domain:'http://120.77.212.147:9797/',
        filter:'any',
        isLogin:false,
    },
    mutations:{
        setFilter(state,filter){
            state.filter = filter
        },
        setIsLogin(state,isLogin){
            state.isLogin = isLogin
        }
    }
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
