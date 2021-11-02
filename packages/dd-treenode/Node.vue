<template>
  <div class="dde-node-wraper">
    <div
      v-for="item in dataTree"
      :key="item.id"
      :class="[
        isChild ? 'dde-tree-childNodes-row' : 'dde-tree',
        { 'dde-tree-multiply-node': dataTree.length > 1 },
      ]"
    >
      <span
        style="cursor: pointer"
        :class="{
          'dde-tree-node': true,
          'dde-tree-leaf-node': item.children.length <= 0,
        }"
      >
        <i
          v-if="editorEnable"
          class="dde-icon-clear"
          style="cursor: pointer; margin-right: 5px; font-size: 14px"
          @click="onDelete(item)"
        />
        <!-- <span>title{{item.name}}</span> -->
        <node-content
          v-if="editorEnable"
          :node="item"
          :use-undo-redo="useUndoRedo"
        />
        <span v-else>{{ item.name }}</span>
        <i
          v-if="editorEnable"
          class="dde-icon-add"
          style="cursor: pointer; margin-left: 5px; font-size: 14px"
          @click="onAdd(item)"
        />
      </span>
      <div
        v-if="item.children.length > 0"
        class="dde-tree-childNodes"
      >
        <node
          :data-tree="item.children"
          :is-child="true"
          :render-content="renderContent"
          :editor-enable="editorEnable"
          :use-undo-redo="useUndoRedo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { treeToList } from "./utils/util";
import { RemoveNode, AddNode, UpdateNode } from "./utils/shared";
export default {
  name: "Node",
  components: {
    NodeContent: {
      props: {
        node: {
          require: true,
        },
       useUndoRedo: {
          require: true,
        },
      },
      render() {
        return this.$parent.renderContent(this.node, this.useUndoRedo, UpdateNode);
      },
    },
  },
  props: {
    dataTree: {
      type: Array,
      default: () => [],
    },
    isChild: {
      type: Boolean,
      default: false,
    },
    renderContent: Function,
    editorEnable: {
      type: Boolean,
      default: false,
    },
    useUndoRedo: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {},
  methods: {
    onAdd(info) {
      console.log("dataTree===", this.dataTree);
      const singleData = {
        id: uuidv4().replace(/-/g, ""),
        parentId: info.id,
        name: "",
      };
      // 执行命令行，添加节点
      this.useUndoRedo.do(new AddNode({ parent: info, data: singleData }));
    },
    onDelete(info) {
      // 执行命令行删除节点
      const finalInfoList = treeToList(this.useUndoRedo.data);
      let finalInfo = null
      for (let i = 0; i < finalInfoList.length; i++) {
        if (finalInfoList[i].id === info.parentId) {
          finalInfo = finalInfoList[i]
          finalInfoList.splice(i, 1);
        }
      }
      this.useUndoRedo.do(new RemoveNode({ parent: finalInfo, target: info }));
    },
  },
};
</script>

