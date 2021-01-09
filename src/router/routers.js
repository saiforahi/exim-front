import Vue from 'vue'
import Router from 'vue-router'
import { TOKEN } from '../Config'
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
            redirect: '/dashboard',
            name: 'Dashboard',
            component: TheContainer,
            children:[
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                    beforeEnter : auth_guard,
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter:guest_guard
        }
    ]
}

function auth_guard(to, from, next)
{
    var isAuthenticated= false;
    if(localStorage.getItem(TOKEN)){
        isAuthenticated = true;
    } 
    else{
        isAuthenticated= false;
    }   
    if(isAuthenticated) {
        next(); // allow to enter route
    } else{
        next('/login'); // go to '/login';
    }
}

function guest_guard(to, from, next)
{
    var isAuthenticated= false;
    if(localStorage.getItem(TOKEN)){
        isAuthenticated = true;
    } 
    else{
        isAuthenticated= false;
    }   
    if(!isAuthenticated) {
        next(); // allow to enter route
    } else{
        next('/dashboard'); // go to '/login';
    }
}