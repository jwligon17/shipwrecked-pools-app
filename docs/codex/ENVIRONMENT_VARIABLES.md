# Environment Variables

## Purpose

This document defines safe environment template usage for the Shipwrecked monorepo during Sprint 01 infrastructure setup.

## Core Rules

- Never commit real secrets.
- Commit placeholder-only `.env.example` files.
- Keep client-public variables and server-only variables clearly separated.

## File Structure

- Root template: `.env.example`
- Mobile template: `apps/mobile/.env.example`
- Admin template: `apps/admin/.env.example`
- API template: `apps/api/.env.example`

## Public vs Server-Only

### Public variables

- Mobile `EXPO_PUBLIC_*`
- Admin `NEXT_PUBLIC_*`
- These can be exposed to client bundles and must never contain secrets.

### Server-only variables

- API secrets (`AUTH_SECRET`, `DATABASE_URL`, `STRIPE_SECRET_KEY`, provider API keys)
- Admin server runtime secrets without `NEXT_PUBLIC_`
- Keep these in local `.env` files or secure environment managers.

## Local Setup Steps

1. Copy each template to a local env file as needed.
2. Fill placeholders with local development values.
3. Do not commit local env files.
4. Keep root and app-level values consistent (for example API base URL and API port).

## Future Prompt Pack Guidance

When adding a new integration:

1. Add placeholder variables to relevant `.env.example` files.
2. Document whether each variable is public or server-only.
3. Update this doc and `docs/codex/LOCAL_DEVELOPMENT.md`.
4. Do not add runtime integration logic unless the active pack requires it.

## Security Reminder

Mobile public env variables are visible in distributed app bundles. Never place auth secrets, payment secrets, provider tokens, or internal-only keys in mobile public env values.
