# Prompt Pack: S02-010 — Create Water Body Schema

## Pack Metadata

- **Pack ID:** S02-010
- **Title:** Create Water Body Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005, S02-007
- **Blocks:** water body relationships, equipment, pool outlines, service points, chemistry profiles, reports, commercial properties

## Goal

Create the water body schema for pools, spas, connected spas, separate spas, and other serviceable bodies of water at a property.

This schema must preserve the product requirement that separate bodies of water can have separate notes, chemistry, reports, and service history.

This pack creates the core water body data model only. It does not implement chemistry readings, reports, pool outline studio, service points, or equipment yet.

## Why This Matters

The app’s customer experience depends on accurately modeling the actual customer pool/spa system. Shipwrecked must support:

- pool only
- pool + connected spa
- pool + separate spa/hot tub
- commercial properties with multiple pools/bodies of water
- separate chemistry/report histories where appropriate


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
- `docs/product/feature-amendments.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/properties.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `packages/shared-types/src/statuses.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0010_create_water_bodies.sql` or next correctly numbered migration
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/water-bodies.md`
- `docs/handoffs/S02-010-create-water-body-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- water body relationship table
- equipment table
- chemistry readings
- chemical dosing
- pool outline
- service points
- reports
- routes
- service visits
- customer/admin UI

Do not add real property/customer data.

## Build Prompt For Codex

Execute S02-010 only.

Create the water body schema.

### Water body table

Create a `water_bodies` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `name` text not null
- `water_body_type` text/check constraint:
  - `pool`
  - `spa`
  - `connected_spa`
  - `separate_spa`
  - `hot_tub`
  - `fountain`
  - `other`
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `paused`
  - `archived`
- `service_status` text/check constraint:
  - `not_started`
  - `active_service`
  - `watch`
  - `action_needed`
  - `out_of_service`
- `sanitizer_type` text/check constraint nullable:
  - `chlorine`
  - `salt`
  - `bromine`
  - `unknown`
  - `other`
- `surface_type` text/check constraint nullable:
  - `plaster`
  - `fiberglass`
  - `vinyl`
  - `pebble`
  - `tile`
  - `unknown`
  - `other`
- `estimated_volume_gallons` integer nullable
- `is_primary` boolean default false
- `is_commercial_public_pool` boolean default false
- `requires_separate_chemistry` boolean default true
- `requires_separate_report_section` boolean default true
- `chemistry_profile_status` text/check constraint:
  - `missing_required_data`
  - `ready`
  - `needs_review`
- `notes_customer_visible` text nullable
- `notes_technician_visible` text nullable
- `notes_internal_admin_only` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_id
- index water_body_type
- index status
- index service_status
- index sanitizer_type
- index surface_type
- index chemistry_profile_status

### Required data for chemical guidance

Document that suggested chemical guidance later requires complete water body data, including:

- sanitizer_type
- estimated_volume_gallons
- surface_type
- current readings
- chemical strength/concentration where applicable

This pack should not implement suggested chemical guidance.

### Separate bodies of water

Document:

- a separate spa/hot tub should be modeled as its own water body.
- connected/shared behavior is handled in S02-011 water body relationships.
- this table stores each serviceable body of water as its own record.
- report/chemistry sharing rules are finalized by relationships and later chemistry/report packs.

### TypeScript schema/types

Create exports for:

- water body type values
- water body status values
- service status values
- sanitizer type values
- surface type values
- chemistry profile status values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/water-bodies.md`.

Include:

- purpose
- fields
- residential/commercial support
- separate pool/spa support
- chemical guidance prerequisites
- future relationship to pool outlines/service points/equipment/chemistry/reports
- visibility rules
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for water body schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-010.

Create S02-010 handoff.

## Acceptance Criteria

S02-010 is complete only if:

- Water body migration/schema artifact exists.
- TypeScript schema exports exist.
- Water body domain documentation exists.
- Separate pool/spa support is represented.
- Chemical guidance prerequisites are documented but not implemented.
- No relationship/equipment/chemistry/report/outline/service-point schema is created.
- `STATUS_BOARD.md` has S02-010 implemented/self-reviewed.
- S02-010 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-010 before finalizing.

Check:

1. Did you create water body schema only?
2. Did you avoid water body relationship/equipment/chemistry/report/outline tables?
3. Does it support pools, connected spas, separate spas, and commercial bodies of water?
4. Are chemical guidance prerequisites documented but not implemented?
5. Are visibility notes separated?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-010 water body schema"
```
