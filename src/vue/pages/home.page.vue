<template>
  <div class="home-page">
    <img src="@/assets/img/vue.svg"/>
    <h1>Welcome to Vue 3 class component!</h1>
    <p>
      For a guide how to get started with this project,<br/> check out the <a href="https://github.com/akoidan/vue3-vite-vue-class-component">documentation</a>
    </p>
    <p>
      For API and authorization demo <a href="https://dummyjson.com/docs/auth">dummyJSON</a> was used
    </p>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {Vue} from "vue-class-component";

@Component({
})
export default class HomePage extends Vue {

}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
.home-page
  margin: auto
  text-align: center

img
  height: 100px

p
  margin-top: 16px

h1
  color: $color-green

a
  color: $color-green
  text-decoration: underline
</style>
