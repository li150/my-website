import createApp from "./main";
import { renderToString } from "@vue/server-renderer";
/**
 * 返回生成html字符及pinia数据
 */
export async function render(url) {
  const { app, router, pinia } = createApp();

  // 先加载一个页面
  router.push(url);
  await router.isReady();
  // 定义数据
  const ctx = {};
  // 获取页面的HTML字符串
  const html = await renderToString(app, ctx);

  return { html, piniaState: JSON.stringify(pinia.state.value) };
}
