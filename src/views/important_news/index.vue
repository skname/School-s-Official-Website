<template>
    <div class="page_child" @wheel="handleWheel($event)" :style="footStatus[index]">
        <div class="title">
            <span>太院 · 要闻</span>
        </div>
        <div class="content">
            <div>
               <el-carousel class="box">
                    <el-carousel-item v-for="item in images_list1" :key="item.id"><img :src="item.src"/></el-carousel-item>
               </el-carousel>
               <div style="width:48%;height:auto;box-shadow: 0 2px 4px rgba(0, 0, 0, .16), 0 0 6px rgba(0, 0, 0, .08);">
                    <router-link class="router_link" v-for="item in title_list1" :key="item.id" to="">
                    <span style="margin-left: 20px;">{{ item.title }}</span><span class="time">{{ item.time }}</span>
                    </router-link>
               </div>
            </div>
            <div>
                <div style="width:48%;height:auto;box-shadow: 0 2px 4px rgba(0, 0, 0, .16), 0 0 6px rgba(0, 0, 0, .08)">
                    <router-link class="router_link" v-for="item in title_list2" :key="item.id" to="">
                    <span style="margin-left: 20px;">{{ item.title }}</span><span class="time">{{ item.time }}</span>
                    </router-link>
                </div>
                <el-carousel class="box">
                    <el-carousel-item v-for="item in images_list2" :key="item.id"><img :src="item.src" alt=""/></el-carousel-item>
                </el-carousel>
            </div>
            <div class="mark_boxs">
                <div>
                    <mark_hover class="mark_hover" :text="item.text" :to="item.src" v-for="item in mark_list1" :key="item.id"></mark_hover>
                </div>
            </div>
        </div>
        <div class="content_notice">
            <div class="notice">
                <div class="text"> 通知公告 · 太院声明 </div>
                <div class="notice_box">
                    <div class="notice_left">
                        <div>
                            <router-link class="text" v-for="item in notice_list1" :key="item.id" :to="item.src">
                                <div>{{ item.title }}</div>
                                <div class="time">
                                    <span><i>{{ item.time }}</i></span>
                                    <div></div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="notice_right">
                    </div>
                </div>
            </div>
        </div>
        <foot_copyright></foot_copyright>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import universal_nav from '../../components/nav/universal_nav.vue'; // 引入导航栏
import foot_copyright from '../../components/foot_copyright/foot.vue' // 引入底部版权
import mark_hover from '../../components/mark/mark.vue' // 引入标志
import { images_list1, images_list2, title_list1, title_list2, mark_list1, notice_list1 } from '../../data/new_data/news'; // 引入数据

export default {
  components:{
        universal_nav,
        foot_copyright,
        mark_hover
    },
    props:{
        index:Number
    },
  setup (props,{ emit }) {
    let backTop = 0 // 滚条距离顶部距离
    let footStatus = ['top: 100vh;','top: 0vh ;'] //页面状态

    function handleWheel(event){ // 监听滚轮事件
        backTop = document.querySelector('.page_child').scrollTop
        if(event.deltaY<=0 && !backTop){  // 需要修改为距离 top 距离
            emit('changeStatus',null)
            emit('changeNavStatus',0)
        }
    }

    function handleScroll(){ // 过度完成导航栏出现
        if(props.index){
            emit('changeNavStatus',1)
        }  
    }
    
    onMounted(()=>{
        window.addEventListener('transitionend',handleScroll) // 监听过度完成
    })
        return {
         handleWheel,
         footStatus,
         handleScroll,
         images_list1,
         images_list2,
         title_list1,
         title_list2,
         mark_list1,
         notice_list1
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/news.scss';
</style>