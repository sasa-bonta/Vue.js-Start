import Vue from 'vue'
import App from './App.vue'
// import {SASHA} from "./importTest";

let SASHA = require('./importTest');
console.log(SASHA.SASHA);

(function(test) {
  let SASHA = require('./importTest');
  console.log(test + SASHA.default())
})("hello ")



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
