export const CUSTOMERS_TABLE = 'customers' as const;

export const CUSTOMER_TYPES = ['residential', 'commercial'] as const;
export type CustomerType = (typeof CUSTOMER_TYPES)[number];

export const CUSTOMER_STATUSES = [
  'prospective',
  'active',
  'paused',
  'past_due',
  'inactive',
  'cancelled',
  'archived',
] as const;
export type CustomerStatus = (typeof CUSTOMER_STATUSES)[number];

export const CUSTOMER_PREFERRED_CONTACT_METHODS = [
  'push',
  'email',
  'sms',
  'phone',
  'none',
] as const;
export type CustomerPreferredContactMethod = (typeof CUSTOMER_PREFERRED_CONTACT_METHODS)[number];

export const CUSTOMER_DEFAULT_SERVICE_SCHEDULES = [
  'weekly',
  'biweekly',
  'commercial_custom',
  'as_needed',
  'none',
] as const;
export type CustomerDefaultServiceSchedule = (typeof CUSTOMER_DEFAULT_SERVICE_SCHEDULES)[number];

export const CUSTOMER_ONBOARDING_STATUSES = [
  'not_started',
  'in_progress',
  'needs_review',
  'complete',
] as const;
export type CustomerOnboardingStatus = (typeof CUSTOMER_ONBOARDING_STATUSES)[number];

export const CUSTOMER_BILLING_PROFILE_STATUSES = [
  'not_configured',
  'pending',
  'active',
  'failed',
  'external',
] as const;
export type CustomerBillingProfileStatus = (typeof CUSTOMER_BILLING_PROFILE_STATUSES)[number];

export interface CustomerRow {
  id: string;
  organization_id: string;
  primary_app_user_id: string | null;
  source_lead_id: string | null;
  customer_type: CustomerType;
  status: CustomerStatus;
  display_name: string;
  legal_name: string | null;
  first_name: string | null;
  last_name: string | null;
  company_name: string | null;
  primary_email: string | null;
  primary_phone: string | null;
  preferred_contact_method: CustomerPreferredContactMethod | null;
  default_service_schedule: CustomerDefaultServiceSchedule | null;
  onboarding_status: CustomerOnboardingStatus;
  billing_profile_status: CustomerBillingProfileStatus;
  notes_customer_visible: string | null;
  notes_internal_admin_only: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface CustomerInsert {
  id: string;
  organization_id: string;
  primary_app_user_id?: string | null;
  source_lead_id?: string | null;
  customer_type: CustomerType;
  status?: CustomerStatus;
  display_name: string;
  legal_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  primary_email?: string | null;
  primary_phone?: string | null;
  preferred_contact_method?: CustomerPreferredContactMethod | null;
  default_service_schedule?: CustomerDefaultServiceSchedule | null;
  onboarding_status?: CustomerOnboardingStatus;
  billing_profile_status?: CustomerBillingProfileStatus;
  notes_customer_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface CustomerUpdate {
  primary_app_user_id?: string | null;
  source_lead_id?: string | null;
  customer_type?: CustomerType;
  status?: CustomerStatus;
  display_name?: string;
  legal_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  primary_email?: string | null;
  primary_phone?: string | null;
  preferred_contact_method?: CustomerPreferredContactMethod | null;
  default_service_schedule?: CustomerDefaultServiceSchedule | null;
  onboarding_status?: CustomerOnboardingStatus;
  billing_profile_status?: CustomerBillingProfileStatus;
  notes_customer_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
