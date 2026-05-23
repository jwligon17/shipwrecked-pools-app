# Formatting and Linting

## Purpose
This repository uses Prettier and ESLint at the root so Codex and human edits stay consistent across mobile, admin, API, and shared packages.

## Tools
- Prettier for formatting.
- ESLint (flat config) for baseline JavaScript/TypeScript linting.

## Commands
Run from repo root:

```bash
pnpm format
pnpm format:check
pnpm lint
pnpm lint:fix
```

## Scope and Behavior
- Prettier applies consistent code style and should be used before handoff.
- ESLint currently uses a lightweight baseline to avoid blocking early infrastructure work.
- Framework-specific strictness can be layered in later packs once app shells stabilize.

## After Future Code Changes
For implementation packs that touch code:
1. Run `pnpm format`.
2. Run `pnpm lint`.
3. Run `pnpm typecheck`.
4. Run pack-specific test commands.

## If Linting Conflicts with Framework Tooling
- Keep this root config as the baseline guardrail.
- If a framework requires additional lint config, add it in a scoped follow-up pack.
- Do not disable broad linting repo-wide as a shortcut.

## Guardrail
Do not run formatting/linting as justification for broad unrelated rewrites. Keep edits scoped to the active prompt pack.
