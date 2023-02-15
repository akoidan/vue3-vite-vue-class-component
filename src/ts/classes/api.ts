/* eslint-disable max-lines */


import {HttpWrapper} from "@/ts/classes/http-wrapper";
import type {SessionHolder} from "@/ts/types";
import type {BranchDTO} from "@/ts/types/dto/branche.dto";
import type {AuthRequestDTO} from "@/ts/types/dto/auth.dto";

export class Api {
  private readonly httpWrapper: HttpWrapper;

  constructor(
    backendUrl: string,
    private readonly sessionStorage: SessionHolder,
  ) {
    this.httpWrapper = new HttpWrapper(backendUrl);
  }

  public async getBranches(): Promise<BranchDTO[]> {
    return this.httpWrapper.get({
      url: "/branches",
    });
  }

  public async login(body: AuthRequestDTO): Promise<AuthRequestDTO> {
    return this.httpWrapper.post({
      url: "/auth/login",
      body,
    });
  }

  public async refreshToken(): Promise<any> {
    return this.httpWrapper.get<any>({
      url: "/test",
    });
  }
}
