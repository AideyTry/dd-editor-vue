<template>
  <div class="node-wraper">
    <div v-for="(item) in dataTree" :key="item.id" :class="[isChild ? 'tree-childNodes-row' : 'tree-root', { 'multiply-node': dataTree.length > 1 }]">
      <span :class="{'tree-node': true,'leaf-node': !item.children}">
        <span>title{{item.name}}</span>
      </span>
      <div v-if="item.children" class="tree-childNodes">
        <node :dataTree="item.children" :isChild="true"></node>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'node',
  props: {
    dataTree: {
      type: Array,
      default: () => []
    },
    isChild: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.node-wraper{
  .tree-root{
  display: flex;
  align-items: center;
  margin-bottom: 10px !important;
}
.tree-childNodes-row{
  position: relative;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.tree-childNodes-row:last-child{
  margin-bottom: 0;
}
.tree-childNodes-row:before{
  position: absolute;
  left: -30px;
  top: 50%;
  display: block;
  width: 30px;
  height: 1px;
  background-color:#52c41a;
  content: '';
}
.multiply-node::after{
  position: absolute;
  box-sizing: border-box;
  left: -30px;
  top: 0;
  display: block;
  width: 30px;
  height: calc(100% + 10px);
  border: none;
  border-left: 1px solid #52c41a;
  content: '';
}
.multiply-node:first-child:after{
  position: absolute;
  box-sizing: border-box;
  left: -30px;
  top: 50%;
  display: block;
  width: 30px;
  height: calc(100%  - 50% + 10px);
  border: none;
  border-left: 1px solid #52c41a;
  content: '';
}
.multiply-node:last-child:after{
  position: absolute;
  box-sizing: border-box;
  left: -30px;
  display: block;
  width: 30px;
  height: calc(100%  - 50%);
  border: none;
  border-left: 1px solid #52c41a;
  content: '';
}
.tree-node{
  display: flex!important;
  justify-content: center;
  align-items: center;
  position: relative;
  padding:6px 10px;
  background:#fff;
  color:#333;
  min-width:80px;
  font-size: 12px;
  border: 1px solid #52c41a;
}
.tree-node::before {
  position: absolute;
  top: 50%;
  left: -30px;
  display: block;
  width: 30px;
  height: 30px;
  border: none;
  border-top: 1px solid #52c41a;
  content: '';
}
.tree-node:first-child::before {
  position: absolute;
  top: 50%;
  left: -30px;
  display: none;
  width: 30px;
  height: 30px;
  border: none;
  border-top: 1px solid #52c41a;
  content: '';
}
.tree-node:after{
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  display: block;
  width: 30px;
  height: 1px;
  border:none;
  background-color:#52c41a;
  content: '';
}
.leaf-node::after {
  display: none;
}

.tree-childNodes{
  margin-left: 60px;
}
}
</style>
