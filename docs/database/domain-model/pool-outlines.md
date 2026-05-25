# Pool Outlines Domain Model

## Purpose

`pool_outlines` stores top-down visual outline records for a single water body at a property.

This model is for outline geometry/version/source metadata only. It is not the service-point marker model.

## Table

- Name: `pool_outlines`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `water_body_id` UUID, required, references `water_bodies(id)`.
- `outline_name` text, nullable.
- `status` text, required, default `draft`; allowed values: `draft`, `published`, `archived`, `needs_review`.
- `source_type` text, required; allowed values: `manual_trace`, `technician_photo`, `customer_photo`, `satellite_image`, `ai_assisted`, `admin_created`, `other`.
- `shape_type` text, required, default `unknown`; allowed values: `svg_path`, `polygon`, `freeform`, `unknown`.
- `normalized_width` integer, required, default `1000`.
- `normalized_height` integer, required, default `1000`.
- `outline_path_data` text, nullable.
- `outline_points` jsonb, required, default empty array.
- `view_box` text, nullable.
- `source_image_url` text, nullable.
- `source_image_metadata` jsonb, required, default empty object.
- `generation_metadata` jsonb, required, default empty object.
- `version_number` integer, required, default `1`.
- `published_at` timestamptz, nullable.
- `published_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `created_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `notes_internal_admin_only` text, nullable.
- `notes_customer_visible` text, nullable.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `status`.
- Check constraint on `source_type`.
- Check constraint on `shape_type`.
- Check constraints enforcing `normalized_width > 0` and `normalized_height > 0`.
- Check constraint enforcing `version_number >= 1`.
- Partial unique index for one active published outline per water body where `status = 'published'` and `deleted_at IS NULL`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_id`.
- Index on `status`.
- Index on `source_type`.
- Index on `published_at`.

## Versioning and Publishing

- Drafts, published records, archived records, and needs-review records are explicitly represented with `status`.
- `version_number` supports sequential outline revisioning.
- `published_at` and `published_by_app_user_id` capture publication state metadata.
- Partial unique indexing prevents multiple simultaneously published outlines for one water body.

## Shape and Coordinate Model

- Outline data supports both path and point representation:
  - `outline_path_data` for path-based shapes (for example, SVG path-compatible strings).
  - `outline_points` for polygon/freeform point sets.
- `normalized_width` and `normalized_height` define a normalized coordinate system for stable rendering across clients.

## Source and Generation Metadata

- `source_type` tracks origin type (manual trace, photos, satellite, AI-assisted, admin-created, other).
- `source_image_url` and `source_image_metadata` are metadata fields only; upload/storage service is not implemented in this pack.
- `generation_metadata` stores outline creation metadata for downstream workflows.

## Water Body Relationship and Multi-Body Support

- Each outline links to exactly one `water_body_id`.
- Separate pool/spa bodies can have separate outlines by using separate `water_bodies` records.
- Connected spa visual behavior is deferred to later outline studio logic and water-body relationship rules.

## Visibility and Privacy Rules

- `notes_customer_visible` is customer-safe context only.
- `notes_internal_admin_only` is internal-only and must never be customer-visible.
- Runtime enforcement remains in later API/auth/serializer packs.

## Deferred Work

This pack intentionally does not implement:

- service point marker schema (created in `S02-014`)
- pool outline editor/studio
- customer/mobile renderer
- AI/satellite/manual tracing workflow engines
- image upload/storage services
- API endpoints and auth/permission enforcement
