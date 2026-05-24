# Prompt Pack: S02-002 — Create User Profile Schema

## Pack Metadata

- **Pack ID:** S02-002
- **Title:** Create User Profile Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001
- **Blocks:** role memberships, technician users, customer accounts, household members, admin access, auth integration

## Goal

Create the application user profile schema without implementing authentication flows.

The user profile schema should support app users across all role-based experiences:

- owner/admin
- technician
- customer
- household member
- commercial contact/export recipient
- system/service user where appropriate

This pack creates the app-level user/profile data model only. It does not implement passwords, login, sessions, 2FA, or auth provider logic.

## Why This Matters

The app is a single mobile app with role-based experiences. Users need a stable app-level profile model that can later connect to an auth provider while preserving role/membership rules.


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
- `docs/product/feature-amendments.md`
- `docs/database/domain-model/organizations.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/README.md`
- `packages/shared-types/src/index.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0002_create_app_users.sql` or next correctly numbered migration
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/app-users.md`
- `docs/handoffs/S02-002-create-user-profile-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/*` if adding user status/type unions
- tests/smoke tests if applicable

## Files Codex Must Not Touch

Do not implement:

- auth provider
- password storage
- login/session logic
- 2FA logic
- role membership table
- customers/leads
- billing/payment
- app screens

Do not store raw passwords or secrets.

## Build Prompt For Codex

Execute S02-002 only.

Create the app user profile schema.

### Table naming

Prefer `app_users` to avoid confusion with reserved words or managed auth tables such as Supabase `auth.users`.

If existing docs already selected another table name, follow existing repo convention and document the choice.

### App user table

Create an `app_users` table.

It should include at minimum:

- `id` UUID primary key
- `auth_provider_user_id` text nullable, unique when present
- `primary_email` text nullable
- `primary_phone` text nullable
- `display_name` text nullable
- `first_name` text nullable
- `last_name` text nullable
- `status` text/check constraint with values such as:
  - `invited`
  - `active`
  - `inactive`
  - `suspended`
  - `archived`
- `preferred_contact_method` text nullable/check values:
  - `push`
  - `email`
  - `sms`
  - `phone`
  - `none`
- `two_factor_required` boolean default false
- `two_factor_enabled` boolean default false
- `last_login_at` timestamptz nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- unique auth provider user id where not null
- index on primary_email
- index on primary_phone
- index on status
- no raw password field

### Auth separation

Document clearly:

- `app_users` is not the auth provider.
- It does not store passwords.
- Auth implementation happens in Sprint 03.
- This table can later link to Supabase/Firebase/custom auth user IDs.
- Roles/permissions happen through memberships in S02-003/S03.

### TypeScript schema/types

Create schema exports for:

- user status
- preferred contact method
- AppUser row/interface/type
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/app-users.md` explaining:

- purpose
- fields
- auth separation
- future role/membership relationship
- household/customer/commercial contact support
- privacy considerations
- what this pack intentionally does not implement

### Tests/checks

Add safe import/smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-002.

Create S02-002 handoff.

## Acceptance Criteria

S02-002 is complete only if:

- App user profile migration/schema artifact exists.
- TypeScript user schema exports exist.
- Documentation explains auth separation.
- No password/session/login/2FA implementation exists.
- No role membership table is created yet.
- No customer/lead schema is created yet.
- No product feature UI or API endpoint is implemented.
- `STATUS_BOARD.md` has S02-002 implemented/self-reviewed.
- S02-002 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-002 before finalizing.

Check:

1. Did you create app user profile schema only?
2. Did you avoid password/auth/session implementation?
3. Did you avoid creating memberships/customers/leads early?
4. Does the schema support future role-based experiences?
5. Are privacy and auth separation documented?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-002 user profile schema"
```
