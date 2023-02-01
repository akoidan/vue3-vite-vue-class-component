<template>
<div>
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

let count = ref(0);
function increment() {
  debugger
  count.value++;
}
</script>
<style scoped>
 div {
   background-color: green;
 }
</style>
