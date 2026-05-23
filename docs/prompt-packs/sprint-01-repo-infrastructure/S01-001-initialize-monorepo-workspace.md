# Prompt Pack: S01-001 — Initialize Monorepo Workspace

## Pack Metadata

- **Pack ID:** S01-001
- **Title:** Initialize Monorepo Workspace
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / workspace setup
- **Can Run In Parallel:** No
- **Depends On:** Sprint 00 complete, including S00-018 closeout
- **Blocks:** All app shells, package setup, shared packages, local dev scripts, CI, tests

## Goal

Turn the existing Shipwrecked Pools repo shell into a real TypeScript monorepo workspace without building product features yet.

This pack should establish workspace rules, root scripts, TypeScript base settings, package-manager expectations, and repo-level infrastructure that S01-002 through S01-016 can build on.

## Why This Matters

The repo already has the high-level folders and Sprint 00 docs. Now it needs a clean engineering foundation so Codex can create the mobile app, admin dashboard, API, packages, tests, and tooling consistently.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/SPRINT_00_CLOSEOUT.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`

## Files Codex Should Create or Modify

Expected modifications:

- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.gitignore`
- `.env.example`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-001-initialize-monorepo-workspace.md`

May create:

- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `.npmrc`
- `.vscode/extensions.json`
- `.vscode/README.md`

## Files Codex Must Not Touch

Do not modify:

- app implementation features beyond workspace/package shell setup
- product feature docs unless only adding a cross-reference
- database migrations/schema
- auth/billing/payment/notification implementation
- generated build folders
- completed Sprint 00 handoffs
- completed prompt pack files

## Build Prompt For Codex

Execute S01-001 only.

Initialize the monorepo workspace foundation for Shipwrecked Pools.

Use the existing repo structure; do not delete Sprint 00 docs or reset the repo.

### Required workspace assumptions

Use these assumptions unless an existing repo file explicitly conflicts:

- Package manager: `pnpm`
- Language: TypeScript
- Mobile app: Expo React Native TypeScript, created in a later pack
- Admin dashboard: Next.js TypeScript, created in a later pack
- API: structured TypeScript API, preferably NestJS, created in a later pack
- Database direction: PostgreSQL/Supabase planning, but do not implement DB schema yet
- Workspace apps:
  - `apps/mobile`
  - `apps/admin`
  - `apps/api`
- Workspace packages:
  - `packages/db`
  - `packages/shared-types`
  - `packages/api-client`
  - `packages/ui`
  - `packages/config`
  - `packages/auth`
  - `packages/notifications`
  - `packages/pool-outline`
  - `packages/test-utils`

### Required root `package.json` behavior

Update root `package.json` to:

- remain private
- include useful workspace scripts
- avoid product feature implementation
- avoid pretending scripts work if app shells are not yet created
- prepare scripts for future packs

Expected script categories:

- `dev`
- `dev:mobile`
- `dev:admin`
- `dev:api`
- `build`
- `build:mobile`
- `build:admin`
- `build:api`
- `lint`
- `typecheck`
- `test`
- `test:watch`
- `format`
- `format:check`
- `clean`
- `docs:status`

If scripts cannot fully work until later packs, they may be placeholders or workspace-filter scripts with clear comments/docs. Do not make scripts fail unnecessarily.

### Required TypeScript config

Update `tsconfig.base.json` to support a strict TypeScript monorepo.

Include:

- strict mode
- modern target
- module resolution appropriate for modern TS projects
- base path aliases for shared packages if useful
- no project-specific app config that belongs in app-level tsconfig files

### Required workspace docs

Create `docs/architecture/workspace-structure.md` explaining:

- app folders
- package folders
- why a monorepo is used
- how future prompt packs should add app/package code
- which folders are currently shell-only
- what not to modify in parallel
- how this supports the Shipwrecked customer/technician/admin system

Create or update `docs/codex/LOCAL_DEVELOPMENT.md` with:

- expected local prerequisites
- package manager expectations
- basic install command
- basic commands that will become valid as S01 progresses
- warning that Sprint 01 is infrastructure-focused and should not implement product features yet

### Required safety rules

Do not implement:

- auth
- database schema
- billing
- reports
- routes
- pool outlines
- chat
- notifications
- payments
- customer/technician screens

This pack only prepares the workspace.

Update `STATUS_BOARD.md` for S01-001.

Create the S01-001 handoff note.

## Acceptance Criteria

S01-001 is complete only if:

- root workspace files are coherent
- root `package.json` has useful workspace scripts
- `pnpm-workspace.yaml` includes apps and packages
- `tsconfig.base.json` supports strict TypeScript
- `.gitignore` remains safe for Node/Expo/Next/build outputs
- `.env.example` still exists and remains general
- `docs/architecture/workspace-structure.md` exists
- `docs/codex/LOCAL_DEVELOPMENT.md` exists or is updated
- `STATUS_BOARD.md` has S01-001 row
- S01-001 handoff exists
- no product feature implementation is added

## Codex Self-Review Prompt

Review S01-001 before finalizing.

Check:

1. Did you initialize workspace infrastructure without adding product features?
2. Did you preserve all Sprint 00 docs?
3. Did you avoid database/auth/billing/payment/notification implementation?
4. Did you update root scripts coherently?
5. Did you document the workspace structure?
6. Did you update the status board and create a handoff?
7. Did you avoid unrelated file changes?
8. Did you run applicable checks or explain why checks are limited before app shells exist?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-001 monorepo workspace initialization"
```
