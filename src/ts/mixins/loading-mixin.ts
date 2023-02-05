import {Vue} from "vue-property-decorator";
import {ApplyGrowlErr} from "@/ts/utils/decorators";


export class LoadingMixin extends Vue {
  loading: boolean = false;

  error: string | null = null;
}

// eslint-disable-next-line babel/new-cap
export const DefaultGrowlError = ApplyGrowlErr({
  loadingProperty: "loading",
  errorProperty: "error",
});
