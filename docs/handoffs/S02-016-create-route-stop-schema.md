# S02-016 Handoff — Create Route Stop Schema

## Pack Summary

- Pack ID: `S02-016`
- Title: `Create Route Stop Schema`
- Sprint: `S02 — Core Database / Domain Model`
- Scope: Database/domain model artifacts only for `route_stops`

## Files Changed

- Created: `packages/db/migrations/0016_create_route_stops.sql`
- Created: `packages/db/src/schema/route-stops.ts`
- Created: `docs/database/domain-model/route-stops.md`
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
- S02-016 implementation files pass lint/typecheck/tests.

## Self-Review (Prompt Checklist)

1. Created route stop schema only: Yes.
2. Avoided service visits/reports/ETA calculations/notifications/exact GPS/UI/API work: Yes.
3. Schema links routes/customers/properties: Yes.
4. Stop status and delay/skip/reschedule reasons represented: Yes.
5. Route privacy/no-other-customers/no-exact-GPS rules documented: Yes.
6. Status board and handoff updated: Yes.
7. Checks run or limitations documented: Yes.
8. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- Service visits are intentionally deferred to future packs.
- ETA calculations, route UI, notifications, and technician workflow execution are deferred.
- Access enforcement is deferred to Sprint 03 auth/permission layers and API tests.

## Next Recommended Pack

- `S02-017 — Create Service Visit Schema`
