# Prompt Pack: S00-014 — Create Testing Philosophy Doc

## Pack Metadata

- **Pack ID:** S00-014
- **Title:** Create Testing Philosophy Doc
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / testing strategy only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-013, including S00-008A if present
- **Blocks:** Sprint 01 infrastructure, backend work, auth/permissions, database, mobile/admin buildout, billing/payment implementation, release readiness

## Goal

Create a Shipwrecked-specific testing philosophy and test strategy that tells Codex what kinds of tests must be written for future implementation prompt packs.

This document should help the user and their wife run Codex confidently without personally reviewing every technical detail.

## Why This Matters

The Shipwrecked Pools app will handle customer accounts, technician routes, access/gate codes, pet notes, pool outlines, service reports, chemistry readings, before/after photos, master jobs, quotes, approvals, payments, commercial exports, notification preferences, and admin-only profitability.

The testing philosophy must protect the company from:
- customer data leakage
- technician access to billing/profitability
- internal notes leaking to customers
- incorrect route progress privacy
- missing quote approval/audit/payment protections
- incorrect report/photo visibility
- unsafe chemical recommendation behavior
- commercial export over-sharing
- broken customer/technician/admin workflows

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`

## Files Codex Should Create

Create:

- `docs/qa/testing-philosophy.md`
- `docs/handoffs/S00-014-create-testing-philosophy-doc.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `AGENTS.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify:
- implementation code
- app/admin/API implementation files
- database migrations/schema implementation files
- billing/auth/notification implementation files
- package/workspace files
- completed prompt pack files unless only referencing them in docs

## Build Prompt For Codex

Execute S00-014 only.

Create `docs/qa/testing-philosophy.md`, a durable testing strategy for the Shipwrecked Pools app.

The document must explain that future prompt packs should include tests when they change behavior, logic, permissions, data visibility, API contracts, billing, notifications, report generation, routing, photos, chemistry, or admin/technician/customer workflows.

The document must include these sections:

## 1. Testing Mission

Explain that tests are the safety net that lets the user and wife use Codex quickly without blindly trusting generated code.

## 2. Test Categories

Define and explain:

- unit tests
- integration tests
- API/contract tests
- permission/authorization tests
- data visibility tests
- mobile screen smoke tests
- admin dashboard smoke tests
- technician workflow tests
- billing/payment tests
- notification tests
- report generation tests
- photo visibility tests
- chemistry/suggested chemical guidance tests
- commercial export tests
- audit log tests
- regression tests

## 3. Shipwrecked-Specific Test Priorities

Include high-priority scenarios:

- customers can only see their own property/pool/reports/photos/quotes
- household members can only see invited household/location data
- technicians see assigned route/service/access data only
- technicians cannot see billing, payment status, quote margin, route profitability, customer profitability, or internal financial notes
- owner/admin can see broader data with audit logging for sensitive actions
- customers see customer-friendly notes only
- internal notes never leak
- commercial export recipients only receive admin-approved export data
- master job profitability is admin-only
- route progress shows stops-before-you/ETA without revealing other customers or exact GPS
- quote approvals include checkbox, typed signature, audit event, and payment flow
- before/after photos obey visibility and admin hide rules
- report types remain separate: maintenance, repair, green-to-clean, acid wash, commercial compliance, final summary
- suggested chemical guidance blocks when required pool/system data is missing
- suggested chemical guidance is not customer-visible
- chat context is not attached until customer confirms
- closed chats reopen when customer replies
- technician service completion is blocked from 9 PM to 8 AM local time

## 4. Testing by App Area

Define expectations for each future area:

### Backend/API
- role guards
- input validation
- audit logging
- data scoping
- API contract updates
- failure states

### Mobile Customer App
- loading/empty/error/success states
- dynamic home priority states
- pool outline rendering
- reports
- chemistry
- quotes/approvals
- chat
- notification settings

### Technician Mobile Workflow
- route assignment
- future route viewing
- arrival alerts
- safety reminders
- required photos
- chemistry entry
- suggested chemical guidance
- visit completion validation
- time-of-day completion restriction

### Admin Dashboard
- customer/profile management
- route management
- pool outline studio
- quotes/repairs
- master jobs
- commercial exports
- photo hiding
- chat triage
- audit logs

### Billing and Payments
- card on file references only
- quote approval charge behavior
- upfront payment for master jobs
- no raw card storage
- failed payment handling
- webhooks when implemented

### Notifications
- preferences
- household-specific settings
- deal opt-out
- service/report/quote/repair notifications
- SMS/email fallback when implemented

## 5. Minimum Test Expectations by Prompt Pack Type

Define what Codex must do for:

- docs-only packs
- backend logic packs
- database migration packs
- API endpoint packs
- mobile UI packs
- admin UI packs
- billing/payment packs
- notification packs
- permission/security packs
- QA/review packs

## 6. Acceptance Criteria for Future Prompt Packs

State that future implementation prompt packs are not complete unless:
- appropriate tests are added or updated
- required commands are run
- failing tests are fixed or documented as blockers
- Codex self-review includes test results
- handoff note includes tests/checks run
- status board is updated accurately

## 7. What to Do When Tests Cannot Run

Provide guidance:
- explain why
- document blocker
- do not pretend tests passed
- mark pack as Needs Fix/Blocked if necessary
- do not commit risky logic without checks unless intentionally documenting a docs-only change

## 8. Human Operator Checklist

Include simple commands and checks:
- `git status`
- `git diff --stat`
- test commands once added in Sprint 01
- check handoff test section
- check status board

Update `STATUS_BOARD.md` for S00-014 and create the S00-014 handoff note.

## Acceptance Criteria

S00-014 is complete only if:

- `docs/qa/testing-philosophy.md` exists.
- It is specific to Shipwrecked Pools.
- It includes test categories and app-area expectations.
- It includes permission, visibility, billing, report, photo, route, chemical guidance, commercial export, chat, notification, and audit test priorities.
- It explains docs-only vs implementation pack expectations.
- It includes what to do when tests cannot run.
- `STATUS_BOARD.md` has a correct S00-014 row.
- S00-014 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-014 changes before finalizing.

Check:
1. Did you create `docs/qa/testing-philosophy.md`?
2. Is it specific to Shipwrecked Pools and not generic?
3. Does it include testing categories, app-area expectations, and future prompt pack expectations?
4. Does it cover permissions, data visibility, billing/payment, master jobs, reports, photos, commercial exports, suggested chemical guidance, chat, notifications, and audit logs?
5. Did you update `STATUS_BOARD.md` and create the handoff?
6. Did you avoid implementation code and unrelated files?
7. Are optional changes to AGENTS/template/review checklist scoped and useful?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/qa/testing-philosophy.md AGENTS.md docs/prompt-packs/PROMPT_PACK_TEMPLATE.md docs/codex/CODEX_REVIEW_CHECKLIST.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-014-create-testing-philosophy-doc.md
git commit -m "Complete S00-014 testing philosophy"
```

If optional files were not modified, omit them from `git add`.
