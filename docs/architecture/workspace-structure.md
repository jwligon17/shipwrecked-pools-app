# Workspace Structure

## Purpose
Shipwrecked Pools uses a monorepo so mobile, admin, API, and shared packages can evolve together while preserving role boundaries, customer-safe visibility, and audit discipline.

## Apps
- `apps/mobile`: True mobile app shell (Expo React Native + TypeScript) for customer, technician, and owner/admin role-based experiences in one app.
- `apps/admin`: Desktop admin dashboard shell (Next.js + TypeScript) for internal operations.
- `apps/api`: Structured TypeScript API shell for role-enforced backend workflows.

## Packages
- `packages/db`: Data-layer package shell (no schema implementation in this pack).
- `packages/shared-types`: Shared cross-surface contract types.
- `packages/api-client`: Client package shell for mobile/admin to call API.
- `packages/ui`: Shared UI package shell.
- `packages/config`: Shared configuration package shell.
- `packages/auth`: Auth package shell only (no auth implementation in this pack).
- `packages/notifications`: Notification package shell only (no notification implementation in this pack).
- `packages/pool-outline`: Pool outline package shell only (no feature implementation in this pack).
- `packages/test-utils`: Shared testing utility shell.

## Current State
The Sprint 01 infrastructure packs establish shell-only foundations. App/business features, auth flows, billing logic, reports, routing workflows, chat, and database schema are intentionally out of scope.

## Parallel-Work Guardrails
- Treat root workspace files (`package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`) as single-owner during infrastructure packs.
- Do not parallelize root script/config rewrites with app shell setup without explicit coordination.
- Preserve all `AGENTS.md` policy files while adding shell code.

## Why This Supports Shipwrecked
This structure supports one coherent product system across:
- customer confidence surfaces in mobile,
- technician operational workflows,
- admin/owner operational and financial controls,
- backend enforcement of role boundaries and audit logging.

Keeping these in one monorepo prevents contract drift and enables consistent security/visibility policy enforcement as Sprint 01 progresses.
