<template>
  <div v-if="loading">
    <v-progress-linear indeterminate/>
  </div>
  <error-text v-else-if="errors.length" :error="errors[0]"/>
  <slot v-else/>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator";
import ErrorText from "@/vue/helpers/error-text.vue";

@Component({
  components: {ErrorText}
})
export default class LoadingSuspense extends Vue {
  @Prop()
  errors!: string[];

  @Prop()
  loading!: boolean;
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
.spinner
  @include lds-spinner(40px, "Loading", true, $color-blue)
</style>
