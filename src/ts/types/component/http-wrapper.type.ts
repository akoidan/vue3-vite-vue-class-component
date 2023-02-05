export interface ParamsCommon {
  url: string;
  authorization?: string;
  headers?: Record<string, string>;
  handle404?: true;
}

export interface PostParams extends ParamsCommon {
  body?: object;
}

export interface PostMultipartParams extends ParamsCommon {
  body: FormData;
}

export interface PutParams extends ParamsCommon {
  body?: object;
}

export interface GetParams extends ParamsCommon {
  queryParams?: Record<string, any>;
}

export type DeleteParams = ParamsCommon;
