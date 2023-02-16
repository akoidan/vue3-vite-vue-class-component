<template>
  <div v-show="error" class="error">
    <v-alert type="error" icon="$warning">
      {{ error }}
    </v-alert>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator";

@Component({
})
export default class ErrorText extends Vue {
  @Prop() error!: string;
}
</script>

<style lang="sass" scoped>
</style>
