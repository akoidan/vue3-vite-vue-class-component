import type {Api} from "@/ts/classes/api";
import type {DefaultStore} from "@/ts/store/default/default-store";
import {FetchOnce} from "@/ts/utils/decorators";

export class CachedApi {
  private rewardTrackerExpiryTimeStamp: number = 0;

  /*
   * Time after each cache becomes invalid, 10s is a good random one
   * Things like reward tracker should be updates in some time, after we did a thing that gives reward, E.g. an HRA
   * But we still don't want to respam this request on each page, since it's on a lot of pages, so we use cache for it
   */
  private readonly cacheLiabilityTime: number = 3000;

  constructor(
    private readonly api: Api,
    private readonly defaultStore: DefaultStore,
  ) {
  }

  @FetchOnce
  async getProfile(): Promise<unknown> {
    // if (this.defaultStore.profile && Date.now() - this.rewardTrackerExpiryTimeStamp < this.cacheLiabilityTime) {
    return this.defaultStore.profile;
    // }
    // const rewardTracker = await this.api.auth();
    // this.rewardTrackerExpiryTimeStamp = Date.now();
    // this.defaultStore.setProfile(rewardTracker);
    // return rewardTracker;
  }
}
