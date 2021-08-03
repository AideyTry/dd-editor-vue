<!--
 * @Author: Aiden
 * @Date: 2021-08-03 20:39:03
 * @LastEditTime: 2021-08-03 21:29:09
 * @LastEditors: Aiden
 * @Description: 
-->
<template>
    <div class="wrapper">
        <node :dataTree="dataTree"></node>
    </div>
</template>
<script>
import datas from './data.json'
import Node from '@/components/Node'
export default {
  name: "App",
  props: {
      dataTree: {
          type: Array,
          default: () => datas
      }
  },
  components: {
      Node,
  },
  mounted(){
      console.log('data=========', datas)
      console.log('dataTree===========', this.dataTree)
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
}
</style>
