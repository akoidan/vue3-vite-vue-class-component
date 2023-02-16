/* eslint-disable max-lines */

import {HttpWrapper} from "@/ts/classes/http-wrapper";
import type {SessionHolder} from "@/ts/types";
import type {
  AuthRequestDTO,
  AuthResponseDTO,
} from "@/ts/types/dto/auth.dto";
import type {
  UserDTO,
  UsersRequestDTO,
  UsersResponseDTO,
} from "@/ts/types/dto/users.dto";

export class Api {
  private readonly httpWrapper: HttpWrapper;

  constructor(
    backendUrl: string,
    private readonly sessionStorage: SessionHolder,
  ) {
    this.httpWrapper = new HttpWrapper(backendUrl);
  }

  public async getUsers(queryParams: UsersRequestDTO): Promise<UsersResponseDTO> {
    return this.httpWrapper.get({
      url: "/auth/users",
      queryParams,
      authorization: this.sessionStorage.sessionToken!,
    });
  }


  public async getMe(): Promise<UserDTO> {
    return this.httpWrapper.get({
      url: "/auth/user/1",
      authorization: this.sessionStorage.sessionToken!,
    });
  }

  public async login(body: AuthRequestDTO): Promise<AuthResponseDTO> {
    return this.httpWrapper.post({
      url: "/auth/login",
      body,
    });
  }
}
