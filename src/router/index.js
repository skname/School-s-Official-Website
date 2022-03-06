import  { createRouter, createWebHashHistory } from 'vue-router' //导入路由
import routes from './routes' // 导入路由路径
/*
start 创建路由
*/
export default createRouter({
    history:createWebHashHistory(), // 哈希模式
    routes
}) 
