<!--
 * @Author: Aiden
 * @Date: 2021-08-03 20:39:03
 * @LastEditTime: 2021-08-12 13:39:05
 * @LastEditors: Aiden
 * @Description: 
-->
<template>
  <dd-treenode
    :data-tree="treeData"
    :render-content="renderContent"
    editor-enable
    toolbar
  />
</template>
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

<style lang="scss" scoped>
</style>
