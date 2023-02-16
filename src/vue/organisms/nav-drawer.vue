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
      <nav-item text="Home" :link="$pagesPath.main.home" icon="mdi-view-dashboard"/>
      <nav-item text="Users" :link="$pagesPath.main.users" icon="mdi-account-group"/>
      <nav-item
        text="Logout"
        :link="''"
        icon="mdi-logout"
        @click="logout"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
} from "vue-property-decorator";
import {
  DefaultState,
  DefaultStoreMixin,
} from "@/ts/store/default/default-store-instance";
import type {AuthResponseDTO} from "@/ts/types/dto/auth.dto";
import NavItem from "@/vue/molecules/nav-item.vue";
import {sessionStore} from "@/ts/instances/session-instance";
import {mixins} from "vue-class-component";

@Component({
  components: {NavItem}
})
export default class NavDrawer extends mixins(DefaultStoreMixin) {
  @Prop()
  modelValue!: boolean;

  @DefaultState
  profile!: AuthResponseDTO;

  @Emit("update:modelValue")
  updateValue(date: boolean): boolean {
    return date;
  }

  async logout(): Promise<void> {
    await this.$router.push(this.$pagesPath.auth.signIn);
    sessionStore.sessionToken = null;
    this.defaultStore.setProfile(null);
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>

</style>
