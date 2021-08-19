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

### 按需加载
```bash
# 通过components.json配置要打包出去的组件
# webpack.prod.js配置多入口，最终打包出去多个组件
```

### 样式分离
#### 源码theme-chalk目录中存放所有组件的样式
```
样式均加了前缀dde-
配置见mixins文件夹下的mixins.scss文件
@import "config.scss";
@mixin b($block){
    $B: $namespace + '-' + $block !global;
    .#{$B}{
        @content;
    }
}

```

### 自定义字体
```
使用iconfont字体图标库，https://www.iconfont.cn/
设置自定义图标dde-icons，详细见样式icon.scss
使用时字体图标均加dde-前缀
```

### 调试npm
```bash
# 组件库的项目中输入指令： npm link
# 测试的项目中输入指令： npm link dd-editor-vue
```

### 解决打包后的eslint报错
```
"lint": "eslint --fix --ext .js,.vue",
```