<template>
  <div class="home">
    <p>{{ value }}</p>
    <JHeader />
    <p>{{ num }}</p>
    <button @click="changeNum">改变num</button>
    <p>{{ $store.state.counter.count }}</p>
  </div>
</template>

<script>
import JHeader from "@/components/JHeader.vue";
export default {
  name: "home",
  components: {
    JHeader
  },
  data() {
    return {
      value: "首页",
      num: 0
    };
  },
  methods: {
    changeNum() {
      this.num++;
    }
  },
  mounted() {
    console.log(this.$store, "$store");
  }
};
</script>
