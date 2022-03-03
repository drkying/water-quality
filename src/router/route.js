
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: () => import('@/components/Home')
    },
    {
        path: '/login',
        component: () => import('@/components/Login')
    },
]

export default routes;