## 安装

```bash
npm install dd-editor-vue --save
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
  <template>
  <ccm-treenode :dataTree="treeData" :render-content="renderContent" editorEnable toolbar></ccm-treenode>
</template>
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
          index: 0,
          name: "node",
          children: [
            {
              id: 1,
              parentId: 0,
              index: 0,
              name: "node1",
              children: [
                { id: 111, parentId: 1, index:0, name: "node111", children: [] },
                { id: 112, parentId: 1, index: 1,name: "node112", children: [] },
                { id: 113, parentId: 1, index: 2, name: "node113", children: [] },
              ],
            },
          ],
        },
      ],
      oldName: null
    };
  },
  methods: {
    renderContent(info, useUndoRedo, UpdateNode) {
      this.oldName = info.name
      let renders = null;

      const onChange = () => {
        // 数据改变的时候通过useUpdated传递修改的某个节点新数据过去
        useUndoRedo.do(new UpdateNode({
          oldName: this.oldName,
          node: info,
        }))
      };
      const onFocus = (e) => {
        this.oldName = e.target.value
      }
      renders = (
        <el-input vModel={info.name} onInput={onChange} onFocus={onFocus}/>
      );

      return renders;
    },
  },
};
</script>

```

## 属性
参数 | 说明 | 类型  | 默认值
:----------- | :-----------: | -----------: | -----------:
dataTree          | 传入的初始值       | Array            | [{"id": 0,"parentId": -1,"name": "node","children": [{"id": 1,"parentId": 0,"name": "node1","children": [{ "id": 111, "parentId": 1, "name": "node111" },{ "id": 112,"parentId": 1, "name": "node112" }]}]}]
render-content     | 自定义节点内容                  | Function(info, useUndoRedo, UpdateNode)         | -
editorEnable  | 是否为编辑或显示状态   		 | Boolean          | false
toolbar  | 是否展示工具栏  		 | Boolean          | false

## 事件
事件名称 | 说明 | 参数
:----------- | :-----------: | -----------:
useUndoRedo         | useUndoRedo数据更新后可对进行操作       | Object 