# Prompt Pack: S01-008 — Create API Client Package Foundation

## Pack Metadata

- **Pack ID:** S01-008
- **Title:** Create API Client Package Foundation
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / shared package setup
- **Can Run In Parallel:** Limited; do not parallelize with API contract or shared-types changes
- **Depends On:** S01-001, S01-003, S01-005
- **Blocks:** future mobile/admin API usage, typed clients, contract testing

## Goal

Create the `packages/api-client` foundation for a typed API client shared by the mobile app and admin dashboard.

This pack should create a safe API client package with minimal generic infrastructure and, if appropriate, a health endpoint helper. It should not implement product/domain API calls yet.

## Why This Matters

Future mobile/admin work should not duplicate fetch logic. A shared API client foundation helps Codex add typed API calls consistently as backend endpoints are created.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `packages/api-client/AGENTS.md`
- `packages/shared-types/README.md` if it exists
- `apps/api/README.md` if it exists
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`

## Files Codex Should Create or Modify

Expected package files:

- `packages/api-client/package.json`
- `packages/api-client/tsconfig.json`
- `packages/api-client/src/index.ts`
- `packages/api-client/src/client.ts`
- `packages/api-client/src/errors.ts`
- `packages/api-client/src/health.ts`
- `packages/api-client/src/types.ts`
- `packages/api-client/README.md`

Expected support changes if needed:

- root `package.json`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/architecture/workspace-structure.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-008-create-api-client-package-foundation.md`

## Files Codex Must Not Touch

Do not implement:

- auth token refresh
- real login calls
- customer endpoints
- route endpoints
- report endpoints
- quote/billing/payment calls
- notification calls
- chat calls
- database logic
- admin/customer/technician screens

Do not modify app implementation to use the client yet unless the prompt explicitly asks later.

## Build Prompt For Codex

Execute S01-008 only.

Create the `packages/api-client` foundation.

### Requirements

The package must:

- be a workspace package
- be TypeScript-based
- preserve `packages/api-client/AGENTS.md`
- export a minimal API client factory
- include generic request/error handling
- include a health endpoint helper only if compatible with the API shell
- avoid real domain endpoints
- avoid real auth implementation
- avoid secrets
- avoid coupling to one app

### Client Foundation

Create a small generic client with:

- base URL config
- optional headers config
- request helper
- JSON parsing
- error type or class
- timeout/abort support if simple and safe
- health helper for `/health`

Do not add auth token logic yet. You may leave a documented placeholder for future auth integration.

### Types

Use shared types if available, but do not force dependency complexity if not needed.

Include lightweight types:

- `ApiClientConfig`
- `RequestOptions`
- `ApiClientError`
- `HealthResponse`

### README

Create `packages/api-client/README.md` explaining:

- package purpose
- what exists now
- how mobile/admin will use it later
- what does not belong here
- no auth/domain calls yet
- future API contract/OpenAPI generation direction
- permission/data visibility must be enforced by API, not trusted to client-only logic

### Checks

Run package typecheck/build if possible.

If dependencies/checks cannot run, document limitations honestly.

Update `STATUS_BOARD.md` and create S01-008 handoff.

## Acceptance Criteria

S01-008 is complete only if:

- `packages/api-client` has package config, tsconfig, source exports, and README.
- The package exports a minimal generic client and health helper.
- No real domain/customer/technician/admin/billing/report/route calls are implemented.
- No auth implementation is added.
- Existing `packages/api-client/AGENTS.md` is preserved.
- Root/workspace docs are updated if needed.
- `STATUS_BOARD.md` has S01-008 row.
- S01-008 handoff exists.
- Checks are run where possible or limitations documented.

## Codex Self-Review Prompt

Review S01-008 before finalizing.

Check:

1. Did you create only API client foundation?
2. Did you avoid real domain API calls?
3. Did you avoid auth/billing/payment/report/route/chat implementation?
4. Did you preserve `packages/api-client/AGENTS.md`?
5. Does the README explain API permissions must be enforced by the backend?
6. Did you update docs/status/handoff?
7. Did you run checks where possible and document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-008 API client package foundation"
```
