# Prompt Pack S00-004 — Create Root AGENTS.md

## Pack ID

S00-004

## Title

Create Root `AGENTS.md`

## Sprint

Sprint 00 — Codex Operating System

## Priority

P0 — Required before real app/code work begins.

## Risk Level

High. This file becomes durable repo-level guidance for Codex. Bad instructions here can create repeated downstream mistakes.

## Goal

Replace the temporary root `AGENTS.md` with a comprehensive, practical, repo-wide instruction file for Codex.

The finished `AGENTS.md` should teach Codex how to work in the Shipwrecked Pools repo, how to respect the product direction, how to follow prompt packs, how to avoid scope creep, how to handle role/privacy rules, and how to verify work before handing it back.

## Why This Matters

The Shipwrecked Pools app is not a generic mobile app. It is intended to become:

- a premium customer experience,
- a true mobile app,
- a Skimmer replacement,
- a technician workflow system,
- an admin CRM,
- a route management tool,
- a service reporting engine,
- a quote/repair approval system,
- a billing layer,
- a notification system,
- a deep maintenance-history database,
- and potentially the foundation for a future SaaS product.

Codex needs durable repo-level instructions before it starts building any of that. This file should reduce repeated prompting and prevent common mistakes.

## Prerequisites

Before running this pack, these should exist:

- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`

If any prerequisite is missing, stop and report what is missing before making changes.

## Expected Files To Create Or Modify

Modify:

- `AGENTS.md`
- `docs/prompt-packs/STATUS_BOARD.md`

Create:

- `docs/handoffs/S00-004-create-root-agents-md.md`

## Files Not To Touch

Do not modify:

- `apps/mobile/`
- `apps/admin/`
- `apps/api/`
- `packages/db/`
- `packages/shared-types/`
- `packages/api-client/`
- `packages/ui/`
- `packages/config/`
- `packages/auth/`
- `packages/notifications/`
- `packages/pool-outline/`
- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.env.example`
- database files
- auth implementation files
- billing implementation files
- mobile app code
- admin app code
- API app code

This is a documentation/instruction pack only.

## Product Rules That Must Be Reflected In `AGENTS.md`

The root `AGENTS.md` must clearly include these Shipwrecked-specific rules:

1. The customer experience is the primary priority.
2. V1 is a true mobile app, not a PWA-only experience.
3. The custom top-down customer pool outline is non-negotiable for V1.
4. Route progress should show stops-before-you and ETA, not exact live GPS.
5. Questions in V1 are answered by technicians/admins, not AI.
6. Customers and leads are both supported.
7. Separate bodies of water must be supported.
8. Connected and non-connected pool/spa setups must be supported.
9. Weekly maintenance reports, repair reports, and green-to-clean reports must be separate workflows/report types.
10. Reports should include photos every time.
11. Chemistry should show exact readings and plain-English explanations.
12. Customers should see customer-friendly notes only.
13. Internal notes must never leak to customers.
14. Technicians may see assigned route details, access instructions, gate codes, dog/pet notes, dog treat permission, customer cell number, and operational reminders.
15. Technicians must never see billing, payment, route profitability, customer profitability, sensitive financial data, or admin-only business notes.
16. Quote approvals must include an approval action, checkbox, typed signature, audit log, and payment flow when applicable.
17. Billing and payments are launch-critical because the app is intended to replace Skimmer.
18. Deal/product notifications must be optional and independently toggleable.
19. Sensitive actions require audit logs.
20. The app may eventually become SaaS, so architecture should not block future multi-tenant use.

## Codex Workflow Rules That Must Be Reflected In `AGENTS.md`

The root `AGENTS.md` must clearly instruct Codex:

1. Execute one prompt pack at a time.
2. Treat `PACK_PATH` as the source of truth when running a prompt pack.
3. Stop and report conflicts if the runner prompt, prompt pack, or repo instructions reference conflicting Pack IDs.
4. Plan before making changes.
5. List expected files before editing.
6. Keep changes tightly scoped.
7. Do not modify unrelated files.
8. Do not commit changes; the human will commit manually.
9. Update `docs/prompt-packs/STATUS_BOARD.md` for the current pack.
10. Create a handoff note in `docs/handoffs/` for the current pack.
11. Run the prompt pack self-review.
12. Fix material review issues before stopping.
13. For docs-only packs, do not touch app code.
14. For code packs, add/update tests and run required checks.
15. If no tests/checks apply, state why clearly.
16. End with a final summary and suggested git commands.

## Architecture Guidance To Include

The root `AGENTS.md` should treat this as the current intended stack unless future architecture docs override it:

- Monorepo.
- True mobile app with Expo React Native + TypeScript.
- Backend API with TypeScript, preferably NestJS or an equivalent structured TypeScript API framework.
- Admin dashboard with Next.js + TypeScript.
- PostgreSQL as the source of truth.
- Supabase may be used for hosted Postgres/storage/auth acceleration if the architecture docs confirm it.
- Stripe for billing/payment method references and payment events.
- Push notifications as the primary communication channel, with SMS/email fallback where appropriate.
- Mobile/admin clients should use the API/client layer rather than direct database access for business workflows.

Do not make this section too brittle. Phrase it as current intended guidance, not as already-installed implementation.

## Required Root AGENTS.md Sections

The finished `AGENTS.md` should include at least these sections:

1. `# Shipwrecked Pools App — Agent Instructions`
2. `## Project Mission`
3. `## Source Product Docs`
4. `## Current Intended Architecture`
5. `## Core Product Priorities`
6. `## V1 Non-Negotiables`
7. `## User Roles And Visibility Rules`
8. `## Customer-Friendly Vs Internal Data`
9. `## Privacy, Security, And Audit Rules`
10. `## Prompt Pack Workflow`
11. `## Planning Before Changes`
12. `## File Scope And Do-Not-Touch Rules`
13. `## Testing And Verification Rules`
14. `## Handoff Requirements`
15. `## Review Guidelines`
16. `## When To Stop And Ask For Direction`
17. `## Current Things Not To Build Yet`

## Build Prompt For Codex

```txt
You are executing Prompt Pack S00-004 for the Shipwrecked Pools app repo.

Goal: Replace the temporary root AGENTS.md with a comprehensive, practical repo-wide instruction file for Codex.

Before editing:
1. Read AGENTS.md.
2. Read docs/prompt-packs/MASTER_INDEX.md.
3. Read docs/prompt-packs/STATUS_BOARD.md.
4. Read docs/product/mission.md.
5. Read docs/product/paul-story.md.
6. Read docs/product/v1-scope.md.
7. Summarize the plan.
8. List exact files expected to be modified or created.

Only modify:
- AGENTS.md
- docs/prompt-packs/STATUS_BOARD.md

Create:
- docs/handoffs/S00-004-create-root-agents-md.md

Do not modify app code, API code, database files, package files, auth files, billing files, or folder-level AGENTS.md files. Folder-level AGENTS.md files are handled by S00-005.

Write AGENTS.md so it is specific to Shipwrecked Pools and useful to Codex in future tasks. It should be clear, practical, and directive without being bloated. Include product priorities, V1 non-negotiables, role/data visibility rules, privacy/audit rules, intended architecture guidance, prompt pack workflow rules, testing rules, handoff requirements, and review guidelines.

After writing AGENTS.md:
1. Update docs/prompt-packs/STATUS_BOARD.md for S00-004.
2. Create docs/handoffs/S00-004-create-root-agents-md.md.
3. Run the self-review checklist from this prompt pack.
4. Fix material issues.
5. Provide a final summary with files changed, checks run, review findings, fixes made, and suggested git commands.

Do not commit changes.
Stop after S00-004 only.
```

## Bite-Sized Implementation Steps

1. Verify prerequisite docs exist.
2. Read the product docs and extract durable repo-level rules.
3. Draft the new root `AGENTS.md` with the required sections.
4. Make sure it is not generic; it must reference Shipwrecked-specific needs.
5. Make sure it does not claim implementation exists yet.
6. Update the status board for S00-004.
7. Create the handoff note.
8. Run the self-review prompt.
9. Fix any issues.
10. Stop.

## Acceptance Criteria

This pack is complete only if:

- `AGENTS.md` exists and is no longer a temporary placeholder.
- `AGENTS.md` is specific to Shipwrecked Pools.
- `AGENTS.md` references the product docs as source context.
- `AGENTS.md` includes the current intended architecture guidance.
- `AGENTS.md` includes V1 non-negotiables.
- `AGENTS.md` includes role and data visibility rules.
- `AGENTS.md` clearly separates customer-friendly and internal data.
- `AGENTS.md` states that technicians must not see billing/profitability/sensitive financial data.
- `AGENTS.md` states that V1 questions are human-answered, not AI-answered.
- `AGENTS.md` states that route progress is stops-before-you/ETA, not exact GPS.
- `AGENTS.md` includes prompt pack workflow rules.
- `AGENTS.md` includes test/review/handoff expectations.
- `AGENTS.md` says Codex should not commit changes.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-004.
- `docs/handoffs/S00-004-create-root-agents-md.md` exists.
- No app/API/database/package/auth/billing implementation files are modified.

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
Review the S00-004 changes before handing them back.

Check:
1. Did you execute only S00-004?
2. Did you avoid modifying folder-level AGENTS.md files? Those belong to S00-005.
3. Did you avoid touching app/API/database/package/auth/billing implementation files?
4. Is the new root AGENTS.md specific to Shipwrecked Pools rather than generic?
5. Does it include the product mission and V1 non-negotiables?
6. Does it include role and data visibility rules?
7. Does it protect internal notes from customer visibility?
8. Does it protect billing/profitability/sensitive financial data from technicians?
9. Does it explain the one-prompt-pack-at-a-time workflow?
10. Does it instruct Codex to plan, self-review, update status, create handoff notes, and stop after the current pack?
11. Does it avoid claiming features are already built?
12. Did you update STATUS_BOARD.md for S00-004?
13. Did you create the S00-004 handoff note?
14. Are there any unclear, bloated, or conflicting instructions?

Fix any material issue before final response.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-004-create-root-agents-md.md
```

The handoff note must include:

- Pack ID and title.
- Date/time if available.
- Files created.
- Files modified.
- Summary of the new root `AGENTS.md`.
- Checks run.
- Self-review findings.
- Fixes made.
- Known limitations.
- Recommended next pack: S00-005.

## Suggested Commit Message

```bash
git add AGENTS.md docs/handoffs/S00-004-create-root-agents-md.md docs/prompt-packs/STATUS_BOARD.md
git commit -m "Complete S00-004 root agent instructions"
```
