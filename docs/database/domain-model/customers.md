# Customers Domain Model

## Purpose

`customers` stores organization-scoped customer accounts for Shipwrecked residential and commercial service relationships.

This table is the customer anchor for future property, household-member, water-body, report, quote/repair, billing, notification, and conversation workflows.

## Table

- Name: `customers`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `primary_app_user_id` UUID, nullable, references `app_users(id)`.
- `source_lead_id` UUID, nullable, references `leads(id)`.
- `customer_type` text, required; allowed values: `residential`, `commercial`.
- `status` text, required, default `prospective`; allowed values: `prospective`, `active`, `paused`, `past_due`, `inactive`, `cancelled`, `archived`.
- `display_name` text, required.
- `legal_name` text, nullable.
- `first_name` text, nullable.
- `last_name` text, nullable.
- `company_name` text, nullable.
- `primary_email` text, nullable.
- `primary_phone` text, nullable.
- `preferred_contact_method` text, nullable; allowed values when present: `push`, `email`, `sms`, `phone`, `none`.
- `default_service_schedule` text, nullable; allowed values when present: `weekly`, `biweekly`, `commercial_custom`, `as_needed`, `none`.
- `onboarding_status` text, required, default `not_started`; allowed values: `not_started`, `in_progress`, `needs_review`, `complete`.
- `billing_profile_status` text, required, default `not_configured`; allowed values: `not_configured`, `pending`, `active`, `failed`, `external`.
- `notes_customer_visible` text, nullable.
- `notes_internal_admin_only` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `customer_type`.
- Check constraint on `status`.
- Check constraint on `preferred_contact_method`.
- Check constraint on `default_service_schedule`.
- Check constraint on `onboarding_status`.
- Check constraint on `billing_profile_status`.
- Index on `organization_id`.
- Index on `status`.
- Index on `customer_type`.
- Index on `primary_app_user_id`.
- Index on `source_lead_id`.
- Index on `primary_email`.
- Index on `primary_phone`.
- Index on `created_at`.
- Trigger updates `updated_at` on every row update.

## Residential vs Commercial

- Both residential and commercial customers share the same core table using `customer_type`.
- Commercial-specific contacts and export workflows are intentionally deferred to later dedicated schemas and workflows.

## Visibility and Privacy Rules

- `notes_customer_visible` is reserved for customer-safe plain-language context.
- `notes_internal_admin_only` is internal-only and must never be exposed to customers.
- `billing_profile_status` is an admin/owner operational field and must not be exposed to technicians.
- Technician financial visibility restrictions remain non-negotiable: no billing status, payment details, profitability, or internal financial notes.
- Household members, when implemented later, must only access invited customer/location data and never unrelated customers.

## Relationship Notes

- `primary_app_user_id` optionally links to the primary app user for the customer account.
- `source_lead_id` optionally links back to originating lead data.
- Role enforcement and serializer visibility boundaries are implemented later in Sprint 03+.

## Intentional Non-Goals in S02-005

This pack does not implement:

- household member schema
- property schema
- water body schema
- billing/payment tables or workflows
- service visit/report tables
- route tables
- quote/repair/work-order tables
- lead-to-customer conversion workflow behavior
- API endpoints, auth guards, or UI screens
- notification delivery
- live production database connections or secrets
