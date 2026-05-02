# Prompt Pack S00-003 — Create V1 Scope Doc

## Sprint
S00 — Codex Operating System

## Priority
P0 — Foundation

## Risk Level
Low, if scoped correctly. Medium if Codex tries to implement app features instead of documenting scope.

## Can Run In Parallel?
No. Run only after S00-001 and S00-002 have been completed and committed.

## Goal
Create a clear V1 scope document at:

```txt
docs/product/v1-scope.md
```

This document should define what belongs in:

1. internal demo,
2. 3–5 friendly customer beta,
3. V1 launch for customers/leads,
4. post-V1 / Skimmer replacement expansion,
5. later SaaS/valuation layer.

This scope doc should prevent the project from becoming either too small to matter or too large to launch.

## Why This Matters
The Shipwrecked Pools app has a large vision: true mobile app, custom pool outline, route progress, technician workflow, reports, chemistry, questions, quotes, repairs, billing, deals, CRM, analytics, and eventual Skimmer replacement.

Without a scope document, Codex may overbuild, underbuild, or mix future features into the wrong phase. This document should give future prompt packs a clear product boundary.

## Dependencies
S00-001 and S00-002 should be complete first.

Expected existing files:

```txt
docs/product/mission.md
docs/product/paul-story.md
```

If either file does not exist, Codex should stop and report which prerequisite pack is missing.

## Scope Principles
The scope document should follow these principles:

1. V1 is a true mobile app, not a PWA.
2. V1 is for customers and leads.
3. A 3–5 customer friendly beta is acceptable before wider launch.
4. The customer experience is the highest priority: roughly 75% customer experience and 25% internal operations.
5. The app should eventually replace Skimmer as quickly as reasonable, but V1 can run in parallel during migration.
6. The custom top-down pool outline is mandatory for V1/beta and should not be delayed as a minor future enhancement.
7. The fastest reliable pool outline path is admin-assisted/custom outline creation, with AI or satellite assistance later if possible.
8. Customers should see customer-friendly notes only.
9. Technicians should see operational data but not pricing, billing status, profitability, or sensitive business data.
10. Questions in V1 are answered by technician/admin humans, not AI.
11. Billing is important for V1 launch, but beta may use a reduced/basic billing flow if needed.
12. Repair/quote approval is a major business-value workflow and should be in the V1 path.
13. Deal notifications should exist in V1 if practical, but must be independently toggleable.
14. Exact technician GPS is not required; route progress with stops-before-you and ETA is preferred.
15. The app must support separate bodies of water, including connected pool/spa and separate pool/spa setups.
16. Weekly maintenance reports, repair reports, and green-to-clean reports should be separate report types.

## Required Sections In The Document
Create `docs/product/v1-scope.md` with these sections:

1. `# Shipwrecked Pools App V1 Scope`
2. `## Purpose of This Scope Document`
3. `## Product Priorities`
4. `## Internal Demo Scope`
5. `## Friendly Customer Beta Scope`
6. `## V1 Launch Scope`
7. `## Post-V1 / Skimmer Replacement Scope`
8. `## Later SaaS and Valuation Layer`
9. `## Explicitly Out of Scope for Beta`
10. `## Explicitly Out of Scope for Initial V1`
11. `## Non-Negotiable V1 Requirements`
12. `## Beta-Critical Feature List`
13. `## Launch-Critical Feature List`
14. `## Feature Deferral Rules`
15. `## Scope Decision Checklist for Future Prompt Packs`

## Required Scope Content
The scope doc must include the following.

### Internal Demo Must Prove
The internal demo should prove:

- Paul can exist as a customer.
- Megan can exist as a household member.
- Cooper can exist as Paul’s dog.
- Cooper has dog treat permission.
- Paul has a property.
- Paul has a pool and possibly a connected or separate spa.
- Paul has a custom top-down pool outline.
- Paul’s outline has service point markers.
- Paul can see basic pool status.
- Paul can see a demo/past report.
- Paul can see chemistry readings.
- Paul can see a pending quote.
- Paul can see route progress in a seeded/demo scenario.

### Friendly Beta Must Include
The friendly beta should include:

- true mobile app access,
- customer account creation/login,
- 2FA setup path or prompt,
- customer profile,
- household invitation,
- property and access details,
- pet profile and treat permission,
- pool/spa setup,
- custom pool outline,
- service point markers,
- route progress with stops-before-you and ETA,
- weekly maintenance reports,
- required report photos,
- chemistry readings and plain-English summaries,
- report comments,
- customer questions answered by humans,
- quote/request flow,
- basic repair approval flow,
- notification preferences,
- service/report/quote notifications,
- basic admin dashboard,
- basic technician workflow.

### V1 Launch Must Include
V1 launch should include all beta features plus:

- stable billing/payment method support,
- invoice/payment visibility,
- quote approval with button, checkbox, typed signature, audit log, and payment method charge,
- repair job creation,
- separate repair reports,
- separate green-to-clean reports,
- product/deal notifications with opt-out,
- route exception notifications,
- admin route/customer/report/quote/repair/billing management,
- privacy policy/terms acceptance,
- account deletion request,
- basic data export,
- audit logging for sensitive actions.

### Post-V1 / Skimmer Replacement Should Include
Post-V1 should focus on replacing Skimmer more completely:

- full route management,
- full service report replacement,
- photo/report/chemistry history,
- billing migration,
- maintenance plans,
- technician operations,
- CRM depth,
- customer migration tooling,
- Skimmer parallel period/cutover plan,
- operational analytics.

### Later SaaS / Valuation Layer Should Include
Later layers may include:

- multi-tenant SaaS hardening,
- advanced analytics,
- route/customer profitability,
- local pool system database insights,
- product recommendation intelligence,
- quote conversion analytics,
- repair revenue analytics,
- robot sales analytics,
- automation and AI-assisted internal suggestions.

## Files Codex Should Create Or Modify
Codex should create:

```txt
docs/product/v1-scope.md
```

Codex should update:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

Codex should create:

```txt
docs/handoffs/S00-003-create-v1-scope-doc.md
```

## Files Codex Must Not Touch
Codex must not modify:

```txt
apps/mobile/
apps/admin/
apps/api/
packages/db/
packages/shared-types/
packages/api-client/
packages/ui/
packages/auth/
packages/notifications/
packages/pool-outline/
package.json
pnpm-workspace.yaml
tsconfig.base.json
.env.example
```

Codex must not implement mobile screens, admin screens, API endpoints, database migrations, billing, auth, reports, notifications, or any functional app code.

## Build Prompt For Codex
Copy/paste the following prompt into Codex for this pack:

```txt
You are working in the Shipwrecked Pools app repo. Implement only Prompt Pack S00-003.

Before editing files, read:
- AGENTS.md
- docs/product/mission.md
- docs/product/paul-story.md
- docs/prompt-packs/MASTER_INDEX.md
- docs/prompt-packs/STATUS_BOARD.md, if it exists
- this prompt pack file: docs/prompt-packs/sprint-00-codex-operating-system/S00-003-create-v1-scope-doc.md

First, briefly summarize your plan and list the exact files you expect to create or modify. Do not modify app code, database files, package files, API files, mobile files, admin files, billing files, notification files, or authentication files.

If docs/product/mission.md or docs/product/paul-story.md does not exist, stop and report which prerequisite Sprint 00 packs must be completed first.

Then create docs/product/v1-scope.md.

The document must define scope for:
1. internal demo,
2. 3–5 friendly customer beta,
3. V1 launch for customers/leads,
4. post-V1 / Skimmer replacement expansion,
5. later SaaS/valuation layer.

The scope should reflect these Shipwrecked decisions:
- true mobile app, not PWA,
- customers and leads both supported,
- friendly beta first,
- 75% customer experience / 25% internal operations priority,
- eventual Skimmer replacement,
- custom top-down pool outline required in V1/beta,
- route progress with stops-before-you and ETA instead of exact GPS,
- separate bodies of water supported,
- human-answered questions in V1,
- quote/repair approvals as a major business-value workflow,
- billing important for V1 launch,
- deal notifications allowed but independently toggleable,
- maintenance reports, repair reports, and green-to-clean reports separated,
- technicians cannot see billing, pricing, profitability, or sensitive business financial data.

Use clear Markdown headings and practical bullet lists. The document should help future Codex prompt packs decide whether a feature belongs in beta, launch, post-V1, or later.

Also create a handoff note at docs/handoffs/S00-003-create-v1-scope-doc.md with:
- what changed
- files created or modified
- what was intentionally not changed
- suggested next prompt pack
- any risks or open questions

Update docs/prompt-packs/STATUS_BOARD.md by adding or updating a row for S00-003. Mark it as completed or implemented, depending on the existing status language in the file.

Do not implement S00-004 or any other pack.
```

## Bite-Sized Implementation Steps
Codex should complete these steps:

1. Confirm S00-001 and S00-002 output files exist.
2. Read mission, Paul story, master index, and status board.
3. Create `docs/product/v1-scope.md`.
4. Separate internal demo, beta, V1 launch, post-V1, and later SaaS/valuation scope.
5. Include explicit out-of-scope sections.
6. Include non-negotiable V1 requirements.
7. Include a decision checklist for future prompt packs.
8. Create the S00-003 handoff note.
9. Update the status board.
10. Stop.

## Acceptance Criteria
This pack is complete when:

- `docs/product/v1-scope.md` exists.
- The doc clearly separates internal demo, friendly beta, V1 launch, post-V1, and later SaaS/valuation scope.
- The doc includes custom pool outline as non-negotiable for V1/beta.
- The doc includes customers and leads.
- The doc includes true mobile app direction.
- The doc includes route progress instead of exact GPS.
- The doc includes separate bodies of water.
- The doc includes human-answered questions in V1.
- The doc includes quote/repair approvals and billing as launch-critical.
- The doc includes deal notifications as independently toggleable.
- The doc includes explicit out-of-scope items for beta and V1.
- The doc includes a future prompt-pack scope decision checklist.
- `docs/handoffs/S00-003-create-v1-scope-doc.md` exists.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-003.
- No app code, database code, API code, mobile screens, admin screens, auth logic, notification logic, billing logic, or package config was changed.

## Codex Self-Review Prompt
After implementation, paste this into Codex:

```txt
Run a self-review for S00-003.

Check:
1. Did you only implement S00-003?
2. Did you avoid app code, database files, API files, mobile files, admin files, package files, auth logic, notification logic, and billing logic?
3. Does docs/product/v1-scope.md clearly separate internal demo, beta, V1 launch, post-V1, and later SaaS/valuation scope?
4. Does it include custom pool outline as non-negotiable for V1/beta?
5. Does it support customers and leads?
6. Does it specify true mobile app instead of PWA?
7. Does it include route progress with stops-before-you and ETA rather than exact GPS?
8. Does it include separate pool/spa and connected/non-connected water body support?
9. Does it keep V1 customer questions human-answered?
10. Does it include quote/repair approvals and billing as launch-critical?
11. Does it include deal notification opt-out?
12. Does it include clear out-of-scope sections?
13. Did you create the handoff note?
14. Did you update the status board?
15. Are there any unrelated changes?

If anything is missing, too vague, or outside scope, fix it now. Then summarize the final changed files.
```

## Expected Git Diff
Expected changed/created files:

```txt
docs/product/v1-scope.md
docs/handoffs/S00-003-create-v1-scope-doc.md
docs/prompt-packs/STATUS_BOARD.md
```

Anything outside those files should be treated as suspicious unless Codex gives a very good reason.

## Recommended Commit Message
After Codex completes and self-reviews this pack, commit with:

```bash
git add docs/product/v1-scope.md docs/handoffs/S00-003-create-v1-scope-doc.md docs/prompt-packs/STATUS_BOARD.md
git commit -m "Complete S00-003 V1 scope doc"
```
