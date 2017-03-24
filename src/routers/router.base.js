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
            component: require('../../examples/radio.vue')
        },
        {
            path: '/rate',
            component: require('../../examples/rate.vue')
        }
    ]
}
export default router;
