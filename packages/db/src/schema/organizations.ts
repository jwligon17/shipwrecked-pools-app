export const ORGANIZATIONS_TABLE = 'organizations' as const;

export const ORGANIZATION_STATUSES = ['active', 'inactive', 'suspended', 'archived'] as const;

export type OrganizationStatus = (typeof ORGANIZATION_STATUSES)[number];

export const ORGANIZATION_TYPES = [
  'shipwrecked_internal',
  'service_business',
  'future_saas_tenant',
] as const;

export type OrganizationType = (typeof ORGANIZATION_TYPES)[number];

export interface OrganizationRow {
  id: string;
  name: string;
  slug: string;
  legal_name: string | null;
  status: OrganizationStatus;
  organization_type: OrganizationType;
  timezone: string;
  primary_locale: string;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface OrganizationInsert {
  id: string;
  name: string;
  slug: string;
  legal_name?: string | null;
  status?: OrganizationStatus;
  organization_type?: OrganizationType;
  timezone?: string;
  primary_locale?: string;
  settings?: Record<string, unknown>;
}

export interface OrganizationUpdate {
  name?: string;
  slug?: string;
  legal_name?: string | null;
  status?: OrganizationStatus;
  organization_type?: OrganizationType;
  timezone?: string;
  primary_locale?: string;
  settings?: Record<string, unknown>;
  deleted_at?: string | null;
}
