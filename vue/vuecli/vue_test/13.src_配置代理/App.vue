<template>
  <div>
    <button @click="getStudents">请求学生信息</button>
    <button @click="getCars">请求学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api1/students").then(
        (res) => {
          console.log("请求成功", res.data);
        },
        (err) => {
          console.log("请求失败", err.message);
        }
      );
    },
        getCars() {
      axios.get("http://localhost:8080/api2/cars").then(
        (res) => {
          console.log("请求成功", res.data);
        },
        (err) => {
          console.log("请求失败", err.message);
        }
      );
    },
  },
};
</script>
