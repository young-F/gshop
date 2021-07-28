<template>
  <div class="shop">
    <nav class="shop-nav" :style="{ backgroundImage: `url(${info.baseImg})` }">
      <a href="" class="back" @click="$router.back()">
        <i class="iconfont icon-arrowLeft"></i>
      </a>
    </nav>

    <div class="shop_content">
      <img class="content-image" :src="info.avatar" alt="" />
      <div class="header-content" @click="toggleShopShow">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{ info.name }}</span>
          <i class="content-icon"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{ info.score }}</span>
          <span class="shop-message-detail">月销{{ info.sellCount }}单</span>
          <span class="shop-message-detail">
            {{ info.description }}
            <span>约{{ info.deliveryTime }}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{ info.distance }}</span>
        </div>
      </div>
    </div>
    <div
      class="shop-header-discounts"
      v-if="info.supports"
      @click="toggleSupportShow"
    >
      <div class="discounts-left">
        <div class="activity" :class="supportClasses[info.supports[0].type]">
          <span class="content-tag">
            <span class="mini-tag">{{ info.supports[0].name }}</span>
          </span>
          <span class="activity-content ellipsis">{{
            info.supports[0].content
          }}</span>
        </div>
      </div>
      <div class="discounts-right">{{ info.supports[0].length }}个优惠</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  mounted() {
    this.$store.dispatch("getShopInfo");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
