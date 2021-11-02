import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import DDEditor from '../lib/dd-editor-common.js'
import DDEditor from '../packages/index.js'
// import {  ddTreenode } from '../lib'
import 'element-ui/lib/theme-chalk/index.css';
import '../lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(DDEditor)

new Vue({
    render: h => h(App)
}).$mount('#root')