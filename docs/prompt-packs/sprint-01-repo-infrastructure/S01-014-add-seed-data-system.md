# Prompt Pack: S01-014 — Add Seed Data System

## Pack Metadata

- **Pack ID:** S01-014
- **Title:** Add Seed Data System
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / seed data planning and placeholder system
- **Can Run In Parallel:** No
- **Depends On:** S01-001 through S01-013, especially S01-005 shared types and S01-007 DB package foundation
- **Blocks:** future Paul demo data, beta setup, QA scripts, internal demo

## Goal

Create a safe seed data system foundation for demo/test data without implementing real database schema, real migrations, or real database writes yet.

This pack should prepare the repo to eventually seed Paul, Megan, Cooper, sample pools, routes, reports, quotes, master jobs, and admin users after the database schema is created.

## Why This Matters

Paul is the recurring test/demo persona. Future prompt packs need a consistent seed-data structure so Codex does not invent different sample data each time.

Seed data must be clearly marked as demo/test-only and must not include real customer addresses, real gate codes, real payment details, or private information.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/paul-demo-persona.md`
- `docs/product/paul-story.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/db-package-plan.md` if it exists
- `docs/qa/testing-philosophy.md`
- `docs/qa/testing-setup.md` if it exists
- `packages/db/README.md` if it exists
- `packages/shared-types/README.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`

## Files Codex Should Create or Modify

Expected files:

- `packages/db/seeds/README.md`
- `packages/db/seeds/demo-data-plan.md`
- `packages/db/seeds/paul-demo.seed.json` or `.ts` placeholder if safe
- `packages/db/seeds/seed-runner-placeholder.md` or a non-executing placeholder script
- `docs/database/seed-data-strategy.md`
- `docs/handoffs/S01-014-add-seed-data-system.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/db/README.md`
- `docs/product/paul-demo-persona.md` only if adding cross-reference
- root `package.json` only if adding a safe non-writing placeholder script

## Files Codex Must Not Touch

Do not implement:

- real database writes
- real migrations
- real schema
- live Supabase/Postgres connections
- real customer data
- real payment data
- real gate codes
- auth/billing/notification/product features

Do not make seed scripts run against a real database yet.

## Build Prompt For Codex

Execute S01-014 only.

Create a seed data system foundation.

### Required Direction

Because no real database schema exists yet, this pack must not create executable real seed scripts that write to a database.

Instead, create a safe seed-data strategy and placeholder demo data that future database prompt packs can adapt once schema exists.

### Seed Data Strategy

Create `docs/database/seed-data-strategy.md` explaining:

- purpose of seed data
- how Paul demo persona is used
- what seed data should include later
- what seed data must never include
- how beta/internal demo data differs from production data
- how seed data should support tests
- how seed data should support release gates
- how future prompt packs should convert placeholders into real seed scripts after schema exists

### Paul Demo Seed Placeholder

Create a demo seed placeholder under `packages/db/seeds/`.

It should include non-sensitive sample data for:

- organization: Shipwrecked Pools Demo
- owner/admin user placeholder
- technician user placeholder
- Paul customer placeholder
- Megan household member placeholder
- Cooper pet placeholder
- demo property with placeholder address
- pool/spa placeholder
- service points placeholder
- route/stop placeholder
- service report placeholder
- chemistry placeholder
- quote/repair placeholder
- master job placeholder
- before/after photo placeholder metadata
- notification preference placeholder
- chat placeholder

The file must clearly say it is not executable production data.

Use fake placeholder IDs and fake placeholder values only.

Do not include real gate codes. Use something like `DEMO_GATE_CODE_DO_NOT_USE`.

Do not include real payment details. Use `TEST_PAYMENT_METHOD_PLACEHOLDER`.

### Package Seed README

Create `packages/db/seeds/README.md` explaining:

- current seed system status
- placeholders only
- no real DB write yet
- future conversion plan
- safety rules

### Optional Script Placeholder

If adding a root/package script, it should be a placeholder like:

- `seed:demo`: prints/documentation only or says real seed runner not implemented yet

Do not create a script that writes to a database.

### Checks

Run applicable formatting/typecheck if possible.

Update `STATUS_BOARD.md` and create S01-014 handoff.

## Acceptance Criteria

S01-014 is complete only if:

- Seed strategy doc exists.
- DB seeds README exists.
- Paul demo placeholder seed exists.
- Seed placeholder includes relevant Paul/demo concepts without real private data.
- No executable real DB seed writes are created.
- No schema/migration/connection logic is added.
- `STATUS_BOARD.md` has S01-014 row.
- S01-014 handoff exists.
- Checks are run where possible or limitations documented.

## Codex Self-Review Prompt

Review S01-014 before finalizing.

Check:

1. Did you create seed data foundations without real DB writes?
2. Is all demo data clearly fake and non-sensitive?
3. Does the seed placeholder align with Paul demo persona and feature amendments?
4. Did you avoid real gate codes/payment data/private addresses?
5. Did you avoid schema/migrations/live DB connections?
6. Did you update docs/status/handoff?
7. Did you run checks where possible or document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-014 seed data foundation"
```
