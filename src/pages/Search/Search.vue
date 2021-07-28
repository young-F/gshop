<template>
  <section class="search">
    <HeaderTop title="搜索" />
    <form action="" class="search_form">
      <input
        type="search"
        name="search"
        placeholder="清输入商家或美食名称"
        class="searchInput"
      />
      <input type="submit" name="submit" class="search_submit" />
    </form>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  name: "Search",
  props: {},
  components: { HeaderTop }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  .search_form
    padding 15px 10px 0
    height calc(100vh - 95px)
    margin-top 45px
    display flex
    justify-content space-between
  .searchInput
    flex 1
    border 1px solid #ccc
    height 32px
    line-height 32px
    border-radius 4px
    padding 0 10px
    margin-right 8px
  .search_submit
    height 34px
    line-height 34px
    background-color #02a774
    outline none
    border none
    color #fff
    border-radius 4px
    padding 0 10px
</style>
