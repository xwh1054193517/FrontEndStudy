<template>
  <div class='demo'>
    <h2>学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "华工",
      address: "大学城",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>