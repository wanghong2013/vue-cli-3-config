<template>
  <div class="home">
    <p>{{ value }}</p>
    <JHeader />
  </div>
</template>

<script>
import JHeader from "@/components/JHeader.vue"
export default {
  name: "home",
  components: {
    JHeader
  },
  data() {
    return {
      value: "首页"
    };
  }
};
</script>
