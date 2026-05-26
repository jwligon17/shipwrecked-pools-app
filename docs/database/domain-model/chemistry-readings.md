# Chemistry Readings Domain Model

## Purpose

`chemistry_readings` stores water chemistry reading records per water body with optional service-visit context.

This schema stores readings only. Chemical additions/dosages are intentionally deferred to `S02-021`.

## Table

- Name: `chemistry_readings`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `water_body_id` UUID, required, references `water_bodies(id)`.
- `service_visit_id` UUID, nullable, references `service_visits(id)`.
- `recorded_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `reading_source` text, required; allowed values:
  - `technician`
  - `admin`
  - `customer`
  - `commercial_manager`
  - `system`
- `status` text, required, default `recorded`; allowed values:
  - `draft`
  - `recorded`
  - `corrected`
  - `voided`
- `measured_at` timestamptz, required.
- `free_chlorine_ppm` numeric, nullable.
- `total_chlorine_ppm` numeric, nullable.
- `ph` numeric, nullable.
- `alkalinity_ppm` numeric, nullable.
- `salt_ppm` numeric, nullable.
- `cya_ppm` numeric, nullable.
- `calcium_hardness_ppm` numeric, nullable.
- `water_temperature_f` numeric, nullable.
- `saturation_index` numeric, nullable.
- `reading_notes_customer_visible` text, nullable.
- `reading_notes_technician_visible` text, nullable.
- `reading_notes_internal_admin_only` text, nullable.
- `requires_admin_review` boolean, required, default `false`.
- `corrected_from_reading_id` UUID, nullable, references `chemistry_readings(id)`.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable.

## Constraints and Indexes

- Check constraint on `reading_source`.
- Check constraint on `status`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_id`.
- Index on `service_visit_id`.
- Index on `recorded_by_app_user_id`.
- Index on `reading_source`.
- Index on `status`.
- Index on `measured_at`.
- Index on `requires_admin_review`.

## Reading Scope and Source Notes

- Readings are recorded per water body.
- Separate spas should have separate readings unless explicit future relationship logic defines sharing.
- `commercial_manager` source is modeled for future commercial daily log workflows, which are not implemented in this pack.

## Visibility and Privacy Rules

- Customers may see their own actual reading values and `reading_notes_customer_visible`.
- `reading_notes_internal_admin_only` must never be customer-visible.
- `reading_notes_technician_visible` supports assigned-work technician context in later workflow packs.
- Admins can view internal/admin-only notes and correction linkage metadata.
- Commercial export recipients receive only approved export data in later workflows.
- Access enforcement is deferred to Sprint 03 auth/permission guards and API serializer tests.

## Correction and Auditability Notes

- `corrected_from_reading_id` preserves lineage for corrected records.
- Corrections should preserve original measurement history for auditability.

## Deferred Work

This pack intentionally does not implement:

- chemical additions/dosages (deferred to `S02-021`)
- suggested chemical guidance calculations
- target ranges or interpretation logic
- report generation logic
- customer or technician chemistry UI
- commercial daily log workflow execution
- notifications, API endpoints, or auth guards

Suggested chemical guidance depends on complete water body profile data plus current readings, but is not implemented in this pack.
