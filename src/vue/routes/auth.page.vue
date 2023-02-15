<template>
  <form @submit.prevent="login">
    <v-text-field
      v-model="username"
      label="Username"
      required
    />

    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      hint="At least 8 characters"
      :error-messages="errors"
      counter
    />
    <v-btn :loading="loading" @click="login">
      Sign in
    </v-btn>
  </form>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import {
  DefaultGrowlError,
  LoadingMixin,
} from "@/ts/mixins/loading-mixin";
import ErrorText from "@/vue/helpers/error-text.vue";

@Component({
  components: {ErrorText}
})
export default class AuthPage extends mixins(LoadingMixin) {
  username: string = "";

  password: string = "";

  @DefaultGrowlError
  async login(): Promise<void> {
    const data = await this.$api.login({
      username: this.username,
      password: this.password,
    });
    void this.$router.push("/");
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
</style>
