import type {Router} from "vue-router";
import {
  createRouter,
  createWebHistory,
} from "vue-router";

import type {Logger} from "lines-logger";
import {loggerFactory} from "@/ts/instances/logger-factory";
import type {SessionHolder} from "@/ts/types";
import NotFoundPage from "@/vue/routes/not-found.page.vue";
import {mainPages} from "@/ts/router/pages/main-pages";
import {pagesPath} from "@/ts/router/pages-path";

export function routerFactory(sessionHolder: SessionHolder): Router {
  const logger: Logger = loggerFactory.getLogger("router"); // eslint-disable-line @typescript-eslint/no-unused-vars
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      mainPages,
      {
        path: "/:catchAll(.*)",
        component: NotFoundPage,
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    if (to.matched[0]?.meta?.loginRequired && !sessionHolder.sessionToken) {
      logger.log("Session doesn't exist for page {}, redirecting to onboarding page", to.matched[0])();
      next(pagesPath.main.main); // TODO auth login page
    } else {
      next();
    }
  });

  return router;
}
