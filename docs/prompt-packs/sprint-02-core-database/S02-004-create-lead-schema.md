# Prompt Pack: S02-004 — Create Lead Schema

## Pack Metadata

- **Pack ID:** S02-004
- **Title:** Create Lead Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-003
- **Blocks:** lead onboarding, lead-to-customer conversion, customer schema, CRM, admin dashboard lead management

## Goal

Create the lead schema for non-customer prospects who contact Shipwrecked Pools or create an app account before becoming ongoing maintenance customers.

This should support the V1 direction that the first live version serves both customers and leads.

## Why This Matters

Paul’s journey begins when he hears about Shipwrecked, contacts the company for ongoing maintenance, and eventually joins the app. The system needs a clean way to represent prospects before they become active customers.

Lead data must be useful for admin review and future conversion but must not expose private operational data or customer-only service history.


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
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/app-users.md`
- `docs/database/domain-model/roles-and-memberships.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/organization-memberships.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0004_create_leads.sql` or next correctly numbered migration
- `packages/db/src/schema/leads.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/leads.md`
- `docs/handoffs/S02-004-create-lead-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- tests/smoke tests if applicable

## Files Codex Must Not Touch

Do not implement:

- customer table
- property table
- lead conversion workflow
- admin lead dashboard
- app onboarding screens
- email/SMS automation
- billing/auth implementation

Do not store real private data.

## Build Prompt For Codex

Execute S02-004 only.

Create the lead schema.

### Lead table

Create a `leads` table.

It should include:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `app_user_id` UUID nullable references `app_users(id)`
- `lead_type` text/check constraint:
  - `residential`
  - `commercial`
  - `unknown`
- `status` text/check constraint:
  - `new`
  - `contacted`
  - `needs_review`
  - `qualified`
  - `quoted`
  - `converted`
  - `lost`
  - `archived`
- `source` text nullable:
  - website
  - referral
  - phone
  - app
  - manual
  - other
- `first_name` text nullable
- `last_name` text nullable
- `company_name` text nullable
- `email` text nullable
- `phone` text nullable
- `service_address_line1` text nullable
- `service_address_line2` text nullable
- `service_city` text nullable
- `service_state` text nullable
- `service_postal_code` text nullable
- `requested_service_type` text nullable
- `has_pool` boolean nullable
- `has_spa` boolean nullable
- `pool_notes` text nullable
- `frustration_note` text nullable
- `preferred_contact_method` text nullable/check if useful
- `assigned_admin_user_id` UUID nullable references `app_users(id)`
- `converted_customer_id` UUID nullable
  - do not add FK yet if customer table does not exist
  - document that it will be linked in the customer schema/conversion pack
- `lost_reason` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index status
- index lead_type
- index email
- index phone
- index created_at
- optional index assigned_admin_user_id

### Privacy / visibility

Document:

- leads can access only their own lead/app onboarding data.
- leads do not see customer reports, routes, chemistry, billing, or technician data.
- admins can review leads.
- technicians should not see leads unless later explicitly assigned for inspection/quote visit.
- commercial lead data should not be exported to health departments until it becomes an approved commercial account/export flow.

### Conversion planning

Do not implement conversion yet.

Document future conversion path:

- lead -> customer
- lead address -> property
- lead pool notes -> water body intake
- lead app user -> customer membership
- lead quote/request -> quote workflow later

### TypeScript schema/types

Create exports for:

- lead type values
- lead status values
- lead source values
- lead row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/leads.md`.

Include:

- purpose
- fields
- statuses
- privacy/access rules
- lead-to-customer conversion notes
- residential vs commercial lead handling
- what this pack intentionally does not implement

### Tests/checks

Add safe import/smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-004.

Create S02-004 handoff.

## Acceptance Criteria

S02-004 is complete only if:

- Lead migration/schema artifact exists.
- Lead TypeScript schema exports exist.
- Lead documentation exists.
- Lead/customer conversion is planned but not implemented.
- No customer/property table is created yet.
- No admin dashboard/app screen is implemented.
- Privacy rules for leads are documented.
- `STATUS_BOARD.md` has S02-004 implemented/self-reviewed.
- S02-004 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-004 before finalizing.

Check:

1. Did you create lead schema only?
2. Did you avoid customer/property/conversion implementation?
3. Does the schema support residential and commercial leads?
4. Are lead privacy/visibility boundaries documented?
5. Did you avoid admin UI/app onboarding features?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-004 lead schema"
```
