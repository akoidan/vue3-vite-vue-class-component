/* eslint-disable max-lines */


import {HttpWrapper} from "@/ts/classes/http-wrapper";
import {SessionHolder} from "@/ts/types";

export class Api {
  private readonly httpWrapper: HttpWrapper;

  constructor(
    backendUrl: string,
    private readonly sessionStorage: SessionHolder,
  ) {
    this.httpWrapper = new HttpWrapper(backendUrl);
  }

  public async refreshToken(): Promise<any> {
     return this.httpWrapper.get<any>({
      url: "/test",
    });
  }
}
