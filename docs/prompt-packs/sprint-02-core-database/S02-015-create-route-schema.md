# Prompt Pack: S02-015 — Create Route Schema

## Pack Metadata

- **Pack ID:** S02-015
- **Title:** Create Route Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-003
- **Blocks:** route stops, technician daily workflow, stops-before-you/ETA, service-day notifications, route privacy rules

## Goal

Create the route schema for daily/recurring technician routes.

This schema should represent the high-level route/day/technician assignment without implementing route stops yet.

Route stops are handled by S02-016.

This pack creates the database/domain artifacts only. It does not implement route optimization, route UI, route stop progression, exact GPS, notifications, service visits, or technician workflow.

## Why This Matters

The customer app should show route progress in a privacy-safe way: stops-before-you and ETA, not exact live GPS. The technician app needs route assignments and future route-viewing, but route stop details are separate.

A route-level schema is the foundation for route stops, service visits, delay handling, and service-day notifications.

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
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/db/src/schema/organization-memberships.ts` if it exists
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0015_create_routes.sql` or next correctly numbered migration
- `packages/db/src/schema/routes.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/routes.md`
- `docs/handoffs/S02-015-create-route-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- route stops
- service visits
- exact GPS tracking
- route optimization
- route UI
- customer ETA UI
- notifications
- technician workflow
- API endpoints
- auth guards

## Build Prompt For Codex

Execute S02-015 only.

Create the route schema.

### Routes table

Create a `routes` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `route_name` text nullable
- `route_date` date not null
- `route_type` text/check constraint:
  - `maintenance`
  - `repair`
  - `green_to_clean`
  - `commercial`
  - `mixed`
  - `other`
- `status` text/check constraint:
  - `draft`
  - `scheduled`
  - `in_progress`
  - `completed`
  - `cancelled`
  - `archived`
- `assigned_technician_app_user_id` UUID nullable references `app_users(id)`
- `backup_technician_app_user_id` UUID nullable references `app_users(id)`
- `service_area` text nullable
- `route_zone` text nullable
- `scheduled_start_at` timestamptz nullable
- `scheduled_end_at` timestamptz nullable
- `started_at` timestamptz nullable
- `completed_at` timestamptz nullable
- `weather_status` text/check constraint nullable:
  - `clear`
  - `rain_delay`
  - `storm_delay`
  - `freeze_weather`
  - `extreme_heat`
  - `other`
- `technician_visible_notes` text nullable
- `internal_admin_notes` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index route_date
- index status
- index assigned_technician_app_user_id
- index route_type
- index service_area
- index route_zone
- optional unique strategy for route name/date/technician if safe, but do not over-constrain

### Protected route rules

Document:

- customers should not see full route details or other customers.
- customer route progress later should expose stops-before-you/ETA only.
- exact customer-facing GPS is not implemented and not allowed by protected rules.
- technicians may view future assigned routes but cannot complete service between 9 PM and 8 AM; completion enforcement happens later in service visit/workflow layers.
- route stops are created in S02-016, not here.

### TypeScript schema/types

Create exports for:

- route type values
- route status values
- weather status values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/routes.md`.

Include:

- purpose
- fields
- relationship to technician user/membership
- route privacy rules
- future relationship to route stops/service visits/notifications
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for route schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-015.

Create S02-015 handoff.

## Acceptance Criteria

S02-015 is complete only if:

- Route migration/schema artifact exists.
- TypeScript schema exports exist.
- Route domain documentation exists.
- Route-level records are modeled without route stops.
- Route privacy and no-exact-GPS rule are documented.
- No route stop/service visit/UI/notification/API implementation is created.
- `STATUS_BOARD.md` has S02-015 implemented/self-reviewed.
- S02-015 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-015 before finalizing.

Check:

1. Did you create route schema only?
2. Did you avoid route stops, service visits, UI, notifications, exact GPS, and API work?
3. Does the schema link assigned technician to app users?
4. Are route privacy/no-exact-GPS rules documented?
5. Did you update status board and handoff?
6. Did you run checks or document limitations?
7. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-015 route schema"
```
