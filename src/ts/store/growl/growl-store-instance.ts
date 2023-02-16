import {getModule} from "vuex-module-decorators";
import {GrowslStore} from "@/ts/store/growl/growl-store";
import {stateDecoratorFactory} from "@/ts/utils/decorators";
import {vueStore} from "@/ts/store/vue-store";
import {Vue} from "vue-property-decorator";

export const growlStore: GrowslStore = getModule(GrowslStore, vueStore);

export const GrowlsState = stateDecoratorFactory(growlStore);

export class GrowlsStoreMixin extends Vue {
  growlsStore!: GrowslStore;

  created(): void {
    this.growlsStore = growlStore;
  }
}
