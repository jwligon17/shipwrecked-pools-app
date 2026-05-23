# Prompt Pack: S01-002 — Create Mobile App Shell

## Pack Metadata

- **Pack ID:** S01-002
- **Title:** Create Mobile App Shell
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / app shell
- **Can Run In Parallel:** Limited; do not parallelize with other root package setup changes
- **Depends On:** S01-001
- **Blocks:** customer/technician mobile workflows, route progress, reports, pool outline rendering

## Goal

Create a minimal true mobile app shell in `apps/mobile` using Expo React Native and TypeScript.

This pack should create the app shell only. It should not implement real Shipwrecked features yet.

## Why This Matters

The mobile app will be the single app used by customers, technicians, and owner/admin mobile views. Sprint 01 needs a runnable shell before feature screens are created in later sprints.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `apps/mobile/AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected app files:

- `apps/mobile/package.json`
- `apps/mobile/app.json` or `apps/mobile/app.config.ts`
- `apps/mobile/tsconfig.json`
- `apps/mobile/App.tsx` or Expo Router equivalent
- `apps/mobile/src/` shell files as needed
- `apps/mobile/assets/README.md`
- `apps/mobile/README.md`

Expected root/support changes if needed:

- `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-002-create-mobile-app-shell.md`

## Files Codex Must Not Touch

Do not implement:

- auth flows
- real role routing
- pool outline feature
- reports
- route progress
- billing
- notifications
- chat
- technician service workflow
- data fetching/API integration

Do not modify database, billing, auth, notification, or API implementation files.

## Build Prompt For Codex

Execute S01-002 only.

Create a minimal Expo React Native TypeScript mobile app shell in `apps/mobile`.

### Requirements

The mobile app shell must:

- be TypeScript-based
- be configured as a workspace package
- preserve `apps/mobile/AGENTS.md`
- be named clearly for Shipwrecked Pools
- include placeholder UI only
- include no real business logic
- include no hardcoded private customer data
- include no real authentication implementation yet
- include no live API calls yet

### Placeholder UI

The initial placeholder screen should communicate:

- Shipwrecked Pools App
- Sprint 01 mobile shell
- Future role-based experiences:
  - customer
  - technician
  - owner/admin
- No production features are implemented yet

Keep the UI simple and premium, but do not spend time on final design.

### Configuration

Use Expo app configuration with safe placeholders:

- app name: Shipwrecked Pools
- slug: shipwrecked-pools
- bundle/package identifiers can be placeholders if needed
- avoid real production secrets

### Scripts

Add mobile scripts in `apps/mobile/package.json`.

Update root scripts only if needed to run mobile with workspace filters.

Suggested scripts:

- `dev`
- `start`
- `ios`
- `android`
- `web`
- `typecheck`

### Checks

Attempt applicable checks:

- package manager install/check if feasible
- TypeScript check if dependencies are available
- do not claim tests passed if they cannot run

If Expo dependencies cannot be installed in the current environment, document exactly what command the user should run later.

### Documentation

Update `apps/mobile/README.md` with:

- what this shell is
- how to run it
- what is intentionally not implemented
- reminder that the app will eventually route by role but this pack does not implement auth/roles

Update `STATUS_BOARD.md` and create the S01-002 handoff.

## Acceptance Criteria

S01-002 is complete only if:

- `apps/mobile` has a coherent Expo React Native TypeScript shell
- existing `apps/mobile/AGENTS.md` is preserved
- mobile package is included in the workspace
- root/local dev docs are updated if commands changed
- no real product features are implemented
- no auth/billing/database/report/route logic is implemented
- `STATUS_BOARD.md` has S01-002 row
- S01-002 handoff exists

## Codex Self-Review Prompt

Review S01-002 before finalizing.

Check:

1. Did you create only a mobile app shell?
2. Did you preserve `apps/mobile/AGENTS.md`?
3. Did you avoid implementing real Shipwrecked features?
4. Did you avoid auth/database/billing/notification/API logic?
5. Did you update root scripts/docs only as needed?
6. Did you run checks where possible and document any limitations?
7. Did you update status board and create a handoff?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-002 mobile app shell"
```
