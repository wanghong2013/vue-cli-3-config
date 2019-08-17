<template>
  <div>

    <b>下面的下发是过时的写法</b>
    <hr/> 
    <!-- 下面的这种写法是过时的写法 -->
    <slot name="header"></slot>
    <slot></slot>
    <!-- <slot name="content"></slot> -->
  </div>
</template>

<script>
export default {
  name: "slot01"
};
</script>

<style lang="scss" scoped>
</style>