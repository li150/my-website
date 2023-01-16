import createApp from "./main";
import { isSSR } from "./utils/utils";

const { app, router, pinia } = createApp();

router.isReady().then(() => {
  if (isSSR && window && window.__INITIAL_STATE__) {
    console.log(window.__INITIAL_STATE__, ":window.__INITIAL_STATE__");
    pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
  }
  app.mount("#app");
});
