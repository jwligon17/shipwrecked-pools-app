# Local Development

## Purpose
This document covers local setup for Sprint 01 infrastructure and app-shell work.

## Prerequisites
- Node.js 20 LTS
- `pnpm` 9+
- Watchman (recommended for React Native/Expo on macOS)
- Xcode/iOS Simulator and/or Android Studio for native emulators (optional for shell verification)

## Install
```bash
pnpm install
```

## Workspace Commands
From repo root:

```bash
pnpm dev
pnpm dev:mobile
pnpm dev:admin
pnpm dev:api
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

## Sprint 01 Scope Warning
Sprint 01 is infrastructure-focused. During these packs:
- app/API/admin shells are expected,
- auth, billing, payment, notifications, reports, route logic, pool-outline features, and customer workflows are not implemented yet.

## Notes
Some commands may remain placeholders until later Sprint 01 packs finish toolchain setup. If a command is placeholder-only, that is intentional and should be documented in the pack handoff.
