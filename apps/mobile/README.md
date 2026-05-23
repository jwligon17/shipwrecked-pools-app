# Shipwrecked Pools Mobile App Shell

## What This Is
A minimal Expo React Native TypeScript shell for the Shipwrecked single mobile app.

## Run
From repo root:

```bash
pnpm --filter @shipwrecked/mobile install
pnpm --filter @shipwrecked/mobile dev
```

Or from `apps/mobile`:

```bash
pnpm install
pnpm dev
```

## Intentionally Not Implemented In S01-002
- Real authentication flows
- Role routing/business workflows
- API integration or live data fetching
- Reports, routes, chemistry workflows, billing, or notifications

## Product Direction Reminder
The final mobile product remains one app with role-based customer, technician, and owner/admin experiences. This pack creates only the starter shell.
