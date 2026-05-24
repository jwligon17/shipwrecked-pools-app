# Roles and Organization Memberships Domain Model

## Purpose

`organization_memberships` connects app users to organizations with role-based membership records.

This model is foundational for one-app role-based experiences across owner/admin, technician, customer, household member, commercial contact, export recipient, and system/service identities.

## Table

- Name: `organization_memberships`
- Primary key: `id` (UUID)

## Role Values

Membership `role` supports:

- `owner`
- `admin`
- `technician`
- `customer`
- `household_member`
- `commercial_contact`
- `export_recipient`
- `system`

## Membership Status Values

Membership `status` supports:

- `invited`
- `active`
- `inactive`
- `suspended`
- `revoked`

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `app_user_id` UUID, required, references `app_users(id)`.
- `role` text, required, constrained to supported role values.
- `status` text, required, default `invited`, constrained to supported status values.
- `is_primary` boolean, required, default `false`.
- `can_operate_as_technician` boolean, required, default `false`.
- `assigned_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `assigned_at` timestamptz, required, default `now()`.
- `revoked_at` timestamptz, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Partial unique index on `(organization_id, app_user_id, role)` where `deleted_at IS NULL`.
- Check constraint on `role`.
- Check constraint on `status`.
- Check constraint so `can_operate_as_technician` can only be `true` for `owner` or `admin` memberships.
- Index on `organization_id`.
- Index on `app_user_id`.
- Index on `role`.
- Index on `status`.
- Trigger updates `updated_at` on every row update.

## Protected Rule Alignment

- Owner/admin can have broader permissions and may operate in technician workflows.
- `can_operate_as_technician` represents that owner/admin-operational concept at membership level.
- Ordinary `technician` role membership does not imply billing/profitability or internal financial access.
- Customer, household member, commercial contact, and export recipient roles are represented for later scoped relationship models and guards.

## Permission Enforcement Scope

- This schema does not implement runtime authorization.
- Sprint 03 must enforce access controls through auth/permission guards and serializer boundaries.
- Future tests must explicitly verify technician financial denies, customer data isolation, household invitation scoping, and export-safe recipient visibility.

## Future Relationships

- Customer and household role memberships will later link to customer/household/property domain tables.
- Commercial contact and export recipient memberships will later link to commercial accounts, export request flows, and admin review gates.
- Assignment and audit workflows will later extend this foundation without changing protected role boundaries.

## Intentional Non-Goals in S02-003

This pack does not implement:

- auth guards or permission engine behavior
- login/session/password/2FA flows
- customer/property/household invitation schema
- billing/payment/notification/report/route/job schema
- app/admin/API feature screens or endpoints
- live production database connections or secrets
