
import {pagesPath} from "@/ts/router/pages-path";
import type {RouteRecordRaw} from "vue-router";
import MainPage from "@/vue/routes/main-page.vue";


export const mainPages: RouteRecordRaw = {
  path: pagesPath.main.main,
  component: MainPage,
  meta: {
    loginRequired: true,
  },
  children: [
   // TODO list children
  ],
};
