# S02-013 Handoff — Create Pool Outline Schema

## Pack Summary

- Pack ID: `S02-013`
- Title: `Create Pool Outline Schema`
- Sprint: `S02 — Core Database / Domain Model`
- Scope: Database/domain model artifacts only for `pool_outlines`

## Files Changed

- Created: `packages/db/migrations/0013_create_pool_outlines.sql`
- Created: `packages/db/src/schema/pool-outlines.ts`
- Created: `docs/database/domain-model/pool-outlines.md`
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

- `pnpm format:check` reported style drift in:
  - `docs/prompt-packs/README_SPRINT_02_BATCH_04.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-013-create-pool-outline-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-014-create-service-point-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-015-create-route-schema.md`
  - `docs/prompt-packs/sprint-02-core-database/S02-016-create-route-stop-schema.md`
- S02-013-specific files were implemented within scope. No non-pack feature implementation was added.

## Self-Review (Prompt Checklist)

1. Created pool outline schema only: Yes.
2. Avoided editor/AI/upload/mobile/service-point implementation: Yes.
3. Supports draft/published/archived/needs_review, source metadata, versioning: Yes.
4. Links to water bodies for separate outlines: Yes (`water_body_id` FK + published uniqueness per body).
5. Internal vs customer-visible notes separated: Yes.
6. Status board and handoff updated: Yes.
7. Checks run or limitations documented: Yes.
8. Avoided unrelated files: Yes.

## Limitations / Deferred Work

- Service point markers intentionally deferred to `S02-014`.
- Outline editor/studio, AI/satellite/manual generation workflows, image upload/storage, and customer renderer are intentionally deferred to future packs.
- Runtime auth/permission serializer enforcement is deferred to Sprint 03+.

## Next Recommended Pack

- `S02-014 — Create Service Point Schema`
