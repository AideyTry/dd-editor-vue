<template>
  <div>
    <div v-for="(item) in dataTree" :key="item.id">
      <span>
        <span>title{{item.name}}</span>
      </span>
      <div v-if="item.children">
        <node :dataTree="item.children"></node>
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
      default: function(){return []}
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
