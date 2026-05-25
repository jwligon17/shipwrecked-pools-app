# Prompt Pack: S02-013 — Create Pool Outline Schema

## Pack Metadata

- **Pack ID:** S02-013
- **Title:** Create Pool Outline Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005, S02-007, S02-010, S02-011
- **Blocks:** pool outline studio, customer pool outline hero, service point markers, outline versioning, pool/spa visual experience

## Goal

Create the pool outline schema for storing custom top-down pool/spa outlines.

This schema supports one of the highest-value customer experience features: customers seeing a custom visual outline of their own pool/body of water. It should support draft/published/archived outline versions, source-image metadata, normalized coordinates, SVG/path output, manual/AI-assisted creation metadata, and customer-safe presentation rules.

This pack creates database/domain artifacts only. It does not implement the outline editor, AI generation, satellite image ingestion, mobile rendering, service point markers, or UI.

## Why This Matters

The custom top-down pool outline is a V1-critical emotional feature. It helps the customer connect to their actual pool instead of reading generic service numbers and photos.

A careful schema now prevents rework when the admin outline studio, customer mobile renderer, and service point markers are built later.


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
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/water-body-relationships.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/water-body-relationships.ts` if it exists
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `packages/shared-types/src/statuses.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0013_create_pool_outlines.sql` or next correctly numbered migration
- `packages/db/src/schema/pool-outlines.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/pool-outlines.md`
- `docs/handoffs/S02-013-create-pool-outline-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- pool outline editor/studio
- AI/satellite image generation
- image upload/storage service
- customer mobile renderer
- service point marker schema
- photos/media table
- admin/customer UI
- API endpoints
- auth/permissions implementation

Do not add real customer/pool images or private property data.

## Build Prompt For Codex

Execute S02-013 only.

Create the pool outline schema.

### Pool outline table

Create a `pool_outlines` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `water_body_id` UUID not null references `water_bodies(id)`
- `outline_name` text nullable
- `status` text/check constraint:
  - `draft`
  - `published`
  - `archived`
  - `needs_review`
- `source_type` text/check constraint:
  - `manual_trace`
  - `technician_photo`
  - `customer_photo`
  - `satellite_image`
  - `ai_assisted`
  - `admin_created`
  - `other`
- `shape_type` text/check constraint:
  - `svg_path`
  - `polygon`
  - `freeform`
  - `unknown`
- `normalized_width` integer default 1000
- `normalized_height` integer default 1000
- `outline_path_data` text nullable
- `outline_points` jsonb default empty array
- `view_box` text nullable
- `source_image_url` text nullable
- `source_image_metadata` jsonb default empty object
- `generation_metadata` jsonb default empty object
- `version_number` integer not null default 1
- `published_at` timestamptz nullable
- `published_by_app_user_id` UUID nullable references `app_users(id)`
- `created_by_app_user_id` UUID nullable references `app_users(id)`
- `notes_internal_admin_only` text nullable
- `notes_customer_visible` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index `organization_id`
- index `customer_id`
- index `property_id`
- index `water_body_id`
- index `status`
- index `source_type`
- index `published_at`
- add a safe uniqueness strategy for one published outline per water body if appropriate, such as a partial unique index where `status = 'published'` and `deleted_at is null`

### Documentation requirements

Document:

- pool outlines are visual/domain artifacts, not the service point markers themselves.
- service point markers are created in S02-014.
- customer-visible outline should only use customer-safe notes/status.
- internal admin notes must never be shown to customers.
- source image URL is metadata only; upload/storage system is not implemented here.
- AI/satellite/manual tracing is not implemented here.
- separate pool/spa outlines are supported by linking to `water_body_id`.
- connected spa visual handling will be determined by outline studio and water body relationships later.

### TypeScript schema/types

Create exports for:

- pool outline status values
- pool outline source type values
- shape type values
- row/interface
- insert/update shapes if useful
- table name constant

### Tests/checks

Add/update safe smoke tests for pool outline schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-013.

Create S02-013 handoff.

## Acceptance Criteria

S02-013 is complete only if:

- Pool outline migration/schema artifact exists.
- TypeScript schema exports exist.
- Pool outline domain documentation exists.
- Draft/published/versioning/source metadata are represented.
- Separate water body outlines are supported through `water_body_id`.
- No UI/editor/AI/image upload/service point implementation is created.
- Customer/internal visibility is documented.
- `STATUS_BOARD.md` has S02-013 implemented/self-reviewed.
- S02-013 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-013 before finalizing.

Check:

1. Did you create pool outline schema only?
2. Did you avoid outline editor/AI/image upload/mobile renderer/service point implementation?
3. Does the schema support drafts, published outlines, source metadata, and versioning?
4. Does it link to water bodies and support separate pool/spa outlines?
5. Are internal vs customer-visible notes separated?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-013 pool outline schema"
```
