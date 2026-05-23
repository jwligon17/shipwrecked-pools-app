import { ApiClientError } from "./errors";
import type { ApiClientConfig, RequestOptions } from "./types";

const buildUrl = (baseUrl: string, path: string, query?: RequestOptions["query"]): string => {
  const url = new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

export interface ApiClient {
  request<TResponse>(path: string, options?: RequestOptions): Promise<TResponse>;
}

export const createApiClient = (config: ApiClientConfig): ApiClient => {
  const request = async <TResponse>(path: string, options: RequestOptions = {}): Promise<TResponse> => {
    const controller = new AbortController();
    const timeoutMs = options.timeoutMs ?? config.timeoutMs ?? 10000;

    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const mergedHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...(config.defaultHeaders ?? {}),
      ...(options.headers ?? {})
    };

    try {
      const response = await fetch(buildUrl(config.baseUrl, path, options.query), {
        method: options.method ?? "GET",
        headers: mergedHeaders,
        body: options.body === undefined ? undefined : JSON.stringify(options.body),
        signal: options.signal ?? controller.signal
      });

      const contentType = response.headers.get("content-type") ?? "";
      const parsedBody = contentType.includes("application/json") ? await response.json() : await response.text();

      if (!response.ok) {
        throw new ApiClientError(`Request failed: ${response.status}`, {
          status: response.status,
          code: "HTTP_ERROR",
          details: parsedBody
        });
      }

      return parsedBody as TResponse;
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error;
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw new ApiClientError("Request timed out or was aborted", {
          status: 408,
          code: "REQUEST_ABORTED"
        });
      }

      throw new ApiClientError("Unexpected API client error", {
        status: 500,
        code: "UNEXPECTED_CLIENT_ERROR",
        details: error
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return { request };
};
