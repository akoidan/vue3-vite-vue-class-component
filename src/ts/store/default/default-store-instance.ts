import {getModule} from "vuex-module-decorators";
import {stateDecoratorFactory} from "@/ts/utils/decorators";
import {DefaultStore} from "@/ts/store/default/default-store";
import {vueStore} from "@/ts/store/vue-store";
import {Vue} from "vue-property-decorator";

export const defaultStore: DefaultStore = getModule(DefaultStore, vueStore);

export const DefaultState = stateDecoratorFactory(defaultStore);

export class DefaultStoreMixin extends Vue {
  defaultStore!: DefaultStore;

  created(): void {
    this.defaultStore = defaultStore;
  }
}
