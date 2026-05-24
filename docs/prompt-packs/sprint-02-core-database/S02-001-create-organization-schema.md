# Prompt Pack: S02-001 — Create Organization Schema

## Pack Metadata

- **Pack ID:** S02-001
- **Title:** Create Organization Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** Sprint 01 complete and reconciled against Master Index V2
- **Blocks:** user schema, memberships, customers, properties, routes, reports, billing, commercial accounts, future SaaS tenancy

## Goal

Create the foundational organization/tenant schema for Shipwrecked Pools.

The organization schema should support Shipwrecked as the initial organization and preserve the future possibility that parts of the backend become a separate SaaS product.

This pack should create the organization table/domain model and associated documentation/tests without implementing full app features.

## Why This Matters

Nearly every future record needs to belong to an organization or tenant:

- users and memberships
- leads/customers/households
- properties and bodies of water
- routes and technician assignments
- reports/photos/chemistry
- requests/quotes/repairs/master jobs
- commercial exports
- notifications
- billing references
- audit logs

Starting with a strong organization schema prevents later rework.


## Common Sprint 02 Scope Guard

Sprint 02 is the core database/domain-model sprint.

This pack may create database/domain schema artifacts, migration files, type exports, schema documentation, seed-shape notes, and tests/checks related to the specific domain object in this pack.

This pack must not implement:
- auth flows or login screens
- billing/payment logic
- notification delivery
- customer/technician/admin screens
- reports/routes/quotes/repairs/master jobs beyond references required for relational planning
- live production database connections
- real customer data
- real gate codes
- real payment information
- secrets

Do not run migrations against a live database unless the repo already has an explicit safe local/test migration workflow and the prompt pack requires it. Prefer creating migrations/schema files and running static checks/tests first.


## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/codex/SPRINT_02_READINESS_CHECKLIST.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/db-package-plan.md`
- `docs/database/seed-data-strategy.md` if it exists
- `packages/db/AGENTS.md`
- `packages/db/README.md`
- `packages/shared-types/README.md` if it exists
- `packages/shared-types/src/index.ts` if it exists
- `package.json`
- `pnpm-workspace.yaml`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0001_create_organizations.sql` or next correctly numbered migration if a convention already exists
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/README.md` if missing
- `docs/handoffs/S02-001-create-organization-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify if needed:

- `packages/db/README.md`
- `packages/shared-types/src/*` only if a lightweight shared organization status/type export is needed
- test files under `packages/db` or `test/` if the repo has a test setup

## Files Codex Must Not Touch

Do not modify app screens, API endpoints, auth implementation, billing implementation, notification implementation, live DB connection code, or production secrets.

Do not create customer/user/role/lead tables yet. Those are separate prompt packs.

## Build Prompt For Codex

Execute S02-001 only.

Create the organization schema/domain foundation.

### Required database direction

Use the existing DB package conventions if present.

If no schema/migration convention exists yet, create a simple Postgres/Supabase-compatible SQL migration convention under `packages/db/migrations/`.

Use Postgres-friendly SQL.

Do not connect to or run against a live database.

### Organization table

Create an `organizations` table.

It should include at minimum:

- `id` UUID primary key
- `name` text, required
- `slug` text, required and unique
- `legal_name` text, nullable
- `status` text or enum/check constraint with values such as:
  - `active`
  - `inactive`
  - `suspended`
  - `archived`
- `organization_type` text or enum/check constraint with values such as:
  - `shipwrecked_internal`
  - `service_business`
  - `future_saas_tenant`
- `timezone` text, default reasonable placeholder such as `America/Chicago` unless docs specify otherwise
- `primary_locale` text, default `en-US`
- `settings` jsonb, default empty object
- `created_at` timestamptz, default now
- `updated_at` timestamptz, default now
- `deleted_at` timestamptz, nullable

Add indexes/constraints:

- unique slug
- status check constraint if not using enum
- organization_type check constraint if not using enum
- index on status
- optional index on deleted_at

Do not create business-specific customer data yet.

### TypeScript schema/types

Create `packages/db/src/schema/organizations.ts` exporting:

- organization status/type unions or constants
- Organization row/interface/type
- Insert/update shapes if useful
- table name constant
- no live query logic

Update schema exports.

### Documentation

Create `docs/database/domain-model/organizations.md` explaining:

- purpose
- fields
- constraints
- future relationships
- why organization_id will appear throughout later tables
- SaaS/future multi-tenant considerations
- what this pack intentionally does not implement

### Tests/checks

If the repo has tests, add a safe smoke test that imports organization schema exports. If there is a migration-lint/check convention, run it. Otherwise run available checks:

- `pnpm format:check` or format if needed
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`

Document what passed or why a check could not run.

Update `STATUS_BOARD.md` for S02-001.

Create the S02-001 handoff.

## Acceptance Criteria

S02-001 is complete only if:

- Organization migration/schema artifact exists.
- Organization TypeScript schema exports exist.
- Organization domain documentation exists.
- No user/customer/lead/membership tables are created yet.
- No live DB connection or production secret is added.
- `organization_id` future tenancy strategy is documented.
- `STATUS_BOARD.md` has S02-001 implemented/self-reviewed.
- S02-001 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-001 before finalizing.

Check:

1. Did you create only organization schema/domain artifacts?
2. Did you avoid user/customer/lead/role tables?
3. Did you avoid auth/billing/notification/app features?
4. Are constraints and indexes reasonable for Postgres/Supabase?
5. Are TypeScript exports safe and not live DB logic?
6. Did you document future relationships and tenancy strategy?
7. Did you update status board and create handoff?
8. Did you run checks or document limitations?
9. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-001 organization schema"
```
