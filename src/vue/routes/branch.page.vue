<template>
  <div>
    <h1>Repository Branches:</h1>
    <loading-suspense :error="error" :loading="loading">
      <div v-for="(branch, index) in branches" :key="branch.name">
        <div>
          <div>
            <router-link :to="`/commit/${branch.commit.sha}`">
              {{ branch.name }}
            </router-link>
          </div>
          <span v-text="branch.commit.sha"/>
        </div>
      </div>
    </loading-suspense>
  </div>
</template>
<script lang="ts">
import {Component} from "vue-property-decorator";
import type {BranchDTO} from "@/ts/types/dto/branche.dto";
import {
  DefaultGrowlError,
  LoadingMixin,
} from "@/ts/mixins/loading-mixin";
import {mixins} from "vue-class-component";
import LoadingSuspense from "@/vue/helpers/loading-suspense.vue";

@Component({
  components: {LoadingSuspense}
})
export default class BranchPage extends mixins(LoadingMixin) {
  public readonly branches: BranchDTO[] = [];

  @DefaultGrowlError
  async mounted(): Promise<void> {
    await this.$api.getBranches();
  }
}
</script>
<!-- eslint-disable -->
<style lang="sass" scoped>
h1
  padding: 10px
  text-align: center
</style>
