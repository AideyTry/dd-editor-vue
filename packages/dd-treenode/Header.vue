<template>
  <div class="header-wraper">
    <i
      :class="{
        'toolbar-icon': true,
        'dde-icon-undo': true,
        'toolbar-icon-default': useUndoRedo.undoStack && useUndoRedo.undoStack.count <= 0,
      }"
      @click="undo"
    />
    <i
      :class="{
        'toolbar-icon': true,
        'dde-icon-redo': true,
        'toolbar-icon-default': useUndoRedo.undoStack && useUndoRedo.redoStack.count <= 0,
      }"
      @click="redo"
    />
    <i
      class="toolbar-icon dde-icon-zoomin"
      @click="onZoomIn"
    />
    <i
      class="toolbar-icon dde-icon-zoomout"
      @click="onZoomOut"
    />
  </div>
</template>

<script>
export default {
  name: "TreeHeader",
  props: {
        useUndoRedo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      scaleCount: 1,
    };
  },
  mounted() {
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
          // eslint-disable-next-line no-case-declarations
          const counts = this.scaleCount + 0.1;
          this.setZoom(action.ref, counts);
          this.scaleCount = counts;
          break;
        case "decrement":
          // eslint-disable-next-line no-case-declarations
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
      this.useUndoRedo.undo()
    },
    redo() {
      this.useUndoRedo.redo()
    },
  },
};
</script>

<style scoped>
.header-wraper {
  display: flex;
  align-items: center;
  height: 45px;
  /* line-height: 45px; */
  background-color: #eee;
}
.toolbar-icon {
  margin-left: 10px;
  display: flex;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.toolbar-icon-default {
  opacity: 0.5;
}
</style>