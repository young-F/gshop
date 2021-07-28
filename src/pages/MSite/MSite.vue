<template>
  <section class="msite">
    <!-- 首页头部 -->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-search"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录 | 注册</span>
      </span>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:;"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + categoery.image_url" alt="" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else />
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-more"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";

export default {
  name: "MSite",
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(["address", "categorys"]),
    // 根据categorys一维数组生成一个二维数组
    // 二维数组中的元素个数最大是8个
    categorysArr() {
      const { categorys } = this;
      // 先准备一个空的二维数组
      const arr = [];
      // 准备一个小数组(最大长度为8)
      let minArr = [];
      // 遍历categorys
      categorys.forEach(c => {
        // 如果当前小数组已经满了，创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr小数组是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前小数组保存到小数组中
        minArr.push(c);
      });
      return arr;
    }
  },
  watch: {
    categorys(value) {
      // categorys数组中有数据了，在异步更新界面之前执行

      // 界面更新就立即创建Swiper对象
      this.$nextTick(() => {
        // 一旦完成界面更新，立即调用
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite
  width 100%
  .msite_nav
    margin-top 45px
    .swiper-container
      padding-bottom 20px
  .link_to_food
    width 25%
    display flex
    align-items center
    flex-direction column
    margin-bottom 10px

  .food_container
    width 44px
    height 44px
    position relative
    object-fit cover
    top 0
    left 0
    margin-bottom 5px
    margin-top 15px
    img
      position absolute
      top 0
      left 0
      height 100%
      width 100%
    & + span
      width 44px
      line-height 1.4
      white-space nowrap
      color #333
      font-size 11px
      text-align center
  .swiper-slide
    display flex
    flex-direction row
    justify-content space-between
    flex-wrap wrap
  .msite_shop_list
    padding 15px 10px 0
    top-border-1px(#ccc)
    .shop_header
      .icon-more,
      .shop_header_title
        color #b4b4b4
        font-size 12px
</style>
