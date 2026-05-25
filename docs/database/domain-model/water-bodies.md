# Water Bodies Domain Model

## Purpose

`water_bodies` stores each serviceable body of water as its own record for a property.

This schema supports residential and commercial properties with multiple bodies of water and preserves the ability for separate chemistry and reporting context per body.

## Table

- Name: `water_bodies`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `name` text, required.
- `water_body_type` text, required; allowed values: `pool`, `spa`, `connected_spa`, `separate_spa`, `hot_tub`, `fountain`, `other`.
- `status` text, required, default `active`; allowed values: `active`, `inactive`, `paused`, `archived`.
- `service_status` text, required, default `not_started`; allowed values: `not_started`, `active_service`, `watch`, `action_needed`, `out_of_service`.
- `sanitizer_type` text, nullable; allowed values when present: `chlorine`, `salt`, `bromine`, `unknown`, `other`.
- `surface_type` text, nullable; allowed values when present: `plaster`, `fiberglass`, `vinyl`, `pebble`, `tile`, `unknown`, `other`.
- `estimated_volume_gallons` integer, nullable.
- `is_primary` boolean, required, default `false`.
- `is_commercial_public_pool` boolean, required, default `false`.
- `requires_separate_chemistry` boolean, required, default `true`.
- `requires_separate_report_section` boolean, required, default `true`.
- `chemistry_profile_status` text, required, default `missing_required_data`; allowed values: `missing_required_data`, `ready`, `needs_review`.
- `notes_customer_visible` text, nullable.
- `notes_technician_visible` text, nullable.
- `notes_internal_admin_only` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `water_body_type`.
- Check constraint on `status`.
- Check constraint on `service_status`.
- Check constraint on `sanitizer_type`.
- Check constraint on `surface_type`.
- Check constraint on `chemistry_profile_status`.
- Check constraint on non-negative `estimated_volume_gallons`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_type`.
- Index on `status`.
- Index on `service_status`.
- Index on `sanitizer_type`.
- Index on `surface_type`.
- Index on `chemistry_profile_status`.
- Trigger updates `updated_at` on every row update.

## Separate Bodies of Water

- A separate spa/hot tub is modeled as its own `water_bodies` record.
- Connected/shared behavior is finalized in S02-011 water-body relationships.
- This table stores each serviceable body of water independently.
- Report and chemistry sharing rules are finalized by relationships and later chemistry/report packs.

## Chemical Guidance Prerequisites (Documentation Only)

Suggested chemical guidance is not implemented in this pack.

Future guidance requires complete water-body data including:

- `sanitizer_type`
- `estimated_volume_gallons`
- `surface_type`
- current readings
- chemical strength/concentration where applicable

## Residential and Commercial Support

- Residential and commercial bodies of water are both supported.
- `is_commercial_public_pool` flags commercial/public contexts for later compliance and reporting workflows.

## Future Relationships and Deferred Systems

This pack does not implement relationship or workflow systems. These are deferred to later packs:

- connected/shared water-body relationship logic (S02-011)
- equipment schema
- chemistry readings and chemical dosing
- suggested chemical guidance logic
- pool outlines and service points
- reports, routes, and service visits

## Visibility and Privacy Rules

- Customers and household members may see customer-safe water-body information only.
- Technicians may later see technician-visible notes for assigned work only.
- Admin/owner roles may see internal-admin-only notes.
- Commercial export recipients should receive only export-approved water-body/report data in later workflows.
- Runtime enforcement is deferred to Sprint 03 auth/permission guards and API serializer tests.

## Intentional Non-Goals in S02-010

This pack does not implement:

- water-body relationship schema
- equipment schema
- chemistry readings or dosing schema
- suggested chemical guidance implementation
- pool outline/service-point schema
- report/route/service-visit schema
- customer/admin/technician UI
- API endpoints or auth guards
- billing/payment/notification flows
- live production database connections or secrets
