<template>
    <div :style="swperLength">
        <img v-for="item in image" :key="item.id" :src="item.src" :style="swperStyle"  alt="">
    </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
    props:{
        image:Array,// 图片路径数组
        lengths:Array,// 图片大小数组
        timeOut:Number// 轮播图时延
    },
    setup(props, content){
        const imagesNum = props.image.length 
        const timeOut = props.timeOut // 获取轮播图时延
        const length = props.lengths // 轮播图长宽
        let index = ref(0)

        const swperStyle = computed({ //设置轮播图移动距离
            get(){
                return `transform: translateX(-${index.value*length[0]}px);`
            }
        })


        const swperLength = computed({ //设置轮播图大小
            get:()=>`width: ${length[0]}px;height:${length[1]}px`
        })


        function loop(arr){ // 设置轮播图循环
            let url = arr[index.value]
            arr.push(url)
        }
        setInterval(()=>{ // 设置轮播图循环间隔
            loop(props.image);
            index.value++;
        },timeOut* 1000)

        return {
            swperStyle,
            index,
            swperLength
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
img{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: 1s all;
}
</style>