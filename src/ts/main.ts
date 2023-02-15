import * as constants from "@/ts/utils/consts";

import * as runtimeConsts from "@/ts/utils/runtime-consts";
// Should be after initStore
import App from "@/vue/app.vue";
import {createApp} from "vue";
import type {Logger} from "lines-logger";
import {loggerFactory} from "@/ts/instances/logger-factory";
import type {App as VueApp} from "@vue/runtime-core";
import {loggerMixin} from "@/ts/mixins/logger-mixin";
import {vueStore} from "@/ts/store/vue-store";
import {Vue} from "vue-class-component";
import {addDirectives} from "@/ts/utils/directives";
import {pagesPath} from "@/ts/router/pages-path";
import {growlStore} from "@/ts/store/growl/growl-store-instance";
import {defaultStore} from "@/ts/store/default/default-store-instance";
import {
  api,
  router,
} from "@/ts/instances/main-instances";

import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


const logger: Logger = loggerFactory.getLoggerColor("main", "#007a70");
logger.log(`Evaluating main script ${constants.GIT_HASH}`)();


// eslint-disable-next-line max-lines-per-function, max-statements
function init(): void {
  // Hotfix for Edge 15 for reflect data
  if (!window.InputEvent) {
    // @ts-expect-error: next-line
    window.InputEvent = (): void => { // eslint-disable-line @typescript-eslint/no-empty-function
    };
  }

  const vue: VueApp = createApp(App);
  vue.mixin(loggerMixin);
  const vuetify = createVuetify({
    components,
    directives,
  });
  vue.use(vuetify);
  vue.use(router);
  // required for vuex devtool
  vue.use(vueStore);
  addDirectives(vue);
  vue.config.globalProperties.$api = api;
  vue.config.globalProperties.$pagesPath = pagesPath;
  vue.config.errorHandler = (err, vm, info): boolean => {
    logger.error("Error occurred in vue component err: '{}', vm '{}', info '{}'", err, vm, info)();
    return false;
  };

  vue.mount(document.body);

  window.onerror = function onerror(msg, url, linenumber): boolean {
    const message = `Error occurred in ${url!}:${linenumber!}\n${JSON.stringify(msg)}`;
    logger.error(message);
    return false;
  };

  window.gitVersion = constants.GIT_HASH;
  if (constants.IS_DEBUG) {
    vueStore.subscribe((mutation, state) => {
      logger.log("Changing state to {}", state)();
    });
    window.vue = vue;
    window.api = api;
    window.consts = constants;
    window.runtimeConsts = runtimeConsts;
    window.router = router;
    window.vueStore = {
      default: defaultStore,
      growls: growlStore,
    };
    logger.log("Constants {}", constants)();
  }
  Vue.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate",
  ]);
}

if (document.body) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
