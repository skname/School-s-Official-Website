<template>
    <div id="leader_box">
        <div class="left">
            <router-link class="left_text" :style="[index_select==item.id?'background-color:rgba(222,22,22,0.3);':'']" @click="select(item.id)" v-for="item in leader_list" :key="item.id" to="">
                {{ item.name }} ({{item.position}})
            </router-link>
        </div>
        <div class="right">
            <img :src="leader_list[index_select].photoSrc" alt="">
            <div class="name">
                <span>{{ leader_list[index_select].name }}</span><span>{{ leader_list[index_select].position }}</span>
            </div>
            <div class="introduction">
                <span>{{ leader_list[index_select].introduction }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { leader_list } from '../../data/school_profile/leader'

let index_select = ref(0)

function select(item) { // 选中
    index_select.value = item
}

export default {
    setup () {
        return {
            leader_list,
            index_select,
            select
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/public.scss';
#leader_box{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    >div{
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 2px #ccc;
    }
    .left{
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        .left_text{
            flex-grow: 1;
            line-height: 70px;
            text-align: center;
            color: #000;
            font-weight: bold;
            font-size: 17px;
        }
    }
    .right{
        margin-left: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100px;
            margin-top: 100px;
        }
        .name {
            font-size: 20px;
            color: $theme-color;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .introduction{
            line-height: 2;
            text-indent:2em;
            width: 80%;
        }
        >div{
            margin-top: 30px;
        }
    }
}
</style>