# Leads Domain Model

## Purpose

`leads` stores non-customer prospect records for Shipwrecked onboarding before customer conversion.

This supports V1 direction that Shipwrecked serves both leads and customers in the same app ecosystem while keeping lead data scoped and separate from customer-only operations.

## Table

- Name: `leads`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `app_user_id` UUID, nullable, references `app_users(id)`.
- `lead_type` text, required, default `unknown`; allowed values: `residential`, `commercial`, `unknown`.
- `status` text, required, default `new`; allowed values: `new`, `contacted`, `needs_review`, `qualified`, `quoted`, `converted`, `lost`, `archived`.
- `source` text, nullable; allowed values when present: `website`, `referral`, `phone`, `app`, `manual`, `other`.
- `first_name` text, nullable.
- `last_name` text, nullable.
- `company_name` text, nullable.
- `email` text, nullable.
- `phone` text, nullable.
- `service_address_line1` text, nullable.
- `service_address_line2` text, nullable.
- `service_city` text, nullable.
- `service_state` text, nullable.
- `service_postal_code` text, nullable.
- `requested_service_type` text, nullable.
- `has_pool` boolean, nullable.
- `has_spa` boolean, nullable.
- `pool_notes` text, nullable.
- `frustration_note` text, nullable.
- `preferred_contact_method` text, nullable; allowed values when present: `push`, `email`, `sms`, `phone`, `none`.
- `assigned_admin_user_id` UUID, nullable, references `app_users(id)`.
- `converted_customer_id` UUID, nullable; no FK yet because customer schema is not implemented in S02-004.
- `lost_reason` text, nullable.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `lead_type`.
- Check constraint on `status`.
- Check constraint on `source`.
- Check constraint on `preferred_contact_method`.
- Index on `organization_id`.
- Index on `status`.
- Index on `lead_type`.
- Index on `email`.
- Index on `phone`.
- Index on `created_at`.
- Index on `assigned_admin_user_id`.
- Trigger updates `updated_at` on every row update.

## Privacy and Visibility Rules

- Leads can access only their own lead/onboarding data.
- Leads must not see customer reports, route data, chemistry, billing, technician operational data, or internal notes.
- Admin roles can review and manage lead records.
- Technician roles should not see leads unless a later explicit workflow grants scoped access for inspection/quote tasks.
- Commercial lead records must not be used for health-department/compliance exports until approved commercial account/export workflows are implemented.

## Residential vs Commercial Handling

- `lead_type` supports `residential`, `commercial`, and `unknown`.
- `company_name` and address fields allow early intake for commercial prospects without creating commercial-account records yet.

## Conversion Planning (Not Implemented Here)

Future packs will implement lead conversion and related links:

- `lead` -> `customer`
- lead service address -> property records
- lead pool/spa intake notes -> water body intake
- lead `app_user_id` -> customer-facing membership
- lead request/quote paths -> quote/workflow systems

S02-004 stores conversion planning data but does not implement conversion workflow behavior.

## Intentional Non-Goals in S02-004

This pack does not implement:

- customer schema
- property schema
- lead-to-customer conversion workflow
- admin dashboard lead workflows
- mobile onboarding screens
- email/SMS automation
- auth/session/permission guard logic
- billing/payment/notification/report/route/job schema
- live production database connections or secrets
