import {pagesPath} from "@/ts/router/pages-path";
import type {RouteRecordRaw} from "vue-router";
import HomePage from "@/vue/routes/home.page.vue";
import BasePage from "@/vue/routes/base.page.vue";
import UsersPage from "@/vue/routes/users.page.vue";


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
