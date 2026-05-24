# S02-004 Handoff — Create Lead Schema

## Pack Summary

- Pack ID: S02-004
- Title: Create Lead Schema
- Sprint: S02 — Core Database / Domain Model
- Status: Implemented
- Date: 2026-05-24

## Scope Implemented

Implemented only lead-domain foundation artifacts:

- Added SQL migration for `leads` table with organization scoping, nullable `app_user_id`, lead type/status/source constraints, intake fields, and required indexes.
- Added TypeScript lead schema exports/constants/types.
- Added lead domain-model documentation with privacy boundaries and explicit conversion-planning-only notes.
- Updated DB smoke test to validate lead exports.
- Updated status board row for S02-004.

## Files Created

- `packages/db/migrations/0004_create_leads.sql`
- `packages/db/src/schema/leads.ts`
- `docs/database/domain-model/leads.md`
- `docs/handoffs/S02-004-create-lead-schema.md`

## Files Modified

- `packages/db/src/schema/index.ts`
- `test/smoke/db.test.ts`
- `docs/database/domain-model/README.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Acceptance Criteria Check

1. Lead migration/schema artifact exists: Yes.
2. Lead TypeScript schema exports exist: Yes.
3. Lead documentation exists: Yes.
4. Lead/customer conversion planned but not implemented: Yes.
5. No customer/property table created: Yes.
6. No admin dashboard/app screen implemented: Yes.
7. Lead privacy rules documented: Yes.
8. `STATUS_BOARD.md` has S02-004 implemented/self-reviewed: Yes.
9. S02-004 handoff exists: Yes.
10. Checks run or limitations documented: Yes.

## Checks Run

- `pnpm format:check` -> Failed (pre-existing unrelated formatting drift in prompt-pack docs and status board files).
- `pnpm lint` -> Passed.
- `pnpm typecheck` -> Passed.
- `pnpm test` -> Passed.
- `pnpm --filter @shipwrecked/db typecheck` -> Passed.

## Self-Review Prompt Results (S02-004)

1. Created lead schema only: Pass.
2. Avoided customer/property/conversion implementation: Pass.
3. Schema supports residential and commercial leads: Pass.
4. Lead privacy/visibility boundaries documented: Pass.
5. Avoided admin UI/app onboarding features: Pass.
6. Updated status board and handoff: Pass.
7. Ran checks or documented limitations: Pass.
8. Avoided unrelated files: Pass.

## Limitations / Notes

- `pnpm format:check` currently reports pre-existing formatting drift in prompt-pack docs and status board files outside S02-004 implementation intent.
- `converted_customer_id` intentionally has no foreign key yet; customer schema/conversion packs will add linkage later.

## Next Recommended Pack

- S02-005 — Customer Schema
