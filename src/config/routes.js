import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/home/home'], resolve)
            },
            // {
            //     path: '/helpCenterPage', //帮助中心
            //     meta: { auth: false },
            //     component: resolve => require(['../pages/helpCenter/helpCenterPage'], resolve),
            //     children:[
            //         {
            //             path: '/helpCenterPage/bankDepository', //银行存管
            //             meta: { auth: false },
            //             component: resolve => require(['../pages/helpCenter/children/bankDepository'], resolve),
            //         },
            //     ]
            // },
            {

                path: '*', //其他页面，跳转到首页
                redirect: '/home'
            }

        ]
    }
]