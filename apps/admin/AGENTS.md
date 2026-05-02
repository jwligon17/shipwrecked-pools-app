# Admin App Agent Rules

## Purpose
The admin dashboard is Shipwrecked's internal operations control center.

## Admin Scope
Admin workflows may cover leads, customers, properties, pets/access, pool outlines, routes, reports, quotes, repairs, billing, deals, notifications, audit logs, and internal CRM notes.

## Data Boundaries
- Billing and profitability data are admin/owner-only.
- Admin-only business notes must never leak into customer or technician surfaces.
- Any cross-surface data exposure must be reviewed against role boundaries.

## Safety Rules
- Sensitive admin edits should produce auditable events.
- Prefer explicit role checks and traceable mutation flows for high-risk actions.
