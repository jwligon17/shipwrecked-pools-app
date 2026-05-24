# Organizations Domain Model

## Purpose

`organizations` is the top-level tenant boundary for Shipwrecked data. It establishes a durable organization scope now for Shipwrecked internal use and future SaaS tenancy.

## Table

- Name: `organizations`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `name` text, required.
- `slug` text, required and unique.
- `legal_name` text, nullable.
- `status` text with check constraint: `active`, `inactive`, `suspended`, `archived`.
- `organization_type` text with check constraint: `shipwrecked_internal`, `service_business`, `future_saas_tenant`.
- `timezone` text, required, default `America/Chicago`.
- `primary_locale` text, required, default `en-US`.
- `settings` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Unique constraint on `slug`.
- Check constraint on `status`.
- Check constraint on `organization_type`.
- Index on `status`.
- Index on `deleted_at`.
- Trigger updates `updated_at` on every row update.

## Future Relationships

`organization_id` should be a required foreign key in later domain tables so all operational and customer data stays org-scoped, including:

- users and memberships
- leads/customers/households
- properties/water bodies/pool outlines
- routes/stops/visits
- reports/photos/chemistry
- requests/quotes/repairs/master jobs
- notifications, billing references, audit logs

## Multi-Tenant / SaaS Considerations

- `organization_type` allows Shipwrecked internal records now while preserving a clear path for future tenant isolation.
- `slug` provides stable human-readable org identification for admin and operations contexts.
- `settings` provides additive per-organization configuration without forcing immediate schema growth.
- `deleted_at` supports lifecycle controls and retention workflows without hard-delete assumptions.

## Intentional Non-Goals In S02-001

This pack does not implement:

- user/customer/lead/membership tables
- auth/role enforcement logic
- billing/payment logic
- notification delivery
- app/admin screens
- live database connectivity
