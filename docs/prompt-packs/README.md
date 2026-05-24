# Shipwrecked Pools Prompt Pack Source of Truth — V2

This folder contains the living Master Index system for the Shipwrecked Pools app build.

## Rule

`MASTER_INDEX.md` is the main source of truth. New product or architecture decisions must be logged in `MASTER_INDEX_CHANGELOG.md`, mapped in `FEATURE_MAP.md`, checked against `DEPENDENCY_MAP.md`, and protected in `PROTECTED_RULES.md` when they create permanent rules.

## Required update order

1. Update `MASTER_INDEX_CHANGELOG.md`.
2. Update `FEATURE_MAP.md`.
3. Update `DEPENDENCY_MAP.md`.
4. Update affected rows in `MASTER_INDEX.md`.
5. Update `PROTECTED_RULES.md` when needed.
6. Run a Master Index Integrity Review before implementation prompts.
