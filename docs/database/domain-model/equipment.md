# Equipment Domain Model

## Purpose

`equipment` stores organization-scoped pool-system components linked to customer service locations.

This model supports pumps, filters, heaters, sanitization systems, cleaners/robots, automation, valves/plumbing, lights, and other equipment needed for technician context, customer-safe profiles, and future targeting/repair planning.

## Table

- Name: `equipment`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `water_body_id` UUID, nullable, references `water_bodies(id)`.
- `equipment_type` text, required; allowed values:
  - `pump`
  - `filter`
  - `heater`
  - `salt_system`
  - `chlorinator`
  - `cleaner`
  - `robot`
  - `automation`
  - `valve`
  - `plumbing`
  - `light`
  - `water_feature`
  - `other`
- `status` text, required, default `active`; allowed values:
  - `active`
  - `inactive`
  - `needs_attention`
  - `recommended_replacement`
  - `removed`
  - `archived`
- `display_name` text, nullable.
- `manufacturer` text, nullable.
- `model` text, nullable.
- `serial_number_last_four` text, nullable (safe partial serial representation only).
- `install_date` date, nullable.
- `warranty_expiration_date` date, nullable.
- `filter_type` text, nullable; allowed values when present:
  - `cartridge`
  - `sand`
  - `de`
  - `unknown`
  - `not_applicable`
- `pump_type` text, nullable; allowed values when present:
  - `single_speed`
  - `dual_speed`
  - `variable_speed`
  - `unknown`
  - `not_applicable`
- `sanitizer_related` boolean, required, default `false`.
- `supports_deal_targeting` boolean, required, default `true`.
- `supports_chemical_guidance` boolean, required, default `false`.
- `notes_customer_visible` text, nullable.
- `notes_technician_visible` text, nullable.
- `notes_internal_admin_only` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `equipment_type`.
- Check constraint on `status`.
- Nullable check constraint on `filter_type` allowed values.
- Nullable check constraint on `pump_type` allowed values.
- Check constraint limiting `serial_number_last_four` to safe 1-4 alphanumeric characters.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `water_body_id`.
- Index on `equipment_type`.
- Index on `status`.
- Index on `filter_type`.
- Index on `pump_type`.
- Index on `supports_deal_targeting`.
- Index on `supports_chemical_guidance`.
- Trigger updates `updated_at` on every row update.

## Property-Level vs Water-Body-Specific Equipment

- `water_body_id` is nullable to support property-level equipment shared across the property.
- `water_body_id` can be set when equipment is tied to a specific body of water.
- This supports both connected and non-connected pool/spa setups without forcing one equipment-to-body mapping style.

## Deal/Product Eligibility and Chemical Guidance Prerequisites

- `supports_deal_targeting` is a safe planning flag for future equipment-type deal/product targeting workflows.
- `supports_chemical_guidance` is a safe planning flag for future internal chemical-guidance workflows.
- This pack does not implement deal/product logic or chemical calculations.

## Visibility and Privacy Rules

- `notes_customer_visible` is reserved for customer-safe equipment context.
- `notes_technician_visible` is operational context for assigned technician workflows.
- `notes_internal_admin_only` is internal/admin-only and must never be exposed to customers.
- Technicians must never be shown margin, profitability, supplier cost, or internal financial notes.
- Full serial numbers are intentionally not modeled; only `serial_number_last_four` is stored.

## Future Relationship Notes

- Some equipment may remain property-level with no direct water-body link.
- Some equipment may be associated to a specific water body.
- Equipment photos are deferred to a later schema pack.
- Repairs/work orders are deferred and may associate to equipment later.
- Deals/products may target equipment types later.
- Suggested chemical guidance may require equipment data later, but no calculation logic is implemented in this pack.

## Intentional Non-Goals in S02-012

This pack does not implement:

- equipment photos schema
- inventory
- product/deal implementation
- repairs or work orders
- quote/billing/payment workflows
- suggested chemical calculation logic
- service reports
- API endpoints or auth guards
- customer/admin/technician UI
- notification delivery
- live production database connections or secrets
