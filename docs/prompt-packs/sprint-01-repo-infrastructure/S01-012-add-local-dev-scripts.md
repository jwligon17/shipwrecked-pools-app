# Prompt Pack: S01-012 — Add Local Development Scripts

## Pack Metadata

- **Pack ID:** S01-012
- **Title:** Add Local Development Scripts
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / local development workflow
- **Can Run In Parallel:** Limited; do not parallelize with root script/tooling changes
- **Depends On:** S01-001 through S01-011
- **Blocks:** reliable local development, future implementation prompt packs, onboarding the user/wife to run the stack

## Goal

Create coherent local development scripts and documentation so the user and wife can run the monorepo consistently.

This pack should improve root scripts, optional helper scripts, and docs. It should not implement product features.

## Why This Matters

The project will include multiple apps and packages. The user and wife need a simple way to run, typecheck, lint, format, and test the project without remembering many commands.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/codex/ENVIRONMENT_VARIABLES.md` if it exists
- `docs/codex/FORMATTING_AND_LINTING.md` if it exists
- `docs/qa/testing-setup.md` if it exists
- `docs/architecture/workspace-structure.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- app/package `package.json` files
- `pnpm-workspace.yaml`

## Files Codex Should Create or Modify

Expected files:

- root `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- possibly `scripts/README.md`
- optional helper scripts under `scripts/` if justified:
  - `scripts/check-workspace.mjs`
  - `scripts/doctor.mjs`
  - or similar
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-012-add-local-dev-scripts.md`

May update app/package READMEs if needed.

## Files Codex Must Not Touch

Do not implement real app features, auth, DB schema, billing, notifications, reports, routes, pool outlines, quotes, master jobs, commercial exports, chemical guidance, or chat.

Do not add complicated dev tooling that creates fragility.

## Build Prompt For Codex

Execute S01-012 only.

Add local development scripts and documentation.

### Script Goals

Root scripts should make it easy to:

- install dependencies
- run all dev apps where feasible
- run mobile
- run admin
- run API
- build packages/apps where feasible
- typecheck
- lint
- format
- test
- inspect prompt pack status
- run a workspace health/doctor check if implemented

### Required Script Review

Inspect existing root and package scripts before modifying them.

Avoid duplicating scripts or creating scripts that call packages that do not exist.

If a script cannot work until future packs finish setup, either:
- avoid adding it yet, or
- document it as future/placeholder clearly

### Optional Helper Script

If useful, create a lightweight `scripts/doctor.mjs` or `scripts/check-workspace.mjs` that checks for:

- Node version
- pnpm availability
- required folders
- required docs
- major app/package folders
- no real secrets in `.env.example`

Keep helper scripts simple and non-invasive.

### Documentation

Update `docs/codex/LOCAL_DEVELOPMENT.md` with:

- prerequisites
- install
- environment setup
- running mobile/admin/API
- running typecheck/lint/format/test
- checking status board
- troubleshooting common issues
- how to avoid running implementation prompts with dirty working tree

### Checks

Run applicable commands:

- `pnpm --version`
- `pnpm typecheck` if available
- `pnpm lint` if available
- `pnpm test` if available
- any new doctor/check script

If dependencies are not installed or commands fail because setup is incomplete, document accurately and stop if the failure indicates a real issue.

Update `STATUS_BOARD.md` and create S01-012 handoff.

## Acceptance Criteria

S01-012 is complete only if:

- root scripts are coherent and useful.
- local development docs are updated.
- optional helper scripts are simple and documented if created.
- scripts do not pretend unavailable tools exist.
- no product features are implemented.
- `STATUS_BOARD.md` has S01-012 row.
- S01-012 handoff exists.
- applicable checks are run or limitations documented.

## Codex Self-Review Prompt

Review S01-012 before finalizing.

Check:

1. Did you improve local development scripts without overcomplicating them?
2. Do root scripts match actual workspace packages?
3. Did you avoid creating scripts that cannot work without explanation?
4. Did you update local development docs?
5. Did you avoid product feature implementation?
6. Did you run applicable checks and document results?
7. Did you update status board and handoff?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-012 local development scripts"
```
