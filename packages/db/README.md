# @shipwrecked/db

## Purpose
This package is the foundation for Shipwrecked database work (PostgreSQL/Supabase direction) and currently contains structure only.

## Current status
- Foundation package only.
- No schema implementation.
- No migrations implementation.
- No seed implementation.
- No live database client/connection logic.

## Folder structure
- `src/`: package metadata and future DB-facing exports.
- `migrations/`: future migration files.
- `schema/`: future schema definitions.
- `seeds/`: future seed scripts/data.
- `scripts/`: future database automation scripts.

## What belongs here
- Schema definitions in later scoped packs.
- Ordered, reviewed migrations in later scoped packs.
- Seed tooling and validation in later scoped packs.
- Shared DB-level utilities that remain infrastructure-focused.

## What does not belong here (in this pack)
- Production credentials or secrets.
- Live DB connections.
- Product workflow logic.
- API endpoint logic.
- Permission enforcement logic (must be enforced in API/service layers).

## Guardrails
- Migration/schema work must be one-pack-at-a-time and non-parallelized.
- Technician-facing APIs must never expose billing/profitability data.
- Data visibility boundaries must be enforced and tested at API/service boundaries.
