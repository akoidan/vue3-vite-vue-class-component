import {
  Action,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import {sleep} from "@/ts/utils/pure-functions";
import type {Growl} from "@/ts/types/model/growl-store.type";
import {GrowlType} from "@/ts/types/model/growl-store.type";


@Module({
  name: 'growls'
})
export class GrowslStore extends VuexModule {
  public growls: Growl[] = [];

  @Mutation
  public addGrowl(Growl: Growl): void {
    this.growls.push(Growl);
  }

  @Mutation
  public removeGrowl(Growl: Growl): void {
    const index = this.growls.indexOf(Growl, 0);
    if (index > -1) {
      this.growls.splice(index, 1);
    }
  }

  @Action
  public async showGrowl({text, type, time}: {text: string; type: GrowlType; time: number}): Promise<void> {
    const growl: Growl = {
      id: Date.now(),
      text,
      type,
    };
    this.addGrowl(growl);
    await sleep(time);
    this.removeGrowl(growl);
  }

  @Action
  public async growlError(text: string): Promise<void> {
    await this.showGrowl({
      text,
      type: GrowlType.ERROR,
      time: 6000,
    });
  }

  @Action
  public async growlInfo(text: string): Promise<void> {
    await this.showGrowl({
      text,
      type: GrowlType.INFO,
      time: 6000,
    });
  }
}
