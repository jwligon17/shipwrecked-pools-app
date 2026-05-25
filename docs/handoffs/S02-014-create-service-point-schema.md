# S02-014 Handoff — Create Service Point Schema

## Pack Summary

- Pack ID: `S02-014`
- Title: `Create Service Point Schema`
- Sprint: `S02 — Core Database / Domain Model`
- Scope: Database/domain model artifacts only for `service_points`

## Files Changed

- Created: `packages/db/migrations/0014_create_service_points.sql`
- Created: `packages/db/src/schema/service-points.ts`
- Created: `docs/database/domain-model/service-points.md`
- Updated: `packages/db/src/schema/index.ts`
- Updated: `test/smoke/db.test.ts`
- Updated: `docs/prompt-packs/STATUS_BOARD.md`

## Checks Run

1. `pnpm format:check` -> Pending
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
- S02-014 implementation files pass lint/typecheck/tests.

## Self-Review (Prompt Checklist)

1. Created service point schema only: Yes.
2. Avoided marker UI/photos/history/reports/quotes-repairs/API work: Yes.
3. Links to pool outlines, water bodies, and optionally equipment: Yes.
4. Includes normalized marker coordinate support: Yes.
5. Customer/technician/internal visibility rules separated and documented: Yes.
6. Status board and handoff updated: Yes.
7. Checks run or limitations documented: Yes.
8. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- Marker placement UI and rendering are deferred.
- Photo/media attachments, marker history, and quote/repair/report link workflows are deferred.
- Runtime auth/permission enforcement is deferred to Sprint 03+.

## Next Recommended Pack

- `S02-015 — Create Route Schema`
