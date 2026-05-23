# Testing Setup

## Purpose
This document defines the Sprint 01 baseline test framework setup for Shipwrecked infrastructure work.

## Framework Added
- Vitest at the monorepo root for fast TypeScript-friendly unit and smoke tests.

## Commands
Run from repo root:

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
pnpm test:unit
```

## What Is Supported Now
- Shared package smoke tests.
- Utility-level unit tests.
- Early API utility/service tests that can run in Node test environment.

## What Is Intentionally Deferred
- Mobile end-to-end framework setup.
- Browser/UI integration framework setup.
- Full backend integration suite with DB/network dependencies.

These are deferred to later packs after tooling/contracts stabilize.

## Current Smoke Test Coverage
- `@shipwrecked/shared-types` exports.
- `@shipwrecked/api-client` import surface.
- `@shipwrecked/ui` token exports.
- `@shipwrecked/db` placeholder export surface.

## Rules for Future Packs
- Add tests only for behavior changed in that pack.
- Keep tests scoped to allowed files and pack acceptance criteria.
- Do not add product workflow tests before corresponding features exist.
- Follow `docs/qa/testing-philosophy.md` for role boundaries and visibility requirements.
