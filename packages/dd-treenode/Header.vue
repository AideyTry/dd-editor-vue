<template>
  <div class="dde-header-wraper">
    <i
      :class="{
        'dde-toolbar-icon': true,
        'dde-icon-undo': true,
        'dde-toolbar-icon-default': useShare.stack.undoStack.count <= 0,
      }"
      @click="undo"
    />
    <i
      :class="{
        'dde-toolbar-icon': true,
        'dde-icon-redo': true,
        'dde-toolbar-icon-default': useShare.stack.redoStack.count <= 0,
      }"
      @click="redo"
    />
    <i
      class="dde-toolbar-icon dde-icon-zoomin"
      @click="onZoomIn"
    />
    <i
      class="dde-toolbar-icon dde-icon-zoomout"
      @click="onZoomOut"
    />
  </div>
</template>

<script>
import { useDataShare, Observer } from "./utils/shared";
export default {
  name: "TreeHeader",
  data() {
    return {
      useShare: useDataShare,
      scaleCount: 1,
    };
  },
  mounted() {
    Observer.subscribe("tree", () => {
      this.useShare = useDataShare;
    });
  },
  methods: {
    setZoom(ref, size) {
      ref.$el.setAttribute(
        "style",
        `transform:scale(${size});transform-origin:left top;`
      );
    },
    changeSize(action) {
      switch (action.type) {
        case "increment":
          const counts = this.scaleCount + 0.1;
          this.setZoom(action.ref, counts);
          this.scaleCount = counts;
          break;
        case "decrement":
          if(this.scaleCount <= 0.8){
            return false
          }
          const dCount = this.scaleCount - 0.1;
          if (dCount <= 0.1) {
            this.scaleCount = 0.1;
          }
          this.setZoom(action.ref, dCount);
          this.scaleCount = dCount;
          break;
        default:
          throw new Error();
      }
    },
    onZoomIn() {
      this.changeSize({ type: "increment", ref: this.$parent.$children[1] });
    },
    onZoomOut() {
      this.changeSize({ type: "decrement", ref: this.$parent.$children[1] });
    },
    undo() {
      useDataShare.excute({ command: "undo" });
    },
    redo() {
      useDataShare.excute({ command: "redo" });
    },
  },
};
</script>