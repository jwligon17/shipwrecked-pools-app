# Prompt Pack: S00-016 — Create Paul Demo Persona Spec

## Pack Metadata

- **Pack ID:** S00-016
- **Title:** Create Paul Demo Persona Spec
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Documentation / demo persona specification only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-015, including S00-008A if present
- **Blocks:** Seed data planning, internal demo, QA scripts, future Sprint 01/S02 seed-data work

## Goal

Create a durable Paul demo persona specification that future Codex prompt packs can use as the default seed/demo/test customer.

Paul should be the recurring test case used to prove the Shipwrecked Pools app works from customer, technician, admin, and owner perspectives.

## Why This Matters

A consistent demo persona prevents Codex from inventing new sample data every time. Paul should anchor:

- onboarding
- custom pool outline
- pet profile
- route progress
- technician visit
- reports
- chemistry
- quotes
- repairs
- master jobs
- before/after galleries
- context-aware chat
- notifications
- billing/payment
- household invitations
- admin dashboard
- QA/release gates

## Files Codex Should Read First

Before editing, read:

- `docs/product/paul-story.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/product/release-gates.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/qa/testing-philosophy.md` if it exists
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create

Create:

- `docs/product/paul-demo-persona.md`
- `docs/handoffs/S00-016-create-paul-demo-persona-spec.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `docs/product/paul-story.md`
- `docs/product/release-gates.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify implementation code, seed scripts, app code, database code, package files, auth/billing/notification implementation, or unrelated docs.

## Build Prompt For Codex

Execute S00-016 only.

Create `docs/product/paul-demo-persona.md`, a detailed demo/test persona spec for Paul.

The spec must include:

## 1. Persona Overview

- Name: Paul
- Household member/spouse: Megan
- Dog/pet: Cooper
- Dog treat allowed: Yes
- Customer type: residential
- Account status: active ongoing maintenance customer
- Service schedule: weekly Thursday service
- Preferred notification style: push-first
- Deal notifications: initially on, later turned off
- Role: customer
- Household member role: Megan has invited household access

## 2. Property and Access

Include sample property data without using real private info:

- residential property
- backyard pool
- gate code placeholder
- gate access instructions
- dog/access note
- technician arrival reminder
- no real address required; use placeholder/demo address

## 3. Bodies of Water

Define Paul’s pool system:

- main pool
- connected spa or separate spa? Choose a consistent default and document it.
- If using connected spa, explain shared chemistry.
- If using separate spa, explain separate chemistry/report sections.
- Include pool/spa volume placeholders.
- Include surface type.
- Include chlorine vs salt system.
- Include equipment placeholders: filter, pump, cleaner, heater/salt if applicable.

## 4. Pool Outline and Service Points

Define demo pool outline expectations:

- custom top-down outline
- service points/markers:
  - skimmer
  - steps
  - shallow end
  - deep end
  - spa
  - tile line
  - return jet / monitored staining area
  - equipment pad
  - pump
  - filter
  - cleaner
- marker statuses:
  - normal/green
  - watch/yellow for staining or filter pressure
  - action-needed/red for test scenarios
- customer-friendly marker notes
- internal marker notes where needed

## 5. Route/Technician Scenario

Define demo route:

- Paul is on Thursday route
- technician has stops before Paul
- customer sees stops-before-you and ETA
- no exact GPS
- technician sees gate/pet/access notes
- technician sees arrival pop-up if configured
- technician acknowledges safety reminder
- technician cannot complete service between 9 PM and 8 AM

## 6. Weekly Service Scenario

Define sample weekly service:

- gate arrival photo
- pool photos
- spa photos if applicable
- filter pressure photo
- chemistry readings:
  - chlorine
  - pH
  - alkalinity
  - salt
  - CYA
  - calcium hardness
- chemicals actually used
- customer-friendly report summary
- "Everything looks perfect!" scenario
- watch scenario for filter pressure/staining

## 7. Report and Chemistry Scenario

Define:

- latest report
- previous reports
- chemistry history
- plain-English chemistry explanations
- report comments
- before/after photos where relevant
- separate report types for weekly maintenance vs repair/master job

## 8. Quote/Repair Scenario

Define sample quote:

- filter clean or return fitting repair
- customer asks question
- admin/technician responds
- customer approves with button + checkbox + typed signature
- payment method on file charged in test/sandbox
- repair job created
- before/after photos
- repair report generated

## 9. Master Job Scenario

Define a non-maintenance job scenario for Paul:

- green-to-clean or acid wash
- internal master job groups multiple visits
- each visit has report
- customer sees visit reports and final summary report
- no generic customer-facing master job page
- admin sees rolled-up trips, time, chemicals, cost, profitability
- technician sees job context but not profitability/billing

## 10. Context-Aware Chat Scenario

Define:

- customer taps chat from chemistry
- customer confirms context or chooses something else
- customer chooses admin, technician, or Shipwrecked team
- technician chat only if active/recent service context
- admin can intercept/reassign
- customer can upload photo
- internal notes clearly separated
- closed chat reopens when customer replies

## 11. Notification Scenario

Define expected notification examples:

- service day reminder
- add water reminder
- on the way
- arriving soon
- report ready
- quote ready
- repair scheduled
- repair complete
- deal/robot notification
- deal notifications turned off while service notifications remain on

## 12. Billing Scenario

Define:

- stored payment method placeholder
- invoice list
- quote approval charge
- maintenance billing
- payment history
- technician cannot see billing/payment

## 13. Admin Demo Scenario

Define admin actions:

- create/edit Paul
- create/edit property
- create/edit Cooper
- create/edit pool profile
- create/publish pool outline
- create route stop
- view reports
- create quote
- respond to chat
- review before/after photos
- hide photo if needed
- review audit logs

## 14. Test Assertions

Define expected assertions:

- Paul cannot see other customers
- Megan can see invited location only
- technician sees assigned operational data only
- technician cannot see billing/profitability
- customer sees customer-friendly notes only
- internal notes stay internal
- commercial/export features do not affect Paul unless used
- route progress protects privacy

Update `STATUS_BOARD.md` for S00-016 and create handoff note.

## Acceptance Criteria

S00-016 is complete only if:

- `docs/product/paul-demo-persona.md` exists.
- It includes Paul, Megan, Cooper, property, water body, pool outline, route, service, report, quote, repair, master job, chat, notifications, billing, admin, and test assertion sections.
- It uses placeholder/demo data, not real private info.
- It is consistent with the Paul story, feature amendments, permissions, data visibility, and release gates.
- It supports future seed-data and QA prompt packs.
- `STATUS_BOARD.md` has S00-016 row.
- S00-016 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-016 before finalizing.

Check:

1. Did you create `docs/product/paul-demo-persona.md`?
2. Is Paul’s demo data complete enough for future seed data and QA?
3. Does the persona include customer, household, technician, admin, reports, route, quote/repair, master job, chat, notifications, billing, and test assertions?
4. Is it consistent with all prior docs?
5. Does it avoid real private data?
6. Did you update status board and create handoff?
7. Did you avoid implementation code?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/product/paul-demo-persona.md docs/product/paul-story.md docs/product/release-gates.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-016-create-paul-demo-persona-spec.md
git commit -m "Complete S00-016 Paul demo persona spec"
```

If optional files were not modified, omit them from `git add`.
