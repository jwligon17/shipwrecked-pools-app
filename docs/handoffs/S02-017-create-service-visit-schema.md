# S02-017 Handoff — Create Service Visit Schema

## Pack Summary

- Pack ID: `S02-017`
- Title: `Create Service Visit Schema`
- Sprint: `S02 — Core Database / Domain Model`
- Scope: Database/domain model artifacts only for `service_visits`

## Files Changed

- Created: `packages/db/migrations/0017_create_service_visits.sql`
- Created: `packages/db/src/schema/service-visits.ts`
- Created: `docs/database/domain-model/service-visits.md`
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
  - `docs/prompt-packs/README_SPRINT_02_BATCH_05.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-017-create-service-visit-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-018-create-checklist-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-019-create-photo-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-020-create-chemistry-schema.md`
- S02-017 implementation files pass lint/typecheck/tests.

## Self-Review (Prompt Checklist)

1. Created service visit schema only: Yes.
2. Avoided checklist/photo/chemistry/report/work-order implementation: Yes.
3. Schema links routes, route stops, customers, properties, and technicians: Yes.
4. Customer/technician/internal notes are separated: Yes.
5. Maintenance visit completion and repair/work-order completion are documented as separate: Yes.
6. Status board and handoff updated: Yes.
7. Checks run or limitations documented: Yes.
8. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- Checklist, photo, chemistry, and report schemas are intentionally deferred to later packs.
- Work-order lifecycle/completion modeling is intentionally deferred.
- Route UI, technician workflow, notifications, API endpoints, and auth guards are intentionally deferred.
- Technician service-completion time restriction (9:00 PM to 8:00 AM local time) is enforced later in workflow/business logic, not this table.

## Next Recommended Pack

- `S02-018 — Create Checklist Schema`
