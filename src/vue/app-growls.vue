<template>
  <div class="growls">
    <div v-for="growl in growls" :key="`${growl.id}`" :class="growl.type">
      {{ growl.text }}
      <span @click="close(growl)">x</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {GrowlsStoreMixin, GrowlsState} from "@/ts/store/growl/growl-store-instance";
import {mixins} from "vue-class-component";
import {Growl} from "@/ts/types/model/growl-store.type";

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
.growl-success
  background-color: $color-green
  box-shadow: 3px 3px 3px rgba($color-green, 0.5)

.growl-info
  background-color: $color-blue
  box-shadow: 3px 3px 3px rgba($color-blue, 0.5)

.growl-error
  background-color: $color-red
  box-shadow: 3px 3px 3px rgba($color-red, 0.5)

span
  cursor: pointer
  margin-left: 10px

.growls
  position: fixed
  right: 20px
  top: 20px

  > *
    color: $color-white
    padding: 20px
    border-radius: 5px
    margin-bottom: 5px
</style>
