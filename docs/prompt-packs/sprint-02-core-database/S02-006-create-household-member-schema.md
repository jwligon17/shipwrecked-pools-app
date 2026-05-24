# Prompt Pack: S02-006 — Create Household Member Schema

## Pack Metadata

- **Pack ID:** S02-006
- **Title:** Create Household Member Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-003, S02-005
- **Blocks:** customer household invites, spouse/resident access, notification preferences, customer profile management

## Goal

Create the household member schema for invited spouses/residents associated with a customer account.

This schema should preserve the protected rule that household members can only access invited household/location data, not unrelated customers or admin/technician data.

This pack creates the database/domain model only. It does not implement invite sending, auth, login, notification delivery, or customer UI.

## Why This Matters

Paul should be able to invite Megan or another resident to the same location/customer account. Household members may receive service/report notifications, view pool reports, ask questions, and see customer-facing information, but they must not gain unrelated access.

## Common Sprint 02 Scope Guard

Sprint 02 is the core database/domain-model sprint.

This pack may create database/domain schema artifacts, migration files, type exports, schema documentation, seed-shape notes, and tests/checks related to the specific domain object in this pack.

This pack must not implement:

- auth flows or login screens
- billing/payment logic
- notification delivery
- customer/technician/admin screens
- reports/routes/quotes/repairs/master jobs beyond references required for relational planning
- live production database connections
- real customer data
- real gate codes
- real payment information
- secrets

Do not run migrations against a live database unless the repo already has an explicit safe local/test migration workflow and the prompt pack requires it. Prefer creating migrations/schema files and running static checks/tests first.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/app-users.md`
- `docs/database/domain-model/roles-and-memberships.md`
- `docs/database/domain-model/customers.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/organization-memberships.ts` if it exists
- `packages/shared-types/src/roles.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0006_create_household_members.sql` or next correctly numbered migration
- `packages/db/src/schema/household-members.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/household-members.md`
- `docs/handoffs/S02-006-create-household-member-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- shared types/statuses if useful
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- actual invitation emails/SMS
- auth/login
- notification delivery
- customer UI
- household member screens
- property-specific access scoping beyond planned references
- billing/payment
- reports/routes

Do not create property table here.

## Build Prompt For Codex

Execute S02-006 only.

Create the household member schema.

### Table design

Create `household_members` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `app_user_id` UUID nullable references `app_users(id)`
- `invited_by_app_user_id` UUID nullable references `app_users(id)`
- `relationship` text/check constraint or free text nullable:
  - `spouse`
  - `resident`
  - `family_member`
  - `property_manager`
  - `other`
- `status` text/check constraint:
  - `invited`
  - `active`
  - `inactive`
  - `revoked`
  - `expired`
- `access_level` text/check constraint:
  - `view_only`
  - `standard`
  - `manage_profile`
- `can_receive_service_notifications` boolean default true
- `can_receive_billing_notifications` boolean default false
- `can_approve_quotes` boolean default false
- `can_manage_household_members` boolean default false
- `invite_email` text nullable
- `invite_phone` text nullable
- `invite_token_hash` text nullable
- `invite_expires_at` timestamptz nullable
- `accepted_at` timestamptz nullable
- `revoked_at` timestamptz nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index app_user_id
- index status
- index invite_email
- index invite_phone
- unique active membership strategy if safe, such as `(customer_id, app_user_id)` where app_user_id is not null and deleted_at is null
- do not store raw invite token if possible; use hash placeholder field only

### Visibility rules

Document:

- household members only see invited customer/location data.
- household members do not see admin-only notes.
- household members do not see technician-only operational notes unless customer-visible.
- billing access should be false by default unless future rules explicitly allow it.
- quote approval access should be false by default unless customer grants it.
- implementation of actual access guards happens later.

### TypeScript schema/types

Create exports for:

- household relationship values
- household member status values
- household access levels
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/household-members.md`.

Include:

- purpose
- fields
- status lifecycle
- permissions defaults
- relationship to customers/app users
- invite-token safety
- what this pack intentionally does not implement

### Tests/checks

Add safe smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-006.

Create S02-006 handoff.

## Acceptance Criteria

S02-006 is complete only if:

- Household member migration/schema artifact exists.
- TypeScript schema exports exist.
- Documentation exists.
- Household access boundaries are documented.
- Invite token is not stored raw.
- Billing/quote approval defaults are conservative.
- No property table, invite delivery, auth, UI, notifications, or billing implementation is added.
- `STATUS_BOARD.md` has S02-006 implemented/self-reviewed.
- S02-006 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-006 before finalizing.

Check:

1. Did you create household member schema only?
2. Did you avoid invite delivery/auth/UI/notifications?
3. Are access defaults conservative?
4. Is household access limited to invited customer/location?
5. Is raw invite token storage avoided?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-006 household member schema"
```
