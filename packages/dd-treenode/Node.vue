<template>
  <div class="dde-node-wraper">
    <div v-for="(item) in dataTree" :key="item.id" :class="[isChild ? 'dde-tree-childNodes-row' : 'dde-tree', { 'dde-tree-multiply-node': dataTree.length > 1 }]">
      <span style="cursor: pointer" :class="{'dde-tree-node': true,'dde-tree-leaf-node': !item.children}">
        <span class="iconfont icon-clear" @click="onDelete(item)"></span>
        <!-- <span>title{{item.name}}</span> -->
        <node-content :node="item"></node-content>
        <span class="iconfont icon-add" style="cursor: pointer" @click="onAdd(item)"></span>
      </span>
      <div v-if="item.children" class="dde-tree-childNodes">
        <node :dataTree="item.children" :isChild="true" :render-content="renderContent"></node>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
import { useDataShare, useUpdated } from './utils/shared'
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
    },
    renderContent: Function
  },
  components: {
    NodeContent: {
    props: {
      node: {
        require: true
      }
    },
    render() {
        return this.$parent.renderContent(this.node, useUpdated)
      }
    }
  },
  mounted(){
  },
  methods: {
    onAdd(info){
    const singleData = {
      id: uuidv4().replace(/-/g, ""),
      parentId: info.id,
      name: uuidv4().replace(/-/g, ""),
    };
    // 执行命令行，添加节点
    useDataShare.excute({ command: "add", param: singleData });
    },
    onDelete(info){
    // 执行命令行删除节点
    useDataShare.excute({ command: "delete", param: info });
    }
  }
}
</script>

