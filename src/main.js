import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "@/assets/index.scss";
import LsyVue from "./index.js";

Vue.use(LsyVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
