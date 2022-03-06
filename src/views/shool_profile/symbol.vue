<template>
    <div id="symbol">
        <div v-for="item in symbol_list" :key="item.id">
            <div class="title">{{ item.title }}</div>
            <div class="img_box" v-for="child_item in item.src" :key="child_item.id">
                <img :src="child_item.src" alt="" >
            </div>
            <div class="child" v-if="item.child_title">
                <div class="child_title"><b>{{ item.child_title + ':'}}</b></div>
                <div class="content" v-for="content in item.contents" :key="content.id">
                    <div>{{`${content.id+1}.`+content.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { symbol_list } from '../../data/school_profile/symbol'
export default {
    setup () {
        return {
            symbol_list
        }
    }
}
</script>

<style lang="scss" scoped>
#symbol{
    color:#000;
    .title{
        font-size: 25px;
    }
    >div{
        border-top: 1px solid #ccc;
        padding: 30px 0px;
        width: 100%;
        .img_box{
            width: 100%;
            padding: 30px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .child{
            .child_title{
                font-size: 20px;
            }
            .content{
                >div{
                    text-indent: 2em;
                    font-size: 20px;
                    line-height: 2;
                }
            }
        }
    }
    >div:nth-child(1){
        img{
            width: 300px;
            height: auto;
        }
    }
    >div:nth-child(2){
        img{
            height: 150px;
        }
    }
    >div:nth-child(3){
        img{
            height: 80px;
        }
    }
    >div:nth-child(4){
        img{
            width: 500px;
        }
        .img_box{
            padding: 5px;
        }
    }
}
</style>