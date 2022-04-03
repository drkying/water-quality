import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js'
import AmapVue from '@amap/amap-vue'

AmapVue.config.key = '5736c9c3fbaaae3587afd04a2cc563fd'

Vue.use(VueAxios, axios).use(Antd).use(AmapVue)


Vue.config.productionTip = false

//路由守卫 开发时禁用
// router.beforeEach((to, from, next) => {
//     if (to.path !== '/login' && !store.state.isLogin) next({path: '/login'})
//     else next()
// })


axios.defaults.baseURL = store.getters.getDomain

new Vue({
    render: h => h(App),
    router,
    store,
    created() {
        this.$store.dispatch("getDevice").then(() => {
            this.$store.dispatch("getAllDeviceData").then(() => {
            });
        })
    }
}).$mount('#app')
