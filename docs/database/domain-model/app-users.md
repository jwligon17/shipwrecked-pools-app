# App Users Domain Model

## Purpose

`app_users` stores Shipwrecked app-level user profile records for all role-based experiences in one mobile app and internal operations:

- owner/admin
- technician
- customer
- household member
- commercial contact/export recipient
- system/service users where needed

This table is profile/identity metadata only and is intentionally separate from authentication implementation.

## Table

- Name: `app_users`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `auth_provider_user_id` text, nullable, unique when present.
- `primary_email` text, nullable.
- `primary_phone` text, nullable.
- `display_name` text, nullable.
- `first_name` text, nullable.
- `last_name` text, nullable.
- `status` text, required, default `invited`; allowed values: `invited`, `active`, `inactive`, `suspended`, `archived`.
- `preferred_contact_method` text, nullable; allowed values when present: `push`, `email`, `sms`, `phone`, `none`.
- `two_factor_required` boolean, required, default `false`.
- `two_factor_enabled` boolean, required, default `false`.
- `last_login_at` timestamptz, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Partial unique index on `auth_provider_user_id` where value is not null.
- Check constraint on `status`.
- Check constraint on `preferred_contact_method`.
- Index on `primary_email`.
- Index on `primary_phone`.
- Index on `status`.
- Trigger updates `updated_at` on every row update.

## Auth Separation

- `app_users` is not an auth-provider table.
- No password, hash, session token, or 2FA secret is stored here.
- Sprint 03 owns auth/session/permission enforcement.
- `auth_provider_user_id` allows future linking to Supabase/Firebase/custom auth identities without coupling this table to one provider.

## Future Role and Membership Relationship

- Role assignments and organization memberships are intentionally deferred to S02-003 and Sprint 03.
- `app_users` is the user-profile anchor that later role/membership tables can reference.

## Visibility and Privacy Considerations

- This model supports role-based user profiles while preserving future least-privilege enforcement in API guards.
- Sensitive financial and internal visibility boundaries remain enforced outside this table through role/membership + serializer logic.
- `metadata` is flexible but must respect `data-visibility-rules.md` and `permission-matrix.md` in downstream API surfaces.

## Intentional Non-Goals in S02-002

This pack does not implement:

- auth provider setup
- login/session/password/2FA behavior
- role membership tables
- customer/lead tables
- billing/payment/notification/report/route/job schema
- app/admin/API feature screens or endpoints
- live production database connections or secrets
