<template>
  <div>
    <h3>组件内容分发</h3>
    <router-link to="/slot/slotdemo02" class="nav-item">v-slot测试</router-link>
    <SimpleSlot>
      <template slot="header">
        <h3>header</h3>
        <p>这是有名字的插槽</p>
      </template>
      <template>
        <div>
          <p>这里的内容是默认的插槽</p>
        </div>
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