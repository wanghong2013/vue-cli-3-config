<template>
  <div>
     <h3>Todo组件模板</h3>
     <TodoItem :todos="todos"/>
  </div>
 
  
</template>

<script>
import TodoItem from "../../components/TodoItem";
export default {
  name: "tpl_dem0_01",
  components:{
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: 1, name: "123" },
        { id: 2, name: "453" },
        { id: 3, name: "789" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>