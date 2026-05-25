# Prompt Pack: S02-011 — Create Water Body Relationship Schema

## Pack Metadata

- **Pack ID:** S02-011
- **Title:** Create Water Body Relationship Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005, S02-007, S02-010
- **Blocks:** connected pool/spa logic, separate chemistry/report histories, shared equipment modeling, pool outline handling, report generation rules

## Goal

Create the water body relationship schema to represent connected/shared/separate relationships between pools, spas, hot tubs, fountains, and other water bodies.

This schema should support:

- pool + connected spa
- pool + separate spa
- shared chemistry where appropriate
- separate chemistry/reporting where appropriate
- commercial properties with multiple bodies of water

This pack creates relationship/domain artifacts only. It does not implement chemistry readings, report generation, equipment, pool outlines, or UI.

## Why This Matters

The app must keep records separate when bodies of water are separate, but also support connected pool/spa systems where chemistry/equipment may be shared.

Without this relationship model, later chemistry/report/service logic will either over-combine separate bodies of water or duplicate connected-system data incorrectly.

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
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/properties.md`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0011_create_water_body_relationships.sql` or next correctly numbered migration
- `packages/db/src/schema/water-body-relationships.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/water-body-relationships.md`
- `docs/handoffs/S02-011-create-water-body-relationship-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- shared types/statuses if useful
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- chemistry readings
- chemical dosing
- reports
- equipment table
- pool outline
- service points
- routes/service visits
- app/admin UI

Do not create relationship records with real data.

## Build Prompt For Codex

Execute S02-011 only.

Create the water body relationship schema.

### Table design

Create `water_body_relationships` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `property_id` UUID not null references `properties(id)`
- `parent_water_body_id` UUID not null references `water_bodies(id)`
- `child_water_body_id` UUID not null references `water_bodies(id)`
- `relationship_type` text/check constraint:
  - `connected_spa`
  - `separate_spa`
  - `shared_equipment`
  - `shared_chemistry`
  - `same_property_group`
  - `other`
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `archived`
- `shares_chemistry` boolean default false
- `shares_equipment` boolean default false
- `shares_report_section` boolean default false
- `requires_separate_service_notes` boolean default true
- `requires_separate_photos` boolean default true
- `relationship_notes_internal` text nullable
- `relationship_notes_customer_visible` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- check parent_water_body_id != child_water_body_id
- unique active relationship strategy for parent/child/type if safe
- index organization_id
- index property_id
- index parent_water_body_id
- index child_water_body_id
- index relationship_type
- index status

### Relationship logic to document

Document:

- connected spa may share chemistry/equipment/report section depending on configuration.
- separate spa should generally not share chemistry and should have separate records.
- same-property grouping does not imply shared chemistry.
- this schema is descriptive; later service/report/chemistry logic must honor these flags.
- actual report/chemistry generation is not implemented here.

### TypeScript schema/types

Create exports for:

- relationship type values
- relationship status values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/water-body-relationships.md`.

Include:

- purpose
- fields
- connected vs separate spa examples
- shared chemistry/report/equipment flags
- future impact on reports, chemistry, photos, pool outlines, equipment
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for relationship schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-011.

Create S02-011 handoff.

## Acceptance Criteria

S02-011 is complete only if:

- Water body relationship migration/schema artifact exists.
- TypeScript schema exports exist.
- Documentation exists.
- Connected vs separate water body behavior is documented.
- No chemistry/report/equipment/outline implementation is created.
- `STATUS_BOARD.md` has S02-011 implemented/self-reviewed.
- S02-011 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-011 before finalizing.

Check:

1. Did you create water body relationship schema only?
2. Did you avoid chemistry/report/equipment/outline implementation?
3. Does the schema support connected and separate pool/spa relationships?
4. Are shared chemistry/equipment/report flags documented?
5. Did you update status board and handoff?
6. Did you run checks or document limitations?
7. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-011 water body relationship schema"
```
