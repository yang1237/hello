import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    routerPush.call(this, location).catch(err => err)
}

const Home=()=>import('views/home/Home')
const Category=()=>import('views/category/Category')
const Shopcart=()=>import('views/shopcart/Shopcart')
const Profile=()=>import('views/profile/Profile')
const Detail=()=>import('views/detail/Detail')

const routes=[
    {
        path:'/',
        redirect:'/home',
    },{
        path:'/home',
        component:Home,
        meta:{
            title:'首页',
            keepAlive:true,
        }
    },{
        path:'/category',
        component:Category,
        meta:{
            keepAlive:true,
            title:'分类'
        }
    },{
        path:'/shopcart',
        component:Shopcart,
        meta:{
            keepAlive:true,
            title:'购物车'
        }
    },{
        path:'/profile',
        component:Profile,
        meta:{
            keepAlive:true,
            title:'用户'
        }
    },{
        path:'/detail/:id',
        component:Detail,
        meta:{
            keepAlive:true,
            title:'详情'
        }
    }
]

const router=new VueRouter({
    routes,
})
router.beforeEach((to,from,next)=>{
    //console.log(to);
    document.title=to.matched[0].meta.title;
    next();
})

export default router