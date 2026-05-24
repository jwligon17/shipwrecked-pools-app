# Prompt Pack: S01-004 — Create Admin Dashboard Shell

## Pack Metadata

- **Pack ID:** S01-004
- **Title:** Create Admin Dashboard Shell
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / admin app shell
- **Can Run In Parallel:** Limited; do not parallelize with root package setup
- **Depends On:** S01-001
- **Blocks:** future admin portal, customer/route/report/quote/master job/commercial export management

## Goal

Create a minimal Next.js TypeScript admin dashboard shell in `apps/admin`.

This pack should create the admin shell only. It should not implement real admin workflows yet.

## Why This Matters

Shipwrecked needs a desktop admin portal for operational control. Later prompts will add customer management, route management, pool outline studio, reports, quotes, repairs, master jobs, commercial exports, chat triage, notification logs, billing, audit logs, and profitability views.

Sprint 01 only needs a shell.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `apps/admin/AGENTS.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected admin files:

- `apps/admin/package.json`
- `apps/admin/tsconfig.json`
- `apps/admin/next.config.*`
- `apps/admin/src/app/page.tsx` or equivalent Next.js app route
- `apps/admin/src/app/layout.tsx` or equivalent
- `apps/admin/README.md`

Expected support changes if needed:

- `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-004-create-admin-dashboard-shell.md`

## Files Codex Must Not Touch

Do not implement:

- customer management
- lead management
- route management
- pool outline studio
- reports
- quotes
- repairs
- master jobs
- billing
- commercial exports
- chat
- real auth
- real API calls

Do not modify mobile/API implementation files except root scripts if necessary.

## Build Prompt For Codex

Execute S01-004 only.

Create a minimal Next.js TypeScript admin dashboard shell in `apps/admin`.

### Requirements

The admin shell must:

- be TypeScript-based
- be configured as a workspace package
- preserve `apps/admin/AGENTS.md`
- include placeholder dashboard UI only
- include no real business logic
- include no real auth implementation
- include no live API calls
- include no private customer data

### Placeholder UI

The first screen should communicate:

- Shipwrecked Pools Admin
- Sprint 01 admin shell
- Future admin portal areas:
  - leads/customers
  - properties/pets/access
  - pool profiles/outlines
  - routes/technicians
  - reports/photos/chemistry
  - requests/quotes/repairs/master jobs
  - commercial exports
  - billing/payments
  - chat/conversations
  - notifications/audit logs
  - profitability/admin-only analytics

Keep UI basic but clean.

### Scripts

Add admin scripts:

- `dev`
- `build`
- `start`
- `typecheck`
- `lint` if feasible

Update root scripts if needed.

### Documentation

Create/update `apps/admin/README.md` with:

- what the admin shell is
- how to run it
- what is intentionally not implemented
- reminder that admin-only financial/profitability data must never leak to technicians/customers
- reminder that commercial exports require admin review before email

### Checks

Attempt applicable checks:

- dependency install if feasible
- typecheck/build if feasible

If checks cannot run, document the reason honestly.

Update `STATUS_BOARD.md` and create S01-004 handoff.

## Acceptance Criteria

S01-004 is complete only if:

- `apps/admin` contains a coherent Next.js TypeScript shell
- existing `apps/admin/AGENTS.md` is preserved
- admin placeholder page exists
- scripts exist for future dev/build/typecheck
- README explains admin shell and future boundaries
- no real admin workflows or product features are implemented
- no auth/billing/database/report/route logic is implemented
- `STATUS_BOARD.md` has S01-004 row
- S01-004 handoff exists

## Codex Self-Review Prompt

Review S01-004 before finalizing.

Check:

1. Did you create only an admin dashboard shell?
2. Did you preserve `apps/admin/AGENTS.md`?
3. Did you avoid implementing real admin features?
4. Did you avoid auth/database/billing/API feature implementation?
5. Did the placeholder UI clearly describe future areas without real data?
6. Did you update scripts/docs only as needed?
7. Did you run checks where possible and document limitations?
8. Did you update status board and create a handoff?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-004 admin dashboard shell"
```
