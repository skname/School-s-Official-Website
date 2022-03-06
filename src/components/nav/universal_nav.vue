<template>
    <div class="nav_boxs">
      <div>
        <div class="nav_child">
        <router-link to="/">
          <img style="width: 200px; height: 60px" src="../../assets/tyu_logo_index.png" alt=""/>
        </router-link>
          <div>
            <div>
              <router-link v-for="item in nav_List1" :key="item.id" :to="item.to">
                <span><span style="margin-right: 20px">|</span>{{ item.nav_name }}</span>
              </router-link>
            </div>
            <div>
              <router-link
                class="nav_foot" :to="item.to" v-for="item in nav_List2" :key="item.id">
                <span>{{ item.nav_name }}</span>
                 <div id="content">
                 <router-link v-for="child_item in item.child" :to="child_item.to" :key="child_item.id">
                    <span >{{ child_item.name }}</span>
                  </router-link> 
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { ref } from "vue";
import { nav_List1, nav_List2 } from "../../data/public.js";
export default {
  setup() {
    let ishidden = ref(false); // 导航信息栏是否显示

    return {
      nav_List1,
      nav_List2,
      ishidden
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/public.scss';
.nav_boxs {
  width: 100vw;
  height: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 0px 8px 2px rgb(172, 170, 170);
}
.nav_child {
  width: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-left: 30px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      span {
        color: #757575;
        margin: 0px 10px;
        font-size: 14px;
        font-weight: 450;
        line-height: 2.5;
      }
    }
    .nav_foot {
      position: relative;
      transform: translateX(5px);
      &:hover {
          span {
            color: $theme-color;
          }
      }
      &:hover #content {
        visibility: initial;
      }
      span {
          color: #757575;
          font-size: 18px;
          margin: 0px 15px;
          font-weight: 500;
      }
      #content{
        width: auto;
        visibility: hidden;
        position: absolute;
        margin-left: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 3px solid $theme-color;
        background-color: #fff;
        z-index: 999;
        border-radius: 9px;
        span {
          color: $font-color;
          flex-grow: 1;
          display: block;
          margin: 0;
          padding:0px 20px;
          &:hover {
            color: $theme-color;
            font-weight: bold;
          }
        }
  }
    }
  }
}
</style>