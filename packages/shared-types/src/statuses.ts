export const ROUTE_STOP_STATUSES = [
  "scheduled",
  "en_route",
  "arrived",
  "servicing",
  "completed",
  "skipped",
  "delayed"
] as const;
export type RouteStopStatus = (typeof ROUTE_STOP_STATUSES)[number];

export const REPORT_STATUSES = ["draft", "ready_for_review", "published", "corrected"] as const;
export type ReportStatus = (typeof REPORT_STATUSES)[number];

export const QUOTE_STATUSES = ["draft", "sent", "approved", "declined", "expired"] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const REQUEST_STATUSES = ["new", "triaged", "in_progress", "resolved", "closed"] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export const CHAT_STATUSES = ["open", "awaiting_staff", "awaiting_customer", "closed"] as const;
export type ChatStatus = (typeof CHAT_STATUSES)[number];

export const MASTER_JOB_STATUSES = [
  "planned",
  "scheduled",
  "active",
  "blocked",
  "completed",
  "cancelled"
] as const;
export type MasterJobStatus = (typeof MASTER_JOB_STATUSES)[number];
