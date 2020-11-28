<template>
  <h1>Home Page</h1>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name : 'Home',
  setup() {
    onMounted(() => {
      console.log('component is mounted!')
    })
  }
}
</script>

<style scoped>
h1 {
  display: block;
  margin-top: 10px;
}
</style>