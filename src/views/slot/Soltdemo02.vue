<template>
  <div>
    <h3>v-slot</h3>
    <router-link to="/slot/slotdemo01" class="nav-item">返回slot首页测试</router-link>

    <hr />

    <p>-----------</p>
    <h3>这是写法是以后3.0中也是这种写法</h3>
    <SimpleSlot>
      <template v-slot:header>v-slot命令测试</template>
      <template v-slot:default>
         <h1>v-slot默认</h1>
      </template>
    </SimpleSlot>
  </div>
</template>

<script>
import SimpleSlot from "../../components/SimpleSlot";
export default {
  name: "slotdemo01",
  components: {
    SimpleSlot
  }
};
</script>

<style lang="scss" scoped>
</style>