# Routes Domain Model

## Purpose

`routes` stores high-level route/day assignment records for technicians.

This table defines route-level scheduling and status context only. Route stops are intentionally deferred to `S02-016`.

## Table

- Name: `routes`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `route_name` text, nullable.
- `route_date` date, required.
- `route_type` text, required; allowed values: `maintenance`, `repair`, `green_to_clean`, `commercial`, `mixed`, `other`.
- `status` text, required, default `draft`; allowed values: `draft`, `scheduled`, `in_progress`, `completed`, `cancelled`, `archived`.
- `assigned_technician_app_user_id` UUID, nullable, references `app_users(id)`.
- `backup_technician_app_user_id` UUID, nullable, references `app_users(id)`.
- `service_area` text, nullable.
- `route_zone` text, nullable.
- `scheduled_start_at` timestamptz, nullable.
- `scheduled_end_at` timestamptz, nullable.
- `started_at` timestamptz, nullable.
- `completed_at` timestamptz, nullable.
- `weather_status` text, nullable; allowed values: `clear`, `rain_delay`, `storm_delay`, `freeze_weather`, `extreme_heat`, `other`.
- `technician_visible_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `route_type`.
- Check constraint on `status`.
- Nullable check constraint on `weather_status`.
- Index on `organization_id`.
- Index on `route_date`.
- Index on `status`.
- Index on `assigned_technician_app_user_id`.
- Index on `route_type`.
- Index on `service_area`.
- Index on `route_zone`.

## Technician Relationship and Assignment Scope

- Route assignment links to technician user records through `assigned_technician_app_user_id` and `backup_technician_app_user_id`.
- Role-based assignment enforcement is implemented later via membership/auth layers.
- Technicians may view future assigned routes; service-completion time-window enforcement (9:00 PM to 8:00 AM) is implemented later in service-visit/workflow layers.

## Route Privacy Rules

- Customers should not see full route details or other customers on a route.
- Customer route progress is limited to privacy-safe abstractions in later packs: stops-before-you and ETA.
- Exact customer-facing GPS is not implemented in this schema and is not allowed by protected rules.

## Future Relationships

- Route stops are created in `S02-016`.
- Service visits, route progression events, and notification workflows are created in later packs.
- Route optimization logic is intentionally deferred.

## Deferred Work

This pack intentionally does not implement:

- route stops
- service visits
- route optimization
- exact GPS tracking
- route/customer ETA UI
- notifications
- technician workflow execution
- API endpoints and auth guards
