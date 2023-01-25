import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import serveStatic from "serve-static";
import { render as proRender } from "./dist/server/entry-server.js";
// const express = require("express");
// const { createServer: createViteServer } = require("vite");
// const fs = require("fs");
// const path = require("path");
// const { fileURLToPath } = require("url");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
  // 并让上级服务器接管控制
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  if (process.env.NODE_ENV === "production") {
    app.use(serveStatic(path.resolve(__dirname, "dist/client"), { index: false }));
  } else {
    // 使用 vite 的 Connect 实例作为中间件
    // 如果你使用了自己的 express 路由（express.Router()），你应该使用 router.use
    app.use(vite.middlewares);
  }

  app.use("*", async (req, res, next) => {
    // 服务 index.html - 下面我们来处理这个问题
    const url = req.originalUrl;
    let template, html_, pinia_, preloadLinks_;
    try {
      // 1. 读取 index.html
      if (process.env.NODE_ENV === "production") {
        // ------生产环境------
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);

        const [html, preloadLinks, piniaState] = await proRender(url, {});
        html_ = html;
        preloadLinks_ = preloadLinks;
        pinia_ = piniaState;
      } else {
        // ------开发环境------

        // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
        //    同时也会从 Vite 插件应用 HTML 转换。
        //    例如：@vitejs/plugin-react 中的 global preambles
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
        //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
        //    并提供类似 HMR 的根据情况随时失效。
        const { render } = await vite.ssrLoadModule("/src/entry-server.js");
        // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
        //    函数调用了适当的 SSR 框架 API。
        //    例如 ReactDOMServer.renderToString()
        const [html, preloadLinks, piniaState] = await render(url, {});
        html_ = html;
        preloadLinks_ = preloadLinks;
        pinia_ = piniaState;
      }

      // console.log("html:", html);
      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const appHtml = template
        .replace(`<!--ssr-outlet-->`, html_)
        .replace(`<!--preload-links-->`, preloadLinks_)
        .replace(`<!--pinia-state-->`, pinia_);

      // 6. 返回渲染后的 HTML。
      res.status(200).set({ "Content-Type": "text/html" }).end(appHtml);
    } catch (e) {
      // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
      // 你的实际源码中。
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(3100, () => {
    process.env.NODE_ENV === "production"
      ? console.log("生产环境---启动了")
      : console.log("开发环境---启动了");
  });
}

createServer();
