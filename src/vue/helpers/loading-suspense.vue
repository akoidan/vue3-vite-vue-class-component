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
import ErrorText from "@/vue/helpers/error-text.vue";

@Component({
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
  @include lds-spinner(40px, "Loading", true, $color-blue)
</style>
