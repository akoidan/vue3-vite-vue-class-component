<template>
  <div>
    <v-pagination
      v-model="page"
      :disabled="loading"
      :length="total"
    />
    <loading-suspense :loading="loading" :errors="errors">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="user in users"
            :key="user.id"
          >
            <v-card>
              <v-img
                :src="user.image"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white">
                  {{ user.firstName }} {{ user.lastName }}
                </v-card-title>
              </v-img>
              <v-card-subtitle class="pt-4">
                {{ user.username }} : {{ user.password }}
              </v-card-subtitle>

              <v-card-text class="card-text">
                <v-icon :icon="`mdi-gender-${user.gender}`"/>
                <div>{{ user.email }} </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </loading-suspense>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Watch,
} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import {
  DefaultGrowlError,
  LoadingMixin,
} from "@/ts/mixins/loading-mixin";
import {DefaultStoreMixin} from "@/ts/store/default/default-store-instance";
import {ApiMixin} from "@/ts/instances/api-instance";
import type {
  UserDTO,
  UsersResponseDTO,
} from "@/ts/types/dto/users.dto";
import {PAGINATION_SIZE} from "@/ts/utils/consts";
import LoadingSuspense from "@/vue/atoms/loading-suspense.vue";

@Component({
  components: {LoadingSuspense}
})
export default class UsersPage extends mixins(LoadingMixin, DefaultStoreMixin, ApiMixin) {
  page: number = 1;

  // default number of pages, i know that there are 100 users
  total: number = 10; // eslint-disable-line @typescript-eslint/no-magic-numbers

  users: UserDTO[] = [];

  async mounted(): Promise<void> {
    await this.onPageChange();
  }

  @Watch('page')
  @DefaultGrowlError
  async onPageChange(): Promise<void> {
    const data: UsersResponseDTO = await this.api.getUsers(
      {
        limit: PAGINATION_SIZE,
        skip: this.page * PAGINATION_SIZE - PAGINATION_SIZE,
      },
    );
    this.users = data.users;
    this.total = Math.ceil(data.total / PAGINATION_SIZE);
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
.card-text
  display: flex
</style>
