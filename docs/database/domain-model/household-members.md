# Household Members Domain Model

## Purpose

`household_members` stores invited household participants (for example spouse/resident/family member) tied to a specific customer account.

This table allows invite-first membership records before account acceptance while preserving strict customer-scoped visibility boundaries.

## Table

- Name: `household_members`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `app_user_id` UUID, nullable, references `app_users(id)` (nullable while invite is pending acceptance).
- `invited_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `relationship` text, nullable; allowed values when present: `spouse`, `resident`, `family_member`, `property_manager`, `other`.
- `status` text, required, default `invited`; allowed values: `invited`, `active`, `inactive`, `revoked`, `expired`.
- `access_level` text, required, default `standard`; allowed values: `view_only`, `standard`, `manage_profile`.
- `can_receive_service_notifications` boolean, required, default `true`.
- `can_receive_billing_notifications` boolean, required, default `false`.
- `can_approve_quotes` boolean, required, default `false`.
- `can_manage_household_members` boolean, required, default `false`.
- `invite_email` text, nullable.
- `invite_phone` text, nullable.
- `invite_token_hash` text, nullable. Raw invite tokens are intentionally not stored.
- `invite_expires_at` timestamptz, nullable.
- `accepted_at` timestamptz, nullable.
- `revoked_at` timestamptz, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `relationship`.
- Check constraint on `status`.
- Check constraint on `access_level`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `app_user_id`.
- Index on `status`.
- Index on `invite_email`.
- Index on `invite_phone`.
- Partial unique index on `(customer_id, app_user_id)` where:
  - `app_user_id IS NOT NULL`
  - `status = 'active'`
  - `deleted_at IS NULL`

## Status Lifecycle

- `invited`: invite record exists and can be accepted before expiry.
- `active`: accepted and currently active for customer-scoped visibility/actions.
- `inactive`: temporarily disabled without full revocation.
- `revoked`: access explicitly revoked.
- `expired`: invite expired before acceptance.

## Access Defaults and Visibility Boundaries

- Household members are scoped to invited customer/location context only.
- Household members must not access unrelated customers.
- Household members must not see admin-only internal notes.
- Household members must not see technician-only operational notes unless separately exposed as customer-visible content.
- `can_receive_billing_notifications` defaults to `false`.
- `can_approve_quotes` defaults to `false`.
- Runtime enforcement is deferred to Sprint 03 auth/permission guards and API serializer tests.

## Relationship to Customers and App Users

- `customer_id` anchors each household member to a single customer account.
- `app_user_id` is nullable to support invite-first onboarding prior to user acceptance.
- `invited_by_app_user_id` supports inviter traceability and future audit-event integration.

## Invite Token Safety

- Invite token persistence is hash-only (`invite_token_hash`).
- Raw invite tokens are intentionally not modeled or stored.

## Intentional Non-Goals in S02-006

This pack does not implement:

- invitation email/SMS delivery
- invite acceptance UX/auth flow/session behavior
- permission guard enforcement logic
- notification delivery pipelines
- property schema or property-level gate/access schema
- route/report/quote/repair/billing implementations
- app/admin/API screens or endpoints
- live production database connections or secrets
