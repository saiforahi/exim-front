import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const TheContainer = ()=> import('../containers/TheContainer')
const Login = ()=>import('../components/auth/Login')
const Dashboard = () => import('../components/dashboard/Dashboard')
export default new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes (){
    return [
        {
            path: '/',
            redirect: '/login',
            name: 'Dashboard',
            component: TheContainer,
            children:[
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
}