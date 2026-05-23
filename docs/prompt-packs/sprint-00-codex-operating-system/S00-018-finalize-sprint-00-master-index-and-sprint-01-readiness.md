# Prompt Pack: S00-018 — Finalize Sprint 00 Master Index and Sprint 01 Readiness

## Pack Metadata

- **Pack ID:** S00-018
- **Title:** Finalize Sprint 00 Master Index and Sprint 01 Readiness
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / closeout / readiness verification only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-017, including S00-008A if present
- **Blocks:** Sprint 01 repo/infrastructure/tooling work

## Goal

Close out Sprint 00 by verifying that the Codex operating system, product direction, feature amendments, role/permission rules, data visibility rules, review rules, handoff rules, parallel work rules, rollback rules, testing philosophy, release gates, Paul demo persona, and Codex skill plan are all present and aligned.

This pack should prepare the repo to move from planning/process work into Sprint 01 repo/infrastructure/tooling work.

## Why This Matters

Sprint 00 created the operating system that will keep future Codex work safe and consistent.

Before the project starts implementation, the repo needs a final Sprint 00 closeout check so Codex does not enter Sprint 01 with missing docs, stale master-index rows, unclear dependencies, or contradictions around high-risk areas like:

- role-based app experiences
- technician permissions
- customer/household permissions
- gate/access visibility
- custom pool outlines
- route progress
- master jobs
- commercial exports
- before/after photo galleries
- arrival alerts
- safety reminders
- suggested chemical guidance
- context-aware chat
- quotes/repairs/payments
- billing
- reports
- notifications
- data export/deletion

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md`
- `docs/product/release-gates.md`
- `docs/product/paul-demo-persona.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/qa/testing-philosophy.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/codex/CODEX_SKILL_PLAN.md`
- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`

If any required file is missing, stop and report the missing file before continuing.

## Files Codex Should Create

Create:

- `docs/codex/SPRINT_00_CLOSEOUT.md`
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`
- `docs/handoffs/S00-018-finalize-sprint-00-master-index-and-sprint-01-readiness.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/product/v1-scope.md`
- `docs/product/release-gates.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `AGENTS.md`

Only modify optional files if a clear alignment/update is needed.

## Files Codex Must Not Touch

Do not modify:

- app implementation files
- mobile/admin/API implementation files
- database migrations or schema implementation files
- auth/billing/notification implementation files
- package/workspace/config files
- completed prompt pack files unless adding cross-reference text is explicitly necessary
- existing handoff notes except to reference them in closeout docs

This is a documentation closeout pack only.

## Build Prompt For Codex

Execute S00-018 only.

Create a Sprint 00 closeout and Sprint 01 readiness package.

This pack must:

1. Verify that all expected Sprint 00 docs exist.
2. Identify any missing, inconsistent, or stale docs.
3. Confirm that the feature amendments from S00-008A are reflected in the living docs.
4. Confirm that S00-006 and S00-007 were reconciled after the feature amendments.
5. Confirm that the `MASTER_INDEX.md` accounts for the current product direction and future sprint impacts.
6. Confirm that `STATUS_BOARD.md` accurately reflects Sprint 00 completion status.
7. Create a clear readiness checklist for starting Sprint 01.

## Required Closeout Document

Create `docs/codex/SPRINT_00_CLOSEOUT.md`.

It must include:

### 1. Sprint 00 Purpose

Explain that Sprint 00 created the Codex operating system, product docs, role/permission rules, data visibility rules, review processes, testing expectations, release gates, demo persona, skill plan, and rollback/parallel-work processes.

### 2. Completed Sprint 00 Packs

List each completed pack:

- S00-001 Product Mission
- S00-002 Paul Story Source
- S00-003 V1 Scope
- S00-004 Root AGENTS.md
- S00-005 Folder-Level AGENTS.md Files
- S00-006 Permission Matrix
- S00-007 Data Visibility Rules
- S00-008 Prompt Pack Format Template
- S00-008A Feature Amendment Reconciliation
- S00-009 Prompt Pack Status Board
- S00-010 Codex Review Checklist
- S00-011 Handoff Note Template
- S00-012 Parallel Work Rules
- S00-013 Rollback Rules
- S00-014 Testing Philosophy
- S00-015 Release Gates
- S00-016 Paul Demo Persona
- S00-017 Codex Skill Plan
- S00-018 Sprint 00 Closeout / Sprint 01 Readiness

For each, include:
- expected output doc(s)
- purpose
- completion evidence/check

### 3. Product Direction Summary

Summarize the current product direction:

- true mobile app
- one app with role-based experiences
- customer, household, technician, admin/owner, commercial contact roles
- owner may operate as technician with additional permissions
- customer experience priority
- custom top-down pool outline as V1-critical
- Skimmer replacement direction
- admin desktop portal
- future SaaS possibility

### 4. Feature Amendment Summary

Summarize all S00-008A amendments:

- master jobs for all non-maintenance work
- commercial accounts and health department/property manager exports
- before/after photo galleries for all work types
- technician arrival pop-ups
- admin portal beta requirements
- technician safety reminders
- suggested chemical guidance
- context-aware chat
- technician completion restriction from 9 PM to 8 AM

### 5. High-Risk Rules to Preserve

Document rules future prompt packs must not violate:

- technicians never see billing, payment status, margin, route profitability, customer profitability, or internal financial notes
- customers see customer-friendly notes only
- internal notes must never leak
- route progress uses stops-before-you/ETA, not exact customer-facing GPS
- commercial exports require admin review before emailing
- commercial export recipients receive only approved export data
- master jobs are internal grouping objects, not generic customer-facing master job pages
- suggested chemical guidance is internal only
- chemical recommendation tables are admin-editable only
- context-aware chat must ask the customer to confirm context before attaching it
- technician chat is asynchronous only
- closed chats reopen on customer reply
- before/after photo visibility can be controlled by admin
- gate code access must be guarded and auditable
- quote approvals require approval action, checkbox, typed signature, audit log, and payment flow where applicable

### 6. Sprint 00 Quality Check

Include a checklist:

- product docs present
- security docs present
- prompt pack docs present
- Codex workflow docs present
- handoff template present
- review checklist present
- parallel work rules present
- rollback rules present
- testing philosophy present
- release gates present
- Paul persona present
- skill plan present
- status board updated
- master index updated
- no implementation code required yet

### 7. Known Caveats or Follow-Ups

Document any issues found during closeout.

If no issues are found, say so clearly.

If optional docs are missing or stale, list them and either fix them in scope or mark follow-up.

## Required Sprint 01 Readiness Checklist

Create `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`.

It must include:

### 1. Sprint 01 Purpose

Define Sprint 01 as repo/infrastructure/tooling setup before app implementation.

Sprint 01 should prepare:

- monorepo structure
- package manager/workspace
- mobile app shell
- admin dashboard shell
- API app shell
- shared types package
- database package
- API client package
- shared UI package
- linting/formatting
- testing frameworks
- environment templates
- local dev scripts
- CI checks
- seed data strategy
- initial "empty app build" verification

### 2. Preconditions Before Starting Sprint 01

Include:

- `git status` clean
- all Sprint 00 docs committed
- status board accurate
- no uncommitted Codex output
- current branch known
- remote push recommended if available
- Mainline Owner identified
- batch execution rule understood
- no database/auth/billing implementation has begun yet

### 3. Sprint 01 Risk Rules

Include:

- do not start database schema before repo tooling is stable
- do not implement app features before shells/workspace exist
- do not add billing/auth/payment code in Sprint 01 unless a prompt pack explicitly says so
- do not allow Codex to randomly choose tech stack without following project docs
- keep Sprint 01 focused on infrastructure
- continue using prompt packs, self-review, handoffs, and status board

### 4. Recommended Sprint 01 Stack Assumptions

State recommended assumptions unless later changed:

- monorepo
- TypeScript
- Expo React Native for mobile
- Next.js for admin dashboard
- NestJS or equivalent structured TypeScript API
- PostgreSQL/Supabase direction for data layer
- shared packages for types, API client, UI, config, auth, notifications, pool-outline, test utilities

The doc should be clear these are planning assumptions to be implemented/refined by Sprint 01 prompt packs.

### 5. Sprint 01 Go/No-Go Checklist

Include a checklist for whether to move into S01:

- Sprint 00 complete
- S00-018 committed
- working tree clean
- status board complete through S00-018
- master index references Sprint 01
- user understands batch vs one-pack commit rules
- no unresolved Sprint 00 caveats
- ready to generate S01 prompt packs

## Master Index and Status Board Updates

Update `docs/prompt-packs/MASTER_INDEX.md` only if it is missing the S00-008A amendment or if Sprint 01 dependencies need clearer wording.

Update `docs/prompt-packs/STATUS_BOARD.md` for S00-018.

Create the S00-018 handoff.

## Bite-Sized Implementation Steps

1. Read all required docs.
2. Verify expected Sprint 00 docs exist.
3. Create `docs/codex/SPRINT_00_CLOSEOUT.md`.
4. Create `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`.
5. Update `MASTER_INDEX.md` only if needed.
6. Update `STATUS_BOARD.md` for S00-018.
7. Create S00-018 handoff note.
8. Self-review for missing docs, stale assumptions, contradictions, and accidental implementation changes.

## Acceptance Criteria

S00-018 is complete only if:

- `docs/codex/SPRINT_00_CLOSEOUT.md` exists.
- `docs/codex/SPRINT_01_READINESS_CHECKLIST.md` exists.
- The closeout document lists and checks every Sprint 00 pack, including S00-008A.
- The closeout document summarizes current product direction and high-risk rules.
- The readiness checklist clearly defines Sprint 01 purpose, preconditions, risk rules, stack assumptions, and go/no-go checklist.
- `STATUS_BOARD.md` has a correct S00-018 row.
- A handoff note exists for S00-018.
- No implementation code is modified.
- Any `MASTER_INDEX.md` update is tightly scoped and justified.
- The final summary clearly says whether the repo is ready to generate Sprint 01 prompt packs.

## Codex Self-Review Prompt

Review S00-018 changes before finalizing.

Check:

1. Did you create `docs/codex/SPRINT_00_CLOSEOUT.md`?
2. Did you create `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`?
3. Did you verify the expected Sprint 00 docs?
4. Did you include S00-008A and its feature amendments?
5. Did you preserve master jobs, commercial exports, before/after galleries, arrival alerts, safety reminders, suggested chemical guidance, context-aware chat, and role-based single-app rules?
6. Did you update `STATUS_BOARD.md` for S00-018?
7. Did you create the S00-018 handoff?
8. Did you avoid implementation code?
9. Did you avoid unnecessary changes to product docs or master index?
10. Did you clearly state whether Sprint 01 is ready to begin?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/codex/SPRINT_00_CLOSEOUT.md docs/codex/SPRINT_01_READINESS_CHECKLIST.md docs/prompt-packs/MASTER_INDEX.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-018-finalize-sprint-00-master-index-and-sprint-01-readiness.md
git commit -m "Complete S00-018 Sprint 00 closeout"
```

If `MASTER_INDEX.md` was not modified, omit it from `git add`.
