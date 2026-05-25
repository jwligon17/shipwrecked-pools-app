export const PETS_TABLE = 'pets' as const;

export const PET_TYPES = ['dog', 'cat', 'other'] as const;
export type PetType = (typeof PET_TYPES)[number];

export const PET_STATUSES = ['active', 'inactive', 'archived'] as const;
export type PetStatus = (typeof PET_STATUSES)[number];

export const PET_TEMPERAMENTS = [
  'friendly',
  'barks',
  'nervous',
  'aggressive',
  'unknown',
  'other',
] as const;
export type PetTemperament = (typeof PET_TEMPERAMENTS)[number];

export interface PetRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id: string | null;
  name: string;
  pet_type: PetType;
  status: PetStatus;
  temperament: PetTemperament | null;
  treat_allowed: boolean;
  treat_notes: string | null;
  technician_visible_notes: string | null;
  internal_admin_notes: string | null;
  customer_visible_notes: string | null;
  must_secure_before_entry: boolean;
  notify_customer_before_entry: boolean;
  last_confirmed_at: string | null;
  confirmed_by_app_user_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PetInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_id?: string | null;
  name: string;
  pet_type: PetType;
  status?: PetStatus;
  temperament?: PetTemperament | null;
  treat_allowed?: boolean;
  treat_notes?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_notes?: string | null;
  must_secure_before_entry?: boolean;
  notify_customer_before_entry?: boolean;
  last_confirmed_at?: string | null;
  confirmed_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface PetUpdate {
  property_id?: string | null;
  name?: string;
  pet_type?: PetType;
  status?: PetStatus;
  temperament?: PetTemperament | null;
  treat_allowed?: boolean;
  treat_notes?: string | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_notes?: string | null;
  must_secure_before_entry?: boolean;
  notify_customer_before_entry?: boolean;
  last_confirmed_at?: string | null;
  confirmed_by_app_user_id?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
