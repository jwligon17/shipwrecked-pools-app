# Water Body Relationships Domain Model

## Purpose

`water_body_relationships` describes how water bodies on the same property are related without collapsing them into a single record.

This supports:

- pool + connected spa setups
- pool + separate spa setups
- shared equipment where applicable
- shared chemistry where applicable
- separate chemistry/reporting where applicable
- commercial properties with multiple bodies of water

## Table

- Name: `water_body_relationships`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `parent_water_body_id` UUID, required, references `water_bodies(id)`.
- `child_water_body_id` UUID, required, references `water_bodies(id)`.
- `relationship_type` text, required; allowed values:
  - `connected_spa`
  - `separate_spa`
  - `shared_equipment`
  - `shared_chemistry`
  - `same_property_group`
  - `other`
- `status` text, required, default `active`; allowed values: `active`, `inactive`, `archived`.
- `shares_chemistry` boolean, required, default `false`.
- `shares_equipment` boolean, required, default `false`.
- `shares_report_section` boolean, required, default `false`.
- `requires_separate_service_notes` boolean, required, default `true`.
- `requires_separate_photos` boolean, required, default `true`.
- `relationship_notes_internal` text, nullable.
- `relationship_notes_customer_visible` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint requiring `parent_water_body_id <> child_water_body_id`.
- Check constraint on `relationship_type`.
- Check constraint on `status`.
- Partial unique index for active, non-deleted parent/child/type combinations.
- Index on `organization_id`.
- Index on `property_id`.
- Index on `parent_water_body_id`.
- Index on `child_water_body_id`.
- Index on `relationship_type`.
- Index on `status`.
- Trigger updates `updated_at` on every row update.

## Connected vs Separate Examples

- Connected spa:
  - relationship type can be `connected_spa`.
  - may share chemistry, equipment, or report section depending on configuration flags.
- Separate spa:
  - relationship type can be `separate_spa`.
  - generally should not share chemistry and should preserve separate records.
- Same property grouping:
  - relationship type `same_property_group` supports grouping bodies on a property.
  - does not imply shared chemistry.

## Relationship Flags and Future Behavior

- `shares_chemistry`, `shares_equipment`, and `shares_report_section` are descriptive flags.
- `requires_separate_service_notes` and `requires_separate_photos` preserve per-body service evidence when needed.
- Later service/report/chemistry logic must honor these flags.
- This pack does not implement report or chemistry generation logic.

## Visibility and Privacy Rules

- Customers and household members can later see customer-safe relationship information where relevant.
- Technicians can later see technician-visible relationship context only for assigned work.
- Admins can see internal relationship notes.
- Commercial exports later include only export-approved data under admin review workflows.
- Runtime access enforcement is deferred to Sprint 03 auth/permission guards and API tests.

## Intentional Non-Goals in S02-011

This pack does not implement:

- equipment schema
- chemistry readings
- chemical dosing
- suggested chemical guidance logic
- pool outline schema
- service points
- reports
- routes or service visits
- customer/admin/technician UI
- API endpoints
- auth guards
- billing/payment workflows
- notification delivery
