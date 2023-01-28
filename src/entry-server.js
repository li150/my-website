import createApp from "./main";
import { renderToString } from "@vue/server-renderer";
import devalue from "@nuxt/devalue";
import { renderHeadToString } from "@vueuse/head";
/**
 * 返回生成html字符及pinia数据
 */
export async function render(url, manifest) {
  const { app, router, initialState, head } = createApp();
  // 先加载一个页面
  router.push(url);
  await router.isReady();
  // 定义数据
  const ctx = {};
  // 获取页面的HTML字符串
  const html = await renderToString(app, ctx);

  //
  const { headTags } = await renderHeadToString(head);

  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);

  // https://pinia.vuejs.org/ssr/#state-hydration
  const piniaState = devalue(initialState.pinia);

  return [html, preloadLinks, piniaState, headTags];
}

function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    // TODO
    return "";
  }
}
