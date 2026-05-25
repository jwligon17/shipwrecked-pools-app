export const EQUIPMENT_TABLE = 'equipment' as const;

export const EQUIPMENT_TYPES = [
  'pump',
  'filter',
  'heater',
  'salt_system',
  'chlorinator',
  'cleaner',
  'robot',
  'automation',
  'valve',
  'plumbing',
  'light',
  'water_feature',
  'other',
] as const;
export type EquipmentType = (typeof EQUIPMENT_TYPES)[number];

export const EQUIPMENT_STATUSES = [
  'active',
  'inactive',
  'needs_attention',
  'recommended_replacement',
  'removed',
  'archived',
] as const;
export type EquipmentStatus = (typeof EQUIPMENT_STATUSES)[number];

export const EQUIPMENT_FILTER_TYPES = [
  'cartridge',
  'sand',
  'de',
  'unknown',
  'not_applicable',
] as const;
export type EquipmentFilterType = (typeof EQUIPMENT_FILTER_TYPES)[number];

export const EQUIPMENT_PUMP_TYPES = [
  'single_speed',
  'dual_speed',
  'variable_speed',
  'unknown',
  'not_applicable',
] as const;
export type EquipmentPumpType = (typeof EQUIPMENT_PUMP_TYPES)[number];

export interface EquipmentRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id: string | null;
  equipment_type: EquipmentType;
  status: EquipmentStatus;
  display_name: string | null;
  manufacturer: string | null;
  model: string | null;
  serial_number_last_four: string | null;
  install_date: string | null;
  warranty_expiration_date: string | null;
  filter_type: EquipmentFilterType | null;
  pump_type: EquipmentPumpType | null;
  sanitizer_related: boolean;
  supports_deal_targeting: boolean;
  supports_chemical_guidance: boolean;
  notes_customer_visible: string | null;
  notes_technician_visible: string | null;
  notes_internal_admin_only: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface EquipmentInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string;
  water_body_id?: string | null;
  equipment_type: EquipmentType;
  status?: EquipmentStatus;
  display_name?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  serial_number_last_four?: string | null;
  install_date?: string | null;
  warranty_expiration_date?: string | null;
  filter_type?: EquipmentFilterType | null;
  pump_type?: EquipmentPumpType | null;
  sanitizer_related?: boolean;
  supports_deal_targeting?: boolean;
  supports_chemical_guidance?: boolean;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface EquipmentUpdate {
  water_body_id?: string | null;
  equipment_type?: EquipmentType;
  status?: EquipmentStatus;
  display_name?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  serial_number_last_four?: string | null;
  install_date?: string | null;
  warranty_expiration_date?: string | null;
  filter_type?: EquipmentFilterType | null;
  pump_type?: EquipmentPumpType | null;
  sanitizer_related?: boolean;
  supports_deal_targeting?: boolean;
  supports_chemical_guidance?: boolean;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
