# Prompt Pack: S01-003 — Create API App Shell

## Pack Metadata

- **Pack ID:** S01-003
- **Title:** Create API App Shell
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / API shell
- **Can Run In Parallel:** Limited; do not parallelize with root package or shared type changes
- **Depends On:** S01-001
- **Blocks:** future backend endpoints, auth guards, reports, routes, quotes, billing, notifications

## Goal

Create a minimal structured TypeScript API shell in `apps/api`, preferably using NestJS or an equivalent structured TypeScript server framework.

This pack should create the API shell only. It should not implement real business endpoints yet.

## Why This Matters

The backend API will enforce roles, permissions, data visibility, audit logging, reports, routes, master jobs, commercial exports, quotes, payments, notifications, and admin workflows. Sprint 01 needs a safe API foundation before any backend domain work begins.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `apps/api/AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/product/feature-amendments.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected API files:

- `apps/api/package.json`
- `apps/api/tsconfig.json`
- `apps/api/src/main.ts`
- `apps/api/src/app.module.ts` or equivalent
- `apps/api/src/health/health.controller.ts` or equivalent health route
- `apps/api/src/health/health.service.ts` if useful
- `apps/api/README.md`

Expected support changes if needed:

- `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-003-create-api-app-shell.md`

## Files Codex Must Not Touch

Do not implement:

- auth system
- real user/customer/technician endpoints
- database schema
- billing/payment logic
- notification logic
- report/route/quote/master job logic
- commercial export logic

Do not modify mobile/admin implementation files except root scripts if necessary.

## Build Prompt For Codex

Execute S01-003 only.

Create a minimal structured TypeScript API shell in `apps/api`.

### Framework Direction

Prefer a structured TypeScript API setup suitable for NestJS-style modular backend development.

If using NestJS:
- create a minimal app module
- create a health endpoint
- create a standard bootstrap
- configure TypeScript
- include a basic README

If environment constraints prevent dependency installation, create the shell and document install/check commands clearly without pretending checks passed.

### Health Endpoint

Create a simple health route, such as:

- `GET /health`
- returns a simple JSON object:
  - status
  - service name
  - environment placeholder
  - timestamp if appropriate

Do not include secrets or real system info.

### Scripts

Add API scripts:

- `dev`
- `start`
- `build`
- `typecheck`
- `test` placeholder or basic test if framework supports it

Update root scripts if needed.

### Architecture Notes

Add `apps/api/README.md` explaining:

- this is the API shell only
- future API must enforce role permissions
- technicians must never receive billing/profitability/internal financial data
- customer-facing endpoints must never expose internal notes
- sensitive actions must create audit logs
- no domain implementation exists yet

### Checks

Attempt applicable checks:

- dependency install if feasible
- typecheck/build if feasible
- health route test if feasible without overbuilding

If checks cannot run, document the blocker honestly.

Update `STATUS_BOARD.md` and create S01-003 handoff.

## Acceptance Criteria

S01-003 is complete only if:

- `apps/api` contains a coherent TypeScript API shell
- existing `apps/api/AGENTS.md` is preserved
- a basic health route exists
- scripts exist for future dev/build/typecheck
- API README explains boundaries and future permission expectations
- no real domain/business logic is implemented
- no database/auth/billing/notification implementation is added
- `STATUS_BOARD.md` has S01-003 row
- S01-003 handoff exists

## Codex Self-Review Prompt

Review S01-003 before finalizing.

Check:

1. Did you create only an API shell?
2. Did you preserve `apps/api/AGENTS.md`?
3. Did you avoid real business endpoints?
4. Did you avoid database/auth/billing/payment/notification implementation?
5. Did the health route avoid sensitive details?
6. Did you update scripts/docs only as needed?
7. Did you run checks where possible and document limitations?
8. Did you update status board and create a handoff?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-003 API app shell"
```
