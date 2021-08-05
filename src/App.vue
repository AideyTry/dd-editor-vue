<!--
 * @Author: Aiden
 * @Date: 2021-08-03 20:39:03
 * @LastEditTime: 2021-08-05 10:56:23
 * @LastEditors: Aiden
 * @Description: 
-->
<template>
    <div class="wrapper">
        <node :dataTree="treeData"></node>
    </div>
</template>
<script>
import datas from './data.json'
import Node from '@/components/Node'
import { useDataShare, Observer } from './utils/shared'
export default {
  name: "App",
  props: {
      dataTree: {
          type: Array,
          default: () => datas
      }
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
