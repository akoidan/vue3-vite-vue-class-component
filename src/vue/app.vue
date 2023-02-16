<template>
  <v-app>
    <router-view/>
    <app-growls/>
  </v-app>
</template>
<script lang="ts">
import {Component} from "vue-property-decorator";
import AppGrowls from "@/vue/app-growls.vue";
import {mixins} from "vue-class-component";
import {DefaultStoreMixin} from "@/ts/store/default/default-store-instance";

@Component({
  components: {AppGrowls},
})
export default class App extends mixins(DefaultStoreMixin) {
}
</script>
<style lang="sass">
@import "@/assets/sass/common.sass"
body
  margin: 0

</style>
