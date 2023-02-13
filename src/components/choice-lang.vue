<template>
  <el-popover :width="250">
    <template #reference>
      <p class="nav--lang" @click="visible = true">{{ langText }}</p>
    </template>

    <template #default>
      <li class="lang-child" v-for="item in actions" :key="item.value" @click="handleSetLanguage(item.value, item.text)">
        <p>{{ item.text }}</p>
      </li>
    </template>
  </el-popover>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useAppStore } from '@/store/index.js' //store存放语言配置
  import { useI18n } from "vue-i18n";

  const visible = ref(false)

  // 通过 actions 属性来定义菜单选项
  const actions = reactive([
    { text: '中文', value: 'zh' },
    { text: 'English', value: 'en' },
    { text: '泰国', value: 'th' },
    { text: '越南', value: 'id' },
    { text: '印尼', value: 'vi' },
    { text: '马来', value: 'ms' },
  ])

  const { locale } = useI18n();
  const langstore = useAppStore();

  // 显示当前语言
  let langText = ref('')
  langText = actions.filter(item => item.value === langstore.language)[0]['text']

  function handleSetLanguage(val, text) {
    locale.value = val;
    langstore.SET_LOCALE(val)
    langText = text
  }
  
</script>

<style lang="scss">
  .nav--lang{
    color: #7e6e6e;
    font-size: 14px;
    cursor:pointer;
  }

  .lang-child {
    display: inline-block;
    width: 100%;
    margin: 5px;
    padding: 5px 0;
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    background: rgba(242, 242, 242, 1);
    color: #999999;
    cursor:pointer;

    &:hover {
      background-color: rgba(170, 170, 170, 1);
      color: rgb(255, 255, 255);
    }
  }

</style>