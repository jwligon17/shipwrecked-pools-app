# Prompt Pack: S02-007 — Create Property Schema

## Pack Metadata

- **Pack ID:** S02-007
- **Title:** Create Property Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005
- **Blocks:** access/gate codes, pets, water bodies, equipment, pool outlines, routes, service visits, reports, commercial properties

## Goal

Create the property schema for service locations associated with customers.

This schema should support residential and commercial properties, multiple properties per customer, and future multiple bodies of water at a single property.

This pack creates property domain artifacts only. It does not implement access/gate codes, pets, water bodies, equipment, routes, reports, or service schedules yet.

## Why This Matters

A customer is not the same thing as a property. Shipwrecked may service:

- one residential customer with one backyard pool
- one customer with multiple properties
- a commercial customer with multiple pools/bodies of water at one property
- future accounts where contacts and service locations differ

Properties anchor service location, access notes, water bodies, equipment, routes, reports, and commercial exports.


## Common Sprint 02 Scope Guard

Sprint 02 is the core database/domain-model sprint.

This pack may create database/domain schema artifacts, migration files, type exports, schema documentation, seed-shape notes, and tests/checks related to the specific domain object in this pack.

This pack must not implement:
- auth flows or login screens
- billing/payment logic
- notification delivery
- customer/technician/admin screens
- reports/routes/quotes/repairs/master jobs beyond references required for relational planning
- live production database connections
- real customer data
- real gate codes
- real payment information
- secrets

Do not run migrations against a live database unless the repo already has an explicit safe local/test migration workflow and the prompt pack requires it. Prefer creating migrations/schema files and running static checks/tests first.


## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/product/feature-amendments.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/customers.md`
- `docs/database/domain-model/household-members.md` if it exists
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/customers.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0007_create_properties.sql` or next correctly numbered migration
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/properties.md`
- `docs/handoffs/S02-007-create-property-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- shared types/statuses if useful
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- access/gate code table
- pet table
- water body table
- equipment table
- service route table
- reports
- commercial export table
- property UI
- geolocation/live tracking

Do not store real customer addresses.

## Build Prompt For Codex

Execute S02-007 only.

Create the property schema.

### Property table

Create a `properties` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_type` text/check constraint:
  - `residential`
  - `commercial`
  - `hoa`
  - `hotel`
  - `apartment_complex`
  - `other`
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `paused`
  - `archived`
- `display_name` text nullable
- `service_address_line1` text nullable
- `service_address_line2` text nullable
- `service_city` text nullable
- `service_state` text nullable
- `service_postal_code` text nullable
- `service_country` text default `US`
- `timezone` text nullable
- `latitude` numeric nullable
- `longitude` numeric nullable
- `is_primary` boolean default false
- `service_area` text nullable
- `route_zone` text nullable
- `commercial_compliance_required` boolean default false
- `notes_customer_visible` text nullable
- `notes_technician_visible` text nullable
- `notes_internal_admin_only` text nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- index organization_id
- index customer_id
- index property_type
- index status
- index postal code/city/state if useful
- index route_zone/service_area if useful
- index commercial_compliance_required if useful

### Visibility rules

Document:

- customers/household members can see customer-safe property information.
- technicians may see service location, technician-visible notes, and route/service details for assigned work only.
- admins can see internal/admin-only property notes.
- commercial compliance recipients do not automatically see property access/gate info; export rules apply later.
- gate codes/access secrets are handled in S02-008, not stored directly in property notes.

### TypeScript schema/types

Create exports for:

- property type values
- property status values
- property row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/properties.md`.

Include:

- purpose
- relationship to customers
- residential/commercial handling
- future relationship to water bodies/access/pets/routes/reports
- visibility rules
- what this pack intentionally does not implement

### Tests/checks

Add safe smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-007.

Create S02-007 handoff.

## Acceptance Criteria

S02-007 is complete only if:

- Property migration/schema artifact exists.
- TypeScript schema exports exist.
- Documentation exists.
- Residential and commercial property types are supported.
- Gate/access secrets are not stored in the property table.
- No access/gate/pet/water-body/route/report schema is created.
- `STATUS_BOARD.md` has S02-007 implemented/self-reviewed.
- S02-007 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-007 before finalizing.

Check:

1. Did you create property schema only?
2. Did you avoid access/gate/pet/water-body/route/report tables?
3. Does it support residential and commercial properties?
4. Are technician/customer/admin note visibility levels separated?
5. Are gate codes/access secrets kept out of property table?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-007 property schema"
```
