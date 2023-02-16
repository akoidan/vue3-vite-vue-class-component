import {
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import type {AuthResponseDTO} from "@/ts/types/dto/auth.dto";
import {Profile} from "@/ts/types/model/default-store.type";


@Module({
  name: 'default'
})
export class DefaultStore extends VuexModule {
  public profile: Profile | null = null;

  @Mutation
  setProfile(data: Profile | null): void {
    this.profile = data;
  }
}
