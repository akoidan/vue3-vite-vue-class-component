<template>
<div>
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    increment() {
      ((this as any).count as number)++;
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style scoped>
 div {
   background-color: red;
 }
</style>
