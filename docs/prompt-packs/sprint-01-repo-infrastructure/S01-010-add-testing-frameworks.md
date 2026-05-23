# Prompt Pack: S01-010 — Add Testing Frameworks

## Pack Metadata

- **Pack ID:** S01-010
- **Title:** Add Testing Frameworks
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Infrastructure / testing setup
- **Can Run In Parallel:** No
- **Depends On:** S01-001 through S01-009
- **Blocks:** reliable future implementation, auth/permissions, API, mobile/admin, billing/payment safety, release readiness

## Goal

Add foundational testing frameworks and test scripts for the monorepo without implementing product features.

This should establish the testing baseline for future Codex prompt packs.

## Why This Matters

The project’s testing philosophy says future implementation prompt packs are not complete without appropriate tests. This pack sets up the basic test infrastructure so future work can test backend logic, shared packages, API endpoints, mobile/admin behavior, permissions, and critical workflows.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/qa/testing-philosophy.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/FORMATTING_AND_LINTING.md` if it exists
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- package/app configs created in S01-001 through S01-009

## Files Codex Should Create or Modify

Expected files:

- root `package.json`
- root test config, such as:
  - `vitest.config.ts` or equivalent
- test setup file if needed:
  - `test/setup.ts` or equivalent
- `docs/qa/testing-setup.md`
- possibly package-level test files for smoke tests:
  - shared-types smoke test
  - api-client smoke test
  - UI token smoke test
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-010-add-testing-frameworks.md`

May update app/package `package.json` scripts if needed.

## Files Codex Must Not Touch

Do not implement product features, database schema, auth, billing, report generation, route logic, notification logic, chat, commercial exports, pool outlines, master jobs, or customer/technician workflows.

Do not add large end-to-end testing frameworks unless clearly justified and documented as future setup only.

## Build Prompt For Codex

Execute S01-010 only.

Add basic testing frameworks and scripts for the monorepo.

### Required Direction

Prefer a lightweight TypeScript-friendly test setup for shared packages and API logic, such as Vitest, unless the repo already uses another compatible testing framework.

Do not overbuild mobile E2E or browser E2E in this pack.

### Required Scripts

Update root scripts as appropriate:

- `test`
- `test:watch`
- `test:coverage` if feasible
- possibly `test:unit`

Do not break existing package scripts.

### Test Setup

Create a root test config suitable for:

- shared package unit tests
- API service/controller tests later
- utility tests

If mobile/admin UI tests require different tooling later, document that in `docs/qa/testing-setup.md`.

### Smoke Tests

If feasible, add minimal smoke tests for safe non-product items, such as:

- shared-types exports are importable
- UI tokens export expected objects
- API client basic error class/client factory is importable
- DB package placeholder export is importable

Do not test real product workflows yet.

### Documentation

Create `docs/qa/testing-setup.md` explaining:

- what framework was added
- how to run tests
- what test types are supported now
- what test types are planned later
- how future prompt packs should add tests
- what not to do
- how this relates to `docs/qa/testing-philosophy.md`

### Checks

Run applicable checks:

- `pnpm test`
- `pnpm typecheck` if feasible
- `pnpm lint` if feasible

If checks cannot run, document exactly why.

Update `STATUS_BOARD.md` and create S01-010 handoff.

## Acceptance Criteria

S01-010 is complete only if:

- Root test framework/config exists.
- Root test scripts exist.
- Testing setup documentation exists.
- Safe smoke tests are added where feasible.
- No product workflows are implemented.
- Future UI/E2E/mobile test limitations are documented.
- `STATUS_BOARD.md` has S01-010 row.
- S01-010 handoff exists.
- Checks are run where possible or limitations documented.

## Codex Self-Review Prompt

Review S01-010 before finalizing.

Check:

1. Did you add test infrastructure without adding product features?
2. Did you avoid overbuilding E2E/mobile test frameworks prematurely?
3. Are root scripts coherent?
4. Are smoke tests safe and non-product?
5. Did you document what testing exists now and what comes later?
6. Did you update status board and handoff?
7. Did you run checks where possible and document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-010 testing framework setup"
```
