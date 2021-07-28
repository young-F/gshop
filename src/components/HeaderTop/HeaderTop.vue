<template>
  <!-- 首页头部 -->
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props: {
    title: {
      type: String,
      default: "这里应该显示地址信息",
      required: true
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
    color #fff
    padding: 0 10px
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    display flex
    align-items center
    justify-content center
    .header_title

    .header_title_text
      width 160px
      display block
      text-align center
    .header_search
      position absolute
      left 10px
      .icon-search
        font-size 20px
    .header_login
      position absolute
      right 10px
</style>
