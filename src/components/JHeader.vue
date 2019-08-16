<template>
  <div class="jheader">
    <router-link to="/">首页</router-link>|
    <router-link to="/user/login">登录</router-link>
    <router-link to="/user/register">注册</router-link>
    <router-link to="/form/add">最基本动态添加表单</router-link>
    <router-link to="/jsx/demo1">jsx基本案列1</router-link>
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
}
</style>
