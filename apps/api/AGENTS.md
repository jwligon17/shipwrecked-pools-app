# API App Agent Rules

## Purpose
Provide secure business APIs that enforce Shipwrecked role and visibility boundaries.

## Authorization Rules
- Every endpoint must enforce role permissions.
- Customers may access only their own authorized data.
- Household members may access only invited/approved household data.
- Technicians may access assigned operational data only.
- Technicians must never access billing, payment, profitability, or admin-only notes.

## Data Exposure Rules
- Customer-facing endpoints must never return internal notes.
- Route progress responses for customers must follow stops-before-you and ETA without exact live GPS.
- Sensitive actions and access patterns should generate audit-log events.

## Contract Discipline
- Keep API behavior aligned with shared types and client contracts.
- Update API docs/contracts when endpoint behavior or payload shape changes.
