<template>
    <div id="about">
        <universal_nav style="position: absolute;z-index:999;"></universal_nav>
        <div class="content">
            <div class="image_box">
                <img :src="background_image[0].src">
            </div>
            <div class="main">
                <div class="main_nav">
                    <div style="box-shadow: 0 0 10px 2px #ccc;height:80px;">{{ nav_List2[0].nav_name }}</div>
                    <div>
                        <router-link class="text" v-for="item in nav_List2[0].child" :key="item.id" :to="item.to" @click="selectItem(item.id)" :style="[count == item.id ? 'color:#fff;font-weight:bolder;background-color:#01529C;':'']">{{ item.name }}</router-link>
                    </div>
                </div>
                <router-view class="main_view"></router-view>
            </div>
            <foot_copyright></foot_copyright>
        </div>
     </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import universal_nav from '../../components/nav/universal_nav.vue' // 引入导航栏
import { background_image } from '../../data/school_profile/school' // 引入背景
import { nav_List2 } from '../../data/public'
import foot_copyright from '../../components/foot_copyright/foot.vue' // 引入底部
export default {
    components:{
        universal_nav,
        foot_copyright
    },
    setup () {
        function select (){
            let route = useRoute();
            return route.params.id
        }
        let count = ref(select())

        function selectItem(item) { // 选中
            count.value = item
        }

        return {
            background_image,
            nav_List2,
            selectItem,
            count
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/school_profile.scss';
</style>