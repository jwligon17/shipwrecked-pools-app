export const CHEMISTRY_READINGS_TABLE = 'chemistry_readings' as const;

export const CHEMISTRY_READING_SOURCES = [
  'technician',
  'admin',
  'customer',
  'commercial_manager',
  'system',
] as const;
export type ChemistryReadingSource = (typeof CHEMISTRY_READING_SOURCES)[number];

export const CHEMISTRY_READING_STATUSES = ['draft', 'recorded', 'corrected', 'voided'] as const;
export type ChemistryReadingStatus = (typeof CHEMISTRY_READING_STATUSES)[number];

export interface ChemistryReadingRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  service_visit_id: string | null;
  recorded_by_app_user_id: string | null;
  reading_source: ChemistryReadingSource;
  status: ChemistryReadingStatus;
  measured_at: string;
  free_chlorine_ppm: string | number | null;
  total_chlorine_ppm: string | number | null;
  ph: string | number | null;
  alkalinity_ppm: string | number | null;
  salt_ppm: string | number | null;
  cya_ppm: string | number | null;
  calcium_hardness_ppm: string | number | null;
  water_temperature_f: string | number | null;
  saturation_index: string | number | null;
  reading_notes_customer_visible: string | null;
  reading_notes_technician_visible: string | null;
  reading_notes_internal_admin_only: string | null;
  requires_admin_review: boolean;
  corrected_from_reading_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ChemistryReadingInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string;
  service_visit_id?: string | null;
  recorded_by_app_user_id?: string | null;
  reading_source: ChemistryReadingSource;
  status?: ChemistryReadingStatus;
  measured_at: string;
  free_chlorine_ppm?: string | number | null;
  total_chlorine_ppm?: string | number | null;
  ph?: string | number | null;
  alkalinity_ppm?: string | number | null;
  salt_ppm?: string | number | null;
  cya_ppm?: string | number | null;
  calcium_hardness_ppm?: string | number | null;
  water_temperature_f?: string | number | null;
  saturation_index?: string | number | null;
  reading_notes_customer_visible?: string | null;
  reading_notes_technician_visible?: string | null;
  reading_notes_internal_admin_only?: string | null;
  requires_admin_review?: boolean;
  corrected_from_reading_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ChemistryReadingUpdate {
  service_visit_id?: string | null;
  recorded_by_app_user_id?: string | null;
  reading_source?: ChemistryReadingSource;
  status?: ChemistryReadingStatus;
  measured_at?: string;
  free_chlorine_ppm?: string | number | null;
  total_chlorine_ppm?: string | number | null;
  ph?: string | number | null;
  alkalinity_ppm?: string | number | null;
  salt_ppm?: string | number | null;
  cya_ppm?: string | number | null;
  calcium_hardness_ppm?: string | number | null;
  water_temperature_f?: string | number | null;
  saturation_index?: string | number | null;
  reading_notes_customer_visible?: string | null;
  reading_notes_technician_visible?: string | null;
  reading_notes_internal_admin_only?: string | null;
  requires_admin_review?: boolean;
  corrected_from_reading_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
