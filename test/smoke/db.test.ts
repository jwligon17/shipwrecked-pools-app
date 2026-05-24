import { describe, expect, it } from 'vitest';

import * as db from '../../packages/db/src/index';

describe('db package smoke', () => {
  it('exports a module surface', () => {
    expect(db).toBeTypeOf('object');
    expect(db.ORGANIZATIONS_TABLE).toBe('organizations');
    expect(db.ORGANIZATION_STATUSES).toContain('active');
    expect(db.ORGANIZATION_TYPES).toContain('shipwrecked_internal');
    expect(db.APP_USERS_TABLE).toBe('app_users');
    expect(db.APP_USER_STATUSES).toContain('invited');
    expect(db.APP_USER_PREFERRED_CONTACT_METHODS).toContain('push');
    expect(db.ORGANIZATION_MEMBERSHIPS_TABLE).toBe('organization_memberships');
    expect(db.ORGANIZATION_MEMBERSHIP_ROLES).toContain('technician');
    expect(db.ORGANIZATION_MEMBERSHIP_ADMIN_ROLES).toContain('owner');
    expect(db.ORGANIZATION_MEMBERSHIP_STATUSES).toContain('active');
    expect(db.LEADS_TABLE).toBe('leads');
    expect(db.LEAD_TYPES).toContain('commercial');
    expect(db.LEAD_STATUSES).toContain('qualified');
    expect(db.LEAD_SOURCES).toContain('website');
    expect(db.CUSTOMERS_TABLE).toBe('customers');
    expect(db.CUSTOMER_TYPES).toContain('commercial');
    expect(db.CUSTOMER_STATUSES).toContain('past_due');
    expect(db.CUSTOMER_ONBOARDING_STATUSES).toContain('in_progress');
    expect(db.CUSTOMER_BILLING_PROFILE_STATUSES).toContain('active');
    expect(db.HOUSEHOLD_MEMBERS_TABLE).toBe('household_members');
    expect(db.HOUSEHOLD_MEMBER_RELATIONSHIPS).toContain('spouse');
    expect(db.HOUSEHOLD_MEMBER_STATUSES).toContain('active');
    expect(db.HOUSEHOLD_MEMBER_ACCESS_LEVELS).toContain('manage_profile');
  });
});
