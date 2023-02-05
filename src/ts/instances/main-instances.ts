import {Api} from "@/ts/classes/api";
import {BACKEND_ADDRESS} from "@/ts/utils/consts";
import {sessionStore} from "@/ts/instances/localstorage";
import {routerFactory} from "@/ts/router/router-factory";

const router = routerFactory(sessionStore);

// eslint-disable-next-line @typescript-eslint/no-use-before-define
const api: Api = new Api(BACKEND_ADDRESS, sessionStore);

export {api, router};
