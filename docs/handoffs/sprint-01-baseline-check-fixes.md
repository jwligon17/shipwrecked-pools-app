# Sprint 01 Baseline Check Fixes

## Context

- Task: fix Sprint 01 baseline check failures before Sprint 02.
- Scope: infrastructure/tooling cleanup only.
- Date: 2026-05-23.

## Files Changed

- `.prettierignore`
- `package.json`
- `pnpm-lock.yaml`
- `apps/api/src/health/health.controller.ts`
- `apps/api/tsconfig.json`
- `test/smoke/ui.test.ts`
- Prettier formatting updates across previously non-compliant files repo-wide.
- `docs/codex/SPRINT_01_CLOSEOUT.md`

## What Was Fixed

1. Formatting:

- Ran `pnpm format` and resolved check failures.
- Added `.agents` to `.prettierignore` because `.agents/skills/README.md` is not writable in this workspace and caused Prettier write failure.

2. Lint warning:

- Updated `apps/api/src/health/health.controller.ts` to use `@Inject(HealthService)` so `HealthService` remains a runtime value reference while satisfying type-import lint behavior safely for Nest DI.

3. Typecheck:

- Added root `devDependency` on `typescript` in `package.json`.
- Updated lockfile via `pnpm install --no-frozen-lockfile`.
- Added `verbatimModuleSyntax: false` override in `apps/api/tsconfig.json` so API CommonJS config typechecks correctly with current TS version.

4. UI smoke test:

- Updated `test/smoke/ui.test.ts` to assert actual UI exports (`uiTokens`, `spacingScale`, `typographyScale`) from `packages/ui/src/index.ts`.

## Checks Run

- `pnpm format:check`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm doctor`
- `pnpm run doctor`

## Check Results

- `pnpm format:check`: pass
- `pnpm lint`: pass
- `pnpm typecheck`: pass
- `pnpm test`: pass
- `pnpm doctor`: available and exits successfully (no console output in this environment)
- `pnpm run doctor`: pass with baseline doctor output

## Self-Review Findings

- No product feature implementation added.
- No auth/billing/payment/database/reporting/notification/chat work introduced.
- Changes are limited to formatting/tooling/test/config cleanup and documentation.

## Limitations

- `pnpm doctor` (without `run`) is available but silent in this environment; `pnpm run doctor` is the command that executes repository doctor checks with visible output.

## Next Recommended Pack

- Proceed with Sprint 02 only after human review/commit of this baseline-fix batch.
