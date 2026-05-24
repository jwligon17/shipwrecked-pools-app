# Prompt Pack: S02-008 — Create Access and Gate Code Schema

## Pack Metadata

- **Pack ID:** S02-008
- **Title:** Create Access and Gate Code Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-003, S02-005, S02-007
- **Blocks:** technician route workflow, property access reminders, gate arrival/departure requirements, audit logging, pet/access workflows

## Goal

Create the access instructions and gate code schema for properties.

This schema should support technician access needs while preserving the protected rule that gate code access is sensitive and auditable.

This pack creates database/domain artifacts only. It does not implement encryption, access UI, audit log table, route workflows, or notification logic yet.

## Why This Matters

Technicians need operational access details to service pools safely and efficiently:

- gate codes
- lockbox notes
- gate location
- dog/pet warnings
- customer access preferences
- arrival reminders
- one-time or repeatable access notes

But gate/access data is sensitive. It should not be broadly visible or accidentally exposed to customers, commercial export recipients, or unrelated technicians.


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
- `docs/database/domain-model/roles-and-memberships.md`
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/properties.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0008_create_property_access.sql` or next correctly numbered migration
- `packages/db/src/schema/property-access.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/property-access.md`
- `docs/handoffs/S02-008-create-access-gate-code-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- shared types/statuses if useful
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- encryption service
- audit log table
- route workflow
- technician UI
- customer UI
- pet schema
- notifications
- live DB connections

Do not store real gate codes.

## Build Prompt For Codex

Execute S02-008 only.

Create the property access/gate code schema.

### Important security note

This pack may model where access/gate data will live, but it must not implement a full secrets/encryption system unless the repo already has a safe standard.

If storing a gate code field, name/document it in a way that makes clear it must be encrypted/secured before production.

Prefer fields such as:

- `gate_code_encrypted`
- `gate_code_last_four`
- `access_secret_label`

Do not store demo real gate codes.

### Tables

Create one or both tables if justified:

#### `property_access_profiles`

For stable access instructions tied to a property.

Fields should include:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `property_id` UUID not null references `properties(id)`
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `archived`
- `access_type` text/check constraint:
  - `gate_code`
  - `lockbox`
  - `key`
  - `open_access`
  - `call_customer`
  - `other`
- `gate_code_encrypted` text nullable
- `gate_code_last_four` text nullable
- `lockbox_location` text nullable
- `gate_location` text nullable
- `access_instructions_technician_visible` text nullable
- `access_instructions_internal_admin_only` text nullable
- `customer_visible_access_note` text nullable
- `requires_customer_confirmation` boolean default false
- `technician_ack_required` boolean default false
- `valid_from` timestamptz nullable
- `valid_until` timestamptz nullable
- `created_by_app_user_id` UUID nullable references `app_users(id)`
- `updated_by_app_user_id` UUID nullable references `app_users(id)`
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

#### `property_access_alerts`

For one-time/repeatable arrival alerts, if appropriate for this pack or documented for a later alert pack.

Fields may include:

- `id`
- `organization_id`
- `property_id`
- `status`
- `alert_title`
- `alert_body`
- `visibility`:
  - `technician_internal`
  - `admin_only`
- `repeat_mode`:
  - `one_time`
  - `every_visit`
  - `until_resolved`
  - `date_limited`
- `ack_required` boolean default true
- `starts_at`
- `ends_at`
- `resolved_at`
- timestamps

If you choose not to create `property_access_alerts` yet, document that it will be handled by the technician arrival-alert schema pack later. Do not overbuild beyond the pack scope.

### Visibility and audit requirements

Document:

- gate code/access secrets are sensitive.
- assigned technicians may access operational access info only for assigned work.
- customers do not need to see encrypted/internal access fields.
- commercial export recipients must not receive gate codes.
- access views must be audited later.
- audit table is not implemented in this pack unless already available.
- API guards in later sprints must enforce role/assignment access.

### TypeScript schema/types

Create exports for:

- access profile status values
- access type values
- access alert status/repeat values if created
- row/interface types
- table name constants

### Documentation

Create `docs/database/domain-model/property-access.md`.

Include:

- purpose
- fields
- security concerns
- encryption/secrets note
- technician/customer/admin visibility
- commercial export exclusion
- future audit logging
- what this pack intentionally does not implement

### Tests/checks

Add safe smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-008.

Create S02-008 handoff.

## Acceptance Criteria

S02-008 is complete only if:

- Property access/gate code migration/schema artifact exists.
- TypeScript schema exports exist.
- Documentation exists.
- Sensitive access/gate handling is clearly documented.
- Commercial export exclusion is documented.
- Audit requirement is documented.
- No live encryption/auth/UI/route/notification/audit implementation is added.
- No real gate codes are added.
- `STATUS_BOARD.md` has S02-008 implemented/self-reviewed.
- S02-008 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-008 before finalizing.

Check:

1. Did you create access/gate schema only?
2. Did you avoid real gate codes?
3. Did you avoid implementing encryption service, UI, routes, notifications, or audit table unless explicitly justified?
4. Are sensitive visibility rules documented?
5. Are commercial export exclusions documented?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-008 access and gate code schema"
```
