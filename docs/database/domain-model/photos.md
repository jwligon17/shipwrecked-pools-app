# Photos Domain Model

## Purpose

`photos` stores photo/media metadata records for service operations, proof, and future customer-facing report history.

This table stores metadata only. File upload/storage services, signed URL generation, compression/archive jobs, and gallery/report rendering are implemented in later packs.

## Table

- Name: `photos`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, nullable, references `properties(id)`.
- `water_body_id` UUID, nullable, references `water_bodies(id)`.
- `service_visit_id` UUID, nullable, references `service_visits(id)`.
- `checklist_item_id` UUID, nullable, references `service_visit_checklist_items(id)`.
- `service_point_id` UUID, nullable, references `service_points(id)`.
- `equipment_id` UUID, nullable, references `equipment(id)`.
- `uploaded_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `photo_type` text, required; allowed values:
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
- `capture_stage` text, nullable; allowed values:
  - `before`
  - `during`
  - `after`
  - `final`
- `visibility` text, required; allowed values:
  - `customer_visible`
  - `technician_visible`
  - `admin_only`
  - `commercial_export_visible`
- `storage_provider` text, nullable.
- `storage_bucket` text, nullable.
- `storage_key` text, nullable.
- `public_url` text, nullable.
- `original_file_name` text, nullable.
- `mime_type` text, nullable.
- `file_size_bytes` integer, nullable.
- `width_px` integer, nullable.
- `height_px` integer, nullable.
- `taken_at` timestamptz, nullable.
- `uploaded_at` timestamptz, required, default `now()`.
- `caption_customer_visible` text, nullable.
- `caption_internal_admin_only` text, nullable.
- `before_after_group_id` UUID, nullable.
- `before_after_label` text, nullable.
- `is_hidden_from_customer` boolean, required, default `false`.
- `hidden_from_customer_at` timestamptz, nullable.
- `hidden_from_customer_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable.

## Constraints and Indexes

- Check constraint on `photo_type`.
- Nullable check constraint on `capture_stage`.
- Check constraint on `visibility`.
- Non-negative check constraints on `file_size_bytes`, `width_px`, and `height_px` when present.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_id`.
- Index on `service_visit_id`.
- Index on `checklist_item_id`.
- Index on `service_point_id`.
- Index on `equipment_id`.
- Index on `photo_type`.
- Index on `visibility`.
- Index on `before_after_group_id`.
- Index on `uploaded_at`.
- Index on `is_hidden_from_customer`.

## Relationship and Usage Notes

- The photo model supports service-visit, checklist, service-point, and equipment linkage for future report proof and issue history.
- Before/after pairing is supported via `before_after_group_id` and `before_after_label` without implementing gallery UI in this pack.
- Gate and access-related photos should never include gate codes in customer-visible captions.

## Visibility and Privacy Rules

- Customer visibility requires both:
  - `visibility = customer_visible` (or role-safe future customer projection logic)
  - `is_hidden_from_customer = false`
- Internal/admin-only captions (`caption_internal_admin_only`) must never be customer-visible.
- `caption_customer_visible` must remain plain-language and customer-safe.
- Technicians may later see technician-visible photos for assigned work only.
- Admins can view internal/admin-only metadata and can hide customer-visible photos in later workflow packs.
- Commercial export recipients may receive only admin-approved export-visible photos in later export workflows.
- Access enforcement is implemented later through Sprint 03 auth/permission guards and API serializer tests.

## Deferred Work

This pack intentionally does not implement:

- file upload/storage services
- signed URL generation
- image compression/archive jobs
- media retention automation
- report rendering
- photo gallery UI
- API endpoints or auth guards
- billing/payment/notification logic

Media retention/archive automation is deferred to later retention/privacy-focused packs.
