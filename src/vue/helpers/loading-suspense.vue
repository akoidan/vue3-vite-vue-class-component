<template>
  <div v-if="loading" class="spinner"/>
  <error-text v-else-if="error" :error="error"/>
  <slot v-else/>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator";
import ErrorText from "@/vue/atoms/error-text.vue";

@Component({
  name: "LoadingSuspense",
  components: {ErrorText}
})
export default class LoadingSuspense extends Vue {
  @Prop()
  error!: string;

  @Prop()
  loading!: boolean;
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
.spinner
  @include lds-spinner(40px, "Loading", true, $color-primary-hc-blue-100)
</style>
