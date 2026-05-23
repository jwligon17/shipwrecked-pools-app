# Prompt Pack: S01-007 — Create DB Package Foundation

## Pack Metadata

- **Pack ID:** S01-007
- **Title:** Create DB Package Foundation
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Infrastructure / database package foundation
- **Can Run In Parallel:** No
- **Depends On:** S01-001 and preferably S01-005
- **Blocks:** future database schema, migrations, seed data, Supabase/Postgres setup

## Goal

Create the `packages/db` foundation for future PostgreSQL/Supabase database work without implementing the actual domain schema or migrations yet.

This pack should prepare folder structure, package config, docs, and safe placeholder exports so future database prompt packs can add schema and migrations in an orderly way.

## Why This Matters

The database will eventually hold the most important business data:

- customers/leads/households
- properties/access/gate codes/pets
- bodies of water/equipment
- pool outlines/service points
- routes/stops/service visits
- chemistry/readings/chemical usage
- reports/photos/before-after galleries
- requests/quotes/repairs/master jobs
- billing/payment references
- notifications/preferences
- commercial exports
- audit logs/privacy/export/deletion

Database work is high-risk. The package foundation must make clear that schema/migrations should happen in controlled, one-at-a-time prompt packs.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `packages/db/AGENTS.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/qa/testing-philosophy.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`

## Files Codex Should Create or Modify

Expected package files:

- `packages/db/package.json`
- `packages/db/tsconfig.json`
- `packages/db/src/index.ts`
- `packages/db/src/README.md` or package README references
- `packages/db/migrations/.gitkeep`
- `packages/db/schema/.gitkeep`
- `packages/db/seeds/.gitkeep`
- `packages/db/scripts/.gitkeep`
- `packages/db/README.md`

Expected docs:

- `docs/database/db-package-plan.md`

Expected support changes if needed:

- root `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/architecture/workspace-structure.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-007-create-db-package-foundation.md`

## Files Codex Must Not Touch

Do not implement:

- actual database schema
- actual migrations
- actual Supabase client connection
- actual production database config
- seed data
- auth tables
- billing/payment tables
- customer/property/report/job tables

Do not add real database credentials or secrets.

Do not modify API implementation to connect to DB yet.

## Build Prompt For Codex

Execute S01-007 only.

Create a safe `packages/db` foundation.

### Requirements

The DB package must:

- be a workspace package
- be TypeScript-based
- preserve `packages/db/AGENTS.md`
- create clear folder structure for future schema/migration/seed work
- include placeholder exports only
- not implement actual schema/migrations
- not connect to a database yet
- not add secrets
- not make tech stack choices irreversible beyond PostgreSQL/Supabase direction already documented

### Package Content

Create a minimal `src/index.ts` that exports:

- package metadata/status
- types or constants that explain DB package is not initialized yet
- no live client
- no connection logic

### Database Plan Doc

Create `docs/database/db-package-plan.md` explaining:

- planned database direction: PostgreSQL/Supabase
- why database work is controlled and high-risk
- schema work will happen in later prompt packs
- migrations must not be parallelized
- expected future domain areas
- audit/privacy expectations
- no schema exists yet
- no migrations exist yet
- no credentials should be committed

### README

Create `packages/db/README.md` explaining:

- package purpose
- current status
- folder structure
- what belongs here
- what does not belong here
- how future prompt packs should add schema/migrations/seeds
- reminder that technicians must never access billing/profitability through APIs
- reminder that data visibility must be enforced at API/service layer and tested

### Checks

Run typecheck/build if possible.

If dependencies/checks cannot run, document honestly.

Update `STATUS_BOARD.md` and create S01-007 handoff.

## Acceptance Criteria

S01-007 is complete only if:

- `packages/db` has package config, tsconfig, source exports, README, and migration/schema/seed/script folders.
- `docs/database/db-package-plan.md` exists.
- No real schema or migrations are created.
- No DB connection/client/secrets are implemented.
- Existing `packages/db/AGENTS.md` is preserved.
- Root/workspace docs are updated if needed.
- `STATUS_BOARD.md` has S01-007 row.
- S01-007 handoff exists.
- Checks are run where possible or limitations documented.

## Codex Self-Review Prompt

Review S01-007 before finalizing.

Check:

1. Did you create only the DB package foundation?
2. Did you avoid actual schema/migrations/connections/secrets?
3. Did you preserve `packages/db/AGENTS.md`?
4. Does the DB plan document include high-risk domain areas and future migration rules?
5. Did you avoid modifying API/app code to use DB?
6. Did you update docs/status/handoff?
7. Did you run checks where possible and document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-007 DB package foundation"
```
