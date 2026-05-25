# Prompt Pack: S02-014 — Create Service Point Schema

## Pack Metadata

- **Pack ID:** S02-014
- **Title:** Create Service Point Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005, S02-007, S02-010, S02-012, S02-013
- **Blocks:** pool outline markers, technician issue flagging, marker history, quote/repair links, customer visual pool status

## Goal

Create the service point schema for markers/points on a pool outline.

Service points are the plus-symbol style markers on the customer’s pool outline and the operational anchor for concerns, photos, notes, repair/quote links, equipment references, and customer-friendly marker details.

This pack creates the database/domain artifacts only. It does not implement UI marker placement, mobile rendering, photos/media storage, quote/repair links, or marker history.

## Why This Matters

Service points turn the pool outline into a valuable customer and technician interface:

- customer can tap a marker and understand a concern
- technician/admin can track recurring issues at specific pool areas
- future photos, quotes, repairs, and reports can attach to meaningful locations
- the app feels specific to the customer’s pool

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
- `docs/database/domain-model/properties.md`
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/equipment.md`
- `docs/database/domain-model/pool-outlines.md`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/equipment.ts` if it exists
- `packages/db/src/schema/pool-outlines.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0014_create_service_points.sql` or next correctly numbered migration
- `packages/db/src/schema/service-points.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/service-points.md`
- `docs/handoffs/S02-014-create-service-point-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- marker placement UI
- customer mobile renderer
- photo/media table
- marker history table
- quotes/repairs/work orders
- reports
- service visits
- API endpoints
- admin outline studio

Do not add real customer photos or private property data.

## Build Prompt For Codex

Execute S02-014 only.

Create the service point schema.

### Service point table

Create a `service_points` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `water_body_id` UUID not null references `water_bodies(id)`
- `pool_outline_id` UUID nullable references `pool_outlines(id)`
- `equipment_id` UUID nullable references `equipment(id)`
- `label` text not null
- `service_point_type` text/check constraint:
  - `skimmer`
  - `steps`
  - `shallow_end`
  - `deep_end`
  - `spa`
  - `tile_line`
  - `return_jet`
  - `light`
  - `drain`
  - `equipment_pad`
  - `pump`
  - `filter`
  - `heater`
  - `cleaner`
  - `robot`
  - `stain_area`
  - `crack_area`
  - `general_area`
  - `other`
- `status` text/check constraint:
  - `normal`
  - `watch`
  - `action_needed`
  - `resolved`
  - `inactive`
  - `archived`
- `marker_x` numeric nullable
- `marker_y` numeric nullable
- `coordinate_system` text/check constraint:
  - `normalized_outline`
  - `image_pixel`
  - `manual`
  - `unknown`
- `sort_order` integer nullable
- `is_customer_visible` boolean default true
- `is_technician_visible` boolean default true
- `customer_visible_summary` text nullable
- `technician_visible_notes` text nullable
- `internal_admin_notes` text nullable
- `last_status_changed_at` timestamptz nullable
- `last_status_changed_by_app_user_id` UUID nullable references `app_users(id)`
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_id
- index water_body_id
- index pool_outline_id
- index equipment_id
- index service_point_type
- index status
- index is_customer_visible
- optional index on `(pool_outline_id, sort_order)`

### Documentation requirements

Document:

- marker coordinates are normalized to outline/image systems but rendering is not implemented here.
- pool outline markers are customer-visible only when `is_customer_visible` and content is customer-safe.
- internal admin notes must never be shown to customers.
- technician-visible notes are for assigned operational work later.
- photo attachments, marker history, quote/repair links, and reports are later schemas/workflows.
- equipment_id can attach a service point to a specific equipment item.
- service point status should support pool status cards and report/recommendation workflows later.

### TypeScript schema/types

Create exports for:

- service point type values
- service point status values
- coordinate system values
- row/interface
- insert/update shapes if useful
- table name constant

### Tests/checks

Add/update safe smoke tests for service point schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-014.

Create S02-014 handoff.

## Acceptance Criteria

S02-014 is complete only if:

- Service point migration/schema artifact exists.
- TypeScript schema exports exist.
- Service point domain documentation exists.
- Marker coordinate fields and visibility controls are represented.
- Customer/technician/internal note visibility is separated.
- No marker UI/photos/history/quote/report implementation is created.
- `STATUS_BOARD.md` has S02-014 implemented/self-reviewed.
- S02-014 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-014 before finalizing.

Check:

1. Did you create service point schema only?
2. Did you avoid marker UI, photos, history, reports, quotes/repairs, and API work?
3. Does the schema link to pool outlines, water bodies, and optionally equipment?
4. Does it include normalized marker coordinate support?
5. Are customer/technician/internal visibility rules separated and documented?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-014 service point schema"
```
