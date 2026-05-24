# Shipwrecked Admin Dashboard Shell

## What This Is

A minimal Next.js TypeScript admin dashboard shell for Sprint 01.

## Run

From repo root:

```bash
pnpm --filter @shipwrecked/admin install
pnpm --filter @shipwrecked/admin dev
```

## Intentionally Not Implemented In S01-004

- Real authentication/authorization flows
- Real admin workflows (customers, routes, reports, quotes, repairs, master jobs)
- Live API calls or data loading
- Billing/payment logic implementation
- Chat/notification implementation

## Critical Boundary Reminders

- Admin-only financial/profitability views must never leak to technicians/customers.
- Commercial exports must require admin review before outbound email.
- This pack is a shell only and contains no production business logic.
