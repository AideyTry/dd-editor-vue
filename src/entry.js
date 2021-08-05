import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import ddTreenode from '../packages/dd-treenode'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ddTreenode)

Vue.use(ElementUI)

new Vue({
    render: h => h(App)
}).$mount('#root')