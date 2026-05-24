# CI Checks

## Purpose
CI is the baseline quality gate for Shipwrecked Sprint 01+ infrastructure work. It ensures each pull request and push to `main` runs core monorepo checks before changes are accepted.

## Workflow
- File: `.github/workflows/ci.yml`
- Triggers:
  - Pull requests
  - Pushes to `main`

## What CI Runs
1. Dependency install with `pnpm`.
2. Formatting check: `pnpm format:check`.
3. Lint check: `pnpm lint`.
4. Type check: `pnpm typecheck`.
5. Test check: `pnpm test`.
6. Workspace doctor: `pnpm doctor`.

## Lockfile Behavior
- If `pnpm-lock.yaml` exists, CI uses `pnpm install --frozen-lockfile`.
- If no lockfile exists yet (early infra stage), CI uses `pnpm install --no-frozen-lockfile` and prints a clear notice.
- This keeps checks real while Sprint 01 is still stabilizing.

## How To Interpret Failures
- `format:check` failure: formatting drift; run `pnpm format`.
- `lint` failure: lint error introduced; fix in pack scope.
- `typecheck` failure: TypeScript contract/runtime mismatch; fix in pack scope.
- `test` failure: regression or broken baseline test; fix in pack scope.
- `doctor` failure: local/tooling prerequisites missing or workspace health issue.

Do not treat CI failures as optional for implementation packs.

## Codex Usage Rules
- Run relevant local checks before handoff when possible.
- Do not add fake no-op CI steps to force green status.
- Do not add deploy, secrets, or production release jobs in Sprint 01 CI.
- Keep CI focused on quality checks until dedicated deploy/release packs.

## Relationship To Sprint 00 Governance
CI supports Sprint 00 discipline by enforcing repeatable checks that complement:
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/qa/testing-philosophy.md`
- `docs/codex/FORMATTING_AND_LINTING.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`

CI does not replace pack-level scope review, status board updates, or handoff creation.
