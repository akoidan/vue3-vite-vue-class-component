/*
 eslint-disable @typescript-eslint/naming-convention,
 @typescript-eslint/ban-types,
 import/no-duplicates,
 @typescript-eslint/no-explicit-any,
 @typescript-eslint/no-duplicate-imports,
 import/unambiguous
 */
declare const APP_CONSTS: {
  IS_DEBUG: boolean;
  BACKEND_ADDRESS: string;
  PUBLIC_PATH: string | null;
  GIT_HASH: string;
};


declare module "*.ico" {
  const result: string;
  export default result;
}

declare module "*.wav" {
  const result: string;
  export default result;
}
declare module "*.mp3" {
  const result: string;
  export default result;
}
declare module "*.gif" {
  const result: string;
  export default result;
}
declare module "*.svg" {
  const result: string;
  export default result;
}
declare module "*.png" {
  const result: string;
  export default result;
}
declare module "*.json" {
  const value: any;
  export default value;
}


declare module "*.vue" {
  import type {DefineComponent} from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.vue.ts" {
  import type {DefineComponent} from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
