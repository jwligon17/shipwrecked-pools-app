# Service Points Domain Model

## Purpose

`service_points` stores marker records for meaningful locations on a pool outline or related equipment context.

Service points are foundational operational anchors for customer-friendly marker details, technician issue tracking, and future links to photos, reports, and quote/repair workflows.

## Table

- Name: `service_points`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `water_body_id` UUID, required, references `water_bodies(id)`.
- `pool_outline_id` UUID, nullable, references `pool_outlines(id)`.
- `equipment_id` UUID, nullable, references `equipment(id)`.
- `label` text, required.
- `service_point_type` text, required; allowed values:
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
- `status` text, required, default `normal`; allowed values: `normal`, `watch`, `action_needed`, `resolved`, `inactive`, `archived`.
- `marker_x` numeric, nullable.
- `marker_y` numeric, nullable.
- `coordinate_system` text, required, default `unknown`; allowed values: `normalized_outline`, `image_pixel`, `manual`, `unknown`.
- `sort_order` integer, nullable.
- `is_customer_visible` boolean, required, default `true`.
- `is_technician_visible` boolean, required, default `true`.
- `customer_visible_summary` text, nullable.
- `technician_visible_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `last_status_changed_at` timestamptz, nullable.
- `last_status_changed_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `service_point_type`.
- Check constraint on `status`.
- Check constraint on `coordinate_system`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_id`.
- Index on `pool_outline_id`.
- Index on `equipment_id`.
- Index on `service_point_type`.
- Index on `status`.
- Index on `is_customer_visible`.
- Composite index on `(pool_outline_id, sort_order)`.

## Marker Coordinates and Rendering Boundary

- Marker coordinates are stored as data only through `marker_x`, `marker_y`, and `coordinate_system`.
- Coordinate systems support normalized outline coordinates, image pixel coordinates, manual coordinates, and unknown fallback values.
- Rendering and marker-placement UI are intentionally not implemented in this pack.

## Visibility and Note Separation

- Customers should only see service points where `is_customer_visible = true` and marker text is customer-safe.
- `customer_visible_summary` is reserved for plain-language customer-facing context.
- `technician_visible_notes` is for assigned technician operational context in later workflows.
- `internal_admin_notes` is internal-only and must never be shown to customers.
- Technicians should not see admin-only note content.
- Runtime role enforcement is implemented later in Sprint 03 auth/permission guards and API serializer tests.

## Relationship Notes

- `pool_outline_id` links markers to a pool outline when applicable.
- `water_body_id` supports separate pool/spa/body marker records.
- `equipment_id` can attach a service point to a specific equipment record.
- `status` supports future pool status cards and later report/recommendation workflows.

## Deferred Work

This pack intentionally does not implement:

- marker placement UI
- customer mobile pool outline rendering
- admin outline studio tooling
- photo/media attachments
- marker history table
- quote/repair/work-order links
- report and service-visit linkage workflows
- API endpoints and auth guards
