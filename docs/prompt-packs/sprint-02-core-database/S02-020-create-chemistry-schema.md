# Prompt Pack: S02-020 — Create Chemistry Schema

## Pack Metadata

- **Pack ID:** S02-020
- **Title:** Create Chemistry Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-010, S02-017
- **Blocks:** chemical dosage schema, chemistry history, weekly reports, suggested chemical guidance prerequisites, commercial chemical logs

## Goal

Create the chemistry reading schema for storing water chemistry readings per water body.

This schema should support current Shipwrecked reading types including chlorine, pH, alkalinity, salt, CYA/cyanuric acid, and calcium hardness. It should store readings per body of water and optionally associate them with service visits.

This pack creates database/domain artifacts only. It does not implement chemical dosages, suggested chemical guidance, target ranges, report generation, or UI.

## Why This Matters

Customers should be able to see chemical readings going back indefinitely. Technicians need to record readings accurately, and future suggested chemical guidance depends on complete water body profile data plus current readings.

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
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/product/feature-amendments.md`
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/service-visits.md`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/service-visits.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0020_create_chemistry_readings.sql` or next correctly numbered migration
- `packages/db/src/schema/chemistry-readings.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/chemistry-readings.md`
- `docs/handoffs/S02-020-create-chemistry-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- chemical dosage/additions schema
- suggested chemical calculations
- target ranges
- report generation
- customer chemistry UI
- technician input UI
- commercial daily log workflow
- notifications
- API endpoints or auth guards

## Build Prompt For Codex

Execute S02-020 only.

Create the chemistry reading schema.

### Chemistry readings table

Create `chemistry_readings` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `water_body_id` UUID not null references `water_bodies(id)`
- `service_visit_id` UUID nullable references `service_visits(id)`
- `recorded_by_app_user_id` UUID nullable references `app_users(id)`
- `reading_source` text/check constraint:
  - `technician`
  - `admin`
  - `customer`
  - `commercial_manager`
  - `system`
- `status` text/check constraint:
  - `draft`
  - `recorded`
  - `corrected`
  - `voided`
- `measured_at` timestamptz not null
- `free_chlorine_ppm` numeric nullable
- `total_chlorine_ppm` numeric nullable
- `ph` numeric nullable
- `alkalinity_ppm` numeric nullable
- `salt_ppm` numeric nullable
- `cya_ppm` numeric nullable
- `calcium_hardness_ppm` numeric nullable
- `water_temperature_f` numeric nullable
- `saturation_index` numeric nullable
- `reading_notes_customer_visible` text nullable
- `reading_notes_technician_visible` text nullable
- `reading_notes_internal_admin_only` text nullable
- `requires_admin_review` boolean default false
- `corrected_from_reading_id` UUID nullable references `chemistry_readings(id)`
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_id
- index water_body_id
- index service_visit_id
- index recorded_by_app_user_id
- index reading_source
- index status
- index measured_at
- index requires_admin_review

### Validation and documentation notes

Document:

- this schema stores readings only; chemicals added are in S02-021.
- suggested chemical guidance is not implemented here.
- readings must be per water body.
- separate spas should have separate readings unless relationship rules later define sharing.
- customers see actual readings and customer-safe notes.
- internal/admin notes must not be customer-visible.
- commercial manager source is modeled for future commercial daily log workflows but not implemented here.
- target ranges and interpretations are later app/service logic.

### TypeScript schema/types

Create exports for:

- chemistry reading source values
- chemistry reading status values
- row/interface
- insert/update shapes
- table name constant

### Tests/checks

Add/update smoke tests for chemistry schema exports.

Run checks and document results.

Update `STATUS_BOARD.md` for S02-020.

Create S02-020 handoff.

## Acceptance Criteria

S02-020 is complete only if:

- Chemistry reading migration/schema artifact exists.
- TypeScript schema exports exist.
- Chemistry domain documentation exists.
- Readings are linked to water bodies and optionally service visits.
- Main readings are represented: chlorine, pH, alkalinity, salt, CYA, calcium hardness.
- Chemical additions/dosages and suggested guidance are not implemented.
- Customer/technician/internal note visibility is separated.
- `STATUS_BOARD.md` has S02-020 implemented/self-reviewed.
- S02-020 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-020 before finalizing.

Check:

1. Did you create chemistry readings schema only?
2. Did you avoid chemical dosage/additions, target ranges, reports, and suggested chemical calculations?
3. Does the schema store readings per water body?
4. Does it include the core Shipwrecked readings?
5. Are customer/technician/internal notes separated?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-020 chemistry schema"
```
