# S02-015 Handoff — Create Route Schema

## Pack Summary

- Pack ID: `S02-015`
- Title: `Create Route Schema`
- Sprint: `S02 — Core Database / Domain Model`
- Scope: Database/domain model artifacts only for `routes`

## Files Changed

- Created: `packages/db/migrations/0015_create_routes.sql`
- Created: `packages/db/src/schema/routes.ts`
- Created: `docs/database/domain-model/routes.md`
- Updated: `packages/db/src/schema/index.ts`
- Updated: `test/smoke/db.test.ts`
- Updated: `docs/prompt-packs/STATUS_BOARD.md`

## Checks Run

1. `pnpm format:check` -> Failed
2. `pnpm lint` -> Passed
3. `pnpm typecheck` -> Passed
4. `pnpm test` -> Passed
5. `pnpm --filter @shipwrecked/db typecheck` -> Passed

## Check Notes

- `pnpm format:check` failed due pre-existing unrelated docs formatting drift in:
  - `docs/prompt-packs/README_SPRINT_02_BATCH_04.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-013-create-pool-outline-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-014-create-service-point-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-015-create-route-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-016-create-route-stop-schema.md`
- S02-015 implementation files pass lint/typecheck/tests.

## Self-Review (Prompt Checklist)

1. Created route schema only: Yes.
2. Avoided route stops/service visits/UI/notifications/exact GPS/API work: Yes.
3. Schema links assigned technician to app users: Yes.
4. Route privacy/no-exact-GPS rules documented: Yes.
5. Status board and handoff updated: Yes.
6. Checks run or limitations documented: Yes.
7. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- Route stops are intentionally deferred to `S02-016`.
- Service visits, route progression workflows, route optimization, notifications, and UI are deferred.
- Runtime auth/permission enforcement is deferred to Sprint 03+.

## Next Recommended Pack

- `S02-016 — Create Route Stop Schema`
