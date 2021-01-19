import { path } from 'chromedriver'
import Vue from 'vue'
import Router from 'vue-router'
import { TOKEN } from '../Config'
Vue.use(Router)

const TheContainer = ()=> import('../containers/TheContainer')
const Login = ()=>import('../components/auth/Login')
const Dashboard = () => import('../components/dashboard/Dashboard')
const Roles = () =>import('../components/roles/Roles')
const Role_Create=()=>import('../components/roles/Create')
const Users = () =>import('../components/users/Users')
const User_Create = () =>import('../components/users/Create')
const Categories = () =>import('../components/accounts/category/Categories')
const Category_Create = () =>import('../components/accounts/category/Create')
const SubCategories = () =>import('../components/accounts/sub_category/SubCategories')
const SubCategory_Create = () =>import('../components/accounts/sub_category/Create')
const Groups = () =>import('../components/accounts/groups/Groups')
const Group_Create = () =>import('../components/accounts/groups/Create')
const Legers = () =>import('../components/accounts/ledger/Ledger')
const Leger_Create = () =>import('../components/accounts/ledger/Create')

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
                },
                {
                    path: '/role/all',
                    name: 'Roles Management',
                    component: Roles,
                    beforeEnter : auth_guard
                },
                {
                    path: '/role/create',
                    name: 'Role_Create',
                    component: Role_Create,
                    beforeEnter : auth_guard
                },
                {
                    path:'/permission/create/',
                    name:'Permission_Create',

                },
                {
                    path: '/user/all',
                    name: 'Users Management',
                    component: Users,
                    beforeEnter : auth_guard
                },
                {
                    path: '/user/create',
                    name: 'User_Create',
                    component: User_Create,
                    beforeEnter: auth_guard
                },
                {
                    path: '/company/all',
                    name: 'Companies',
                    component: ()=>import('../components/companies/Companies.vue'),
                    beforeEnter: auth_guard
                },
                {
                    path: '/company/create',
                    name: 'Create Company',
                    component: ()=>import('../components/companies/Create.vue'),
                    beforeEnter: auth_guard
                },
                {
                    path: '/company/edit/:id',
                    name: 'Edit Company',
                    component: ()=>import('../components/companies/Edit.vue'),
                    beforeEnter: auth_guard
                },
                {
                    path: 'account/category/all',
                    name: 'Categories Management',
                    component: Categories,
                    beforeEnter:auth_guard
                },
                {
                    path: 'account/category/create',
                    name: 'Category_Create',
                    component: Category_Create,
                    beforeEnter: auth_guard
                },
                {
                    path: 'account/sub_category/all',
                    name: 'SubCategory Management',
                    component: SubCategories,
                    beforeEnter: auth_guard
                },
                {
                  path: 'account/sub_category/create',
                  name: 'SubCategory_Create',
                    component:SubCategory_Create,
                    beforeEnter:auth_guard
                },
                {
                    path: 'account/group/all',
                    name: 'Group Management',
                    component: Groups,
                    beforeEnter: auth_guard
                },
                {
                    path: 'account/group/create',
                    name: 'Group_Create',
                    component: Group_Create,
                    beforeEnter:auth_guard
                },
                {
                    path: 'account/ledger/all',
                    name: 'Ledger Management',
                    component: Legers,
                    beforeEnter: auth_guard
                },
                {
                    path: 'account/ledger/create',
                    name: 'Ledger_Create',
                    component: Leger_Create,
                    beforeEnter: auth_guard
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