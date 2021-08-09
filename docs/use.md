## 安装

```bash
npm install dd-editor --save
```
或
```bash
yarn add dd-editor-vue
```


## 引入
```js
import Vue from 'vue'
import ddEditor from 'dd-editor-vue'
import 'dd-editor-vue/lib/theme-chalk/index.css'

Vue.use(ddEditor)

new Vue({
    render: h => h(App)
}).$mount('#root')
```

## 使用dd-treenode组件
> html部分
```html
  <dd-treenode :dataTree="treeData" :render-content="renderContent"></dd-treenode>
```

```js
<script>
export default {
  name: "App",
  data() {
    return {
      treeData: [
        {
          id: 0,
          parentId: -1,
          name: "node",
          children: [
            {
              id: 1,
              parentId: 0,
              name: "node1",
              children: [
                { id: 111, parentId: 1, name: "node111" },
                { id: 112, parentId: 1, name: "node112" },
                { id: 113, parentId: 1, name: "node113" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    renderContent(info, useUpdated) {
      let renders = null;
      const newInfo = Object.assign({}, info);

      const onChange = (value) => {
        newInfo.name = value;
        // 数据改变的时候通过useUpdated传递修改的某个节点新数据过去
        useUpdated(newInfo);
      };
      renders = (
        <el-select placeholder="请选择" value={info.name} on-change={onChange}>
          <el-option value={info.name}></el-option>
          <el-option value="item2"></el-option>
          <el-option value="item3"></el-option>
        </el-select>
      );

      return renders;
    },
  },
};
</script>

```

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:----------- | :-----------: | -----------: | :-----------: | -----------:
dataTree          | 传入的初始值       | Array        | ——       | [{"id": 0,"parentId": -1,"name": "node","children": [{"id": 1,"parentId": 0,"name": "node1","children": [{ "id": 111, "parentId": 1, "name": "node111" },{ "id": 112,"parentId": 1, "name": "node112" }]}]}]
render-content     | 自定义节点内容                  | Function(info, useUpdated)       | ——       | -
editorEnable  | 是否为编辑或显示状态   		 | Boolean         | ——       | false

## 事件
事件名称 | 说明 | 参数
:----------- | :-----------: | -----------:
updateDataFn         | updateDataFn接收整个树节点数据更新后的数据       | Function 
