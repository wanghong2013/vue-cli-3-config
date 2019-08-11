<template>
  <div class="home">
    <p>{{ value }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {
      value: "首页"
    };
  }
};
</script>
