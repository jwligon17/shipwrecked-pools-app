export const SERVICE_VISITS_TABLE = 'service_visits' as const;

export const SERVICE_VISIT_TYPES = [
  'weekly_maintenance',
  'biweekly_maintenance',
  'one_time_maintenance',
  'repair',
  'green_to_clean',
  'acid_wash',
  'drain_and_refill',
  'commercial_service',
  'inspection',
  'other',
] as const;
export type ServiceVisitType = (typeof SERVICE_VISIT_TYPES)[number];

export const SERVICE_VISIT_STATUSES = [
  'scheduled',
  'on_the_way',
  'arrived',
  'in_progress',
  'completed',
  'skipped',
  'cancelled',
  'rescheduled',
  'needs_admin_review',
] as const;
export type ServiceVisitStatus = (typeof SERVICE_VISIT_STATUSES)[number];

export const SERVICE_VISIT_SKIP_REASONS = [
  'gate_locked',
  'aggressive_dog',
  'weather',
  'customer_requested_reschedule',
  'unsafe_conditions',
  'equipment_issue',
  'other',
] as const;
export type ServiceVisitSkipReason = (typeof SERVICE_VISIT_SKIP_REASONS)[number];

export const SERVICE_VISIT_COMPLETION_SOURCES = ['technician', 'admin', 'system'] as const;
export type ServiceVisitCompletionSource = (typeof SERVICE_VISIT_COMPLETION_SOURCES)[number];

export interface ServiceVisitRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  route_id: string | null;
  route_stop_id: string | null;
  assigned_technician_app_user_id: string | null;
  visit_date: string;
  visit_type: ServiceVisitType;
  status: ServiceVisitStatus;
  scheduled_start_at: string | null;
  scheduled_end_at: string | null;
  on_the_way_at: string | null;
  arrived_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  skipped_at: string | null;
  skip_reason: ServiceVisitSkipReason | null;
  completion_source: ServiceVisitCompletionSource | null;
  customer_visible_summary: string | null;
  technician_visible_notes: string | null;
  internal_admin_notes: string | null;
  requires_admin_review: boolean;
  is_billable: boolean;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ServiceVisitInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  route_id?: string | null;
  route_stop_id?: string | null;
  assigned_technician_app_user_id?: string | null;
  visit_date: string;
  visit_type: ServiceVisitType;
  status?: ServiceVisitStatus;
  scheduled_start_at?: string | null;
  scheduled_end_at?: string | null;
  on_the_way_at?: string | null;
  arrived_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  skipped_at?: string | null;
  skip_reason?: ServiceVisitSkipReason | null;
  completion_source?: ServiceVisitCompletionSource | null;
  customer_visible_summary?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  requires_admin_review?: boolean;
  is_billable?: boolean;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ServiceVisitUpdate {
  route_id?: string | null;
  route_stop_id?: string | null;
  assigned_technician_app_user_id?: string | null;
  visit_date?: string;
  visit_type?: ServiceVisitType;
  status?: ServiceVisitStatus;
  scheduled_start_at?: string | null;
  scheduled_end_at?: string | null;
  on_the_way_at?: string | null;
  arrived_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  skipped_at?: string | null;
  skip_reason?: ServiceVisitSkipReason | null;
  completion_source?: ServiceVisitCompletionSource | null;
  customer_visible_summary?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  requires_admin_review?: boolean;
  is_billable?: boolean;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
