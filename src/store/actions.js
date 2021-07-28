/**
 * 通过mutations间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from "./mutation-types";
import {
  reqAddress,
  reqFoodCategeory,
  reqShops,
  reqShopInfo,
  reqShopRatings
} from "../api";

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    // 发送异步ajax请求 latitude：经度，longitude：维度
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAddress(geohash);
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address });
    }
  },
  // 异步获取食品分类列表
  async getCategorys({ commit, state }) {
    // 发送异步ajax请求
    const result = await reqFoodCategeory();
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, { categorys });
    }
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    // 发送异步ajax请求
    const { longitude, latitude } = state;
    const result = await reqShops(longitude, latitude);
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  },
  // 异步获取商家信息
  async getShopInfo({ commit }, cb) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      info.score = 3.5;
      commit(RECEIVE_INFO, { info });
      cb && cb();
    }
  },
  // 异步获取商家评分列表
  async getShopRatings({ commit }, cb) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
      cb && cb();
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({ commit }, cb) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
      // 如果组件中传递了接收信息的回到函数，数据更新后，调用回调通知调用的组件
      cb && cb();
    }
  }
};
