<template>
    <div id="card_box">
    <router-link class="card" to="" v-for="item in title_list" :key="item.id">
            <span>{{ item.title }}</span>
            <span>{{ item.time }}</span>
    </router-link>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { title_list } from '../../data/school_profile/introduction'
export default {
    setup () {

        return {
            title_list
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/public.scss';
#card_box{
    width: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    .card{
        color: #000;
        width:300px;
        height: 150px;
        position: relative;
        margin: 0 20px;
        box-shadow: 0 0 10px 5px rgb(211, 210, 210);
        span{
            position: relative;
            top: 20%;
            left: 5%;
        }
        &:hover{
            &::after{
                width: 297px;
            }
        }
    }
    .card::after{
        content: '';
        display: block;
        position: absolute;
        width: 100px;
        border-bottom:6px solid $theme-color;
        top: 100%;
        transform: translateY(-100%);
        transition: 0.5s all;
    }
}
</style>