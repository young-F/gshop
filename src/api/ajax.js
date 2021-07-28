/**
 * ajax 请求函数模块
 * 返回值：promise对象（异步返回的是：response.data）
 */
import axios from "axios";
// export default function ajax(url, data = {}, type = "GET") {
//   return new Promise(function(resolve, reject) {
//     // 执行异步 ajax请求
//     let promise;
//     if (type === "GET") {
//       //准备url query参数数据
//       let dataStr = ""; // 数据拼接字符串
//       Object.keys(data).forEach(key => {
//         dataStr += key + "=" + data[key] + "&";
//       });
//       if (dataStr != "") {
//         dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
//         url = url + "?" + dataStr;
//       }
//       // 发送get请求
//       promise = axios.get(url);
//     } else {
//       // 发送post请求
//       promise = axios.post(url, data);
//     }
//     promise
//       .then(function(response) {
//         // 成功了调用resolve
//         resolve(response.data);
//       })
//       .catch(function(error) {
//         // 失败了调用reject
//         reject(error);
//       });
//   });
// }

export default (url, data = {}, type = "GET") => {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      // query参数拼接

      let paramStr = "";
      Object.keys(data).forEach(key => {
        // paramStr += `${key} + '=' ${data[key]} + '&'`;
        paramStr += key + "=" + data[key] + "&";
      });

      if (paramStr != "") {
        paramStr = paramStr.substring(0, paramStr.lastIndexOf("&"));
        url = `${url}?${paramStr}`;
      }

      promise = axios.get(url);
    } else {
      // 返送post请求 参数是对象不用处理
      promise = axios.post(url, data);
    }

    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
