export const WATER_BODIES_TABLE = 'water_bodies' as const;

export const WATER_BODY_TYPES = [
  'pool',
  'spa',
  'connected_spa',
  'separate_spa',
  'hot_tub',
  'fountain',
  'other',
] as const;
export type WaterBodyType = (typeof WATER_BODY_TYPES)[number];

export const WATER_BODY_STATUSES = ['active', 'inactive', 'paused', 'archived'] as const;
export type WaterBodyStatus = (typeof WATER_BODY_STATUSES)[number];

export const WATER_BODY_SERVICE_STATUSES = [
  'not_started',
  'active_service',
  'watch',
  'action_needed',
  'out_of_service',
] as const;
export type WaterBodyServiceStatus = (typeof WATER_BODY_SERVICE_STATUSES)[number];

export const WATER_BODY_SANITIZER_TYPES = [
  'chlorine',
  'salt',
  'bromine',
  'unknown',
  'other',
] as const;
export type WaterBodySanitizerType = (typeof WATER_BODY_SANITIZER_TYPES)[number];

export const WATER_BODY_SURFACE_TYPES = [
  'plaster',
  'fiberglass',
  'vinyl',
  'pebble',
  'tile',
  'unknown',
  'other',
] as const;
export type WaterBodySurfaceType = (typeof WATER_BODY_SURFACE_TYPES)[number];

export const WATER_BODY_CHEMISTRY_PROFILE_STATUSES = [
  'missing_required_data',
  'ready',
  'needs_review',
] as const;
export type WaterBodyChemistryProfileStatus =
  (typeof WATER_BODY_CHEMISTRY_PROFILE_STATUSES)[number];

export interface WaterBodyRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  name: string;
  water_body_type: WaterBodyType;
  status: WaterBodyStatus;
  service_status: WaterBodyServiceStatus;
  sanitizer_type: WaterBodySanitizerType | null;
  surface_type: WaterBodySurfaceType | null;
  estimated_volume_gallons: number | null;
  is_primary: boolean;
  is_commercial_public_pool: boolean;
  requires_separate_chemistry: boolean;
  requires_separate_report_section: boolean;
  chemistry_profile_status: WaterBodyChemistryProfileStatus;
  notes_customer_visible: string | null;
  notes_technician_visible: string | null;
  notes_internal_admin_only: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface WaterBodyInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  name: string;
  water_body_type: WaterBodyType;
  status?: WaterBodyStatus;
  service_status?: WaterBodyServiceStatus;
  sanitizer_type?: WaterBodySanitizerType | null;
  surface_type?: WaterBodySurfaceType | null;
  estimated_volume_gallons?: number | null;
  is_primary?: boolean;
  is_commercial_public_pool?: boolean;
  requires_separate_chemistry?: boolean;
  requires_separate_report_section?: boolean;
  chemistry_profile_status?: WaterBodyChemistryProfileStatus;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface WaterBodyUpdate {
  property_id?: string;
  name?: string;
  water_body_type?: WaterBodyType;
  status?: WaterBodyStatus;
  service_status?: WaterBodyServiceStatus;
  sanitizer_type?: WaterBodySanitizerType | null;
  surface_type?: WaterBodySurfaceType | null;
  estimated_volume_gallons?: number | null;
  is_primary?: boolean;
  is_commercial_public_pool?: boolean;
  requires_separate_chemistry?: boolean;
  requires_separate_report_section?: boolean;
  chemistry_profile_status?: WaterBodyChemistryProfileStatus;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
