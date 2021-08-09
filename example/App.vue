<!--
 * @Author: Aiden
 * @Date: 2021-08-03 20:39:03
 * @LastEditTime: 2021-08-09 12:19:51
 * @LastEditors: Aiden
 * @Description: 
-->
<template>
  <dd-treenode :render-content="renderContent"></dd-treenode>
</template>
<script>
export default {
  name: "App",
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
