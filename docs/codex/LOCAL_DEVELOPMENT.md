# Local Development

## Purpose
This document covers local setup for Sprint 01 infrastructure and app-shell work.

## Prerequisites
- Node.js 20 LTS
- `pnpm` 9+
- Watchman (recommended for React Native/Expo on macOS)
- Xcode/iOS Simulator and/or Android Studio for native emulators (optional for shell verification)

## Install
```bash
pnpm install
# or
pnpm install:deps
```

## Environment Setup
1. Review `.env.example` and per-app templates:
   - `apps/mobile/.env.example`
   - `apps/admin/.env.example`
   - `apps/api/.env.example`
2. Create local env files with real development values.
3. Keep secrets out of `EXPO_PUBLIC_*` and `NEXT_PUBLIC_*` vars.
4. See `docs/codex/ENVIRONMENT_VARIABLES.md` for guardrails.

## Daily Commands
Run from repo root:

```bash
pnpm doctor
pnpm dev
pnpm dev:mobile
pnpm dev:admin
pnpm dev:api
pnpm build
pnpm typecheck
pnpm lint
pnpm format
pnpm format:check
pnpm test
pnpm test:watch
pnpm test:coverage
pnpm docs:status
```

## Tooling Docs
- Formatting/linting: `docs/codex/FORMATTING_AND_LINTING.md`
- Testing setup: `docs/qa/testing-setup.md`
- Env variable guardrails: `docs/codex/ENVIRONMENT_VARIABLES.md`

## Troubleshooting
- If `pnpm` is missing: install `pnpm` 9+ and rerun `pnpm doctor`.
- If lint/test/typecheck fail: fix issues in current pack scope before proceeding.
- If a command is placeholder-only in a package: verify pack scope before changing it.

## Clean Tree Rule Before Prompt Pack Execution
Always start a pack with a clean tree:

```bash
git status
git diff --stat
```

Do not start implementation with uncommitted unrelated changes.

## Sprint 01 Scope Warning
Sprint 01 is infrastructure-focused. During these packs:
- app/API/admin shells are expected,
- auth, billing, payment, notifications, reports, route logic, pool-outline features, and customer workflows are not implemented yet.
