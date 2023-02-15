import {pagesPath} from "@/ts/router/pages-path";
import type {RouteRecordRaw} from "vue-router";
import HomePage from "@/vue/routes/home.page.vue";
import BranchPage from "@/vue/routes/branch.page.vue";
import BasePage from "@/vue/routes/base.page.vue";


export const mainPages: RouteRecordRaw = {
  path: pagesPath.main.main,
  component: BasePage,
  meta: {
    loginRequired: true,
  },
  children: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/branches",
      component: BranchPage,
    },
  ],
};
