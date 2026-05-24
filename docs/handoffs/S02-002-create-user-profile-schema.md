# S02-002 Handoff — Create User Profile Schema

## Pack Summary

- Pack ID: S02-002
- Title: Create User Profile Schema
- Sprint: S02 — Core Database / Domain Model
- Status: Implemented
- Date: 2026-05-24

## Scope Implemented

Implemented only app-user profile foundation artifacts:

- Added SQL migration for `app_users` table with constraints, indexes, and `updated_at` trigger.
- Added TypeScript app-user schema exports/constants/types.
- Added app-users domain-model documentation with explicit auth separation.
- Updated DB smoke test to validate app-user schema exports.
- Updated status board row for S02-002.

## Files Created

- `packages/db/migrations/0002_create_app_users.sql`
- `packages/db/src/schema/app-users.ts`
- `docs/database/domain-model/app-users.md`
- `docs/handoffs/S02-002-create-user-profile-schema.md`

## Files Modified

- `packages/db/src/schema/index.ts`
- `test/smoke/db.test.ts`
- `docs/database/domain-model/README.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Acceptance Criteria Check

1. App user migration/schema artifact exists: Yes.
2. App user TypeScript schema exports exist: Yes.
3. Documentation explains auth separation: Yes.
4. No password/session/login/2FA implementation exists: Yes.
5. No role membership table is created: Yes.
6. No customer/lead schema is created: Yes.
7. No product feature UI or API endpoint is implemented: Yes.
8. `STATUS_BOARD.md` has S02-002 implemented/self-reviewed: Yes.
9. S02-002 handoff exists: Yes.
10. Checks are run or limitations documented: Yes.

## Checks Run

- `pnpm format:check` -> Failed (pre-existing unrelated formatting drift in prompt-pack docs and status board files).
- `pnpm lint` -> Passed.
- `pnpm typecheck` -> Passed.
- `pnpm test` -> Passed.
- `pnpm --filter @shipwrecked/db typecheck` -> Passed.

## Self-Review Prompt Results (S02-002)

1. Created app user profile schema only: Pass.
2. Avoided password/auth/session implementation: Pass.
3. Avoided memberships/customers/leads: Pass.
4. Schema supports future role-based experiences: Pass.
5. Privacy and auth separation documented: Pass.
6. Status board and handoff updated: Pass.
7. Checks run or limitations documented: Pass.
8. Avoided unrelated files: Pass.

## Limitations / Notes

- `pnpm format:check` currently reports pre-existing formatting drift in prompt-pack docs and status board files outside S02-002 implementation intent.
- `two_factor_required` and `two_factor_enabled` are profile flags only in this pack; no auth behavior was implemented.

## Next Recommended Pack

- S02-003 — Role + Membership Schema
