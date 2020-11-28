<template>
  <h1>Article</h1>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name : 'Article',
  setup() {
    onMounted(() => {
      console.log('component is mounted!')
    })
  }
}
</script>

<style>

</style>