<template>
  <div class="jheader">
    <router-link to="/" class="nav-item">首页</router-link>|
    <router-link to="/user/login" class="nav-item">登录</router-link>|
    <router-link to="/user/register" class="nav-item">注册</router-link>|
    <router-link to="/form/add" class="nav-item">最基本动态添加表单</router-link>|
     <router-link to="/form/formdemo" class="nav-item">基础表单</router-link>|
    <router-link to="/jsx/demo1" class="nav-item">jsx基本案列1</router-link>|
    <router-link to="/tpl/tpldemo01" class="nav-item">组件模板</router-link>|
    <router-link to="/slot/slotdemo01" class="nav-item">组件内容分发</router-link>
  </div>
</template>

<script>
export default {
  name: "JHeader"
};
</script>

<style lang="scss">
.jheader {
  height: 40px;
  background-color: bisque;
  .nav-item {
    padding: 0 20px;
    line-height: 40px;
  }
}
</style>
