import type { ApiClient } from "./client";
import type { HealthResponse } from "./types";

export const getHealth = async (client: ApiClient): Promise<HealthResponse> => {
  return client.request<HealthResponse>("/health", { method: "GET" });
};
