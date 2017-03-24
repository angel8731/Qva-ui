import Hello from '../components/Hello'
// 路由系统
const router = {
    routes: [
        {
            path : '',
            component : Hello
        },
        {
            path: '/radio',
            component: require('../../examples/web/radio.vue')
        },
        {
            path: '/rate',
            component: require('../../examples/web/rate.vue')
        }
    ]
}
export default router;
