import Vue from 'vue'
// import App from './App.vue'
import App from './App' // webpack.config.js에서 .vue, .js 확장자 생략 옵션 설정함
import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
