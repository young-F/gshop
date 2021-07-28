/*
  各个请求接口的模块
*/
import ajax from "./ajax";
// const BASE_URL = "http://localhost:4000"
const BASE_URL = "/api";
// 1.根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`);
// 2.获取食品分类列表
export const reqFoodCategeory = () => ajax(BASE_URL + "/index_categeory");
// 3.根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) =>
  ajax(BASE_URL + "/shops", { longitude, latitude });
// 4.根据经纬度和关键字搜索获取商铺列表
// 5.获取一次性验证码
// 6.用户名密码登录
// 7.发送短信验证码
// 8.手机号验验证码登录
// 9.根据会话获取用户信息
// 10.用户登录

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax("/info");

/**
 * 获取商家信息
 */
export const reqShopRatings = () => ajax("/ratings");

/**
 * 获取商家信息
 */
export const reqShopGoods = () => ajax("/goods");
