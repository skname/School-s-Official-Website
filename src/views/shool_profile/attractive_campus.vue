<template>
    <div id="imgBox">
        <div class="img_card" v-for="item in imageBox" :key="item.id">
            <div class="img">
                <img :src="item.src" alt="">
            </div>
            <div class="title">
                <span>{{ item.title }}</span>
                <span>作者：{{ item.author }} ({{ item.occupation }})</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { imageBox } from '../../data/school_profile/attractive_acmpus'
export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            imageBox
        }
    }
}
</script>

<style lang="scss" scoped>
#imgBox{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .img_card{
        margin: 10px 20px;
        box-shadow: 3px 3px 5px 2px rgb(136, 136, 136);
        .title{
            line-height:1.5;
            padding: 10px 0;
            border-top: none;
        }
        >div{
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            img{
                transition: 0.8s all;
                width: 100%;
            }
        }
        &:hover{
                img{
                    transform: scale(1.15, 1.15);
                }
            }
    }
}
</style>