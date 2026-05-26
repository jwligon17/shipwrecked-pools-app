# Prompt Pack: S02-018 — Create Checklist Schema

## Pack Metadata

- **Pack ID:** S02-018
- **Title:** Create Checklist Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002, S02-005, S02-007, S02-010, S02-017
- **Blocks:** technician visit workflow, required photo/checklist flow, service visit completion rules, QA/accountability

## Goal

Create the checklist schema for service visit checklist templates and completed visit checklist items.

This schema should support required tasks, optional tasks, completion status, skipped items, technician acknowledgments, and future required-photo/checklist workflows without implementing UI or workflow logic yet.

This pack creates database/domain artifacts only. It does not implement technician screens, photo schema, service report generation, or completion enforcement.

## Why This Matters

Shipwrecked’s technician workflow depends on reliable, repeatable service quality. Checklists ensure that deep-end/shallow-end photos, gate photos, filter checks, chemistry readings, brushing/skimming tasks, and other required steps can be modeled and audited later.

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
- `docs/database/domain-model/water-bodies.md`
- `packages/db/src/schema/service-visits.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0018_create_checklists.sql` or next correctly numbered migration
- `packages/db/src/schema/checklists.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/checklists.md`
- `docs/handoffs/S02-018-create-checklist-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/index.ts`
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- photo schema
- technician UI
- service visit completion rules
- report generation
- chemistry readings
- notification delivery
- API endpoints or auth guards

## Build Prompt For Codex

Execute S02-018 only.

Create the checklist schema.

### Tables

Create the following tables if appropriate:

#### `checklist_templates`

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `name` text not null
- `description` text nullable
- `template_type` text/check constraint:
  - `weekly_maintenance`
  - `biweekly_maintenance`
  - `commercial_service`
  - `repair`
  - `green_to_clean`
  - `inspection`
  - `other`
- `status` text/check constraint:
  - `draft`
  - `active`
  - `inactive`
  - `archived`
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

#### `checklist_template_items`

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `checklist_template_id` UUID not null references `checklist_templates(id)`
- `label` text not null
- `description` text nullable
- `item_type` text/check constraint:
  - `task`
  - `photo_required`
  - `chemistry_required`
  - `equipment_check`
  - `safety_acknowledgment`
  - `arrival_acknowledgment`
  - `other`
- `is_required` boolean default true
- `sort_order` integer nullable
- `applies_to_water_body_type` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

#### `service_visit_checklist_items`

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `service_visit_id` UUID not null references `service_visits(id)`
- `checklist_template_item_id` UUID nullable references `checklist_template_items(id)`
- `water_body_id` UUID nullable references `water_bodies(id)`
- `label` text not null
- `item_type` text/check constraint matching template item types
- `is_required` boolean default true
- `status` text/check constraint:
  - `not_started`
  - `completed`
  - `skipped`
  - `not_applicable`
  - `needs_review`
- `completed_by_app_user_id` UUID nullable references `app_users(id)`
- `completed_at` timestamptz nullable
- `skipped_reason` text nullable
- `technician_notes` text nullable
- `internal_admin_notes` text nullable
- `customer_visible_note` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

### Documentation requirements

Document:

- checklist schema is foundational only; it does not enforce completion in this pack.
- photo-required items reference future photo schema and workflow.
- chemistry-required items reference future chemistry schema.
- technician/internal/customer notes are separated.
- service visit completion enforcement happens later.
- required photo/checklist flow is implemented in later S09/S19 packs.

### TypeScript schema/types

Create exports for:

- checklist template type values
- checklist status values
- checklist item type values
- checklist item completion status values
- row/interface types
- table name constants

### Tests/checks

Add/update smoke tests for checklist exports.

Run checks and document results.

Update `STATUS_BOARD.md` for S02-018.

Create S02-018 handoff.

## Acceptance Criteria

S02-018 is complete only if:

- Checklist migration/schema artifacts exist.
- TypeScript schema exports exist.
- Checklist domain documentation exists.
- Template and visit-level checklist item concepts are represented.
- Photo/chemistry references are future-facing and do not implement those schemas.
- No technician UI/report generation/completion enforcement is created.
- `STATUS_BOARD.md` has S02-018 implemented/self-reviewed.
- S02-018 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-018 before finalizing.

Check:

1. Did you create checklist schema only?
2. Did you avoid photo/chemistry/report/UI/completion enforcement implementation?
3. Are required/optional/skipped/needs-review checklist states modeled?
4. Are customer/technician/internal notes separated?
5. Did you update status board and handoff?
6. Did you run checks or document limitations?
7. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-018 checklist schema"
```
