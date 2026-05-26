# Prompt Pack: S02-019 — Create Photo Schema

## Pack Metadata

- **Pack ID:** S02-019
- **Title:** Create Photo Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-010, S02-014, S02-017, S02-018
- **Blocks:** report photos, before/after galleries, checklist photo completion, service point photo history, media retention

## Goal

Create the photo/media schema for storing photo metadata and safe relationships to service visits, checklist items, service points, water bodies, properties, and future reports/jobs.

This pack should support before/after pairing metadata and visibility controls without implementing uploads, storage, compression, media retention jobs, report rendering, or UI.

## Why This Matters

Photos are essential to Shipwrecked’s customer trust and technician workflow. The system needs to support required service photos, before/after proof, gate photos, filter/equipment photos, and service-point history while respecting customer privacy and internal-note boundaries.


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
- `docs/database/domain-model/service-visits.md`
- `docs/database/domain-model/checklists.md`
- `docs/database/domain-model/service-points.md`
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/equipment.md`
- `packages/db/src/schema/service-visits.ts`
- `packages/db/src/schema/checklists.ts`
- `packages/db/src/schema/service-points.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/equipment.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0019_create_photos.sql` or next correctly numbered migration
- `packages/db/src/schema/photos.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/photos.md`
- `docs/handoffs/S02-019-create-photo-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- file upload/storage service
- image compression/archive jobs
- report rendering
- photo UI/gallery
- media retention automation
- signed URL generation
- API endpoints or auth guards

Do not add real photos or URLs containing private data.

## Build Prompt For Codex

Execute S02-019 only.

Create the photo schema.

### Tables

Create `photos` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID nullable references `properties(id)`
- `water_body_id` UUID nullable references `water_bodies(id)`
- `service_visit_id` UUID nullable references `service_visits(id)`
- `checklist_item_id` UUID nullable references `service_visit_checklist_items(id)`
- `service_point_id` UUID nullable references `service_points(id)`
- `equipment_id` UUID nullable references `equipment(id)`
- `uploaded_by_app_user_id` UUID nullable references `app_users(id)`
- `photo_type` text/check constraint:
  - `gate_arrival`
  - `gate_departure`
  - `pool_overview`
  - `deep_end`
  - `shallow_end`
  - `steps`
  - `spa`
  - `filter_pressure`
  - `equipment`
  - `service_point`
  - `before`
  - `after`
  - `progress`
  - `issue`
  - `other`
- `capture_stage` text/check constraint nullable:
  - `before`
  - `during`
  - `after`
  - `final`
- `visibility` text/check constraint:
  - `customer_visible`
  - `technician_visible`
  - `admin_only`
  - `commercial_export_visible`
- `storage_provider` text nullable
- `storage_bucket` text nullable
- `storage_key` text nullable
- `public_url` text nullable
- `original_file_name` text nullable
- `mime_type` text nullable
- `file_size_bytes` integer nullable
- `width_px` integer nullable
- `height_px` integer nullable
- `taken_at` timestamptz nullable
- `uploaded_at` timestamptz default now
- `caption_customer_visible` text nullable
- `caption_internal_admin_only` text nullable
- `before_after_group_id` UUID nullable
- `before_after_label` text nullable
- `is_hidden_from_customer` boolean default false
- `hidden_from_customer_at` timestamptz nullable
- `hidden_from_customer_by_app_user_id` UUID nullable references `app_users(id)`
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
- index checklist_item_id
- index service_point_id
- index equipment_id
- index photo_type
- index visibility
- index before_after_group_id
- index uploaded_at
- index is_hidden_from_customer

### Documentation requirements

Document:

- photos table stores metadata only; file upload/storage is later.
- customer visibility requires both visibility rules and `is_hidden_from_customer = false`.
- admin can hide customer-visible photos later.
- before/after pairs are supported by `before_after_group_id` and labels, but gallery UI is later.
- commercial exports require export-approved visibility and admin review later.
- gate/access photos must not expose gate codes in captions.
- internal captions must never be customer-visible.
- media retention/archive is later S02-032/S19-style work.

### TypeScript schema/types

Create exports for:

- photo type values
- capture stage values
- visibility values
- row/interface
- insert/update shapes
- table name constant

### Tests/checks

Add/update smoke tests for photo schema exports.

Run checks and document results.

Update `STATUS_BOARD.md` for S02-019.

Create S02-019 handoff.

## Acceptance Criteria

S02-019 is complete only if:

- Photo migration/schema artifact exists.
- TypeScript schema exports exist.
- Photo domain documentation exists.
- Service visit/checklist/service point/equipment relationships are supported where current tables exist.
- Before/after grouping and admin hide fields are represented.
- No upload/storage/UI/report/retention implementation is created.
- `STATUS_BOARD.md` has S02-019 implemented/self-reviewed.
- S02-019 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-019 before finalizing.

Check:

1. Did you create photo metadata schema only?
2. Did you avoid upload/storage/UI/report/retention implementation?
3. Does the schema support before/after grouping and admin hiding?
4. Are visibility rules represented and documented?
5. Are internal captions separated from customer-visible captions?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-019 photo schema"
```
