## 基于Vue组件库开发流程
### 目录结构
- build：存放了打包相关的配置文件
- docs: 存放markdown说明文档
- examples：组件相关示例 demo
- lib: 构建后生成的文件，发布到npm包
- packages：组件源码
- test：单元测试相关文件
- LICENSE：开源许可证，dd-editor-vue使用的是MIT协议

### Vue组件的构建
#### 组件注册
**vue中组件的安装要使用Vue.use(install),install是向外暴漏的一个方法，里面调用Vue.component(component.name, component)完成组件的注册；具体的源码如下：**
```
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
    version
}
```

### 样式分离
