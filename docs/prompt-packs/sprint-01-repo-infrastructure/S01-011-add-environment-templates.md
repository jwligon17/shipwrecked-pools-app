# Prompt Pack: S01-011 — Add Environment Templates

## Pack Metadata

- **Pack ID:** S01-011
- **Title:** Add Environment Templates
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Infrastructure / environment configuration docs/templates
- **Can Run In Parallel:** Limited
- **Depends On:** S01-001 through S01-010
- **Blocks:** local development, staging/production config planning, API/mobile/admin setup

## Goal

Create safe environment variable templates and documentation for the monorepo without adding real secrets or connecting to production services.

## Why This Matters

The Shipwrecked app will eventually use services for API URLs, database, auth, storage, Stripe, push notifications, SMS/email fallback, error monitoring, and possibly Supabase/Firebase-style services. The repo needs clear environment templates before implementation begins.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `.env.example`
- `.gitignore`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `docs/architecture/workspace-structure.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- root `package.json`
- app/package README files if they exist

## Files Codex Should Create or Modify

Expected files:

- root `.env.example`
- app/package env examples if appropriate:
  - `apps/mobile/.env.example`
  - `apps/admin/.env.example`
  - `apps/api/.env.example`
- `docs/codex/ENVIRONMENT_VARIABLES.md`
- `docs/codex/LOCAL_DEVELOPMENT.md`
- `.gitignore`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S01-011-add-environment-templates.md`

May update app/package READMEs with env references.

## Files Codex Must Not Touch

Do not add real secrets.

Do not implement:

- auth
- DB connection
- Stripe
- push notifications
- SMS/email provider logic
- production deployment
- app feature logic

Do not remove existing safe `.env.example` entries unless replacing with clearer safer structure.

## Build Prompt For Codex

Execute S01-011 only.

Create safe environment templates and documentation.

### Required Principles

- Never commit real secrets.
- Use placeholder values only.
- Clearly separate public client-safe variables from server-only secrets.
- Explain which variables are for local/dev/staging/prod.
- Do not assume services are fully selected/configured unless documented.
- Do not implement integrations yet.

### Root `.env.example`

Update root `.env.example` with organized sections:

- App environment
- API URLs
- Database placeholder
- Auth placeholder
- Storage placeholder
- Stripe/payment placeholder
- Push notification placeholder
- SMS/email fallback placeholder
- Error monitoring/logging placeholder
- Feature flags placeholder
- Local development placeholders

### App-Level Templates

Create app-level examples only if useful:

#### Mobile

`apps/mobile/.env.example` should include only mobile-safe variables, such as:

- public API URL placeholder
- public app environment
- public push project ID placeholder

Do not include secrets.

#### Admin

`apps/admin/.env.example` should include only browser/public-safe variables where appropriate and clearly mark server-only variables if the admin framework supports server environment variables.

#### API

`apps/api/.env.example` may include server-only placeholders:
- API port
- database URL placeholder
- auth secret placeholder
- Stripe secret placeholder
- webhook secret placeholder
- storage config placeholder
- SMS/email provider placeholder

Use placeholders only.

### Documentation

Create `docs/codex/ENVIRONMENT_VARIABLES.md` explaining:

- how env files are structured
- what should never be committed
- public vs server-only variables
- local setup steps
- how Codex should handle env variables in future prompt packs
- what to do when a new integration needs env vars
- why mobile public env vars must not contain secrets

Update `LOCAL_DEVELOPMENT.md` with a short env setup section.

Ensure `.gitignore` ignores real `.env` files but allows `.env.example`.

### Checks

No code tests may be needed unless scripts changed. Run formatting if feasible.

Update `STATUS_BOARD.md` and create S01-011 handoff.

## Acceptance Criteria

S01-011 is complete only if:

- root `.env.example` is safe and organized.
- app/API env examples exist if appropriate.
- no real secrets are added.
- `.gitignore` protects real env files while allowing examples.
- `docs/codex/ENVIRONMENT_VARIABLES.md` exists.
- local development docs mention env setup.
- `STATUS_BOARD.md` has S01-011 row.
- S01-011 handoff exists.
- no integrations or product features are implemented.

## Codex Self-Review Prompt

Review S01-011 before finalizing.

Check:

1. Did you add/update env templates without real secrets?
2. Are public vs server-only variables clearly separated?
3. Are mobile env examples free of secrets?
4. Does `.gitignore` ignore real env files and allow examples?
5. Did you avoid implementing integrations?
6. Did you update docs/status/handoff?
7. Did you run applicable checks or explain why docs-only?
8. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-011 environment templates"
```
