import createApp from "./main";
import { isSSR } from "./utils/utils";

const { app, router, pinia } = createApp();

router.isReady().then(() => {
  app.mount("#app");
});
