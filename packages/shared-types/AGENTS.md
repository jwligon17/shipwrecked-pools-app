# Shared Types Package Agent Rules

## Purpose

Centralize stable domain and API contracts used across apps/packages.

## Rules

- Keep role and visibility concepts explicit in type design.
- Reflect API/domain contracts accurately; avoid speculative type drift.
- Do not include secrets, credentials, or environment-specific values.
- Avoid duplicating business rules inconsistently across unrelated type definitions.
