import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./",
  plugins: [
    vue(),
    // ElementPlus({ useSource: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, //清除console
        drop_debugger: true, //清除debugger
        dead_code: true,
      },
    },
  },
  ssr: {
    noExternal: ["element-plus"], //ssr打包排除一些第三方库依赖化
  },
  server: {
    port: 3000,
  },
});
