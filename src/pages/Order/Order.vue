<template>
  <section class="order">
    <HeaderTop title="订单列表" />
    <section class="order_no_login">
      <img class="bgImg" src="./images/waimai.png" alt="" />
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";

export default {
  name: "Order",
  components: { HeaderTop }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order
  .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
  .order_no_login
    margin-top 45px
    height calc(100vh - 95px)
    display flex
    align-items center
    justify-content center
    flex-direction column
    h3
      font-size 16px
      margin-bottom 20px
      color #333
    button
      outline none
      border none
      padding 10px 15px
      color #fff
      border-radius 4px
      background-color #02a774
  .bgImg
    width 80%
</style>
