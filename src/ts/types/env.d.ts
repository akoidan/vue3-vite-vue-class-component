import type {Logger} from "lines-logger";
import type {Router} from "vue-router";
import type {App as VueApp} from "@vue/runtime-core";
import type {Api} from "@/ts/classes/api";
import type {PagesPath} from "@/ts/router/pages-path";
import type {GrowslStore} from "@/ts/store/growl/growl-store";
import type {DefaultStore} from "@/ts/store/default/default-store";

declare global {
  interface Window {
    gitVersion?: string; // eslint-disable-line @typescript-eslint/naming-convention
    vue: VueApp;
    router: Router;
    api: Api;
    consts: any;
    runtimeConsts: any;
    vueStore: {
      growls: GrowslStore;
      default: DefaultStore;
    };
  }
}

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $logger: Logger;
    $pagesPath: PagesPath;
  }
}
