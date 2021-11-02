<template>
  <div class="wrapper">
    <div
      v-if="toolbar"
      style="margin-bottom: 20px"
    >
      <tree-header :use-undo-redo="useUndoRedo" />
    </div>
    <node
      :data-tree="dataTree"
      :render-content="renderContent"
      :editor-enable="editorEnable"
      :use-undo-redo="useUndoRedo"
    />
  </div>
</template>
<script>
// import datas from "./data.json";
import Node from "./Node.vue";
import treeHeader from "./Header.vue";
import { UndoRedoWrapper } from "./utils/shared";
export default {
  name: "DdTreenode",
  componentName: "ddTreenode",
  components: {
    Node,
    treeHeader,
  },
  props: {
    dataTree: {
      type: Array,
      default: () => [],
    },
    renderContent: Function,
    editorEnable: {
      type: Boolean,
      default: false,
    },
    toolbar: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      useUndoRedo: {}
    };
  },
  mounted() {
    this.useUndoRedo = new UndoRedoWrapper()
    console.log('this.useUndoRedo===', this.useUndoRedo)
    this.useUndoRedo.save('data', this.dataTree)
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
