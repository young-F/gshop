<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item on">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </div>
</template>

<!-- 
    1）通过编程时导航实现路由的切换显示($router)
    2) 通过动态class和$route.path 来实现tab样式切换
    3）通过阿里图标库，显示导航图标
-->

<script>
export default {
  // 组件名称
  name: "FooterGuide",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {}
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
.footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #999
        &.on
            color #02a774
        span
            font-size 12px
            margin-top 2px
            margin-bottom 2px
            .iconfont
                font-size 22px
</style>
