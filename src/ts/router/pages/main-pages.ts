import {pagesPath} from "@/ts/router/pages-path";
import type {RouteRecordRaw} from "vue-router";
import HomePage from "@/vue/pages/home.page.vue";
import BasePage from "@/vue/pages/base.page.vue";
import UsersPage from "@/vue/pages/users.page.vue";


export const mainPages: RouteRecordRaw = {
  path: pagesPath.main.home,
  component: BasePage,
  meta: {
    loginRequired: true,
  },
  children: [
    {
      path: pagesPath.main.home,
      component: HomePage,
    },
      {
      path: pagesPath.main.users,
      component: UsersPage,
    },
  ],
};
