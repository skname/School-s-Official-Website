import Home from '../views/home.vue'   //导入主页
import SchoolProfile from '../views/shool_profile/index.vue'
import Introduction from '../views/shool_profile/introduction.vue'
import Symbols from '../views/shool_profile/symbol.vue'
import AttractiveCampus from '../views/shool_profile/attractive_campus.vue'
import Leader from '../views/shool_profile/leader.vue'
import Programme from '../views/shool_profile/programme.vue'
import LeaderOration from '../views/shool_profile/leader_oration.vue'
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: SchoolProfile,
        children:[
            {
                path:'introduction/:id',
                component:Introduction
            },
            {
                path:'symbol/:id',
                component:Symbols
            },
            {
                path:'attractive_campus/:id',
                component:AttractiveCampus
            },
            {
                path:'leader/:id',
                component:Leader
            },
            {
                path:'programme/:id',
                component:Programme
            },
            {
                path:'leader_oration/:id',
                component:LeaderOration
            }
        ]
    }
]