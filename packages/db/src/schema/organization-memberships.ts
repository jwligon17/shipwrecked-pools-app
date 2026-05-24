import type { OrganizationMembershipRole } from './roles';

export const ORGANIZATION_MEMBERSHIPS_TABLE = 'organization_memberships' as const;

export const ORGANIZATION_MEMBERSHIP_STATUSES = [
  'invited',
  'active',
  'inactive',
  'suspended',
  'revoked',
] as const;

export type OrganizationMembershipStatus = (typeof ORGANIZATION_MEMBERSHIP_STATUSES)[number];

export interface OrganizationMembershipRow {
  id: string;
  organization_id: string;
  app_user_id: string;
  role: OrganizationMembershipRole;
  status: OrganizationMembershipStatus;
  is_primary: boolean;
  can_operate_as_technician: boolean;
  assigned_by_app_user_id: string | null;
  assigned_at: string;
  revoked_at: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface OrganizationMembershipInsert {
  id: string;
  organization_id: string;
  app_user_id: string;
  role: OrganizationMembershipRole;
  status?: OrganizationMembershipStatus;
  is_primary?: boolean;
  can_operate_as_technician?: boolean;
  assigned_by_app_user_id?: string | null;
  assigned_at?: string;
  revoked_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface OrganizationMembershipUpdate {
  role?: OrganizationMembershipRole;
  status?: OrganizationMembershipStatus;
  is_primary?: boolean;
  can_operate_as_technician?: boolean;
  assigned_by_app_user_id?: string | null;
  assigned_at?: string;
  revoked_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
