<template>
<div id="foot">
    <div class="lead">
        <div class="content">
            <div v-for="item in foot_lead" :key="item.id">
                <a :href="item.src" target="_blank">{{ item.content }}</a>
            </div>
            <div class="image_boxs">
                <a href="javascript:;"><img src="../../assets/icon/weChat.png" alt=""></a>
                <div>
                    <img src="../../assets/icon/weChat.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="foot">
        <img src="src\assets\logoR.png" alt="">
        <div>
            <span v-for="index in copy1" :key="index.id">{{ index.content }}</span>
            <span v-for="index in copy2" :key="index.id"><a :href="index.src" target="_blank">{{ index.content }}</a></span>
        </div>
    </div>
</div>
</template>
<script>

import { foot_copyright, foot_lead } from '../../data/public'
export default {
    setup () {
        const copy1 = foot_copyright.copy_1
        const copy2 = foot_copyright.copy_2
        return {
            copy1,
            copy2,
            foot_lead
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/public.scss';
#foot{
    width: 100%;
    height: auto;
    .lead{
        width: 100%;
        height: 120px;
        background-color: $theme-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        .content{
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            >div{
                color: white;
                margin: 30px;
                &:hover {
                    a{
                        color: #ccc;
                    }
                }
            }
            .image_boxs{
                width: 50px;
                height: 50px;
                background-color: #fff;
                border-radius: 50%;
                box-shadow: 0px 0px 2px 2px rgba(102, 101, 101, 0.7);
                margin-left: auto;
                margin-right: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                a{
                    img {
                        width: 80%;
                        position: relative;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                    }
                    &:hover+div{
                        display: block;
                    }
                }
                >div{
                    display: none;
                    width: 150px;
                    height: 150px;
                    background-color: rgb(204, 206, 206,.4);
                    box-shadow: 0 0 2px 2px #ccc;
                    border-radius: 10px;
                    position: absolute;
                    transform: translateY(-160px);
                }
            }
        }
    }
    .foot{
    width: 100%;
    height: 150px;
    overflow: hidden;
    background-color: #302A29;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 200px;
        height: 60px;
        margin: 20px;
    }
    >div{
        color: #fff;
        span{
            margin-left: 50px;
        }
    }
  }
}

</style>