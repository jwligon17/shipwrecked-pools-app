# DB Package Plan (Foundation)

## Planned Direction

Shipwrecked database direction remains PostgreSQL with optional Supabase hosting acceleration where appropriate.

## Why DB Work Is High Risk

Database modeling and migration order directly affect permission boundaries, data visibility, auditability, and operational reliability. Errors in this layer can leak sensitive data or force costly rework.

## Current State

- `packages/db` exists as a foundation package.
- No schema is implemented yet.
- No migrations are implemented yet.
- No seeded business data is implemented yet.
- No live database connection/client is implemented yet.

## Migration and Sequencing Rules

- Run schema/migration packs sequentially only.
- Do not parallelize migration creation or edits.
- Keep migrations additive and reversible where possible.
- Stop and escalate on destructive migration uncertainty.

## Expected Future Domain Areas

- Organization and user/role membership.
- Leads, customers, household members, properties, access notes, and pets.
- Water bodies, relationships, equipment, pool outlines, and service points.
- Routes, stops, visits, checklists, and report artifacts.
- Chemistry readings, applied chemical records, and internal recommendation traceability.
- Requests, quotes, approvals/signatures, repairs, and internal master-job grouping.
- Billing/payment references (provider-tokenized/reference-only).
- Notification preferences/delivery tracking.
- Commercial export requests/review/audit outcomes.
- Sensitive action audit logs and privacy request tracking.

## Security and Privacy Expectations

- No credentials or secrets may be committed.
- Role boundaries and data visibility rules must be enforced by API/service layers and verified with tests.
- Sensitive events must remain auditable.
- Internal-only data must never leak into customer-visible surfaces.
