# Properties Domain Model

## Purpose

`properties` stores service-location records linked to customers.

This table separates customer identity from service location so Shipwrecked can support:

- one customer with one service location
- one customer with multiple service locations
- commercial properties that later contain multiple bodies of water

## Table

- Name: `properties`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_type` text, required; allowed values: `residential`, `commercial`, `hoa`, `hotel`, `apartment_complex`, `other`.
- `status` text, required, default `active`; allowed values: `active`, `inactive`, `paused`, `archived`.
- `display_name` text, nullable.
- `service_address_line1` text, nullable.
- `service_address_line2` text, nullable.
- `service_city` text, nullable.
- `service_state` text, nullable.
- `service_postal_code` text, nullable.
- `service_country` text, required, default `US`.
- `timezone` text, nullable.
- `latitude` numeric, nullable.
- `longitude` numeric, nullable.
- `is_primary` boolean, required, default `false`.
- `service_area` text, nullable.
- `route_zone` text, nullable.
- `commercial_compliance_required` boolean, required, default `false`.
- `notes_customer_visible` text, nullable.
- `notes_technician_visible` text, nullable.
- `notes_internal_admin_only` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `property_type`.
- Check constraint on `status`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_type`.
- Index on `status`.
- Indexes on `service_city`, `service_state`, and `service_postal_code`.
- Indexes on `service_area` and `route_zone`.
- Index on `commercial_compliance_required`.
- Trigger updates `updated_at` on every row update.

## Relationship Notes

- `customer_id` enables multiple properties per customer.
- Commercial and residential service locations both use this table.
- Future water-body/equipment/access/pet/report/route models should reference `properties.id`.

## Visibility and Privacy Rules

- Customers and household members may see customer-safe property details tied to their authorized account scope.
- Technicians may see service location context and `notes_technician_visible` only for assigned work.
- Admin/owner roles may see `notes_internal_admin_only`.
- Commercial compliance recipients do not automatically get property access/gate data; export-safe review rules apply later.
- Gate codes/access secrets are intentionally not modeled in this table and must not be stored in property notes; that schema is handled in S02-008.

## Residential and Commercial Handling

- Residential and commercial properties are represented with `property_type`.
- `commercial_compliance_required` supports future compliance workflows without implementing exports in this pack.
- Location and planning fields (`service_area`, `route_zone`, optional lat/long) support future route/service planning without live tracking implementation.

## Intentional Non-Goals in S02-007

This pack does not implement:

- access/gate code schema
- pet schema
- water body schema
- equipment schema
- route/service visit/report schema
- commercial export schema/workflows
- property UI/API/auth enforcement
- live tracking/mapping behavior
- billing/payment/notification flows
- live production database connections or secrets
