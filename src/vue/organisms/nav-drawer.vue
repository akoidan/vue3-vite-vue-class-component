<template>
  <v-navigation-drawer :model-value="modelValue" @update:modelValue="updateValue">
    <v-sheet
      color="grey-lighten-4"
      class="pa-4"
    >
      <v-avatar
        class="mb-4"
        color="grey-darken-1"
        size="64"
        :image="profile.image"
      />

      <div>{{ profile?.email }}</div>
    </v-sheet>

    <v-list>
      <router-link :to="$pagesPath.main.home">
        <v-list-item link>
          <template #prepend>
            <v-icon icon="mdi-view-dashboard"/>
          </template>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link :to="$pagesPath.main.users">
        <v-list-item link>
          <template #prepend>
            <v-icon icon="mdi-account-group"/>
          </template>

          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue,
} from "vue-property-decorator";
import {DefaultState} from "@/ts/store/default/default-store-instance";
import type {AuthResponseDTO} from "@/ts/types/dto/auth.dto";

@Component({})
export default class NavDrawer extends Vue {
  @Prop()
  modelValue!: boolean;

  @DefaultState
  profile!: AuthResponseDTO;

  @Emit("update:modelValue")
  updateValue(date: boolean): boolean {
    return date;
  }

}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>

</style>
