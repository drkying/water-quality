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
    {
        path: '/deviceManage',
        component: () => import('@/components/widget/deviceManage')
    },
    {
        path: '/mapHome',
        component: () => import('@/components/widget/mapHome')
    }
]

export default routes;
