import axios from "axios";

export const getGeoip = async () => {
  const res = await axios.get("https://api.ip.sb/geoip");
  return res.data.country_code;
};

/**
 * 判断是在服务端渲染环境中
 */
export const isSSR = !import.meta.env.SSR;
