<template>
  <div class="nav" ref="navDom">
    <div class="nav--logo">
      <img src="@/assets/vue.svg" alt="">
    </div>
    <div class="nav--Navigation">
      <router-link v-for="item in routerData" :key="item.route" class="nav--router" active-class="router-link-active" :to="item.route">
        <p>{{ $t(`route.${item.title}`) }}</p>
      </router-link>

      <ChoiceLang />
    </div>
  </div>
</template>

<script setup>
  import ChoiceLang from './choice-lang.vue'
  import { ref, onMounted, reactive } from 'vue'
  import { useRoute } from 'vue-router'

  const navDom = ref(null);
  onMounted(()=>{
    // 暂时这样处理nav（position: fixed;是基于浏览器窗口定位的，所以 overflow没用）
    window.onscroll = () => {
      let sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft)
      navDom.value.style.left = sl + 'px'
    }
  })

  const route = useRoute();

  const routerData = [
    {
      route: '/home',
      title: 'currentData'
    },
    {
      route: '/game',
      title: 'game'
    },
    {
      route: '/company',
      title: 'company'
    },
    {
      route: '/contact',
      title: 'contact'
    },
  ]
  
</script>

<style lang="scss">
.nav {
  height: 60px;
  width: 100%;
  min-width: 1500px;
  background: rgba(232, 232, 232, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  &>.nav--logo {
    width: 50px;
    height: 50px;
  }

  &>.nav--Navigation {
    display: flex;
    color: #999999;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 16px;

    &>.nav--router {
      margin: 0 20px;
      cursor:pointer;
      position: relative;

      &.router-link-active{    //表示router-link激活选中时的状态
        color: #333333;

        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          display: inline-block;
          width: 100%;
          height: 3px;
          background: #333333;
        }
      }

      &:hover {
        color: #333333;

        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          display: inline-block;
          width: 100%;
          height: 3px;
          background: #333333;
        }
      }

      &>p {
        padding: 0 10px;
      }
    }
  }
}
</style>