<template>
  <div class="home">
    <JHeader />

    <p>$store.state.counter.count= {{ $store.state.counter.count }}</p>
    <button @click="changeCount">改变count</button>
    <hr />
    <p>n的值是 {{ n }}</p>
    <p>计算属性m {{ m }}</p>
  </div>
</template>

<script>
import JHeader from "@/components/JHeader.vue";
export default {
  name: "home",
  components: {
    JHeader
  },
  created() {
    console.log(this.$store.state.count, "created");
  },
  data() {
    return {
      value: "首页",
      n: this.$store.state.counter.count
    };
  },

  computed: {
    m() {
      return this.$store.state.counter.count;
    }
  },

  methods: {
    changeNum() {
      this.num++;
    },
    changeCount() {
      this.$store.commit("updateCount");
    }
  },
  mounted() {
    console.log(this.$store, "mounted");
  }
};
</script>
