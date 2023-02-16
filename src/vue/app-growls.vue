<template>
  <div class="growls">
    <v-alert
      v-for="growl in growls"
      :key="`${growl.id}`"
      :color="growl.type"
      :type="growl.type"
      :text="growl.text"
      @close="close"
    >
    </v-alert>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {
  GrowlsState,
  GrowlsStoreMixin,
} from "@/ts/store/growl/growl-store-instance";
import {mixins} from "vue-class-component";
import type {Growl} from "@/ts/types/model/growl-store.type";

@Component({})
export default class AppGrowls extends mixins(GrowlsStoreMixin) {
  @GrowlsState
  growls!: Growl[];

  close(growl: Growl): void {
    this.growlsStore.removeGrowl(growl);
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
.growls
  z-index: 11212
  position: fixed
  right: 20px
  top: 20px
</style>
