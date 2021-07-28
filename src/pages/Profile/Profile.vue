<template>
  <section class="profile">
    <HeaderTop title="个人中心"></HeaderTop>
    <div class="profile-number">
      <a href="javascript:;" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-geren"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="use-icon">
              <i class="iconfont icon-tel"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-arrowRight"></i>
        </span>
      </a>
    </div>
    <div class="profile_info_data">
      <ul class="info_data_list">
        <li>
          <a href="javascript:;" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom">我的余额</span>
          </a>
        </li>
        <li>
          <a href="javascript:;" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
        </li>
        <li>
          <a href="javascript:;" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="profile_my_order"></div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";

export default {
  name: "Profile",
  props: {},
  components: { HeaderTop }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.profile
  .profile-number
    height calc(100vh - 95px)
    margin-top 45px
</style>
