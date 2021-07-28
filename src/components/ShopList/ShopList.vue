<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <li
        class="shop_li border-1px"
        v-for="(shop, index) in shops"
        :key="index"
      >
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img :src="baseImgUrl + shop.image_path" class="shop_img" />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              {{ shop.name }}
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <!-- <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px">
        <a href="javascript:;" class="link_to_detail">
          <div class="shop_left">
            <img
              src="https://p0.meituan.net/waimaipoi/67fd0cec4dc7174e154334f2a6b8c40435039.jpg@228h"
              class="shop_img"
            />
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              达美乐比萨（回龙观店）
            </div>
            <div class="stars-container">
              <div>
                <div class="stars">
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                  <i
                    class="iconfont icon-star"
                    style="transform: scale(0.833333);"
                  ></i>
                </div>
                <span class="score">4.9</span
                ><span class="mtsi-num">月售3000+</span>
              </div>
              <div class="time_and_distance">
                <span class="_3fbi7-DiA-2q0ecYl1bi2j mtsi-num">30分钟</span
                ><span
                  class="_3fbi7-DiA-2q0ecYl1bi2j _2vTtS2LuUOARC19vNowA9w mtsi-num"
                  >400m</span
                >
              </div>
            </div>
            <div class="distribution-cost">
              <span class="mtsi-num">起送 ¥20</span
              ><span class="mtsi-num">配送 ¥4</span
              ><span class="mtsi-num">人均 ¥38</span>
            </div>
          </div>
        </a>
      </li> -->
    </ul>
    <ul v-else>
      <li v-for="(bg, index) in 10" :key="index">
        <img src="./images/shop_back.svg" alt="back" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopList",
  data() {
    return {
      baseImgUrl: "http://cangdu.org:8001/img/"
    };
  },
  computed: {
    ...mapState(["shops"])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop_container
  font-size 11px
  min-height 600px
  min-height calc(100vh - 140px)
  padding-bottom 45px
  .shop_list
    background #fff
    overflow hidden
.link_to_detail
  padding 0 10px
  flex-direction row
  display flex
  text-decoration none
  box-sizing border-box
  margin-bottom 20px
  margin-top 10px
  position relative
.shop_left
  width 76px
  height 57px
  position relative
  margin-right 8px
  flex-shrink 0
  border-radius 2px
  overflow hidden
  .shop_img
    display block
    width 100%
.shop_right
  flex 1 0
  min-width 0
  .shop_detail_header
    font-size 16px
    color #333
    line-height 1.4
    white-space nowrap
    width 80%
    overflow hidden
    text-overflow ellipsis
    font-weight 600
.stars-container
  margin-top 4px
  display flex
  .stars
    height 10px
    display inline-block
    font-size 0
  .score
    font-size 11px
    color #333
    line-height 1.4
    margin-left 4px
  .mtsi-num
    font-size 11px
    color #333
    line-height 1.4
    margin-left 10px
  .icon-star
    font-size 12px
    color #efb336
.time_and_distance
  flex 1 0
  text-align right
.distribution-cost
  font-size 11px
  color #333
  line-height 1.4
  margin-top 4px
  .mtsi-num
    &:not(:first-child):before
      content ""
      display inline-block
      margin 0 3px
      height 6px
      width 1px
      background #ccc
</style>
