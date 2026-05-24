# S02-005 Handoff — Create Customer Schema

## Pack Info

- Pack ID: S02-005
- Title: Create Customer Schema
- Sprint: S02 — Core Database / Domain Model
- Date: 2026-05-24
- Implemented by: Codex

## Scope Completed

Implemented only customer schema foundation artifacts:

- Added `customers` SQL migration and constraints.
- Added TypeScript schema/types export for customers.
- Added customer domain model documentation.
- Updated DB smoke test coverage for customer exports.
- Updated status board row for S02-005.

No out-of-scope domains were implemented.

## Files Created

- `packages/db/migrations/0005_create_customers.sql`
- `packages/db/src/schema/customers.ts`
- `docs/database/domain-model/customers.md`
- `docs/handoffs/S02-005-create-customer-schema.md`

## Files Modified

- `packages/db/src/schema/index.ts`
- `test/smoke/db.test.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Acceptance Criteria Mapping

1. Customer migration/schema artifact exists: Yes (`0005_create_customers.sql`, `customers.ts`).
2. Customer TypeScript schema exports exist: Yes.
3. Customer domain documentation exists: Yes (`docs/database/domain-model/customers.md`).
4. Residential and commercial supported: Yes (`customer_type` check + TS union).
5. Lead/customer conversion planned but not implemented: Yes (`source_lead_id` optional link documented, no workflow implementation).
6. No property/household/billing/report/route tables created: Yes.
7. Technician financial visibility restrictions documented: Yes (domain doc visibility section).
8. `STATUS_BOARD.md` updated for S02-005: Yes.
9. S02-005 handoff exists: Yes.
10. Checks run or limitations documented: Yes.

## Checks Run

- `pnpm format:check` — failed due pre-existing unrelated docs formatting drift only in:
  - `docs/prompt-packs/README_SPRINT_02_BATCH_02.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-005-create-customer-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-006-create-household-member-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-007-create-property-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-008-create-access-gate-code-schema.md`
- `pnpm lint` — passed
- `pnpm typecheck` — passed
- `pnpm test` — passed
- `pnpm --filter @shipwrecked/db typecheck` — passed

## Self-Review (Prompt Checklist)

1. Created customer schema only: Yes.
2. Avoided property/household/billing/report/route tables: Yes.
3. Supports residential and commercial customers: Yes.
4. Internal and customer-visible notes separated: Yes (`notes_internal_admin_only`, `notes_customer_visible`).
5. Technician financial restrictions documented: Yes.
6. Avoided conversion/UI/API/auth/billing/notification implementation: Yes.
7. Updated status board and handoff: Yes.
8. Ran checks or documented limitations: Yes.
9. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- No lead-to-customer conversion workflow behavior in this pack.
- No household member/property/water-body or billing schema in this pack.
- No auth/permission guard enforcement in this pack (scheduled for Sprint 03).

## Next Recommended Pack

- S02-006 — Create Household Member Schema
