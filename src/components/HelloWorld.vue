<template>
<div>
  <div>{{ count }}</div>
  <button @click="decrement">-1</button>
</div>
</template>

<script lang="ts">
import {Vue} from '../vue-class-component/vue';
import {Options} from '../vue-class-component'
@Options({})
export default class Counter extends Vue {
  count = 100

  decrement() {
    this.count --
  }
}
</script>
<style scoped>
 div {
   background-color: blue;
 }
</style>
