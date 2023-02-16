import {Api} from "@/ts/classes/api";
import {BACKEND_ADDRESS} from "@/ts/utils/consts";
import {sessionStore} from "@/ts/instances/session-instance";
import {Vue} from "vue-property-decorator";


// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const api: Api = new Api(BACKEND_ADDRESS, sessionStore);

export class ApiMixin extends Vue {
  api!: Api;

  created(): void {
    this.api = api;
  }
}
