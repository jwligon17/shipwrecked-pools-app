# Prompt Pack: S01-009 — Add Formatting and Linting Rules

## Pack Metadata

- **Pack ID:** S01-009
- **Title:** Add Formatting and Linting Rules
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / formatting and linting setup
- **Can Run In Parallel:** Limited; do not parallelize with root package tooling changes
- **Depends On:** S01-001 through S01-008
- **Blocks:** consistent Codex-generated code, future app/API/package implementation

## Goal

Add root-level formatting and linting rules for the Shipwrecked Pools monorepo so future Codex work produces consistent TypeScript/React/React Native/Node documentation and code.

This pack should configure linting/formatting, scripts, ignore files, and documentation. It should not implement product features.

## Why This Matters

The repo will eventually include Expo React Native, Next.js, a TypeScript API, shared packages, DB tooling, generated clients, and many Codex-written files. Formatting/linting rules reduce rework and make reviews easier.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- app/package `package.json` files created in S01-001 through S01-008

## Files Codex Should Create or Modify

Expected files:

- root `package.json`
- `.prettierrc` or `.prettierrc.json`
- `.prettierignore`
- ESLint config file, preferably modern flat config if compatible:
  - `eslint.config.mjs` or equivalent
- `docs/codex/FORMATTING_AND_LINTING.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-009-add-formatting-rules.md`

May modify package-level configs if necessary, but keep changes minimal.

## Files Codex Must Not Touch

Do not implement product features, database schema, auth, billing, routes, reports, notifications, chat, pool outlines, master jobs, commercial exports, or UI screens beyond existing shell lint compatibility.

Do not delete generated app shell files unless required to fix lint config mistakes.

## Build Prompt For Codex

Execute S01-009 only.

Add formatting and linting infrastructure to the monorepo.

### Requirements

The formatting/linting setup must:

- support TypeScript
- support React/React Native/Next app code where practical
- support Node/API TypeScript where practical
- support packages under `packages/*`
- avoid overcomplicated rules that block early infrastructure work
- avoid product feature implementation
- be documented clearly for the user and wife

### Prettier

Add a Prettier config that is reasonable for the project. Include `.prettierignore` for:

- `node_modules`
- build outputs
- `.next`
- `.expo`
- `dist`
- `coverage`
- generated native folders if present
- generated artifacts where appropriate

### ESLint

Add a root ESLint setup appropriate for a TypeScript monorepo.

If current project versions/frameworks make a single root flat config difficult, create the safest workable config and document limitations.

The ESLint setup should avoid turning on overly strict framework-specific rules until the app shells are stable.

### Scripts

Update root `package.json` scripts as appropriate:

- `format`
- `format:check`
- `lint`
- maybe `lint:fix`

If workspace package scripts already exist, do not break them.

### Documentation

Create `docs/codex/FORMATTING_AND_LINTING.md` explaining:

- what tools are used
- how to run formatting
- how to run linting
- what checks Codex should run after future code changes
- what to do if lint rules conflict with app framework tooling
- that formatting/linting should never be used as an excuse to rewrite unrelated files

### Checks

Run applicable checks:

- `pnpm format:check` if feasible
- `pnpm lint` if feasible
- package install if needed/possible

If checks cannot run because dependencies are not installed or tooling is incomplete, document exactly what did and did not run.

Update `STATUS_BOARD.md` and create S01-009 handoff.

## Acceptance Criteria

S01-009 is complete only if:

- Prettier config and ignore file exist.
- ESLint config exists or a clear documented alternative exists.
- Root scripts for formatting/linting are present.
- Formatting/linting docs exist.
- Tooling is appropriate for a TypeScript monorepo.
- No product features are implemented.
- `STATUS_BOARD.md` has S01-009 row.
- S01-009 handoff exists.
- Checks are run where possible or limitations documented.

## Codex Self-Review Prompt

Review S01-009 before finalizing.

Check:

1. Did you add formatting/linting setup without implementing product features?
2. Are scripts coherent and not misleading?
3. Are ignore files safe?
4. Does ESLint account for TypeScript/React/Node enough for current shells?
5. Did you document limitations honestly?
6. Did you avoid unrelated broad formatting rewrites?
7. Did you update status board and handoff?
8. Did you run checks where possible or explain why not?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-009 formatting and linting rules"
```
