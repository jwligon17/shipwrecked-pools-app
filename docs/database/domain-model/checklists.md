# Checklists Domain Model

## Purpose

Checklist schema captures template-driven task definitions and visit-level checklist item records for service quality and accountability.

This pack provides foundational data structures only. It does not enforce checklist completion workflow in this pack.

## Tables

- `checklist_templates`
- `checklist_template_items`
- `service_visit_checklist_items`

## `checklist_templates`

### Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `name` text, required.
- `description` text, nullable.
- `template_type` text, required; allowed values:
  - `weekly_maintenance`
  - `biweekly_maintenance`
  - `commercial_service`
  - `repair`
  - `green_to_clean`
  - `inspection`
  - `other`
- `status` text, required, default `draft`; allowed values:
  - `draft`
  - `active`
  - `inactive`
  - `archived`
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable.

### Indexes

- `organization_id`
- `template_type`
- `status`

## `checklist_template_items`

### Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `checklist_template_id` UUID, required, references `checklist_templates(id)`.
- `label` text, required.
- `description` text, nullable.
- `item_type` text, required; allowed values:
  - `task`
  - `photo_required`
  - `chemistry_required`
  - `equipment_check`
  - `safety_acknowledgment`
  - `arrival_acknowledgment`
  - `other`
- `is_required` boolean, required, default `true`.
- `sort_order` integer, nullable.
- `applies_to_water_body_type` text, nullable.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable.

### Indexes

- `organization_id`
- `checklist_template_id`
- `item_type`
- `is_required`
- `sort_order`

## `service_visit_checklist_items`

### Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `service_visit_id` UUID, required, references `service_visits(id)`.
- `checklist_template_item_id` UUID, nullable, references `checklist_template_items(id)`.
- `water_body_id` UUID, nullable, references `water_bodies(id)`.
- `label` text, required.
- `item_type` text, required; allowed values match `checklist_template_items.item_type`.
- `is_required` boolean, required, default `true`.
- `status` text, required, default `not_started`; allowed values:
  - `not_started`
  - `completed`
  - `skipped`
  - `not_applicable`
  - `needs_review`
- `completed_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `completed_at` timestamptz, nullable.
- `skipped_reason` text, nullable.
- `technician_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `customer_visible_note` text, nullable.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable.

### Indexes

- `organization_id`
- `service_visit_id`
- `checklist_template_item_id`
- `water_body_id`
- `status`
- `item_type`
- `completed_by_app_user_id`
- `completed_at`

## Template vs Visit-Level Records

- `checklist_templates` and `checklist_template_items` define reusable template-level checklist structure.
- `service_visit_checklist_items` stores visit-level execution records with required/optional flags and completion state.

## Notes and Visibility Rules

- `technician_notes` are technician workflow context for assigned execution.
- `internal_admin_notes` are internal-only and must never be customer-visible.
- `customer_visible_note` must stay plain-language and customer-safe.
- Access enforcement is implemented later through Sprint 03 auth/permission guards and API serializer tests.

## Deferred Workflow and Related Systems

- Checklist schema is foundational only; completion enforcement is not implemented in this pack.
- `photo_required` checklist items are future-facing references to later photo schema/workflow packs.
- `chemistry_required` checklist items are future-facing references to later chemistry schema/workflow packs.
- Service visit completion enforcement happens later in workflow/business logic packs.
- Required photo/checklist flow enforcement is deferred to later S09/S19 packs.
