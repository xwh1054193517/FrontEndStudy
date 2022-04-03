<template>
  <div class="todo-footer"
       v-show="total">
    <label>
      <input type="checkbox"
             v-model="isAll">
    </label>
    <span>
      <span>已经完成{{doneTotal}}</span>/全部{{total}}
    </span>
    <button class="btn btn-danger"
            @click="clearAll">清楚已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },

    doneTotal() {
      //后面的0是统计开始的初始值
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0)},0)
    },
    //全选框
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      // isAll被修改时set被调用
      set(val) {
        this.$emit('checkAllTodo', val);
      },
    },
  },
  methods: {
    clearAll() {
      this.$emit('clearAllTodo');;
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>