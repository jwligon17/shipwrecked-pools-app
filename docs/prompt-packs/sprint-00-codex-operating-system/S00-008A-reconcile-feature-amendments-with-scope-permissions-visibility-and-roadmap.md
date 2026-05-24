# Prompt Pack: S00-008A — Reconcile Feature Amendments With Scope, Permissions, Visibility, and Roadmap

## Pack Metadata

- **Pack ID:** S00-008A
- **Title:** Reconcile Feature Amendments With Scope, Permissions, Visibility, and Roadmap
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / planning / instruction update only
- **Can Run In Parallel:** No
- **Depends On:** S00-001, S00-002, S00-003, S00-004, S00-005, S00-006, S00-007, S00-008
- **Blocks:** Future implementation prompt packs, especially auth, database, admin, technician, routes, reports, quotes, billing, notifications, commercial, and chat work

## Goal

Update the active Shipwrecked Pools planning documents so future Codex prompt packs and implementation work account for the additional feature decisions made after S00-006 and S00-007 were already completed.

This pack must reconcile those feature decisions into the living product docs, master index, permission matrix, data visibility rules, and durable repo instructions without rewriting commit history or modifying implementation code.

## Why This Matters

The app is still in Sprint 00 and no implementation code should be touched yet. However, the product scope has expanded in important ways that affect future backend schema, role permissions, technician workflows, commercial account handling, report/photo structures, chat routing, chemical guidance, and admin tools.

If these decisions are not documented now, later prompt packs may create incomplete schemas, weak permissions, conflicting UI flows, or operational contradictions.

## Important Context

The following features/decisions must be incorporated into the product and planning docs:

### 1. Same App, Role-Based Experiences

- The app is one single true mobile app, not separate customer and technician apps.
- A user's login role determines their app experience automatically.
- Customers log into the customer experience.
- Technicians log into the technician route/service experience.
- Owner/admin can operate as a technician with additional owner/admin permissions where appropriate.
- The owner is the only expected multi-role user.
- Technicians are technician-only.
- Customers are customer-only but may invite household members/spouses/residents for the same service location.
- Technicians use the mobile app only.
- Technicians may log in outside work hours to view future routes and permitted features.
- Technicians must not be able to submit a service visit as complete between 9:00 PM and 8:00 AM local time.

### 2. Master Jobs for Non-Maintenance Work

- Every job that is not weekly or biweekly maintenance should be considered a master job.
- Weekly/biweekly maintenance must never be tied to a master job.
- Master jobs are primarily backend/internal objects for grouping multiple service trips under one approved job.
- Master jobs should support their own status.
- Suggested master job statuses:
  - Draft
  - Quoted
  - Approved
  - Paid
  - Scheduled
  - In Progress
  - Waiting on Customer
  - Waiting on Materials
  - Completed
  - Cancelled
  - Invoiced
  - Closed
- Each individual visit inside a master job should have its own report.
- Customers should see each individual visit report.
- Customers should also see a final summary/completion report that highlights the full start-to-finish result.
- The app should not create a generic customer-facing "master job page." Customers access related visit reports, repair/green-to-clean/acid-wash reports, quote/payment records, and final summary reports through normal report/job history flows.
- Internally, the master job must roll up:
  - number of trips
  - labor/time per visit
  - chemicals used per visit
  - total chemical usage
  - internal costs
  - total job price
  - profitability/margin
  - pricing accuracy learnings
- Technicians should see that a visit belongs to a master job, but must not see profitability, margin, billing status, or sensitive financial details.
- Master jobs must not mix job types. A green-to-clean master job contains only green-to-clean visits. An acid-wash master job contains only acid-wash visits.
- Master jobs support approval/payment the same way quotes and repairs do:
  - approval action
  - checkbox
  - typed signature
  - audit log
  - upfront payment required
- No deposits or milestone payments are needed for V1.

### 3. Commercial Accounts and Compliance Exports

- Commercial accounts must be a separate customer type.
- Commercial properties may have multiple bodies of water at the same property.
- Commercial accounts use the same schedule structure as residential customers.
- Commercial exports are primarily for city/county health department needs, but should also support hotel/apartment management company requirements.
- Commercial export data may include:
  - service date/time
  - technician shown as "Shipwrecked Pools technician"
  - chemical readings
  - chemicals added
  - water clarity
  - temperature
  - safety observations
  - photos
  - gate/access notes when appropriate and approved
  - corrective actions
  - equipment issues
  - report signature
  - PDF report
  - CSV export
  - monthly summary
- Exports should not be emailed automatically.
- Exports must be emailed only after admin review and approval.
- Recipients may include property manager and city/county health inspector.
- Commercial accounts should support multiple contacts with different roles, such as property manager and assistant general manager.
- Commercial report requirements may remain the same as residential at first.
- Admin review is required before external compliance exports are sent.
- Commercial export recipients must not receive billing, profitability, internal notes, or unrelated customer/property data.

### 4. Before/After Photo Gallery

- Before/after photo pairing should be available for all work types.
- Before/after pairs are manually paired by technician or admin.
- Each before/after pair must have a label.
- Examples:
  - Deep End
  - Shallow End
  - Steps
  - Tile Line
  - Equipment Pad
  - Filter
  - Spa
  - Green-to-Clean Progress
  - Acid Wash Result
- Customers should see before/after galleries in normal report and history flows, including weekly reports when relevant, repair reports, green-to-clean reports, acid wash reports, other job reports, and pool outline/service-point marker history when relevant.
- Do not create a generic customer-facing "master job page."
- Multi-visit jobs should support progress galleries:
  - Visit 1
  - Visit 2
  - Visit 3
  - Final
- Admin should be able to hide photos from customer view after upload.
- Customer-visible before/after content must not expose internal notes or admin-only cost/profit data.

### 5. Technician Arrival Critical Pop-Ups

- Admin creates technician arrival pop-ups.
- Alerts may be tied to:
  - customer
  - property
  - body of water
  - route stop
  - master job
  - service point
  - equipment item
- No severity levels are required for V1.
- Alerts must require technician acknowledgment before service can begin.
- Alerts do not require technician response beyond acknowledgment.
- Alerts may be:
  - one-time
  - repeat every visit
  - repeat until resolved
  - date-limited
  - tied to a specific master job/job window
- Alerts are internal only. Customers should not see them.

### 6. Admin Portal

- Admin operations must function from a desktop admin portal.
- Beta may use a basic admin dashboard.
- Basic beta admin functionality should include whatever would materially help or hinder beta, including at minimum:
  - create/edit customers
  - create/edit leads
  - create/edit properties
  - create/edit pet/gate/access notes
  - create/edit pool/body-of-water profile
  - create/edit equipment profile
  - create/publish pool outlines
  - create/manage route days and stops
  - assign technicians
  - view service reports
  - create/respond to quotes
  - respond to customer questions/chats
  - view notification logs
  - view audit logs for sensitive actions
- Desktop-first is acceptable.
- Owner/admin may have limited admin tools inside the mobile app.

### 7. Technician Safety Reminders

- Safety reminders should appear when the technician starts a route.
- Examples:
  - sunglasses
  - head covering/hat
  - sunscreen
  - hydration
  - heat awareness
  - weather/seasonal safety reminders when relevant
- Safety reminders are admin-customizable.
- Some reminders may be seasonal/weather-based; not all reminders are seasonal/weather-based.
- Technician must acknowledge the reminder.
- Acknowledgment should be logged.
- Safety reminders are internal only and not customer-visible.

### 8. Suggested Chemical Guidance

- The app should suggest chemicals only after the technician has entered/logged all required current readings.
- The technician should be able to edit the suggestion and then apply/confirm the actual chemical amount used.
- Chemical suggestions require required pool/system data first.
- Missing required data must block suggestions and flag the account/profile as needing completion.
- Required data may include:
  - chlorine vs salt system
  - pool/spa volume
  - surface type: plaster, fiberglass, or vinyl
  - current chlorine
  - target chlorine
  - pH
  - alkalinity
  - CYA / cyanuric acid
  - calcium hardness
  - salt level
  - body-of-water type
  - chemical strength/concentration
  - weather/use conditions when relevant
- Suggestions should be separate per body of water:
  - pool suggestion
  - separate spa/hot tub suggestion
  - connected spa shares pool chemistry when applicable
- Customers should not see internal suggestions.
- Customers may see chemicals actually used and plain-English explanation.
- Admin can review:
  - suggested amount
  - technician edited amount
  - actual amount applied
  - whether the technician followed or edited the recommendation
- Chemical guidance tables should be editable by admin only.
- Technicians must not adjust chemical recommendation tables.
- Include safety disclaimers/SOP references:
  - follow product labels
  - do not mix chemicals
  - follow Shipwrecked SOP
  - technician judgment required
- Certain suggestions should require admin approval/blocking when thresholds are exceeded, such as unusually large acid demand, large chlorine correction, calcium adjustment, or green-to-clean chemical plan.
- Inventory support may exist later, but do not make inventory a hard requirement unless already implemented.

### 9. Context-Aware Chat

- Chat entry points should be present across most major app areas:
  - Home
  - Chemistry
  - Reports
  - Pool outline marker/service point
  - Quotes
  - Repairs/jobs
  - Billing
  - Route progress
  - Profile
  - Deals/products
- When the customer opens chat, the app should ask whether they want to chat with:
  - technician
  - admin
  - Shipwrecked team / not sure
- Technician chat is allowed only when there is an assigned active technician or recent service context.
- Certain topics should auto-route to admin regardless of what the customer chooses:
  - billing
  - pricing
  - quote approval questions
  - complaints/escalations
  - payment issues
- Technicians may see assigned customer chats during a route, but chat is asynchronous only.
- Never implement live chat expectations.
- Admin can intercept, triage, reassign, or respond to any customer chat.
- Context should not be attached automatically without customer confirmation.
- If the user opens chat from the chemistry screen, ask whether the question is about chemistry or something else.
- If the user opens chat from billing but wants to ask about chemistry, the user can choose "something else" or select the correct topic, and billing context should not be attached.
- Chat should support customer photo uploads.
- Chat should support internal notes, but they must be clearly marked and never customer-visible.
- Chats should have statuses:
  - Open
  - Waiting on Customer
  - Waiting on Shipwrecked
  - Assigned to Technician
  - Assigned to Admin
  - Resolved
  - Closed
- If a closed chat receives a customer response, it must reopen automatically.
- Do not show customer-facing expected response time commitments in V1.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`

## Files Codex Should Create

Create:

- `docs/product/feature-amendments.md`
- `docs/handoffs/S00-008A-reconcile-feature-amendments-with-scope-permissions-visibility-and-roadmap.md`

## Files Codex Should Modify

Modify as needed:

- `docs/product/v1-scope.md`
- `docs/product/paul-story.md`
- `docs/product/mission.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `AGENTS.md`
- `apps/mobile/AGENTS.md`
- `apps/admin/AGENTS.md`
- `apps/api/AGENTS.md`
- `packages/db/AGENTS.md`
- `packages/shared-types/AGENTS.md`
- `packages/api-client/AGENTS.md`
- `packages/ui/AGENTS.md`
- `packages/auth/AGENTS.md`
- `packages/notifications/AGENTS.md`
- `packages/pool-outline/AGENTS.md`
- `docs/prompt-packs/STATUS_BOARD.md`

Only modify folder-level AGENTS files where the feature amendments create durable local rules.

## Files Not To Touch

Do not modify implementation/code files:

- `apps/mobile` implementation files except `apps/mobile/AGENTS.md`
- `apps/admin` implementation files except `apps/admin/AGENTS.md`
- `apps/api` implementation files except `apps/api/AGENTS.md`
- database migrations or schema implementation files
- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.env.example`
- billing implementation code
- auth implementation code
- notification implementation code
- generated build artifacts

This is a documentation and planning reconciliation pack only.

## Build Prompt For Codex

Execute S00-008A only.

Update the active planning and instruction docs so the Shipwrecked Pools app roadmap, scope, permissions, data visibility, and future prompt packs include the feature decisions listed in this prompt pack.

Do not rewrite history or remove completed docs. Treat completed prompt packs as historical. Update living product docs and roadmap docs.

Create a new `docs/product/feature-amendments.md` file that clearly documents all feature additions, their operational implications, priority classification, affected sprints, affected roles, affected data objects, privacy/permission implications, and implementation notes.

Update `docs/product/v1-scope.md` so the scope reflects these feature decisions and separates Beta Critical, V1 Launch, Post-V1, and Future SaaS/Valuation items.

Update `docs/product/paul-story.md` only where the customer journey should reflect context-aware chat, before/after galleries, technician route/service flows, or final report experiences. Do not overstuff the story with admin-only details.

Update `docs/product/mission.md` only if needed to reflect the app as a role-based operating system for customers, technicians, admins, residential accounts, commercial accounts, and future Skimmer replacement.

Update `docs/prompt-packs/MASTER_INDEX.md` so the relevant sprint prompt pack descriptions and/or counts account for these additions. Do not renumber already-completed packs. Add amendment notes where needed. If a future sprint needs additional prompt packs, add them as new rows or update descriptions in a clean way.

Update `docs/security/permission-matrix.md` and `docs/security/data-visibility-rules.md` to include:

- owner-as-technician behavior
- technician completion time restriction
- master jobs and admin-only profitability
- master job visit reports and final summary report visibility
- commercial account contacts and compliance export recipients
- admin-reviewed health-department exports
- before/after photo visibility and admin hide behavior
- arrival pop-up acknowledgement and internal-only visibility
- safety reminder acknowledgement and internal-only visibility
- suggested chemical guidance visibility
- admin-only chemical recommendation table editing
- context-aware chat routing, assignments, internal notes, and reopen behavior

Update root and folder-level AGENTS files only where durable rules are needed to guide future Codex work.

Update `docs/prompt-packs/STATUS_BOARD.md` with an S00-008A row marked Implemented after completion.

Create a handoff note explaining:

- what was added
- which files changed
- how the master index changed
- which future sprints are affected
- whether S00-006/S00-007 were amended after completion
- any risks or follow-up prompt packs needed

## Bite-Sized Implementation Steps

1. Read all required product, security, roadmap, and instruction docs.
2. Create `docs/product/feature-amendments.md`.
3. Classify each feature as Beta Critical, V1 Launch, Post-V1, or Future SaaS/Valuation.
4. Update `docs/product/v1-scope.md` with the new classifications.
5. Update `docs/product/paul-story.md` only where customer-facing story changes are useful.
6. Update `docs/product/mission.md` only if the mission needs adjustment.
7. Update `docs/security/permission-matrix.md` with amended permission rules.
8. Update `docs/security/data-visibility-rules.md` with amended visibility rules.
9. Update `docs/prompt-packs/MASTER_INDEX.md` to preserve the roadmap but include the new feature areas.
10. Update root/folder AGENTS files only with durable rules that future Codex tasks must always follow.
11. Update `docs/prompt-packs/STATUS_BOARD.md` with S00-008A.
12. Create the S00-008A handoff note.
13. Self-review the diff for scope, consistency, missing features, and unintended implementation changes.

## Acceptance Criteria

S00-008A is complete only if:

- `docs/product/feature-amendments.md` exists.
- The feature amendments file includes all nine feature areas listed in this pack.
- `docs/product/v1-scope.md` reflects the new scope and priority classifications.
- `docs/security/permission-matrix.md` includes amended role/permission implications.
- `docs/security/data-visibility-rules.md` includes amended field/data visibility rules.
- `docs/prompt-packs/MASTER_INDEX.md` reflects future prompt-pack/sprint impacts.
- Root/folder AGENTS files are updated only where durable guidance is needed.
- `STATUS_BOARD.md` has an S00-008A row.
- A handoff note exists for S00-008A.
- No implementation code is modified.
- The docs clearly state that master jobs are internal/backend grouping objects, not a generic customer-facing master job page.
- The docs clearly state that commercial exports require admin review before email.
- The docs clearly state that suggested chemical recommendations are internal guidance and not customer-visible.
- The docs clearly state that customers must explicitly confirm chat context before context is attached.
- The docs clearly state that technician chat is asynchronous only.

## Codex Self-Review Prompt

Review the S00-008A changes before finalizing.

Check:

1. Did you update only documentation/instruction files?
2. Did you avoid implementation code, package files, migrations, auth code, billing code, and notification code?
3. Did you create `docs/product/feature-amendments.md`?
4. Did you update the V1 scope with these feature additions?
5. Did you update permission matrix and data visibility rules because S00-006/S00-007 were completed before these amendments?
6. Did you preserve completed prompt packs as history instead of rewriting prior commits?
7. Did you avoid creating a customer-facing generic master job page?
8. Did you clearly document master jobs as internal grouping objects with customer-facing reports and final summary reports?
9. Did you document commercial export admin review requirements?
10. Did you document technician completion restriction from 9 PM to 8 AM?
11. Did you document context-aware chat confirmation before attaching context?
12. Did you document technician chat as asynchronous only?
13. Did you document suggested chemical guidance as internal and editable by technician only for actual applied amount, with tables editable by admin only?
14. Did you document admin-only profitability and margin?
15. Did you update `STATUS_BOARD.md` correctly for S00-008A?
16. Did you create the handoff note?
17. Did you accidentally modify unrelated files?

Fix any material issues before reporting completion.

## Expected Git Commit Message

After this pack is reviewed and complete, the user should commit with:

```bash
git add docs/product/feature-amendments.md docs/product/v1-scope.md docs/product/paul-story.md docs/product/mission.md docs/prompt-packs/MASTER_INDEX.md docs/security/permission-matrix.md docs/security/data-visibility-rules.md AGENTS.md apps/mobile/AGENTS.md apps/admin/AGENTS.md apps/api/AGENTS.md packages/db/AGENTS.md packages/shared-types/AGENTS.md packages/api-client/AGENTS.md packages/ui/AGENTS.md packages/auth/AGENTS.md packages/notifications/AGENTS.md packages/pool-outline/AGENTS.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-008A-reconcile-feature-amendments-with-scope-permissions-visibility-and-roadmap.md
git commit -m "Complete S00-008A feature amendment reconciliation"
```

If some listed AGENTS files were not modified, omit them from `git add` or use `git add` based on actual `git status`.
