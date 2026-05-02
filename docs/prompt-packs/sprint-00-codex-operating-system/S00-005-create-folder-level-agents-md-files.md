# Prompt Pack S00-005 — Create Folder-Level AGENTS.md Files

## Pack ID

S00-005

## Title

Create Folder-Level `AGENTS.md` Files

## Sprint

Sprint 00 — Codex Operating System

## Priority

P0 — Required before real app/code work begins.

## Risk Level

High. These files become scoped guidance that Codex will apply when working in specific areas of the repo.

## Goal

Create or replace folder-level `AGENTS.md` files so Codex receives more specific instructions when working in mobile, admin, API, database, shared packages, and documentation areas.

The root `AGENTS.md` should provide global rules. These folder-level files should add local rules without contradicting the root instructions.

## Why This Matters

The Shipwrecked Pools app will contain several different working areas:

- customer mobile app,
- technician mobile workflow,
- admin dashboard,
- backend API,
- database and migrations,
- shared types,
- API client,
- UI system,
- auth/permissions,
- notifications,
- pool outline tooling,
- prompt packs and docs.

Each area has different risk. For example, the API must enforce role permissions, the database must avoid destructive migrations, and the mobile app must never expose internal notes to customers. Folder-level `AGENTS.md` files help Codex apply the closest relevant rules to the files it is editing.

## Prerequisites

Before running this pack, these should exist:

- `AGENTS.md` completed by S00-004.
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`

If the root `AGENTS.md` still looks like a temporary placeholder, stop and report that S00-004 should be completed first.

## Expected Files To Create Or Modify

Create or update these folder-level instruction files:

- `apps/mobile/AGENTS.md`
- `apps/admin/AGENTS.md`
- `apps/api/AGENTS.md`
- `packages/db/AGENTS.md`
- `packages/shared-types/AGENTS.md`
- `packages/api-client/AGENTS.md`
- `packages/ui/AGENTS.md`
- `packages/config/AGENTS.md`
- `packages/auth/AGENTS.md`
- `packages/notifications/AGENTS.md`
- `packages/pool-outline/AGENTS.md`
- `packages/test-utils/AGENTS.md`
- `docs/product/AGENTS.md`
- `docs/architecture/AGENTS.md`
- `docs/api/AGENTS.md`
- `docs/database/AGENTS.md`
- `docs/security/AGENTS.md`
- `docs/billing/AGENTS.md`
- `docs/qa/AGENTS.md`
- `docs/prompt-packs/AGENTS.md`

Modify:

- `docs/prompt-packs/STATUS_BOARD.md`

Create:

- `docs/handoffs/S00-005-create-folder-level-agents-md-files.md`

## Files Not To Touch

Do not modify:

- root `AGENTS.md` unless there is a blocking conflict that must be reported first.
- app implementation code.
- API implementation code.
- database schema or migration files.
- package configuration files.
- auth implementation files.
- billing implementation files.
- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.env.example`

This is a documentation/instruction pack only.

## Required Local Guidance By Folder

### `apps/mobile/AGENTS.md`

Must include:

- Mobile is a true app experience, intended for customer and technician roles.
- Customer UX should feel premium, clean, and professional.
- Dynamic home priority rules: service-day technician status first, new report first when fresh, pending quote visible, otherwise pool status/outline prominent.
- Never show internal notes to customers.
- Never show billing/profitability/sensitive business data to technicians.
- Route progress only: stops-before-you and ETA, not exact GPS.
- Customer questions in V1 are human-answered.
- Screens must handle loading, empty, error, and success states.
- Customer-facing language should build confidence.

### `apps/admin/AGENTS.md`

Must include:

- Admin dashboard is the Shipwrecked internal control center.
- Admin may manage leads, customers, properties, pets/access, pool outlines, routes, reports, quotes, repairs, billing, deals, notifications, audit logs, and CRM notes.
- Profitability and billing data are admin/owner-only.
- Admin tools must not leak admin-only data to customer or technician surfaces.
- Admin changes to sensitive data should be auditable.

### `apps/api/AGENTS.md`

Must include:

- Every endpoint must enforce role permissions.
- Customers may access only their own data.
- Household members may access only invited data.
- Technicians may access assigned operational data only.
- Technicians must not access billing, payment, profitability, or admin-only notes.
- Customer-facing endpoints must never expose internal notes.
- Sensitive access/actions should create audit logs.
- API changes should update API docs/contracts when applicable.

### `packages/db/AGENTS.md`

Must include:

- Database changes are high-risk.
- Only one migration/schema prompt should run at a time.
- Prefer relational clarity over shortcut modeling.
- Support organizations/multi-tenant future.
- Support separate water bodies and connected/non-connected pool-spa logic.
- Keep internal notes separate from customer-visible notes.
- Destructive migrations require explicit direction.
- Sensitive events need audit-log support.

### `packages/shared-types/AGENTS.md`

Must include:

- Shared types should reflect API/domain contracts.
- Do not put secrets or environment-specific values here.
- Avoid duplicating business rules inconsistently.
- Keep role/visibility concepts explicit.

### `packages/api-client/AGENTS.md`

Must include:

- Mobile/admin should use the API client for business workflows.
- Do not bypass backend permissions by direct DB access.
- API client changes should stay aligned with API contracts.
- Handle loading/error states cleanly.

### `packages/ui/AGENTS.md`

Must include:

- Shared UI should be premium, clean, professional, and mobile-friendly.
- Avoid embedding business permissions directly in generic UI components.
- Components should be accessible and reusable.
- Do not hardcode Shipwrecked business data in generic components.

### `packages/config/AGENTS.md`

Must include:

- No secrets committed.
- Environment validation should be explicit.
- `.env.example` may include keys but not secret values.
- Config should support staging and production.

### `packages/auth/AGENTS.md`

Must include:

- Role boundaries are critical.
- Support owner/admin/technician/customer/household/lead concepts.
- 2FA path matters.
- Auth changes require tests.
- Never weaken authorization for convenience.

### `packages/notifications/AGENTS.md`

Must include:

- Push notifications are primary.
- SMS/email fallback may exist.
- Notification preferences must be granular.
- Deal/product notifications must be independently toggleable.
- Household members have independent preferences.
- Notification sends should be logged.
- Respect route/privacy rules.

### `packages/pool-outline/AGENTS.md`

Must include:

- Custom top-down pool outline is V1-critical.
- Outline should be structured data, not only a decorative image.
- Use normalized coordinates for markers.
- Support service points, statuses, marker history, photos, and quote/repair links.
- Support separate water bodies and connected spa visuals.
- Customer-facing marker notes must be separated from internal notes.

### `packages/test-utils/AGENTS.md`

Must include:

- Test helpers should make permission, report, quote, and route tests easier.
- Do not make tests pass by weakening business rules.
- Fixtures should include Paul/Megan/Cooper where useful.

### `docs/product/AGENTS.md`

Must include:

- Product docs are source-of-truth for intent.
- Keep language specific to Shipwrecked Pools.
- Do not turn narrative docs into generic SaaS language.
- Product decisions should reflect Paul’s experience and V1 scope.

### `docs/architecture/AGENTS.md`

Must include:

- Architecture docs should distinguish intended future design from implemented reality.
- Keep diagrams/text aligned with repo structure.
- Document tradeoffs and sequence.

### `docs/api/AGENTS.md`

Must include:

- API docs/contracts must reflect role permissions and visibility rules.
- Include customer/technician/admin distinctions.
- Document request/response shapes when API work begins.

### `docs/database/AGENTS.md`

Must include:

- Database docs must explain domain relationships.
- Separate bodies of water, reports, service points, quotes, payments, and audit logs should be documented clearly.
- Do not hide risky assumptions.

### `docs/security/AGENTS.md`

Must include:

- Focus on customer data isolation, gate codes, payment safety, photo privacy, internal note leakage, and technician access limits.
- Security docs should be actionable.

### `docs/billing/AGENTS.md`

Must include:

- Billing docs must protect card/payment data.
- Stripe/payment references should be documented without storing raw card details.
- Quote approval, signature, and payment flow must be auditable.

### `docs/qa/AGENTS.md`

Must include:

- QA docs should translate risk into testable checks.
- Permission tests, report tests, route privacy tests, billing tests, and quote approval tests are high priority.

### `docs/prompt-packs/AGENTS.md`

Must include:

- Prompt packs should be small, scoped, and sequenced.
- One prompt pack at a time.
- Each pack should include build, review, fix, docs, and handoff expectations.
- `PACK_PATH` is the source of truth.
- Stop on Pack ID conflicts.
- Update status board and create handoff notes.

## Build Prompt For Codex

```txt
You are executing Prompt Pack S00-005 for the Shipwrecked Pools app repo.

Goal: Create or replace folder-level AGENTS.md files with specific local rules for each major app, package, and docs area.

Before editing:
1. Read root AGENTS.md.
2. Read docs/product/mission.md.
3. Read docs/product/paul-story.md.
4. Read docs/product/v1-scope.md.
5. Read docs/prompt-packs/MASTER_INDEX.md.
6. Read docs/prompt-packs/STATUS_BOARD.md.
7. Summarize the plan.
8. List the exact files expected to be modified or created.

Only create or update the folder-level AGENTS.md files listed in this prompt pack, plus:
- docs/prompt-packs/STATUS_BOARD.md
- docs/handoffs/S00-005-create-folder-level-agents-md-files.md

Do not modify root AGENTS.md unless there is a blocking conflict; if there is a conflict, stop and report it instead of editing root AGENTS.md.

Do not modify app code, API code, database files, package files, auth implementation files, billing implementation files, or other unrelated files.

Each folder-level AGENTS.md file should be concise, practical, and specific. It should add local instructions without contradicting root AGENTS.md. Avoid vague filler. Use Shipwrecked-specific rules where relevant.

After creating/updating the files:
1. Update docs/prompt-packs/STATUS_BOARD.md for S00-005.
2. Create docs/handoffs/S00-005-create-folder-level-agents-md-files.md.
3. Run the self-review checklist from this prompt pack.
4. Fix material issues.
5. Provide a final summary with files changed, checks run, review findings, fixes made, and suggested git commands.

Do not commit changes.
Stop after S00-005 only.
```

## Bite-Sized Implementation Steps

1. Verify S00-004 appears completed and root `AGENTS.md` is not temporary.
2. Read the root and product docs.
3. Create or update the listed folder-level `AGENTS.md` files.
4. Keep each file concise but meaningful.
5. Ensure no local file contradicts root guidance.
6. Update status board for S00-005.
7. Create handoff note.
8. Run self-review.
9. Fix issues.
10. Stop.

## Acceptance Criteria

This pack is complete only if:

- All listed folder-level `AGENTS.md` files exist.
- Each file has specific local rules, not generic placeholder text.
- Local rules do not contradict root `AGENTS.md`.
- Mobile rules protect customer-facing experience and prevent internal-note leakage.
- Admin rules protect sensitive admin/business data.
- API rules require role guards and data isolation.
- DB rules warn against parallel/destructive migration work.
- Notification rules include granular preferences and deal opt-out.
- Pool-outline rules emphasize structured outline data, normalized coordinates, service points, and V1 criticality.
- Prompt-pack rules include one-pack-at-a-time, `PACK_PATH` as source of truth, status board, handoff, and conflict stopping.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-005.
- `docs/handoffs/S00-005-create-folder-level-agents-md-files.md` exists.
- No app/API/database/package/auth/billing implementation files are modified.
- Root `AGENTS.md` is not modified unless Codex stopped to report a blocking conflict.

## Tests Or Checks To Run

This is documentation-only.

Run:

```bash
git status --short
git diff --stat
```

If no code changed, state clearly that no code/build tests were required.

## Codex Self-Review Prompt

```txt
Review the S00-005 changes before handing them back.

Check:
1. Did you execute only S00-005?
2. Did you avoid modifying root AGENTS.md?
3. Did you avoid touching app/API/database/package/auth/billing implementation files?
4. Do all listed folder-level AGENTS.md files exist?
5. Are the files concise and useful rather than generic filler?
6. Do the local instructions align with root AGENTS.md?
7. Does apps/mobile/AGENTS.md protect customer-facing visibility and route-progress rules?
8. Does apps/admin/AGENTS.md protect admin-only data?
9. Does apps/api/AGENTS.md require role guards and prevent data leakage?
10. Does packages/db/AGENTS.md warn against parallel/destructive migration work?
11. Does packages/notifications/AGENTS.md cover preferences, logs, and deal opt-out?
12. Does packages/pool-outline/AGENTS.md treat the custom outline as structured V1-critical data?
13. Does docs/prompt-packs/AGENTS.md clearly instruct one prompt pack at a time and PACK_PATH as source of truth?
14. Did you update STATUS_BOARD.md for S00-005?
15. Did you create the S00-005 handoff note?
16. Are there any contradictions or unclear local rules?

Fix any material issue before final response.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-005-create-folder-level-agents-md-files.md
```

The handoff note must include:

- Pack ID and title.
- Files created.
- Files modified.
- Summary of the folder-level instruction strategy.
- Any folders intentionally not given AGENTS.md files and why.
- Checks run.
- Self-review findings.
- Fixes made.
- Known limitations.
- Recommended next pack: S00-006.

## Suggested Commit Message

```bash
git add apps/mobile/AGENTS.md apps/admin/AGENTS.md apps/api/AGENTS.md packages/db/AGENTS.md packages/shared-types/AGENTS.md packages/api-client/AGENTS.md packages/ui/AGENTS.md packages/config/AGENTS.md packages/auth/AGENTS.md packages/notifications/AGENTS.md packages/pool-outline/AGENTS.md packages/test-utils/AGENTS.md docs/product/AGENTS.md docs/architecture/AGENTS.md docs/api/AGENTS.md docs/database/AGENTS.md docs/security/AGENTS.md docs/billing/AGENTS.md docs/qa/AGENTS.md docs/prompt-packs/AGENTS.md docs/handoffs/S00-005-create-folder-level-agents-md-files.md docs/prompt-packs/STATUS_BOARD.md
git commit -m "Complete S00-005 folder-level agent instructions"
```
