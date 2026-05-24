# Prompt Pack: S02-005 — Create Customer Schema

## Pack Metadata

- **Pack ID:** S02-005
- **Title:** Create Customer Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-003, S02-004
- **Blocks:** household members, properties, customer profiles, pool/water-body records, billing references, service scheduling, reports, quotes, commercial accounts

## Goal

Create the customer account schema for Shipwrecked Pools.

This schema should support residential and commercial customers, link to organizations, optionally link to a lead/app user, and preserve the customer/technician/admin visibility rules documented in the protected rules.

This pack should create the customer data model only. It should not implement customer screens, billing, service records, properties, household invitations, or lead conversion workflows.

## Why This Matters

The app is intended for both leads and active customers. A customer record becomes the central anchor for:

- properties
- household members
- commercial contacts
- pool/spa bodies of water
- service schedules
- reports
- chemistry history
- quotes/repairs/work orders
- master jobs
- billing references
- notification preferences
- chat/conversation history


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
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/app-users.md`
- `docs/database/domain-model/roles-and-memberships.md`
- `docs/database/domain-model/leads.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/organization-memberships.ts` if it exists
- `packages/db/src/schema/leads.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `packages/shared-types/src/index.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0005_create_customers.sql` or next correctly numbered migration
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/customers.md`
- `docs/handoffs/S02-005-create-customer-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify if needed:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- property table
- household member table
- water body table
- billing/payment tables
- service visits/reports
- lead-to-customer conversion logic
- customer UI
- admin dashboard
- API endpoints
- auth guards

Do not store real private customer data.

## Build Prompt For Codex

Execute S02-005 only.

Create the customer account schema.

### Customer table

Create a `customers` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `primary_app_user_id` UUID nullable references `app_users(id)`
- `source_lead_id` UUID nullable references `leads(id)`
- `customer_type` text/check constraint:
  - `residential`
  - `commercial`
- `status` text/check constraint:
  - `prospective`
  - `active`
  - `paused`
  - `past_due`
  - `inactive`
  - `cancelled`
  - `archived`
- `display_name` text not null
- `legal_name` text nullable
- `first_name` text nullable
- `last_name` text nullable
- `company_name` text nullable
- `primary_email` text nullable
- `primary_phone` text nullable
- `preferred_contact_method` text nullable/check if useful
- `default_service_schedule` text nullable/check if useful:
  - `weekly`
  - `biweekly`
  - `commercial_custom`
  - `as_needed`
  - `none`
- `onboarding_status` text/check constraint:
  - `not_started`
  - `in_progress`
  - `needs_review`
  - `complete`
- `billing_profile_status` text/check constraint:
  - `not_configured`
  - `pending`
  - `active`
  - `failed`
  - `external`
- `notes_customer_visible` text nullable
- `notes_internal_admin_only` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index `organization_id`
- index `status`
- index `customer_type`
- index `primary_app_user_id`
- index `source_lead_id`
- index `primary_email`
- index `primary_phone`
- index `created_at`
- optional unique constraint strategy only if safe; avoid overly strict uniqueness that would block shared emails/phones

### Protected rules to document

The customer schema documentation must make clear:

- customers see customer-friendly data only.
- technicians must not see billing status, profitability, internal financial notes, or customer financial details.
- `billing_profile_status` is admin/owner-visible and must not be exposed to technicians.
- internal/admin notes must not be customer-visible.
- customer-visible notes must be safe/plain language.
- commercial customers use the same core customer table with commercial-specific downstream contacts/exports handled later.
- household members are separate and should not be stored as ad hoc strings on customer records.
- properties are separate and should be created in S02-007.
- lead-to-customer conversion is planned but not implemented here.

### TypeScript schema/types

Create schema exports for:

- customer type values
- customer status values
- onboarding status values
- billing profile status values
- default service schedule values if used
- customer row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/customers.md`.

Include:

- purpose
- fields
- statuses
- residential vs commercial handling
- relationship to leads/users/memberships/properties
- visibility/privacy rules
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for customer schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-005.

Create S02-005 handoff.

## Acceptance Criteria

S02-005 is complete only if:

- Customer migration/schema artifact exists.
- Customer TypeScript schema exports exist.
- Customer domain documentation exists.
- Residential and commercial customers are supported.
- Lead/customer conversion is planned but not implemented.
- No property/household/billing/report/route tables are created.
- Technician financial visibility restrictions are documented.
- `STATUS_BOARD.md` has S02-005 implemented/self-reviewed.
- S02-005 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-005 before finalizing.

Check:

1. Did you create customer schema only?
2. Did you avoid property/household/billing/report/route tables?
3. Does the schema support residential and commercial customers?
4. Are internal notes and customer-visible notes separated?
5. Are technician financial restrictions documented?
6. Did you avoid implementing conversion, UI, API, auth, billing, or notifications?
7. Did you update status board and handoff?
8. Did you run checks or document limitations?
9. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-005 customer schema"
```
