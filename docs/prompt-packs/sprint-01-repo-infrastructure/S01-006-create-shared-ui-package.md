# Prompt Pack: S01-006 — Create Shared UI Package

## Pack Metadata

- **Pack ID:** S01-006
- **Title:** Create Shared UI Package
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** Medium
- **Expected Type:** Infrastructure / shared package setup
- **Can Run In Parallel:** Limited; do not parallelize with major root package changes
- **Depends On:** S01-001, preferably after app shells exist
- **Blocks:** future mobile/admin visual consistency, design token use, component foundations

## Goal

Create the `packages/ui` workspace package as a safe foundation for shared design tokens, visual constants, and future shared UI primitives.

This pack should avoid forcing a premature cross-platform component architecture. It should create stable design tokens and documentation that support premium Shipwrecked Pools UI across mobile and admin.

## Why This Matters

Shipwrecked wants the app to feel clean, premium, and professional. The mobile app and admin dashboard should share core design language without causing React Native / web compatibility issues too early.

A careful UI package now will reduce rework later.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `packages/ui/AGENTS.md`
- `apps/mobile/AGENTS.md`
- `apps/admin/AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`

## Files Codex Should Create or Modify

Expected package files:

- `packages/ui/package.json`
- `packages/ui/tsconfig.json`
- `packages/ui/src/index.ts`
- `packages/ui/src/tokens.ts`
- `packages/ui/src/theme.ts`
- `packages/ui/src/spacing.ts`
- `packages/ui/src/typography.ts`
- `packages/ui/src/status-colors.ts`
- `packages/ui/README.md`

Expected support changes if needed:

- root `package.json`
- `docs/architecture/workspace-structure.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-006-create-shared-ui-package.md`

## Files Codex Must Not Touch

Do not implement:

- final brand design
- production mobile screens
- production admin pages
- auth/billing/route/report/pool-outline UI features
- React Native / web component systems that require heavy architecture decisions

Do not modify mobile/admin implementation files unless only adding a safe package reference is absolutely necessary.

## Build Prompt For Codex

Execute S01-006 only.

Create a minimal `packages/ui` package focused on design tokens and visual foundations.

### Required Direction

Because the app uses both React Native and web/admin, avoid creating platform-specific components too early.

For now, create:

- design tokens
- theme constants
- spacing scale
- typography scale/names
- status color semantic names
- README guidance

### Design Token Requirements

Include semantic token groups for:

- brand
- background
- surface
- text
- border
- success
- warning
- danger
- info
- neutral
- pool status:
  - normal
  - watch
  - action_needed
- route status
- report status
- quote/repair status

Do not choose final brand colors unless already defined. Use clearly documented placeholder values and state they should be replaced once final website branding is provided.

### Typography / Spacing

Create simple scales that can be used by mobile/admin later.

Avoid hardcoding final font families. Note that final brand fonts/colors will come from the updated Shipwrecked Pools website.

### Documentation

Create `packages/ui/README.md` explaining:

- this is a design-token foundation
- why it avoids heavy cross-platform components for now
- what belongs in the package
- what does not belong here
- how mobile/admin should consume tokens later
- how to update tokens when final brand assets arrive
- why shared UI must not include business logic

### Checks

Run applicable typecheck/build if scripts exist.

If not possible, document limitations.

Update `STATUS_BOARD.md` and create S01-006 handoff.

## Acceptance Criteria

S01-006 is complete only if:

- `packages/ui` has package config, tsconfig, source exports, and README.
- Design tokens are semantic and Shipwrecked-aware.
- Placeholder colors/fonts are clearly marked as placeholders.
- No product screens or business workflows are implemented.
- No heavy cross-platform component architecture is prematurely added.
- Existing `packages/ui/AGENTS.md` is preserved.
- `STATUS_BOARD.md` has S01-006 row.
- S01-006 handoff exists.
- Checks are run where possible or limitations are documented.

## Codex Self-Review Prompt

Review S01-006 before finalizing.

Check:

1. Did you create a UI/token package without product feature UI?
2. Did you avoid forcing web/mobile component architecture too early?
3. Are tokens semantic and relevant to pool status, reports, quotes, routes, etc.?
4. Are final brand values clearly placeholders?
5. Did you preserve `packages/ui/AGENTS.md`?
6. Did you update status/handoff/docs?
7. Did you run checks where possible and document limitations?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-006 shared UI package"
```
