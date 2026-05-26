export const PHOTOS_TABLE = 'photos' as const;

export const PHOTO_TYPES = [
  'gate_arrival',
  'gate_departure',
  'pool_overview',
  'deep_end',
  'shallow_end',
  'steps',
  'spa',
  'filter_pressure',
  'equipment',
  'service_point',
  'before',
  'after',
  'progress',
  'issue',
  'other',
] as const;
export type PhotoType = (typeof PHOTO_TYPES)[number];

export const PHOTO_CAPTURE_STAGES = ['before', 'during', 'after', 'final'] as const;
export type PhotoCaptureStage = (typeof PHOTO_CAPTURE_STAGES)[number];

export const PHOTO_VISIBILITIES = [
  'customer_visible',
  'technician_visible',
  'admin_only',
  'commercial_export_visible',
] as const;
export type PhotoVisibility = (typeof PHOTO_VISIBILITIES)[number];

export interface PhotoRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string | null;
  water_body_id: string | null;
  service_visit_id: string | null;
  checklist_item_id: string | null;
  service_point_id: string | null;
  equipment_id: string | null;
  uploaded_by_app_user_id: string | null;
  photo_type: PhotoType;
  capture_stage: PhotoCaptureStage | null;
  visibility: PhotoVisibility;
  storage_provider: string | null;
  storage_bucket: string | null;
  storage_key: string | null;
  public_url: string | null;
  original_file_name: string | null;
  mime_type: string | null;
  file_size_bytes: number | null;
  width_px: number | null;
  height_px: number | null;
  taken_at: string | null;
  uploaded_at: string;
  caption_customer_visible: string | null;
  caption_internal_admin_only: string | null;
  before_after_group_id: string | null;
  before_after_label: string | null;
  is_hidden_from_customer: boolean;
  hidden_from_customer_at: string | null;
  hidden_from_customer_by_app_user_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PhotoInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id?: string | null;
  water_body_id?: string | null;
  service_visit_id?: string | null;
  checklist_item_id?: string | null;
  service_point_id?: string | null;
  equipment_id?: string | null;
  uploaded_by_app_user_id?: string | null;
  photo_type: PhotoType;
  capture_stage?: PhotoCaptureStage | null;
  visibility: PhotoVisibility;
  storage_provider?: string | null;
  storage_bucket?: string | null;
  storage_key?: string | null;
  public_url?: string | null;
  original_file_name?: string | null;
  mime_type?: string | null;
  file_size_bytes?: number | null;
  width_px?: number | null;
  height_px?: number | null;
  taken_at?: string | null;
  uploaded_at?: string;
  caption_customer_visible?: string | null;
  caption_internal_admin_only?: string | null;
  before_after_group_id?: string | null;
  before_after_label?: string | null;
  is_hidden_from_customer?: boolean;
  hidden_from_customer_at?: string | null;
  hidden_from_customer_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface PhotoUpdate {
  property_id?: string | null;
  water_body_id?: string | null;
  service_visit_id?: string | null;
  checklist_item_id?: string | null;
  service_point_id?: string | null;
  equipment_id?: string | null;
  uploaded_by_app_user_id?: string | null;
  photo_type?: PhotoType;
  capture_stage?: PhotoCaptureStage | null;
  visibility?: PhotoVisibility;
  storage_provider?: string | null;
  storage_bucket?: string | null;
  storage_key?: string | null;
  public_url?: string | null;
  original_file_name?: string | null;
  mime_type?: string | null;
  file_size_bytes?: number | null;
  width_px?: number | null;
  height_px?: number | null;
  taken_at?: string | null;
  uploaded_at?: string;
  caption_customer_visible?: string | null;
  caption_internal_admin_only?: string | null;
  before_after_group_id?: string | null;
  before_after_label?: string | null;
  is_hidden_from_customer?: boolean;
  hidden_from_customer_at?: string | null;
  hidden_from_customer_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
