# Prompt Pack: S01-013 — Add CI Checks

## Pack Metadata

- **Pack ID:** S01-013
- **Title:** Add CI Checks
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / CI setup
- **Can Run In Parallel:** No
- **Depends On:** S01-001 through S01-012
- **Blocks:** safe future implementation, consistent Codex validation, release readiness

## Goal

Add basic CI checks for the Shipwrecked Pools monorepo so every future push/PR can run formatting, linting, typechecking, tests, and workspace health checks.

This pack should create CI configuration only. It should not implement product features.

## Why This Matters

Codex will be making many future changes. CI is the safety net that catches broken scripts, bad TypeScript, failed tests, and accidental regressions before changes get accepted.

The CI setup should support the user and wife using Codex without needing to manually inspect every detail.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/codex/FORMATTING_AND_LINTING.md` if it exists
- `docs/qa/testing-setup.md` if it exists
- `docs/qa/testing-philosophy.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- existing app/package `package.json` files

## Files Codex Should Create or Modify

Expected files:

- `.github/workflows/ci.yml`
- `docs/codex/CI_CHECKS.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-013-add-ci-checks.md`

May modify if needed:

- root `package.json`
- existing test/lint/typecheck scripts
- `scripts/doctor.mjs` or equivalent if it already exists and needs CI-safe behavior

## Files Codex Must Not Touch

Do not implement product features, auth, DB schema, billing/payment logic, notifications, reports, routes, pool outlines, quotes, repairs, master jobs, commercial exports, chemical guidance, or chat.

Do not add production deployment workflows in this pack.

Do not add real secrets or environment values.

## Build Prompt For Codex

Execute S01-013 only.

Add a basic GitHub Actions CI workflow for the monorepo.

### CI Requirements

Create `.github/workflows/ci.yml` that runs on:

- pull requests
- pushes to `main`

The workflow should:

1. Check out the repo.
2. Set up Node.
3. Set up pnpm.
4. Install dependencies using lockfile behavior appropriate to the repo.
5. Run formatting check if available.
6. Run lint if available.
7. Run typecheck if available.
8. Run tests if available.
9. Run workspace doctor/check script if available.

### Important CI Flexibility

The repo is still early infrastructure.

If some scripts are not fully available yet, the CI should either:

- call existing scripts that are expected to work, or
- use clearly documented fallback behavior that does not hide real failures.

Do not create a CI workflow that always passes while doing nothing.

Do not create a CI workflow that is guaranteed to fail because a future pack has not happened yet.

If the repo currently has no lockfile yet, document whether CI expects a lockfile to be created after `pnpm install`.

### Documentation

Create `docs/codex/CI_CHECKS.md` explaining:

- what CI runs
- why CI exists
- how to interpret failures
- how Codex should use CI results
- what checks future prompt packs should keep passing
- what not to add to CI yet
- how CI relates to Sprint 00 review and testing docs

Update `LOCAL_DEVELOPMENT.md` if useful with a short CI section.

### Checks

Run applicable commands locally if possible:

- `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- doctor/check script if present

If dependencies are not installed or a command cannot run, document honestly.

Update `STATUS_BOARD.md` and create S01-013 handoff.

## Acceptance Criteria

S01-013 is complete only if:

- `.github/workflows/ci.yml` exists.
- CI includes setup, install, and available quality checks.
- CI is not a fake no-op.
- CI is not guaranteed to fail due to known missing future work.
- CI docs exist.
- Local dev docs are updated if needed.
- `STATUS_BOARD.md` has S01-013 row.
- S01-013 handoff exists.
- No product features are implemented.
- No production deployment or secrets are added.

## Codex Self-Review Prompt

Review S01-013 before finalizing.

Check:

1. Did you add CI without adding product features?
2. Does CI run real useful checks?
3. Is CI appropriate for the current repo maturity?
4. Does CI avoid secrets and deployment?
5. Did you document how to interpret CI failures?
6. Did you update status board and handoff?
7. Did you run local checks where possible or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-013 CI checks"
```
