# Seed Data Strategy

## Purpose
Shipwrecked seed data exists to provide consistent demo and test fixtures for development, QA, and release-gate walkthroughs. During Sprint 01 this is a planning-only placeholder system.

## Current Status (S01-014)
- Placeholder-only seed artifacts exist.
- No real schema exists yet.
- No migrations exist yet.
- No database write runner exists yet.
- No live DB/Supabase/Postgres connection is configured here.

## Paul Demo Persona Usage
The default demo profile is Paul/Megan/Cooper and related account/property/workflow placeholders.

Reference docs:
- `docs/product/paul-demo-persona.md`
- `docs/product/paul-story.md`

## What Future Seed Data Should Include
After schema and migrations are implemented in Sprint 02+:
- demo organization and role members
- customer + household relationships
- pet/access context
- pool/spa/water body and service points
- routes/stops/visits
- reports/photos/chemistry
- requests/quotes/repairs/master jobs
- notification preferences
- chat placeholders
- audit-safe metadata

## What Seed Data Must Never Include
- real customer names tied to real addresses
- real gate codes
- real payment card/bank data
- provider secrets/tokens
- private personal identifiers

Use obvious placeholders such as:
- `DEMO_GATE_CODE_DO_NOT_USE`
- `TEST_PAYMENT_METHOD_PLACEHOLDER`

## Demo/Beta vs Production Data
- Demo/beta seeds are synthetic and explicit.
- Production bootstrap data should be controlled, minimal, and generated from approved operational onboarding steps.
- Test/demo fixtures must never be mistaken as production records.

## Testing Support
Seed fixtures should eventually support:
- repeatable local smoke tests
- role/visibility regression scenarios
- cross-surface consistency checks

## Release-Gate Support
Seed fixtures should support:
- Paul demo walkthroughs
- technician/admin rehearsal scenarios
- Sprint gate validation before external pilots

## Future Conversion Plan
Convert placeholder seeds into executable seeds only when:
1. schema is defined,
2. migration order is stable,
3. role/data visibility constraints are enforceable,
4. seed write paths can be run safely against non-production environments.

When converting:
- add explicit environment guardrails,
- keep idempotent behavior where practical,
- document command usage and rollback expectations.
