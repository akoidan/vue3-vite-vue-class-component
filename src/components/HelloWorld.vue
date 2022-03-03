<template>
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

// Define the component in class-style
@Options({})
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
