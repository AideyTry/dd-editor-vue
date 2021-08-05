<template>
    <div class="wrapper">
        <node :dataTree="treeData" :render-content="renderContent"></node>
    </div>
</template>
<script>
import datas from './data.json'
import Node from './Node.vue'
import { useDataShare, Observer } from './utils/shared'
export default {
  name: "dd-treenode",
  props: {
      dataTree: {
          type: Array,
          default: () => datas
      },
      renderContent: Function,
  },
  data(){
      return {
          treeData: this.dataTree
      }
  },
  components: {
      Node,
  },
  mounted(){
      useDataShare.excute({command: 'init', param: this.dataTree})
          // 订阅tree的数据结构是否发生变化，如果发生了变化就及时更新整个树。
    Observer.subscribe("tree", e => {
      this.treeData = e.args.msg
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
}
</style>
