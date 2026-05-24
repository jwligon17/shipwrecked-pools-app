export const APP_USERS_TABLE = 'app_users' as const;

export const APP_USER_STATUSES = [
  'invited',
  'active',
  'inactive',
  'suspended',
  'archived',
] as const;

export type AppUserStatus = (typeof APP_USER_STATUSES)[number];

export const APP_USER_PREFERRED_CONTACT_METHODS = [
  'push',
  'email',
  'sms',
  'phone',
  'none',
] as const;

export type AppUserPreferredContactMethod = (typeof APP_USER_PREFERRED_CONTACT_METHODS)[number];

export interface AppUserRow {
  id: string;
  auth_provider_user_id: string | null;
  primary_email: string | null;
  primary_phone: string | null;
  display_name: string | null;
  first_name: string | null;
  last_name: string | null;
  status: AppUserStatus;
  preferred_contact_method: AppUserPreferredContactMethod | null;
  two_factor_required: boolean;
  two_factor_enabled: boolean;
  last_login_at: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface AppUserInsert {
  id: string;
  auth_provider_user_id?: string | null;
  primary_email?: string | null;
  primary_phone?: string | null;
  display_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  status?: AppUserStatus;
  preferred_contact_method?: AppUserPreferredContactMethod | null;
  two_factor_required?: boolean;
  two_factor_enabled?: boolean;
  last_login_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface AppUserUpdate {
  auth_provider_user_id?: string | null;
  primary_email?: string | null;
  primary_phone?: string | null;
  display_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  status?: AppUserStatus;
  preferred_contact_method?: AppUserPreferredContactMethod | null;
  two_factor_required?: boolean;
  two_factor_enabled?: boolean;
  last_login_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
