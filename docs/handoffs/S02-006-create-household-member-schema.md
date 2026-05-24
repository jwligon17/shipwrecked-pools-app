# S02-006 Handoff — Create Household Member Schema

## Pack Info

- Pack ID: S02-006
- Title: Create Household Member Schema
- Sprint: S02 — Core Database / Domain Model
- Date: 2026-05-24
- Implemented by: Codex

## Scope Completed

Implemented only household member schema foundation artifacts:

- Added `household_members` SQL migration with required fields, constraints, indexes, and `updated_at` trigger.
- Added TypeScript schema/types export for household members.
- Added household-member domain model documentation.
- Updated DB smoke test coverage for household-member exports.
- Updated status board row for S02-006.

No out-of-scope domains were implemented.

## Files Created

- `packages/db/migrations/0006_create_household_members.sql`
- `packages/db/src/schema/household-members.ts`
- `docs/database/domain-model/household-members.md`
- `docs/handoffs/S02-006-create-household-member-schema.md`

## Files Modified

- `packages/db/src/schema/index.ts`
- `test/smoke/db.test.ts`
- `docs/prompt-packs/STATUS_BOARD.md`

## Acceptance Criteria Mapping

1. Household member migration/schema artifact exists: Yes (`0006_create_household_members.sql`, `household-members.ts`).
2. TypeScript schema exports exist: Yes.
3. Documentation exists: Yes (`docs/database/domain-model/household-members.md`).
4. Household access boundaries documented: Yes.
5. Invite token not stored raw: Yes (`invite_token_hash` only).
6. Billing/quote approval defaults are conservative: Yes (`can_receive_billing_notifications=false`, `can_approve_quotes=false`).
7. No property/invite-delivery/auth/UI/notifications/billing implementation added: Yes.
8. `STATUS_BOARD.md` updated for S02-006: Yes.
9. S02-006 handoff exists: Yes.
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

1. Created household member schema only: Yes.
2. Avoided invite delivery/auth/UI/notifications: Yes.
3. Access defaults conservative: Yes.
4. Household access limited to invited customer/location (documented): Yes.
5. Raw invite token storage avoided: Yes.
6. Updated status board and handoff: Yes.
7. Ran checks or documented limitations: Yes.
8. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- No invitation delivery flow (email/SMS) in this pack.
- No auth/session/invite-acceptance guard behavior in this pack.
- No notification delivery implementation in this pack.
- Runtime authorization/visibility enforcement is deferred to Sprint 03 guards/tests.

## Next Recommended Pack

- S02-007 — Create Property Schema
