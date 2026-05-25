# Prompt Pack: S02-016 — Create Route Stop Schema

## Pack Metadata

- **Pack ID:** S02-016
- **Title:** Create Route Stop Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-015
- **Blocks:** technician stop workflow, route progress, ETA/stops-before-you, skipped/delayed stops, service visit creation, customer route notifications

## Goal

Create the route stop schema for individual customer/property stops on a route.

This schema should support customer-safe route progress, technician stop status, delay/skip reasons, route order, ETA windows, and future association with service visits.

This pack creates database/domain artifacts only. It does not implement route UI, ETA calculations, exact GPS, service visits, notifications, or technician workflow.

## Why This Matters

Customers should eventually see “stops before you” and ETA without seeing other customers or exact technician GPS. Technicians need an ordered stop list. Admins need to track delays, skipped stops, gate locked/dog/weather/customer reschedule reasons.

A route stop model is the bridge between the route day and future service visit/report workflows.


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
- `docs/database/domain-model/routes.md`
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/properties.md`
- `packages/db/src/schema/routes.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0016_create_route_stops.sql` or next correctly numbered migration
- `packages/db/src/schema/route-stops.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/route-stops.md`
- `docs/handoffs/S02-016-create-route-stop-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- service visits
- reports
- exact GPS tracking
- ETA calculations
- route UI
- customer notifications
- technician workflow
- API endpoints
- auth guards

Do not expose other customers’ route data.

## Build Prompt For Codex

Execute S02-016 only.

Create the route stop schema.

### Route stops table

Create a `route_stops` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `route_id` UUID not null references `routes(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `assigned_technician_app_user_id` UUID nullable references `app_users(id)`
- `stop_order` integer not null
- `status` text/check constraint:
  - `scheduled`
  - `on_the_way`
  - `arrived`
  - `in_progress`
  - `completed`
  - `skipped`
  - `delayed`
  - `rescheduled`
  - `cancelled`
- `delay_reason` text/check constraint nullable:
  - `traffic`
  - `weather`
  - `gate_locked`
  - `aggressive_dog`
  - `customer_requested_reschedule`
  - `equipment_issue`
  - `technician_issue`
  - `other`
- `scheduled_arrival_window_start` timestamptz nullable
- `scheduled_arrival_window_end` timestamptz nullable
- `estimated_arrival_at` timestamptz nullable
- `actual_arrival_at` timestamptz nullable
- `started_at` timestamptz nullable
- `completed_at` timestamptz nullable
- `skipped_at` timestamptz nullable
- `rescheduled_at` timestamptz nullable
- `customer_notified_at` timestamptz nullable
- `admin_notified_at` timestamptz nullable
- `technician_visible_notes` text nullable
- `internal_admin_notes` text nullable
- `customer_visible_status_note` text nullable
- `route_progress_sort_key` integer nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- unique `(route_id, stop_order)` where not deleted, if safe
- index organization_id
- index route_id
- index customer_id
- index property_id
- index assigned_technician_app_user_id
- index status
- index delay_reason
- index estimated_arrival_at
- index completed_at

### Route privacy and progress rules

Document:

- customers can only see their own stop status/progress.
- customers must not see other customers on the route.
- route progress should expose stops-before-you/ETA later, not exact GPS.
- exact GPS is not implemented here.
- delay/skipped reasons may trigger customer/admin notifications later but notifications are not implemented here.
- service visits are not implemented here.
- route reorder history/audit may be later schema if not included here.

### TypeScript schema/types

Create exports for:

- route stop status values
- delay reason values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/route-stops.md`.

Include:

- purpose
- fields
- relationship to routes/customers/properties
- customer-safe status/progress
- delay/skip/reschedule reasons
- future relationship to service visits and notifications
- privacy/no-exact-GPS rules
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for route stop schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-016.

Create S02-016 handoff.

## Acceptance Criteria

S02-016 is complete only if:

- Route stop migration/schema artifact exists.
- TypeScript schema exports exist.
- Route stop domain documentation exists.
- Stop order/status/delay reasons are represented.
- Customer route privacy/no-exact-GPS rule is documented.
- No service visit/report/UI/ETA calculation/notification/API implementation is created.
- `STATUS_BOARD.md` has S02-016 implemented/self-reviewed.
- S02-016 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-016 before finalizing.

Check:

1. Did you create route stop schema only?
2. Did you avoid service visits, reports, ETA calculations, notifications, exact GPS, UI, and API work?
3. Does the schema link routes/customers/properties?
4. Are stop status and delay/skip/reschedule reasons represented?
5. Are route privacy/no-other-customers/no-exact-GPS rules documented?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-016 route stop schema"
```
