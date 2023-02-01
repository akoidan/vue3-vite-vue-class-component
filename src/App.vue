<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world/>
  <hey-world/>
  <comp-world/>
</template>

<script lang="ts">

import HelloWorld from './components/HelloWorld.vue'
import HeyWorld from './components/HeyWorld.vue'
import CompWorld from './components/CompWorld.vue'
import {Vue} from './vue-class-component/vue';
import {Options} from './vue-class-component'

// Define the component in class-style
@Options({
  components: {
    HelloWorld,
    HeyWorld,
    CompWorld,
  }
})
export default class App extends Vue {

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
