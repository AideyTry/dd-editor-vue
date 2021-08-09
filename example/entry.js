import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import ddTreenode from '../packages/index.js'
import 'element-ui/lib/theme-chalk/index.css';
import '../lib/theme-chalk/index.css'

Vue.use(ddTreenode)

Vue.use(ElementUI)

new Vue({
    render: h => h(App)
}).$mount('#root')