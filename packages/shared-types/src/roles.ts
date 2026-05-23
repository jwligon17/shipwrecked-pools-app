export const USER_ROLES = [
  "owner",
  "admin",
  "technician",
  "customer",
  "household_member",
  "commercial_contact",
  "export_recipient",
  "system"
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const CUSTOMER_ACCOUNT_TYPES = ["residential", "commercial", "lead"] as const;

export type CustomerAccountType = (typeof CUSTOMER_ACCOUNT_TYPES)[number];

export const isUserRole = (value: string): value is UserRole => {
  return USER_ROLES.includes(value as UserRole);
};
