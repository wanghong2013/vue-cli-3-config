<template>
  <a-form>
    <a-form-item label="普通输入框">
      <a-input />
    </a-form-item>
    <a-form-item>
      <a-input-number>数组输入框</a-input-number>
    </a-form-item>
    <a-form-item>
      <VInput />
      <VList />
    </a-form-item>

    <a-button type="primary">按钮</a-button>
  </a-form>

</template>

<script>
import VInput from '@comp/VInput'
import  VList from '@comp/VList'
export default {
  name: "formDemo",
  components:{
   VInput,
   VList
  }
};
</script>

<style lang="scss" scoped>
</style>