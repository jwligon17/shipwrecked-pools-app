# Property Access Domain Model

## Purpose

`property_access_profiles` stores sensitive property-access instructions linked to properties.

This table supports operational access context for future assigned technician workflows while preserving strict visibility controls around gate and access secrets.

## Table

- Name: `property_access_profiles`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `status` text, required, default `active`; allowed values: `active`, `inactive`, `archived`.
- `access_type` text, required; allowed values: `gate_code`, `lockbox`, `key`, `open_access`, `call_customer`, `other`.
- `gate_code_encrypted` text, nullable.
- `gate_code_last_four` text, nullable.
- `lockbox_location` text, nullable.
- `gate_location` text, nullable.
- `access_instructions_technician_visible` text, nullable.
- `access_instructions_internal_admin_only` text, nullable.
- `customer_visible_access_note` text, nullable.
- `requires_customer_confirmation` boolean, required, default `false`.
- `technician_ack_required` boolean, required, default `false`.
- `valid_from` timestamptz, nullable.
- `valid_until` timestamptz, nullable.
- `created_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `updated_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `status`.
- Check constraint on `access_type`.
- Check constraint requiring `gate_code_last_four` to be exactly 4 digits when present.
- Check constraint ensuring valid window ordering (`valid_until >= valid_from` when both are set).
- Index on `organization_id`.
- Index on `property_id`.
- Index on `status`.
- Index on `access_type`.
- Index on `valid_until`.
- Trigger updates `updated_at` on every row update.

## Security and Secrets Handling

- Gate/access data is sensitive by default.
- Raw gate codes are intentionally not modeled; only `gate_code_encrypted` and optional `gate_code_last_four` reference fields are stored.
- This pack does not implement encryption services or key management; secure encryption/decryption enforcement is handled in later security/application layers.
- No real gate codes or private access secrets are included in this pack.

## Visibility Rules

- Assigned technicians may access operational access details only for assigned work once Sprint 03+ auth and assignment guards are implemented.
- Customers and household members do not need access to encrypted/internal gate fields.
- `customer_visible_access_note` exists for customer-safe messaging without exposing access secrets.
- Admin/owner roles can manage internal property-access details.
- Commercial export recipients must not receive gate codes or access secrets.

## Audit and Compliance Notes

- Access-detail views and sensitive reads must be auditable in later packs.
- This pack does not create an audit-log table; audit schema and read-event logging are implemented later.

## Relationship Notes

- `property_id` links access records directly to service locations (`properties`).
- Future route/arrival workflows can reference this table for technician operational context.

## Alert Modeling Decision

- `property_access_alerts` is intentionally deferred.
- Arrival pop-ups/repeatable access alerts are planned for a later technician arrival-alert schema pack to avoid overbuilding S02-008.

## Intentional Non-Goals in S02-008

This pack does not implement:

- encryption service implementation
- audit-log table implementation
- route assignment or technician workflow enforcement
- API guards/serializer behavior
- notification delivery
- technician/customer/admin UI
- pet schema or water-body/equipment schema
- live production database connections or secrets
