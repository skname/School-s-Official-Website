<template>
    <router-link :to="src" id="circle">
        <span class="circle"></span>
        <span style="margin-left:15px;">{{ text }}</span>
    </router-link>
</template>

<script>
export default {
    props: {
        text: String,
        src:String
    }
}
</script>

<style lang="scss" scoped>
#circle{
    color: #01529C;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover .circle{
        background-color: #01529C;
    }
}
.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:1px solid #01529C;
    transition: 0.7s all;
    &::after{
        content: '';
        display: block;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border: 1px  #01529C dashed;
    }
}
</style>