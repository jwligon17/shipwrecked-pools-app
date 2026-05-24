export const PROPERTY_ACCESS_PROFILES_TABLE = 'property_access_profiles' as const;

export const PROPERTY_ACCESS_PROFILE_STATUSES = ['active', 'inactive', 'archived'] as const;
export type PropertyAccessProfileStatus = (typeof PROPERTY_ACCESS_PROFILE_STATUSES)[number];

export const PROPERTY_ACCESS_TYPES = [
  'gate_code',
  'lockbox',
  'key',
  'open_access',
  'call_customer',
  'other',
] as const;
export type PropertyAccessType = (typeof PROPERTY_ACCESS_TYPES)[number];

export interface PropertyAccessProfileRow {
  id: string;
  organization_id: string;
  property_id: string;
  status: PropertyAccessProfileStatus;
  access_type: PropertyAccessType;
  gate_code_encrypted: string | null;
  gate_code_last_four: string | null;
  lockbox_location: string | null;
  gate_location: string | null;
  access_instructions_technician_visible: string | null;
  access_instructions_internal_admin_only: string | null;
  customer_visible_access_note: string | null;
  requires_customer_confirmation: boolean;
  technician_ack_required: boolean;
  valid_from: string | null;
  valid_until: string | null;
  created_by_app_user_id: string | null;
  updated_by_app_user_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PropertyAccessProfileInsert {
  id: string;
  organization_id: string;
  property_id: string;
  status?: PropertyAccessProfileStatus;
  access_type: PropertyAccessType;
  gate_code_encrypted?: string | null;
  gate_code_last_four?: string | null;
  lockbox_location?: string | null;
  gate_location?: string | null;
  access_instructions_technician_visible?: string | null;
  access_instructions_internal_admin_only?: string | null;
  customer_visible_access_note?: string | null;
  requires_customer_confirmation?: boolean;
  technician_ack_required?: boolean;
  valid_from?: string | null;
  valid_until?: string | null;
  created_by_app_user_id?: string | null;
  updated_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface PropertyAccessProfileUpdate {
  status?: PropertyAccessProfileStatus;
  access_type?: PropertyAccessType;
  gate_code_encrypted?: string | null;
  gate_code_last_four?: string | null;
  lockbox_location?: string | null;
  gate_location?: string | null;
  access_instructions_technician_visible?: string | null;
  access_instructions_internal_admin_only?: string | null;
  customer_visible_access_note?: string | null;
  requires_customer_confirmation?: boolean;
  technician_ack_required?: boolean;
  valid_from?: string | null;
  valid_until?: string | null;
  created_by_app_user_id?: string | null;
  updated_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
