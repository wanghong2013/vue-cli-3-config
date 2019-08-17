<template>
  <div class="home">
    <p>$store.state.counter.count= {{ $store.state.counter.count }}</p>
    <a-button type="primary" @click="changeCount">改变count</a-button>
    <hr />
    <p>n的值是 {{ n }}</p>
    <p>计算属性m {{ m }}</p>

    <div>
      <router-link to="/form/formdemo">基础表单控件</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {

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
