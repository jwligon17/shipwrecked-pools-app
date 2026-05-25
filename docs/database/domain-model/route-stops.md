# Route Stops Domain Model

## Purpose

`route_stops` stores individual customer/property stops within a route.

This table is the foundational stop-level model for route progress and operational status context. It does not implement service visits, route UI, notifications, or ETA calculations.

## Table

- Name: `route_stops`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `route_id` UUID, required, references `routes(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `assigned_technician_app_user_id` UUID, nullable, references `app_users(id)`.
- `stop_order` integer, required.
- `status` text, required, default `scheduled`; allowed values:
  - `scheduled`
  - `on_the_way`
  - `arrived`
  - `in_progress`
  - `completed`
  - `skipped`
  - `delayed`
  - `rescheduled`
  - `cancelled`
- `delay_reason` text, nullable; allowed values:
  - `traffic`
  - `weather`
  - `gate_locked`
  - `aggressive_dog`
  - `customer_requested_reschedule`
  - `equipment_issue`
  - `technician_issue`
  - `other`
- `scheduled_arrival_window_start` timestamptz, nullable.
- `scheduled_arrival_window_end` timestamptz, nullable.
- `estimated_arrival_at` timestamptz, nullable.
- `actual_arrival_at` timestamptz, nullable.
- `started_at` timestamptz, nullable.
- `completed_at` timestamptz, nullable.
- `skipped_at` timestamptz, nullable.
- `rescheduled_at` timestamptz, nullable.
- `customer_notified_at` timestamptz, nullable.
- `admin_notified_at` timestamptz, nullable.
- `technician_visible_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `customer_visible_status_note` text, nullable.
- `route_progress_sort_key` integer, nullable.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `status`.
- Nullable check constraint on `delay_reason`.
- Partial unique index on `(route_id, stop_order)` where `deleted_at IS NULL`.
- Index on `organization_id`.
- Index on `route_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `assigned_technician_app_user_id`.
- Index on `status`.
- Index on `delay_reason`.
- Index on `estimated_arrival_at`.
- Index on `completed_at`.

## Relationship Notes

- `route_id` links each stop to one route day record.
- `customer_id` and `property_id` anchor stop-level customer/property scope.
- `assigned_technician_app_user_id` supports technician assignment visibility in later workflow layers.

## Customer-Safe Progress and Privacy Rules

- Customers can only see their own stop status/progress.
- Customers must never see other customers on the route.
- Customer progress is later exposed using privacy-safe abstractions such as stops-before-you and ETA.
- Exact GPS tracking is not implemented in this schema and is not allowed for customer visibility.
- Route stops must not expose cross-customer route identities.

## Delay/Skip/Reschedule Semantics

- `status` and `delay_reason` support operational stop transitions and delay/skip context.
- Delay/skipped/rescheduled states may trigger future customer/admin notifications, but notification delivery is not implemented in this pack.
- Route reorder history/audit can be modeled in a later dedicated schema pack.

## Deferred Work

This pack intentionally does not implement:

- service visit creation/association workflows
- report generation
- ETA calculation logic
- customer/technician/admin route UI
- exact GPS tracking
- notification delivery
- API endpoints and auth guards
- technician service-completion time-window enforcement (handled later in service-visit/workflow layers)
