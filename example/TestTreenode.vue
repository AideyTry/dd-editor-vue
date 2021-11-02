
<template>
  <div style="overflow: auto; height: 400px">
    <div style="margin-bottom: 20px">
      <p>规则引擎树形结构设置公共组件</p>
    </div>
    <dd-treenode
      :data-tree="treeData"
      :render-content="renderContent"
      editor-enable
      toolbar
    />
  </div>
</template>

<script>
export default {
  name: "Treenode",
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
  mounted() {},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
