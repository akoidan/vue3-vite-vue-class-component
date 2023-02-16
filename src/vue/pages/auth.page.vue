<template>
  <v-layout class="align-center justify-center">
    <v-sheet width="300">
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="username"
          :rules="rules"
          label="Username"
          required
        />

        <v-text-field
          v-model="password"
          required
          :rules="rules"
          type="password"
          label="Password"
          :error-messages="errors"
          counter
        />
        <v-btn
          type="submit"
          :disabled="!isFormValid"
          :loading="loading"
          class="mt-2"
          block
        >
          Sign in
        </v-btn>
      </v-form>
    </v-sheet>
  </v-layout>
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

  isFormValid: boolean = false;

  rules = [
    (value: string): boolean | string => {
      if (value) {
        return true;
      }
      return "This field is required";
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
