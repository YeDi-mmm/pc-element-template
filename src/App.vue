<template>
  <el-config-provider :locale="localeElement">
    <Navbar />
    <div class="ct--page">
      <router-view></router-view>
      <el-backtop target=".ct--page" :right="150" :bottom="100" />
    </div>
  </el-config-provider>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import { computed } from 'vue'
  import { useAppStore } from '@/store/index.js' //store存放语言配置
  import { langElementPlus } from "@/lang";
  const langstore = useAppStore();
  const localeElement = computed(() => langElementPlus(langstore.language))
</script>

<style lang="scss">
  .ct--page {
    height: 100%;
    width: 100%;
    min-width: 1500px;
    position: relative;
    padding-top: 60px;
  }
</style>