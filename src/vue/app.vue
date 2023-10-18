<template>
  <v-app>
    <router-view/>
    <app-growls/>
  </v-app>
</template>
<script lang="ts">
import {
  Component,
  Vue,
} from "vue-property-decorator";
import AppGrowls from "@/vue/molecules/app-growls.vue";

@Component({
  components: {AppGrowls},
})
export default class App extends Vue {
}
</script>
<style lang="sass">
@import "@/assets/sass/common.sass"
body
  margin: 3px

</style>
