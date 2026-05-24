export const HOUSEHOLD_MEMBERS_TABLE = 'household_members' as const;

export const HOUSEHOLD_MEMBER_RELATIONSHIPS = [
  'spouse',
  'resident',
  'family_member',
  'property_manager',
  'other',
] as const;
export type HouseholdMemberRelationship = (typeof HOUSEHOLD_MEMBER_RELATIONSHIPS)[number];

export const HOUSEHOLD_MEMBER_STATUSES = [
  'invited',
  'active',
  'inactive',
  'revoked',
  'expired',
] as const;
export type HouseholdMemberStatus = (typeof HOUSEHOLD_MEMBER_STATUSES)[number];

export const HOUSEHOLD_MEMBER_ACCESS_LEVELS = ['view_only', 'standard', 'manage_profile'] as const;
export type HouseholdMemberAccessLevel = (typeof HOUSEHOLD_MEMBER_ACCESS_LEVELS)[number];

export interface HouseholdMemberRow {
  id: string;
  organization_id: string;
  customer_id: string;
  app_user_id: string | null;
  invited_by_app_user_id: string | null;
  relationship: HouseholdMemberRelationship | null;
  status: HouseholdMemberStatus;
  access_level: HouseholdMemberAccessLevel;
  can_receive_service_notifications: boolean;
  can_receive_billing_notifications: boolean;
  can_approve_quotes: boolean;
  can_manage_household_members: boolean;
  invite_email: string | null;
  invite_phone: string | null;
  invite_token_hash: string | null;
  invite_expires_at: string | null;
  accepted_at: string | null;
  revoked_at: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface HouseholdMemberInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  app_user_id?: string | null;
  invited_by_app_user_id?: string | null;
  relationship?: HouseholdMemberRelationship | null;
  status?: HouseholdMemberStatus;
  access_level?: HouseholdMemberAccessLevel;
  can_receive_service_notifications?: boolean;
  can_receive_billing_notifications?: boolean;
  can_approve_quotes?: boolean;
  can_manage_household_members?: boolean;
  invite_email?: string | null;
  invite_phone?: string | null;
  invite_token_hash?: string | null;
  invite_expires_at?: string | null;
  accepted_at?: string | null;
  revoked_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface HouseholdMemberUpdate {
  app_user_id?: string | null;
  invited_by_app_user_id?: string | null;
  relationship?: HouseholdMemberRelationship | null;
  status?: HouseholdMemberStatus;
  access_level?: HouseholdMemberAccessLevel;
  can_receive_service_notifications?: boolean;
  can_receive_billing_notifications?: boolean;
  can_approve_quotes?: boolean;
  can_manage_household_members?: boolean;
  invite_email?: string | null;
  invite_phone?: string | null;
  invite_token_hash?: string | null;
  invite_expires_at?: string | null;
  accepted_at?: string | null;
  revoked_at?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
