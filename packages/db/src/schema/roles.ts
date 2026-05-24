export const ORGANIZATION_MEMBERSHIP_ROLES = [
  'owner',
  'admin',
  'technician',
  'customer',
  'household_member',
  'commercial_contact',
  'export_recipient',
  'system',
] as const;

export type OrganizationMembershipRole = (typeof ORGANIZATION_MEMBERSHIP_ROLES)[number];

export const ORGANIZATION_MEMBERSHIP_ADMIN_ROLES = ['owner', 'admin'] as const;

export type OrganizationMembershipAdminRole = (typeof ORGANIZATION_MEMBERSHIP_ADMIN_ROLES)[number];

export const ORGANIZATION_MEMBERSHIP_OPERATIONAL_ROLES = ['owner', 'admin', 'technician'] as const;

export type OrganizationMembershipOperationalRole =
  (typeof ORGANIZATION_MEMBERSHIP_OPERATIONAL_ROLES)[number];

export const ORGANIZATION_MEMBERSHIP_CUSTOMER_SCOPED_ROLES = [
  'customer',
  'household_member',
  'commercial_contact',
  'export_recipient',
] as const;

export type OrganizationMembershipCustomerScopedRole =
  (typeof ORGANIZATION_MEMBERSHIP_CUSTOMER_SCOPED_ROLES)[number];
