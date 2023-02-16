<template>
  <loading-suspense :loading="loading" :errors="errors">
    <nav-drawer v-model="drawer"/>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title>Vue 3 class component</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer app>
      <span>&copy; Andrew Koidan</span>
    </v-footer>
  </loading-suspense>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {
  mixins,
  Vue,
} from "vue-class-component";
import NavDrawer from "@/vue/organisms/nav-drawer.vue";
import {
  DefaultGrowlError,
  LoadingMixin,
} from "@/ts/mixins/loading-mixin";
import {DefaultStoreMixin} from "@/ts/store/default/default-store-instance";
import {ApiMixin} from "@/ts/instances/api-instance";
import LoadingSuspense from "@/vue/atoms/loading-suspense.vue";
import {sessionStore} from "@/ts/instances/session-instance";

@Component({
  components: {LoadingSuspense, NavDrawer}
})
export default class BasePage extends mixins(LoadingMixin, DefaultStoreMixin, ApiMixin) {
  drawer: boolean = false;

  @DefaultGrowlError
  async created(): Promise<void> {
    try {
      this.defaultStore.setProfile(await this.api.getMe());
    } catch (error) {
      this.$logger.error("Unable to get signin profile because of {}", error)();
      await this.$router.push(this.$pagesPath.auth.signIn);
    }
  }
}

</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
</style>
