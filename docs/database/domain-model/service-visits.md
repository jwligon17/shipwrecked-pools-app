# Service Visits Domain Model

## Purpose

`service_visits` stores each service execution record tied to a customer property visit.

This table captures maintenance and non-maintenance visit execution state while keeping service-visit completion separate from repair/work-order completion lifecycles.

## Table

- Name: `service_visits`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, required, references `properties(id)`.
- `route_id` UUID, nullable, references `routes(id)`.
- `route_stop_id` UUID, nullable, references `route_stops(id)`.
- `assigned_technician_app_user_id` UUID, nullable, references `app_users(id)`.
- `visit_date` date, required.
- `visit_type` text, required; allowed values:
  - `weekly_maintenance`
  - `biweekly_maintenance`
  - `one_time_maintenance`
  - `repair`
  - `green_to_clean`
  - `acid_wash`
  - `drain_and_refill`
  - `commercial_service`
  - `inspection`
  - `other`
- `status` text, required, default `scheduled`; allowed values:
  - `scheduled`
  - `on_the_way`
  - `arrived`
  - `in_progress`
  - `completed`
  - `skipped`
  - `cancelled`
  - `rescheduled`
  - `needs_admin_review`
- `scheduled_start_at` timestamptz, nullable.
- `scheduled_end_at` timestamptz, nullable.
- `on_the_way_at` timestamptz, nullable.
- `arrived_at` timestamptz, nullable.
- `started_at` timestamptz, nullable.
- `completed_at` timestamptz, nullable.
- `skipped_at` timestamptz, nullable.
- `skip_reason` text, nullable; allowed values:
  - `gate_locked`
  - `aggressive_dog`
  - `weather`
  - `customer_requested_reschedule`
  - `unsafe_conditions`
  - `equipment_issue`
  - `other`
- `completion_source` text, nullable; allowed values:
  - `technician`
  - `admin`
  - `system`
- `customer_visible_summary` text, nullable.
- `technician_visible_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `requires_admin_review` boolean, required, default `false`.
- `is_billable` boolean, required, default `false`.
- `metadata` jsonb, required, default empty object.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `visit_type`.
- Check constraint on `status`.
- Nullable check constraint on `skip_reason`.
- Nullable check constraint on `completion_source`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `route_id`.
- Index on `route_stop_id`.
- Index on `assigned_technician_app_user_id`.
- Index on `visit_date`.
- Index on `visit_type`.
- Index on `status`.
- Index on `completed_at`.
- Index on `requires_admin_review`.

## Service Visit Scope and Lifecycle Boundaries

- Weekly and biweekly maintenance visits are represented as service visits and are not master jobs.
- Route stop progression and service visit completion are related but distinct records.
- Service visit completion does not imply repair/work-order completion.
- Future repair/work-order completion lifecycle remains separate and is implemented in later packs.

## Visibility and Privacy Rules

- `customer_visible_summary` is the only summary field intended for customer-facing visit context.
- `technician_visible_notes` is for assigned operational execution context.
- `internal_admin_notes` is admin/owner internal-only and must never be customer-visible.
- Technician financial restrictions remain non-negotiable: no billing/payment/profitability exposure through service visit surfaces.

## Deferred Work

This pack intentionally does not implement:

- checklist records
- service photos
- chemistry readings or applied chemistry records
- report generation/publishing
- work-order lifecycle/completion
- customer/technician/admin workflow UI
- notifications
- API endpoints or auth guards

Technician service-completion time restriction (9:00 PM to 8:00 AM local time) is enforced later in workflow/business logic, not by this table.
