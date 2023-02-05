<template>
  <div>
    Main fucking page
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
} from "vue-property-decorator";
import {Vue} from "vue-class-component";

@Component({
})
export default class MainPage extends Vue {
  @Prop()
  public step!: number;

  @Prop()
  public title!: string;
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>


</style>
