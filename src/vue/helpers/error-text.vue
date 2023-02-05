<template>
  <div class="error" v-show="error">
    {{ error }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator";

@Component({
  name: "ErrorText",
})
export default class ErrorText extends Vue {
  @Prop() error!: string;
}
</script>

<style lang="sass" scoped>
.error
  color: $color-red
  letter-spacing: 0.4px
  font-size: 14px

img
  position: relative
  top: 3px
  width: 20px
</style>
