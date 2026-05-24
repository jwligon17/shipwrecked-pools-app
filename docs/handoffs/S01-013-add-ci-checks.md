# Handoff — S01-013 Add CI Checks

## Pack Summary

- Pack ID: S01-013
- Title: Add CI Checks
- Sprint: S01 — Repo, Infrastructure, Tooling
- Outcome: Completed

## Files Created

- `.github/workflows/ci.yml`
- `docs/codex/CI_CHECKS.md`
- `docs/handoffs/S01-013-add-ci-checks.md`

## Files Modified

- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## What Was Implemented

- Added a GitHub Actions CI workflow that runs on pull requests and pushes to `main`.
- CI runs dependency install, formatting check, lint, typecheck, tests, and doctor checks.
- Added lockfile-aware install behavior:
  - uses `--frozen-lockfile` when `pnpm-lock.yaml` exists;
  - uses `--no-frozen-lockfile` with explicit notice when lockfile does not yet exist.
- Added `docs/codex/CI_CHECKS.md` to document CI purpose, checks, failure interpretation, and Sprint 01 guardrails.
- Added a short CI section in local development docs.

## Checks Run

Attempted:

- `pnpm --version`
- `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm doctor`

Result:

- All commands failed in this environment with `pnpm: command not found`.

## Self-Review Results

- CI added without product feature implementation.
- CI runs real quality steps and is not a no-op.
- No secrets or deployment workflows were added.
- Changes stayed in infra/docs scope for this pack.

## Limitations

- Local command verification is blocked until `pnpm` is available in the environment.

## Next Recommended Pack

- `S01-014 — Add Seed Data System`
