# Prompt Pack: S02-012 — Create Equipment Schema

## Pack Metadata

- **Pack ID:** S02-012
- **Title:** Create Equipment Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-005, S02-007, S02-010, S02-011
- **Blocks:** technician pool profile, deal targeting, suggested chemical guidance prerequisites, repairs/work orders, equipment reports, commercial records

## Goal

Create the equipment schema for pumps, filters, heaters, salt systems, cleaners, robots, automation, valves, and other pool system components.

This schema should support property-level equipment, water-body-specific equipment, commercial equipment, product/deal eligibility, repair/work-order association later, and suggested chemical guidance prerequisites.

This pack creates equipment domain artifacts only. It does not implement repairs, quotes, products/deals, inventory, work orders, or equipment UI.

## Why This Matters

Equipment data drives:

- technician context
- customer pool profile
- correct deal/product targeting
- repairs and work orders
- chemical guidance prerequisites
- commercial compliance context
- future profitability and maintenance analytics

Shipwrecked needs a deep equipment database without exposing margin/profitability or internal notes to technicians/customers.


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
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/product/feature-amendments.md`
- `docs/database/domain-model/properties.md`
- `docs/database/domain-model/water-bodies.md`
- `docs/database/domain-model/water-body-relationships.md`
- `packages/db/src/schema/properties.ts`
- `packages/db/src/schema/water-bodies.ts`
- `packages/db/src/schema/water-body-relationships.ts` if it exists
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0012_create_equipment.sql` or next correctly numbered migration
- `packages/db/src/schema/equipment.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/equipment.md`
- `docs/handoffs/S02-012-create-equipment-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- shared types/statuses if useful
- `test/smoke/db.test.ts`

## Files Codex Must Not Touch

Do not implement:

- product/deal system
- inventory
- repairs/work orders
- equipment photos table
- equipment UI
- quote/billing/payment
- suggested chemical calculations
- service reports

Do not store real customer/equipment serial numbers.

## Build Prompt For Codex

Execute S02-012 only.

Create the equipment schema.

### Equipment table

Create an `equipment` table.

It should include at minimum:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `customer_id` UUID not null references `customers(id)`
- `property_id` UUID not null references `properties(id)`
- `water_body_id` UUID nullable references `water_bodies(id)`
- `equipment_type` text/check constraint:
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
- `status` text/check constraint:
  - `active`
  - `inactive`
  - `needs_attention`
  - `recommended_replacement`
  - `removed`
  - `archived`
- `display_name` text nullable
- `manufacturer` text nullable
- `model` text nullable
- `serial_number_last_four` text nullable
- `install_date` date nullable
- `warranty_expiration_date` date nullable
- `filter_type` text/check constraint nullable:
  - `cartridge`
  - `sand`
  - `de`
  - `unknown`
  - `not_applicable`
- `pump_type` text/check constraint nullable:
  - `single_speed`
  - `dual_speed`
  - `variable_speed`
  - `unknown`
  - `not_applicable`
- `sanitizer_related` boolean default false
- `supports_deal_targeting` boolean default true
- `supports_chemical_guidance` boolean default false
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
- index property_id
- index water_body_id
- index equipment_type
- index status
- index filter_type
- index pump_type
- index supports_deal_targeting
- index supports_chemical_guidance

### Future relationship notes

Document:

- some equipment may be property-level and not tied to one water body.
- some equipment may be tied to a water body.
- equipment photos should be a later schema.
- repairs/work orders will associate with equipment later.
- deals/products should target equipment types later.
- suggested chemical guidance may require equipment data, but calculations are not implemented here.
- serial numbers should not be broadly exposed; only last four or safe placeholder is modeled.

### TypeScript schema/types

Create exports for:

- equipment type values
- equipment status values
- filter type values
- pump type values
- row/interface
- insert/update shapes if useful
- table name constant

### Documentation

Create `docs/database/domain-model/equipment.md`.

Include:

- purpose
- fields
- property-level vs water-body-specific equipment
- deal/product eligibility
- chemical guidance prerequisite impact
- technician/customer/admin visibility
- future repair/work-order associations
- what this pack intentionally does not implement

### Tests/checks

Add/update safe smoke tests for equipment schema exports if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-012.

Create S02-012 handoff.

## Acceptance Criteria

S02-012 is complete only if:

- Equipment migration/schema artifact exists.
- TypeScript schema exports exist.
- Equipment domain documentation exists.
- Property-level and water-body-specific equipment are supported.
- Deal targeting and chemical guidance flags are represented without implementing those features.
- Customer/technician/internal notes are separated.
- No equipment photo/product/deal/repair/work-order/inventory implementation is created.
- `STATUS_BOARD.md` has S02-012 implemented/self-reviewed.
- S02-012 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-012 before finalizing.

Check:

1. Did you create equipment schema only?
2. Did you avoid equipment photo/product/deal/repair/work-order/inventory implementation?
3. Does it support property-level and water-body-specific equipment?
4. Are deal targeting and chemical guidance represented only as safe flags?
5. Are note visibility levels separated?
6. Did you update status board and handoff?
7. Did you run checks or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-012 equipment schema"
```
