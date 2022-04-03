<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个笨比",
      myName:this.name,
      myAge:this.age
      // name: "张三",
      // sex: "男",
      // age: 18,
    };
  },
  // 简单声明接收
  // props:['name','sex','age']

  // 接受同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

//props最高
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type:Number,
      default:99
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>
