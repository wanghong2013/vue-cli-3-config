<template>
  <div class="home">
    <p>{{ value }}</p>
    <JHeader />
    <p>{{ num }}</p>
    <button @click="changeNum">改变num</button>
    <p>{{ $store.state.counter.count }}</p>
    <p><button @click="changeCount">改变count</button></p>
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
    },
    changeCount(){
      this.$store.commit('updateCount')
      console.log(this.$store,'changeCount')
    }
  },
  mounted() {
    console.log(this.$store, "$store");
  }
};
</script>
