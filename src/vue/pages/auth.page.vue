<template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="login">
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
      />

      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        :rules="passwordRules"
        :error-messages="errors"
        counter
      />
      <v-btn
        type="submit"
        :loading="loading"
        class="mt-2"
        block
      >
        Sign in
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import {
  DefaultGrowlError,
  LoadingMixin,
} from "@/ts/mixins/loading-mixin";
import ErrorText from "@/vue/atoms/error-text.vue";
import {DefaultStoreMixin} from "@/ts/store/default/default-store-instance";
import {ApiMixin} from "@/ts/instances/api-instance";
import {sessionStore} from "@/ts/instances/session-instance";

@Component({
  components: {ErrorText}
})
export default class AuthPage extends mixins(LoadingMixin, DefaultStoreMixin, ApiMixin) {
  username: string = "kminchelle";

  password: string = "0lelplR";

  usernameRules = [
    (value: string): boolean | string => {
      if (value) {
        return true;
      }
      return "You must enter a first name.";
    },
  ];

  passwordRules = [
    (value: string): boolean | string => {
      if (value) {
        return true;
      }
      return "You must enter a password";
    },
  ];

  @DefaultGrowlError
  async login(): Promise<void> {
    const data = await this.api.login({
      username: this.username,
      password: this.password,
    });
    sessionStore.sessionToken = data.token;
    this.defaultStore.setProfile(data);
    void this.$router.push("/");
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
</style>
