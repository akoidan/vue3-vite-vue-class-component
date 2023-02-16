import type {Router} from "vue-router";
import {
  createRouter,
  createWebHistory,
} from "vue-router";

import type {Logger} from "lines-logger";
import type {SessionHolder} from "@/ts/types";
import NotFoundPage from "@/vue/pages/not-found.page.vue";
import {mainPages} from "@/ts/router/pages/main-pages";
import {pagesPath} from "@/ts/router/pages-path";
import {authPages} from "@/ts/router/pages/auth-pages";
import {loggerInstance} from "@/ts/instances/logger-instance";

export function routerFactory(sessionHolder: SessionHolder): Router {
  const logger: Logger = loggerInstance.getLogger("router"); // eslint-disable-line @typescript-eslint/no-unused-vars
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      mainPages,
      ...authPages,
      {
        path: "/:catchAll(.*)",
        component: NotFoundPage,
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    if (to.matched[0]?.meta?.loginRequired && !sessionHolder.sessionToken) {
      logger.log("Session doesn't exist for page {}, redirecting to auth page", to.matched[0])();
      next(pagesPath.auth.signIn);
    } else {
      next();
    }
  });

  return router;
}
