export const POOL_OUTLINES_TABLE = 'pool_outlines' as const;

export const POOL_OUTLINE_STATUSES = ['draft', 'published', 'archived', 'needs_review'] as const;
export type PoolOutlineStatus = (typeof POOL_OUTLINE_STATUSES)[number];

export const POOL_OUTLINE_SOURCE_TYPES = [
  'manual_trace',
  'technician_photo',
  'customer_photo',
  'satellite_image',
  'ai_assisted',
  'admin_created',
  'other',
] as const;
export type PoolOutlineSourceType = (typeof POOL_OUTLINE_SOURCE_TYPES)[number];

export const POOL_OUTLINE_SHAPE_TYPES = ['svg_path', 'polygon', 'freeform', 'unknown'] as const;
export type PoolOutlineShapeType = (typeof POOL_OUTLINE_SHAPE_TYPES)[number];

export interface PoolOutlineRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  outline_name: string | null;
  status: PoolOutlineStatus;
  source_type: PoolOutlineSourceType;
  shape_type: PoolOutlineShapeType;
  normalized_width: number;
  normalized_height: number;
  outline_path_data: string | null;
  outline_points: unknown[];
  view_box: string | null;
  source_image_url: string | null;
  source_image_metadata: Record<string, unknown>;
  generation_metadata: Record<string, unknown>;
  version_number: number;
  published_at: string | null;
  published_by_app_user_id: string | null;
  created_by_app_user_id: string | null;
  notes_internal_admin_only: string | null;
  notes_customer_visible: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PoolOutlineInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  outline_name?: string | null;
  status?: PoolOutlineStatus;
  source_type: PoolOutlineSourceType;
  shape_type?: PoolOutlineShapeType;
  normalized_width?: number;
  normalized_height?: number;
  outline_path_data?: string | null;
  outline_points?: unknown[];
  view_box?: string | null;
  source_image_url?: string | null;
  source_image_metadata?: Record<string, unknown>;
  generation_metadata?: Record<string, unknown>;
  version_number?: number;
  published_at?: string | null;
  published_by_app_user_id?: string | null;
  created_by_app_user_id?: string | null;
  notes_internal_admin_only?: string | null;
  notes_customer_visible?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface PoolOutlineUpdate {
  outline_name?: string | null;
  status?: PoolOutlineStatus;
  source_type?: PoolOutlineSourceType;
  shape_type?: PoolOutlineShapeType;
  normalized_width?: number;
  normalized_height?: number;
  outline_path_data?: string | null;
  outline_points?: unknown[];
  view_box?: string | null;
  source_image_url?: string | null;
  source_image_metadata?: Record<string, unknown>;
  generation_metadata?: Record<string, unknown>;
  version_number?: number;
  published_at?: string | null;
  published_by_app_user_id?: string | null;
  created_by_app_user_id?: string | null;
  notes_internal_admin_only?: string | null;
  notes_customer_visible?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
