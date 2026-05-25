# Pets Domain Model

## Purpose

`pets` stores customer/property pet records with operational safety context for future assigned technician workflows.

This model separates pet-specific data from general property/access notes so treat permissions and pet handling instructions can be managed with clear visibility boundaries.

## Table

- Name: `pets`
- Primary key: `id` (UUID)

## Fields

- `id` UUID primary key.
- `organization_id` UUID, required, references `organizations(id)`.
- `customer_id` UUID, required, references `customers(id)`.
- `property_id` UUID, nullable, references `properties(id)`.
- `name` text, required.
- `pet_type` text, required; allowed values: `dog`, `cat`, `other`.
- `status` text, required, default `active`; allowed values: `active`, `inactive`, `archived`.
- `temperament` text, nullable; allowed values when present: `friendly`, `barks`, `nervous`, `aggressive`, `unknown`, `other`.
- `treat_allowed` boolean, required, default `false`.
- `treat_notes` text, nullable.
- `technician_visible_notes` text, nullable.
- `internal_admin_notes` text, nullable.
- `customer_visible_notes` text, nullable.
- `must_secure_before_entry` boolean, required, default `false`.
- `notify_customer_before_entry` boolean, required, default `false`.
- `last_confirmed_at` timestamptz, nullable.
- `confirmed_by_app_user_id` UUID, nullable, references `app_users(id)`.
- `metadata` jsonb, required, default `{}`.
- `created_at` timestamptz, required, default `now()`.
- `updated_at` timestamptz, required, default `now()` (maintained by update trigger).
- `deleted_at` timestamptz, nullable (soft-delete marker).

## Constraints and Indexes

- Check constraint on `pet_type`.
- Check constraint on `status`.
- Check constraint on `temperament`.
- Index on `organization_id`.
- Index on `customer_id`.
- Index on `property_id`.
- Index on `status`.
- Index on `pet_type`.
- Index on `treat_allowed`.
- Index on `must_secure_before_entry`.
- Trigger updates `updated_at` on every row update.

## Dog Treat Permission and Safety Use Case

- `treat_allowed` supports customer preference for technician treat-giving behavior.
- `treat_notes` provides additional non-sensitive guidance.
- `must_secure_before_entry` and `notify_customer_before_entry` support technician safety and entry coordination.
- `temperament` provides quick operational context for assigned technicians.

## Relationship Notes

- `customer_id` ties each pet to a customer account.
- `property_id` is nullable to support customer-level pet records before property-level assignment is finalized.
- Future assigned-work workflows can use these fields for technician-safe operational context.

## Visibility and Privacy Rules

- Customers can later view/edit their own customer-facing pet profile fields.
- Technicians may later see assigned-work pet name, temperament, treat permission, `must_secure_before_entry`, and `technician_visible_notes` only for assigned work.
- Technicians must not see `internal_admin_notes`.
- Commercial export recipients must not receive pet notes.
- Pet notes must not contain gate codes or access secrets.
- Runtime enforcement is deferred to Sprint 03 auth/permission guards and API serializer tests.

## Intentional Non-Goals in S02-009

This pack does not implement:

- customer pet profile UI
- technician arrival popup UI
- route workflow integration
- notification delivery
- pet photo uploads
- service reports
- access-alert implementation
- auth/permission guards
- live production database connections or secrets
