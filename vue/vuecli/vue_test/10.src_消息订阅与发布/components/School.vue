<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // this.$bus.$on('hello',data=>{
    //   console.log('school组件收到了数据',data)
    // })
    // 箭头函数指向VC
   this.pubid=pubsub.subscribe('hello',(msg,data)=>{
      console.log('收到订阅信息',data);
    })
  },
  beforeDestroy() {
    //取消订阅 需要通过ID 所以ID要定义在vc里面
    pubsub.unsubscribe(pubid)
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>