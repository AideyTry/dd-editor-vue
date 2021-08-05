/*
 * @Author: Aiden
 * @Date: 2021-08-05 13:37:38
 * @LastEditTime: 2021-08-05 13:47:50
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import ddTreenode from './index.vue'

ddTreenode.install = (Vue) => {
    Vue.component(ddTreenode.name, ddTreenode)
}

export default ddTreenode