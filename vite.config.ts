import {defineConfig,} from "vite";
import {getConsts} from "./build/utils";
import {getConfig} from "./build/vite";

export default defineConfig(async() => {
  const consts = await getConsts();
  return getConfig(consts);
});
