<template>
  <div>
    <a-input placeholder="111" v-for="(item,index) in items" :key="index"></a-input>
    <button @click="addInput">addInput</button>
  </div>
</template>
<script>
import { Input } from "ant-design-vue";
export default {
  name: "formadd",
  components:{
    Input
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addInput() {
      this.items.push("");
    }
  }
};
</script>