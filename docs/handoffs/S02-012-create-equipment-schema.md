# S02-012 Handoff — Create Equipment Schema

## Pack Summary

- Pack ID: S02-012
- Title: Create Equipment Schema
- Sprint: S02 — Core Database / Domain Model
- Status: Implemented
- Completed by: Codex
- Date: 2026-05-24

## Scope Completed

Implemented equipment schema/domain-model foundation only.

Included:

- New migration for `equipment` table and indexes.
- New TypeScript schema exports/types for equipment domain.
- Domain documentation for equipment model and visibility boundaries.
- Status board update for S02-012.
- Smoke test update covering equipment exports.

Not included (by design):

- product/deal implementation
- inventory
- repairs/work orders
- equipment photos table
- quote/billing/payment
- suggested chemical calculations
- service reports
- UI/API/auth/notification/live DB work

## Files Created

- `packages/db/migrations/0012_create_equipment.sql`
- `packages/db/src/schema/equipment.ts`
- `docs/database/domain-model/equipment.md`
- `docs/handoffs/S02-012-create-equipment-schema.md`

## Files Modified

- `packages/db/src/schema/index.ts`
- `test/smoke/db.test.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Schema Notes

- `equipment` supports organization/customer/property linkage with optional `water_body_id`.
- Supports required `equipment_type`, `status`, `filter_type`, and `pump_type` enumerations via check constraints.
- Includes safe serial modeling via `serial_number_last_four` only.
- Separates note visibility fields:
  - `notes_customer_visible`
  - `notes_technician_visible`
  - `notes_internal_admin_only`
- Includes future-safe flags:
  - `supports_deal_targeting`
  - `supports_chemical_guidance`
- Includes soft-delete (`deleted_at`) and `updated_at` trigger.

## Checks Run

1. `pnpm format:check`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm --filter @shipwrecked/db typecheck`

## Check Results

- `pnpm format:check`: pass
- `pnpm lint`: pass
- `pnpm typecheck`: pass
- `pnpm test`: pass
- `pnpm --filter @shipwrecked/db typecheck`: pass

## Self-Review (S02-012 Prompt)

1. Create equipment schema only: pass.
2. Avoid equipment photo/product/deal/repair/work-order/inventory implementation: pass.
3. Support property-level and water-body-specific equipment: pass (`water_body_id` nullable).
4. Represent deal targeting and chemical guidance as safe flags only: pass.
5. Separate note visibility levels: pass.
6. Update status board and handoff: pass.
7. Run checks or document limitations: pass (all checks run/passed).
8. Avoid unrelated files: pass.

## Limitations / Deferred Work

- No equipment photos schema in this pack.
- No repairs/work orders relationships in this pack.
- No deal/product logic in this pack.
- No chemical guidance calculation logic in this pack.
- Runtime role enforcement remains deferred to Sprint 03 auth/API layers.

## Next Recommended Pack

- S02-013 — Pool Outline Schema
