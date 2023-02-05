import {Store} from "vuex";
import {DefaultStore} from "@/ts/store/default/default-store";
import {GrowslStore} from "@/ts/store/growl/growl-store";

/*
 * this vueStore module is required to assemble general vue store,
 * the names in this vue store should be same as name parameter in @Store class module decorator
 */
export const vueStore = new Store({
  modules: {
    default: DefaultStore,
    growls: GrowslStore,
  },
});
