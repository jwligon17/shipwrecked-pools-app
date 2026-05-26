# Prompt Pack: S02-017 — Create Service Visit Schema

## Pack Metadata

- **Pack ID:** S02-017
- **Title:** Create Service Visit Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-010, S02-015, S02-016
- **Blocks:** checklist records, photos, chemistry readings, weekly maintenance reports, technician visit workflow, customer service history

## Goal

Create the service visit schema for actual service work performed at a customer property.

This schema should support weekly/biweekly maintenance visits and future attached repair/green-to-clean/commercial visit types, while keeping service visit completion separate from repair/work-order completion.

This pack creates service visit database/domain artifacts only. It does not implement checklist items, photos, chemistry, reports, route UI, technician workflow, notifications, or API endpoints.

## Why This Matters

A service visit is the core operational record behind “Paul gets serviced.” It is where route stops, technician arrival/completion times, service type, visit status, and customer-safe summary metadata begin before later packs attach checklists, photos, chemistry, and reports.

## Common Sprint 02 Scope Guard

Sprint 02 is the core database/domain-model sprint.

This pack may create database/domain schema artifacts, migration files, type exports, schema documentation, seed-shape notes, and tests/checks related to the specific domain object in this pack.

This pack must not implement:

- auth flows or login screens
- billing/payment logic
- notification delivery
- customer/technician/admin screens
- report generation logic beyond references required for relational planning
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
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/properties.md`
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/routes.md`
- `docs/database/domain-model/route-stops.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/routes.ts`
- `packages/db/src/schema/route-stops.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0017_create_service_visits.sql` or next correctly numbered migration
- `packages/db/src/schema/service-visits.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/service-visits.md`
- `docs/handoffs/S02-017-create-service-visit-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- checklist schema
- photo schema
- chemistry schema
- report schema
- repair/work-order schema
- notifications
- route UI or technician workflow
- API endpoints or auth guards
- billing/payment

## Build Prompt For Codex

Execute S02-017 only.

Create the service visit schema.

### Service visits table

Create a `service_visits` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `route_id` UUID nullable references `routes(id)`
- `route_stop_id` UUID nullable references `route_stops(id)`
- `assigned_technician_app_user_id` UUID nullable references `app_users(id)`
- `visit_date` date not null
- `visit_type` text/check constraint:
  - `weekly_maintenance`
  - `biweekly_maintenance`
  - `one_time_maintenance`
  - `repair`
  - `green_to_clean`
  - `acid_wash`
  - `drain_and_refill`
  - `commercial_service`
  - `inspection`
  - `other`
- `status` text/check constraint:
  - `scheduled`
  - `on_the_way`
  - `arrived`
  - `in_progress`
  - `completed`
  - `skipped`
  - `cancelled`
  - `rescheduled`
  - `needs_admin_review`
- `scheduled_start_at` timestamptz nullable
- `scheduled_end_at` timestamptz nullable
- `on_the_way_at` timestamptz nullable
- `arrived_at` timestamptz nullable
- `started_at` timestamptz nullable
- `completed_at` timestamptz nullable
- `skipped_at` timestamptz nullable
- `skip_reason` text/check constraint nullable:
  - `gate_locked`
  - `aggressive_dog`
  - `weather`
  - `customer_requested_reschedule`
  - `unsafe_conditions`
  - `equipment_issue`
  - `other`
- `completion_source` text/check constraint nullable:
  - `technician`
  - `admin`
  - `system`
- `customer_visible_summary` text nullable
- `technician_visible_notes` text nullable
- `internal_admin_notes` text nullable
- `requires_admin_review` boolean default false
- `is_billable` boolean default false
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_id
- index route_id
- index route_stop_id
- index assigned_technician_app_user_id
- index visit_date
- index visit_type
- index status
- index completed_at
- index requires_admin_review

### Documentation requirements

Document:

- weekly/biweekly maintenance visits are service visits, not master jobs.
- future repair/work-order completion must be tracked separately from weekly maintenance completion.
- technician service completion restriction from 9 PM to 8 AM is enforced later in workflow/business logic, not by this table.
- route stop progression and service visit completion are related but distinct.
- checklists, photos, chemistry, and reports are later packs.
- customers see only customer-safe visit summary/status.
- internal/admin notes must never be customer-visible.

### TypeScript schema/types

Create exports for:

- service visit type values
- service visit status values
- skip reason values
- completion source values
- row/interface
- insert/update shapes if useful
- table name constant

### Tests/checks

Add/update safe smoke tests for service visit schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-017.

Create S02-017 handoff.

## Acceptance Criteria

S02-017 is complete only if:

- Service visit migration/schema artifact exists.
- TypeScript schema exports exist.
- Service visit domain documentation exists.
- Visit lifecycle and route/route-stop relationships are represented.
- Checklist/photo/chemistry/report/work-order implementation is not created.
- Customer/technician/internal visibility is documented.
- `STATUS_BOARD.md` has S02-017 implemented/self-reviewed.
- S02-017 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-017 before finalizing.

Check:

1. Did you create service visit schema only?
2. Did you avoid checklist/photo/chemistry/report/work-order implementation?
3. Does the schema link routes, route stops, customers, properties, and technicians?
4. Are customer/technician/internal notes separated?
5. Are maintenance visit completion and repair/work-order completion documented as separate concepts?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-017 service visit schema"
```
