<template>
  <div>
    <div>
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
    </div>
    <v-pagination
      v-model="page"
      :disabled="loading"
      :length="total"
    />
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

@Component({})
export default class UsersPage extends mixins(LoadingMixin, DefaultStoreMixin, ApiMixin) {
  page: number = 1;

  total: number = 1;

  users: UserDTO[] = [];

  async mounted() {
    await this.onPageChange();
  }

  @Watch('page')
  @DefaultGrowlError
  async onPageChange() {
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
