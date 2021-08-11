/*
 * @Author: Aiden
 * @Date: 2021-08-05 12:10:09
 * @LastEditTime: 2021-08-10 20:48:35
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import ddTreenode from './dd-treenode'
const version = '0.0.1'

const components = [ddTreenode]

const install = (Vue) => {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    ...components,
    version
}
