<template>
  <div>
    <h3>组件内容分发</h3>
    <SimpleSlot>
      <template v-slot:content>
        <ol>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ol>
        <ul>
          <li>哈哈哈</li>
        </ul>
      </template>

      <template v-slot="header">
        <h3>header</h3>
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