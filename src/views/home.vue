<template>
<div>
  <div class="page" @wheel="handleWheel($event)" :style="imagesBox" ref="imgBox">
    <universal_nav  class="nav_top" :style="navStatus[navIndex]"></universal_nav>
    <div class="nav_box">
      <div>
        <div class="nav">
          <img style="width: 200px; height: 60px" src="../assets/logoR.png" alt=""/>
          <div>
            <div>
              <router-link v-for="item in nav_List1" :key="item.id" :to="item.to">
                <span><span style="margin-right: 20px">|</span>{{ item.nav_name }}</span>
              </router-link>
            </div>
            <div> 
              <router-link class="nav_foot" to="" v-for="item in nav_List2" :key="item.id">
                <span>{{ item.nav_name }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <important_news class="foot" :index="footIndex" @changeStatus = changeStatus @changeNavStatus = changeNavStatus></important_news>
</div>
</template>
<script>
import universal_nav from '../components/nav/universal_nav.vue'
import important_news from './important_news/index.vue'
import { computed, ref, watch, onBeforeUnmount, nextTick } from "vue";
import {images, timeOut } from "../data/home_data/index.js";
import { nav_List1, nav_List2, } from '../data/public'

// ref 加工厂
const createRef = function(nums){
      const Refs = []
      for(;nums;nums--){
        Refs.push(ref(0))
      }
      return Refs;
}

export default {
  components:{
    important_news,
    universal_nav
  },
  setup() {
    const imgStatus = ['100%','105%']; // 轮播图缩放
    const navStatus = ['transform:translateY(-92px)','transform:translateY(0px)']
    let throttle = true // 控制节流

    let [ index, // 选择图片
          indexStatus, // 选择缩放状态
          footIndex, // 选择隐藏页面状态
          navIndex  // 导航栏状态
        ] = createRef(4) 


    function handleWheel(event){ // 监听滚轮事件
      if(event.deltaY>=0&&throttle){
          footIndex.value = 1 
          throttle = false // 控制节流
      }
    }

    function changeStatus(){ // 子传父改变状态
      footIndex.value = 0
      throttle = true
    }

    function changeNavStatus(it){ // 子传父改变状态
      navIndex.value = it
    }

    //设置轮播图
    const imagesBox = computed({
      get() {
        return `background-image: url('${images[index.value].src}');background-size: ${imgStatus[indexStatus.value]} ${imgStatus[indexStatus.value]};`;
      }
    });
    // 设置定时
    const name = setInterval(() => {
      index.value++;
      if (index.value == images.length) {
        index.value = 0;
      }
    }, 1000 * timeOut);

    // 监听轮播图
    watch(index,()=>{
      indexStatus.value = 1
    })

    // 卸载监听
    onBeforeUnmount(()=>{
      clearInterval(name)
    })
    return {
      nav_List1,
      nav_List2,
      images,
      imagesBox,
      indexStatus,
      handleWheel,
      footIndex,
      changeStatus,
      navStatus,
      navIndex,
      changeNavStatus,
    }
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/home.scss';
</style>