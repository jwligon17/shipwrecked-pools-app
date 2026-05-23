# Prompt Pack: S01-016 — Verify Empty App Build

## Pack Metadata

- **Pack ID:** S01-016
- **Title:** Verify Empty App Build
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Infrastructure verification / closeout
- **Can Run In Parallel:** No
- **Depends On:** S01-001 through S01-015
- **Blocks:** Sprint 02 database/domain model work

## Goal

Verify that the empty app shells, shared packages, tooling, scripts, tests, formatting/linting, environment templates, CI, seed placeholders, and handoff system are coherent enough to move into Sprint 02.

This pack should perform verification and document results. It should fix small infrastructure issues if needed but must not implement product features.

## Why This Matters

Sprint 02 starts core database/domain model work. Before that, the repo should have working infrastructure so future implementation has a stable base.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/codex/CI_CHECKS.md` if it exists
- `docs/qa/testing-setup.md` if it exists
- `docs/qa/testing-philosophy.md`
- `docs/codex/FORMATTING_AND_LINTING.md` if it exists
- `docs/codex/ENVIRONMENT_VARIABLES.md` if it exists
- `docs/database/seed-data-strategy.md` if it exists
- `docs/handoffs/HANDOFF_INDEX.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- app/package `package.json` files

## Files Codex Should Create or Modify

Expected files:

- `docs/codex/SPRINT_01_CLOSEOUT.md`
- `docs/codex/SPRINT_02_READINESS_CHECKLIST.md`
- `docs/handoffs/S01-016-verify-empty-app-build.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify if small fixes are needed:

- root `package.json`
- package/app scripts
- docs/codex/LOCAL_DEVELOPMENT.md
- docs/architecture/workspace-structure.md
- docs/handoffs/HANDOFF_INDEX.md
- CI/tooling docs

## Files Codex Must Not Touch

Do not implement product features.

Do not implement:

- database schema/migrations
- auth
- billing/payment
- notifications
- reports
- routes
- pool outlines
- quotes/repairs/master jobs
- commercial exports
- suggested chemical guidance
- chat

Do not add real secrets or real customer data.

## Build Prompt For Codex

Execute S01-016 only.

Verify the Sprint 01 empty app/infrastructure setup.

### Verification Commands

Inspect and run applicable commands:

- `git status --short`
- `pnpm --version`
- `pnpm install` only if appropriate and not already installed
- `pnpm format:check` if available
- `pnpm lint` if available
- `pnpm typecheck` if available
- `pnpm test` if available
- `pnpm build` if available and intended to work at this stage
- doctor/check script if available

If a command cannot run due to missing dependencies/environment, document it accurately.

If a command fails because of a small infrastructure issue within scope, fix it.

If a command fails because it requires future product implementation, document and do not fake a pass.

### Closeout Doc

Create `docs/codex/SPRINT_01_CLOSEOUT.md` with:

1. Sprint 01 purpose
2. Completed S01 packs
3. Workspace/app/package summary
4. Tooling summary
5. Commands/checks run
6. Results
7. Known caveats
8. What is intentionally not implemented yet
9. Whether repo is ready for Sprint 02
10. Any required follow-up before Sprint 02

### Sprint 02 Readiness Checklist

Create `docs/codex/SPRINT_02_READINESS_CHECKLIST.md` with:

1. Sprint 02 purpose: core database/domain model
2. Preconditions:
   - Sprint 01 committed
   - working tree clean
   - package scripts coherent
   - app shells exist
   - shared packages exist
   - DB package foundation exists
   - seed placeholders exist
   - tests/tooling baseline exists
3. Risk rules:
   - database migrations are not parallelized
   - domain model follows permission/data visibility docs
   - no billing/auth/payment shortcuts
   - no technician exposure of financial/profitability data
   - master jobs/commercial exports/chemical guidance/chat considerations are included early in schema planning
4. Go/no-go checklist for starting S02
5. How to handle blockers

### Status and Handoff

Update `STATUS_BOARD.md` for S01-016.

Create S01-016 handoff.

## Acceptance Criteria

S01-016 is complete only if:

- Verification commands/checks are attempted where applicable and results documented.
- Small infrastructure issues are fixed if within scope.
- `docs/codex/SPRINT_01_CLOSEOUT.md` exists.
- `docs/codex/SPRINT_02_READINESS_CHECKLIST.md` exists.
- S01-016 handoff exists.
- `STATUS_BOARD.md` has S01-016 row.
- No product features are implemented.
- Final summary clearly says whether Sprint 02 can begin.

## Codex Self-Review Prompt

Review S01-016 before finalizing.

Check:

1. Did you actually inspect/run available commands?
2. Did you document command results honestly?
3. Did you avoid product feature implementation?
4. Did you create Sprint 01 closeout and Sprint 02 readiness docs?
5. Did you update status board and handoff?
6. Did you avoid hiding failures?
7. Did you clearly say whether Sprint 02 can begin?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-016 empty app build verification"
```
