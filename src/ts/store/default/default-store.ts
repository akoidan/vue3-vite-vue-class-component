import {
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import type {AuthResponseDTO} from "@/ts/types/dto/auth.dto";


@Module({
  name: 'default'
})
export class DefaultStore extends VuexModule {
  public profile: AuthResponseDTO | null = null;

  @Mutation
  setProfile(data: AuthResponseDTO | null): void {
    this.profile = data;
  }
}
