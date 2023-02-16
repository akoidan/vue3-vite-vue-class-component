<template>
  <router-link :to="link">
    <v-list-item link>
      <template #prepend>
        <v-icon :icon="icon"/>
      </template>

      <v-list-item-title>{{ text }}</v-list-item-title>
    </v-list-item>
  </router-link>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "vue-property-decorator";

@Component({})
export default class NavItem extends Vue {
  @Prop()
  link!: string;

  @Prop()
  icon!: string;

  @Prop()
  text!: string;
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
</style>
