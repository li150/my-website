import axios from "axios";

export const getGeoip = async () => {
  const res = await axios.get("https://api.ip.sb/geoip");
  return res.data.country_code;
};

/**
 * 判断是在服务端渲染环境中
 */
export const isSSR = !import.meta.env.SSR;

/**
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns 返回一个指定范围的随机数
 */

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min; //不含最大值，含最小值
}
