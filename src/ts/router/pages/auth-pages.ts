import {pagesPath} from "@/ts/router/pages-path";
import type {RouteRecordRaw} from "vue-router";
import AuthPage from "@/vue/pages/auth.page.vue";


export const authPages: RouteRecordRaw[] = [
  {
    path: pagesPath.auth.signIn,
    component: AuthPage,
  },
];
