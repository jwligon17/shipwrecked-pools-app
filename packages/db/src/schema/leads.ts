export const LEADS_TABLE = 'leads' as const;

export const LEAD_TYPES = ['residential', 'commercial', 'unknown'] as const;
export type LeadType = (typeof LEAD_TYPES)[number];

export const LEAD_STATUSES = [
  'new',
  'contacted',
  'needs_review',
  'qualified',
  'quoted',
  'converted',
  'lost',
  'archived',
] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const LEAD_SOURCES = ['website', 'referral', 'phone', 'app', 'manual', 'other'] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const LEAD_PREFERRED_CONTACT_METHODS = ['push', 'email', 'sms', 'phone', 'none'] as const;
export type LeadPreferredContactMethod = (typeof LEAD_PREFERRED_CONTACT_METHODS)[number];

export interface LeadRow {
  id: string;
  organization_id: string;
  app_user_id: string | null;
  lead_type: LeadType;
  status: LeadStatus;
  source: LeadSource | null;
  first_name: string | null;
  last_name: string | null;
  company_name: string | null;
  email: string | null;
  phone: string | null;
  service_address_line1: string | null;
  service_address_line2: string | null;
  service_city: string | null;
  service_state: string | null;
  service_postal_code: string | null;
  requested_service_type: string | null;
  has_pool: boolean | null;
  has_spa: boolean | null;
  pool_notes: string | null;
  frustration_note: string | null;
  preferred_contact_method: LeadPreferredContactMethod | null;
  assigned_admin_user_id: string | null;
  converted_customer_id: string | null;
  lost_reason: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface LeadInsert {
  id: string;
  organization_id: string;
  app_user_id?: string | null;
  lead_type?: LeadType;
  status?: LeadStatus;
  source?: LeadSource | null;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  email?: string | null;
  phone?: string | null;
  service_address_line1?: string | null;
  service_address_line2?: string | null;
  service_city?: string | null;
  service_state?: string | null;
  service_postal_code?: string | null;
  requested_service_type?: string | null;
  has_pool?: boolean | null;
  has_spa?: boolean | null;
  pool_notes?: string | null;
  frustration_note?: string | null;
  preferred_contact_method?: LeadPreferredContactMethod | null;
  assigned_admin_user_id?: string | null;
  converted_customer_id?: string | null;
  lost_reason?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface LeadUpdate {
  app_user_id?: string | null;
  lead_type?: LeadType;
  status?: LeadStatus;
  source?: LeadSource | null;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  email?: string | null;
  phone?: string | null;
  service_address_line1?: string | null;
  service_address_line2?: string | null;
  service_city?: string | null;
  service_state?: string | null;
  service_postal_code?: string | null;
  requested_service_type?: string | null;
  has_pool?: boolean | null;
  has_spa?: boolean | null;
  pool_notes?: string | null;
  frustration_note?: string | null;
  preferred_contact_method?: LeadPreferredContactMethod | null;
  assigned_admin_user_id?: string | null;
  converted_customer_id?: string | null;
  lost_reason?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
