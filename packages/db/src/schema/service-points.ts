export const SERVICE_POINTS_TABLE = 'service_points' as const;

export const SERVICE_POINT_TYPES = [
  'skimmer',
  'steps',
  'shallow_end',
  'deep_end',
  'spa',
  'tile_line',
  'return_jet',
  'light',
  'drain',
  'equipment_pad',
  'pump',
  'filter',
  'heater',
  'cleaner',
  'robot',
  'stain_area',
  'crack_area',
  'general_area',
  'other',
] as const;
export type ServicePointType = (typeof SERVICE_POINT_TYPES)[number];

export const SERVICE_POINT_STATUSES = [
  'normal',
  'watch',
  'action_needed',
  'resolved',
  'inactive',
  'archived',
] as const;
export type ServicePointStatus = (typeof SERVICE_POINT_STATUSES)[number];

export const SERVICE_POINT_COORDINATE_SYSTEMS = [
  'normalized_outline',
  'image_pixel',
  'manual',
  'unknown',
] as const;
export type ServicePointCoordinateSystem = (typeof SERVICE_POINT_COORDINATE_SYSTEMS)[number];

export interface ServicePointRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  pool_outline_id: string | null;
  equipment_id: string | null;
  label: string;
  service_point_type: ServicePointType;
  status: ServicePointStatus;
  marker_x: string | number | null;
  marker_y: string | number | null;
  coordinate_system: ServicePointCoordinateSystem;
  sort_order: number | null;
  is_customer_visible: boolean;
  is_technician_visible: boolean;
  customer_visible_summary: string | null;
  technician_visible_notes: string | null;
  internal_admin_notes: string | null;
  last_status_changed_at: string | null;
  last_status_changed_by_app_user_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ServicePointInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  pool_outline_id?: string | null;
  equipment_id?: string | null;
  label: string;
  service_point_type: ServicePointType;
  status?: ServicePointStatus;
  marker_x?: string | number | null;
  marker_y?: string | number | null;
  coordinate_system?: ServicePointCoordinateSystem;
  sort_order?: number | null;
  is_customer_visible?: boolean;
  is_technician_visible?: boolean;
  customer_visible_summary?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  last_status_changed_at?: string | null;
  last_status_changed_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ServicePointUpdate {
  pool_outline_id?: string | null;
  equipment_id?: string | null;
  label?: string;
  service_point_type?: ServicePointType;
  status?: ServicePointStatus;
  marker_x?: string | number | null;
  marker_y?: string | number | null;
  coordinate_system?: ServicePointCoordinateSystem;
  sort_order?: number | null;
  is_customer_visible?: boolean;
  is_technician_visible?: boolean;
  customer_visible_summary?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  last_status_changed_at?: string | null;
  last_status_changed_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
