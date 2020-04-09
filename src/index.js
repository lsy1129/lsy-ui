import * as components from "./components";
require('./assets/index.scss');
var VuePlugin = {};
VuePlugin.install = function(Vue) {
  for (let component in components) {
    Vue.component("lsy" + component, components[component]);
  }
};
export default VuePlugin;
