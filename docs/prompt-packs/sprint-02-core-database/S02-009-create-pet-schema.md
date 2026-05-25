# Prompt Pack: S02-009 — Create Pet Schema

## Pack Metadata

- **Pack ID:** S02-009
- **Title:** Create Pet Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-008
- **Blocks:** technician arrival reminders, customer pet profile, dog treat permission, access notes, route/service workflows

## Goal

Create the pet schema for customer/property pets, especially dogs, including dog treat permission and technician-facing safety/access notes.

This schema supports the customer app profile experience and the technician arrival workflow without implementing app screens, notifications, route workflows, or arrival popups yet.

## Why This Matters

Shipwrecked wants customers to add their dog profile and indicate whether the technician may give their dog a treat. Pet data is also operationally important because technicians need to know whether a dog may be outside, aggressive, friendly, or needs special handling.

Pet data must be separated from general property notes so it can be shown clearly and safely to assigned technicians later.

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
- `docs/database/domain-model/app-users.md`
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/properties.md`
- `docs/database/domain-model/property-access.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/property-access.ts` if it exists
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `packages/shared-types/src/statuses.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0009_create_pets.sql` or next correctly numbered migration
- `packages/db/src/schema/pets.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/pets.md`
- `docs/handoffs/S02-009-create-pet-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- customer pet profile UI
- technician arrival popup UI
- route workflow
- notifications
- pet photo uploads
- service reports
- access alerts beyond planned references
- auth/permission guards

Do not include real pet/customer data.

## Build Prompt For Codex

Execute S02-009 only.

Create the pet schema.

### Pet table

Create a `pets` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID nullable references `properties(id)`
- `name` text not null
- `pet_type` text/check constraint:
  - `dog`
  - `cat`
  - `other`
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `archived`
- `temperament` text/check constraint nullable:
  - `friendly`
  - `barks`
  - `nervous`
  - `aggressive`
  - `unknown`
  - `other`
- `treat_allowed` boolean default false
- `treat_notes` text nullable
- `technician_visible_notes` text nullable
- `internal_admin_notes` text nullable
- `customer_visible_notes` text nullable
- `must_secure_before_entry` boolean default false
- `notify_customer_before_entry` boolean default false
- `last_confirmed_at` timestamptz nullable
- `confirmed_by_app_user_id` UUID nullable references `app_users(id)`
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_id
- index status
- index pet_type
- index treat_allowed
- index must_secure_before_entry

### Visibility rules

Document:

- customers can see/edit their own customer-facing pet profile fields later.
- technicians may later see assigned-work pet name, temperament, treat permission, must-secure flag, and technician-visible notes.
- technicians must not see internal admin notes.
- commercial export recipients must not receive pet notes.
- pet notes must not contain gate codes or access secrets.
- actual enforcement happens later through S03 auth/permission guards and API tests.

### TypeScript schema/types

Create exports for:

- pet type values
- pet status values
- pet temperament values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/pets.md`.

Include:

- purpose
- fields
- dog treat permission
- technician safety/use case
- relationship to customers/properties
- visibility rules
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for pet schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-009.

Create S02-009 handoff.

## Acceptance Criteria

S02-009 is complete only if:

- Pet migration/schema artifact exists.
- TypeScript schema exports exist.
- Pet domain documentation exists.
- Dog treat permission is represented.
- Technician/customer/internal note visibility is separated.
- No pet UI, route workflow, notification delivery, access alert implementation, or auth guard is added.
- `STATUS_BOARD.md` has S02-009 implemented/self-reviewed.
- S02-009 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-009 before finalizing.

Check:

1. Did you create pet schema only?
2. Did you include dog treat permission and technician safety fields?
3. Did you separate customer-visible, technician-visible, and internal admin notes?
4. Did you avoid route/UI/notification/auth implementation?
5. Did you avoid real pet/customer data?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-009 pet schema"
```
