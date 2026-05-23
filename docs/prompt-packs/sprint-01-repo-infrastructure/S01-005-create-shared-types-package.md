# Prompt Pack: S01-005 — Create Shared Types Package

## Pack Metadata

- **Pack ID:** S01-005
- **Title:** Create Shared Types Package
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / shared package setup
- **Can Run In Parallel:** Limited; do not parallelize with other shared package or API contract work
- **Depends On:** S01-001, preferably after S01-002/S01-003/S01-004 are complete
- **Blocks:** API contracts, app/admin data typing, future database/schema work, role/permission implementation

## Goal

Create the `packages/shared-types` workspace package as the central place for stable TypeScript types, enums/unions, and contract-adjacent types used across the mobile app, admin dashboard, API, and future packages.

This pack should create the package foundation and safe foundational types only. It should not implement database schema, API endpoints, or product workflows.

## Why This Matters

Shipwrecked Pools needs strong shared types so Codex does not invent slightly different role names, visibility labels, statuses, customer types, report types, or feature concepts in different parts of the repo.

This package should help future prompt packs stay consistent when implementing:

- role-based login experiences
- customers/households/technicians/admins
- commercial contacts
- reports
- quote/repair workflows
- master jobs
- data visibility
- notification categories
- before/after photos
- chat routing
- suggested chemical guidance

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `packages/shared-types/AGENTS.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`

## Files Codex Should Create or Modify

Expected package files:

- `packages/shared-types/package.json`
- `packages/shared-types/tsconfig.json`
- `packages/shared-types/src/index.ts`
- `packages/shared-types/src/roles.ts`
- `packages/shared-types/src/visibility.ts`
- `packages/shared-types/src/statuses.ts`
- `packages/shared-types/src/ids.ts`
- `packages/shared-types/src/pagination.ts`
- `packages/shared-types/src/result.ts`
- `packages/shared-types/README.md`

Expected support changes if needed:

- root `package.json`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-005-create-shared-types-package.md`

## Files Codex Must Not Touch

Do not implement:

- database schema
- migrations
- API endpoints
- app screens
- auth logic
- billing/payment logic
- notification delivery logic
- real product workflows

Do not modify app/admin/API implementation files unless a root workspace reference requires it.

## Build Prompt For Codex

Execute S01-005 only.

Create a foundational `packages/shared-types` TypeScript workspace package.

### Requirements

The package must:

- be a proper workspace package
- compile independently if possible
- export from `src/index.ts`
- avoid runtime dependencies unless clearly needed
- avoid database-specific types
- avoid over-modeling the full app too early
- provide stable naming that future packages can use
- preserve `packages/shared-types/AGENTS.md`

### Foundational Types to Include

Create lightweight shared types for:

#### Roles

Include role/user concepts aligned with docs:

- owner
- admin
- technician
- customer
- household_member
- commercial_contact
- export_recipient
- system

Also include helper arrays or type guards if useful, but do not implement auth.

#### Customer/Account Types

Include lightweight unions for:

- residential
- commercial
- lead

Do not implement full customer schema.

#### Visibility / Note Types

Include shared visibility concepts:

- internal_admin_only
- technician_visible
- customer_visible
- commercial_export_visible

Include note visibility rules as types only.

#### Operational Statuses

Include common status unions for future use, such as:

- route/stop status placeholder values
- report status placeholder values
- quote status placeholder values
- request status placeholder values
- chat status placeholder values
- master job status values

Use names aligned with docs, but keep them as type definitions only.

#### IDs / Utility Types

Include branded/string ID helpers or lightweight ID aliases if useful, such as:

- `EntityId`
- `OrganizationId`
- `UserId`
- `CustomerId`
- `PropertyId`
- `WaterBodyId`
- `ReportId`

Do not create database schema from these.

#### Result / Pagination

Include general-purpose API-adjacent types:

- `ApiResult`
- `ApiError`
- `PaginatedResult`
- `PaginationInput`

Do not implement actual API client behavior.

### Documentation

Create `packages/shared-types/README.md` explaining:

- what the package is
- what belongs here
- what does not belong here
- how it supports the single app / role-based experience
- why not to put database schema or business logic here
- how future prompt packs should extend it carefully

### Root / Workspace Updates

Update root scripts only if needed to include shared-types in typecheck/build.

Do not break existing scripts.

### Checks

Run applicable checks if available:

- typecheck for the package
- root typecheck if feasible
- do not claim checks passed if dependencies are not installed or scripts do not exist yet

Update `STATUS_BOARD.md` and create S01-005 handoff.

## Acceptance Criteria

S01-005 is complete only if:

- `packages/shared-types` has package config, tsconfig, source exports, and README.
- Shared types include roles, visibility concepts, statuses, ID helpers, result/pagination helpers.
- Types align with Sprint 00 docs and feature amendments.
- No database schema, business workflow, or implementation logic is added.
- Existing `packages/shared-types/AGENTS.md` is preserved.
- `STATUS_BOARD.md` has S01-005 row.
- S01-005 handoff exists.
- Checks are run where possible or limitations are documented.

## Codex Self-Review Prompt

Review S01-005 before finalizing.

Check:

1. Did you create only a shared types package?
2. Did you avoid database schema and business workflow implementation?
3. Are role names and visibility names aligned with permission/data visibility docs?
4. Are master job, commercial export, chat, report, quote, and notification concepts represented only as safe shared types/statuses?
5. Did you preserve `packages/shared-types/AGENTS.md`?
6. Did you update docs/status/handoff?
7. Did you run checks where possible and document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-005 shared types package"
```
