<template>
  <div id="app">
    <!-- 上面内容动态 -->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
// import { mapActions } from "vuex"; // 这是发送请求的第二种方式，调用action映射
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  name: "App",
  components: {
    FooterGuide
  },
  mounted() {
    this.$store.dispatch("getAddress"); // 1.这是一种发请求的方式
  }
  // methods: {
  //   ...mapActions(["getAddress"]) //2.映射生成一个方法，也是发送请求
  // }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  color :red
</style>
