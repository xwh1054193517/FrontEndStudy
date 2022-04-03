<template>
  <div>
    <h2 @click="showName">学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>

  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      name: "华工",
      address: "大学城",
    };
  },
  // methods: {
  //   showName(){
  //     alert(this.name)
  //   }
  // },
  mixins:[mixin]
};
</script>
