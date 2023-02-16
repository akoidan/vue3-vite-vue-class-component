import type {Logger} from "lines-logger";
import type {
  DeleteParams,
  GetParams,
  ParamsCommon,
  PostMultipartParams,
  PostParams,
  PutParams,
} from "@/ts/types/component/http-wrapper.type";
import {loggerInstance} from "@/ts/instances/logger-instance";


export class HttpWrapper {
  public static readonly httpTokenExpired = 401;

  private static readonly httpNoContent = 204;

  private static readonly httpNotFound = 404;

  private readonly logger: Logger;

  constructor(
    private readonly backendUrl: string,
  ) {
    this.logger = loggerInstance.getLogger("http");
  }

  public async get<T>(data: GetParams): Promise<T> {
    const params = data.queryParams
      ? `?${new URLSearchParams(data.queryParams).toString()}`
      : "";
    return this.makeRequest<T>(
      "GET",
      params,
      null,
      data,
    );
  }

  public async delete<T>(data: DeleteParams): Promise<T> {
    return this.makeRequest<T>(
      "DELETE",
      "",
      null,
      data,
    );
  }

  public async post<T>(data: PostParams): Promise<T> {
    return this.makeRequest<T>(
      "POST",
      "",
      JSON.stringify(data.body),
      data,
    );
  }

  public async postMultiData<T>(data: PostMultipartParams): Promise<T> {
    return this.makeRequest<T>(
      "POST",
      "",
      data.body,
      data,
    );
  }

  public async put<T>(data: PutParams): Promise<T> {
    return this.makeRequest<T>(
      "PUT",
      "",
      JSON.stringify(data.body),
      data,
    );
  }

  // eslint-disable-next-line max-lines-per-function
  private async makeRequest<T>(
    method: "DELETE" | "GET" | "POST" | "PUT",
    urlParams: string,
    body: BodyInit | null,
    data: ParamsCommon,
  ): Promise<T> {
    const formattedUrl = `${this.backendUrl}${data.url}${urlParams}`;
    const result = await fetch(formattedUrl, {
      method,
      mode: "cors",
      headers: this.getAuthHeader(data.authorization),
      body,
    });

    if (result.status === HttpWrapper.httpTokenExpired && data.authorization) {
      throw Error(`Current session is expired: '${data.authorization}'`);
    }

    const resultBody = await result.text();
    if (result.status === HttpWrapper.httpNoContent) {
      return null as any as T;
    }
    if (result.status === HttpWrapper.httpNotFound && data.handle404) {
      return null as any as T;
    }
    let response: any;
    try {
      response = JSON.parse(resultBody) as T;
    } catch (error) {
      throw Error(resultBody);
    }

    if (result.ok) {
      return response as T;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (typeof response.message === "string") {
      // eslint-disable-line @typescript-eslint/no-unsafe-member-access
      throw Error(response.message); // eslint-disable-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    } else {
      throw Error(response); // eslint-disable-line @typescript-eslint/no-unsafe-argument
    }
  }

  private getAuthHeader(authorization: string | undefined): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (authorization) {
      headers.Authorization = `Bearer ${authorization}`;
    }
    return headers;
  }
}
