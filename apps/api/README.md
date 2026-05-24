# Shipwrecked API Shell

## What This Is

A minimal structured TypeScript API shell (NestJS-style) for Shipwrecked backend development.

## Run

From repo root:

```bash
pnpm --filter @shipwrecked/api install
pnpm --filter @shipwrecked/api dev
```

## Included Endpoint

- `GET /health`
- Response includes:
  - `status`
  - `service`
  - `environment`
  - `timestamp`

## Intentionally Not Implemented In S01-003

- Authentication or authorization system implementation
- Customer/technician/admin business endpoints
- Database schema or ORM setup
- Billing/payment/notification/report/route/quote/master-job/commercial-export logic

## Security Boundary Reminder

Future API work must enforce role permissions, including:

- technicians must never receive billing/profitability/internal financial data,
- customer-facing endpoints must never expose internal notes,
- sensitive actions must be audited.
