export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export type ApiResult<TData> =
  | {
      ok: true;
      data: TData;
    }
  | {
      ok: false;
      error: ApiError;
    };
