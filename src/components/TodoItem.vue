<template>
  <ol>
    <li v-for="item in todos" :key="item.id">{{item.name}}</li>
  </ol>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todos: {
      type: Array,
      default: [],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>