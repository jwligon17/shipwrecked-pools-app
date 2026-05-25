export const ROUTE_STOPS_TABLE = 'route_stops' as const;

export const ROUTE_STOP_STATUSES = [
  'scheduled',
  'on_the_way',
  'arrived',
  'in_progress',
  'completed',
  'skipped',
  'delayed',
  'rescheduled',
  'cancelled',
] as const;
export type RouteStopStatus = (typeof ROUTE_STOP_STATUSES)[number];

export const ROUTE_STOP_DELAY_REASONS = [
  'traffic',
  'weather',
  'gate_locked',
  'aggressive_dog',
  'customer_requested_reschedule',
  'equipment_issue',
  'technician_issue',
  'other',
] as const;
export type RouteStopDelayReason = (typeof ROUTE_STOP_DELAY_REASONS)[number];

export interface RouteStopRow {
  id: string;
  organization_id: string;
  route_id: string;
  customer_id: string;
  property_id: string;
  assigned_technician_app_user_id: string | null;
  stop_order: number;
  status: RouteStopStatus;
  delay_reason: RouteStopDelayReason | null;
  scheduled_arrival_window_start: string | null;
  scheduled_arrival_window_end: string | null;
  estimated_arrival_at: string | null;
  actual_arrival_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  skipped_at: string | null;
  rescheduled_at: string | null;
  customer_notified_at: string | null;
  admin_notified_at: string | null;
  technician_visible_notes: string | null;
  internal_admin_notes: string | null;
  customer_visible_status_note: string | null;
  route_progress_sort_key: number | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface RouteStopInsert {
  id: string;
  organization_id: string;
  route_id: string;
  customer_id: string;
  property_id: string;
  assigned_technician_app_user_id?: string | null;
  stop_order: number;
  status?: RouteStopStatus;
  delay_reason?: RouteStopDelayReason | null;
  scheduled_arrival_window_start?: string | null;
  scheduled_arrival_window_end?: string | null;
  estimated_arrival_at?: string | null;
  actual_arrival_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  skipped_at?: string | null;
  rescheduled_at?: string | null;
  customer_notified_at?: string | null;
  admin_notified_at?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_status_note?: string | null;
  route_progress_sort_key?: number | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface RouteStopUpdate {
  assigned_technician_app_user_id?: string | null;
  stop_order?: number;
  status?: RouteStopStatus;
  delay_reason?: RouteStopDelayReason | null;
  scheduled_arrival_window_start?: string | null;
  scheduled_arrival_window_end?: string | null;
  estimated_arrival_at?: string | null;
  actual_arrival_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  skipped_at?: string | null;
  rescheduled_at?: string | null;
  customer_notified_at?: string | null;
  admin_notified_at?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_status_note?: string | null;
  route_progress_sort_key?: number | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
