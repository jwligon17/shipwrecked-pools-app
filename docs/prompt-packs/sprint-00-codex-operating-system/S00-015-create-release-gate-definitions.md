# Prompt Pack: S00-015 — Create Release Gate Definitions

## Pack Metadata

- **Pack ID:** S00-015
- **Title:** Create Release Gate Definitions
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / release governance only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-014, including S00-008A if present
- **Blocks:** Internal demo, friendly beta, V1 launch, Skimmer replacement planning

## Goal

Create release gate definitions that tell the user, wife, and Codex how to know when the app is ready for each stage:

1. Internal demo
2. Internal operations test
3. Friendly customer beta
4. V1 launch
5. Skimmer parallel period
6. Skimmer replacement
7. Future SaaS/valuation layer

## Why This Matters

The app has many moving parts. Without release gates, the team may ship too early, keep rebuilding endlessly, or confuse beta needs with full Skimmer replacement needs.

Release gates should make it clear what must be true before customers, technicians, and admins use the app in real operations.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/qa/testing-philosophy.md` if it exists
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`

## Files Codex Should Create

Create:

- `docs/product/release-gates.md`
- `docs/handoffs/S00-015-create-release-gate-definitions.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `docs/product/v1-scope.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify implementation code, package files, database implementation, billing/auth/notification implementation, or unrelated docs.

## Build Prompt For Codex

Execute S00-015 only.

Create `docs/product/release-gates.md`, defining clear release gates for the Shipwrecked Pools app.

The document must include these gates:

## Gate 0 — Repo/Process Ready

Purpose: Confirm Sprint 00 operating system is ready before implementation.

Must include:
- product docs exist
- master index exists
- feature amendments reconciled
- permission matrix exists
- data visibility rules exist
- prompt pack template exists
- universal runner exists
- review checklist exists
- handoff template exists
- parallel work rules exist
- rollback rules exist
- testing philosophy exists
- status board is accurate

## Gate 1 — Internal Demo: "Paul's Pool Exists"

This is the first emotional proof.

Must show:
- Paul can log in
- Paul has property/customer profile
- Paul has pool/spa profile
- Paul has Cooper/pet profile and treat permission
- Paul sees a custom pool outline
- Paul sees service points/markers
- Paul sees profile and notification settings
- admin can create/edit Paul’s core data
- data visibility boundaries hold

## Gate 2 — Internal Operations Test: "Paul Gets Serviced"

Must show:
- technician logs into same mobile app via technician role
- technician sees route/stop
- technician sees gate/pet/access notes
- technician receives arrival pop-ups when configured
- technician acknowledges route-start safety reminder
- technician completes required visit flow
- technician logs chemistry
- technician records actual chemicals used
- report auto-generates
- Paul receives report-ready notification
- Paul can view report, photos, chemistry, notes
- no technician billing/profitability leakage

## Gate 3 — Decision/Revenue Test: "Paul Makes a Decision"

Must show:
- Paul asks a context-aware question
- admin/technician responds
- quote/request workflow works
- approval button + checkbox + typed signature works
- upfront payment model works in test/sandbox
- repair/master-job workflow can be created
- before/after photo proof can be displayed
- repair/job report is separate from weekly maintenance report

## Gate 4 — Friendly Customer Beta

For 3–5 friendly customers.

Must include:
- customer onboarding/invite
- role-based login
- custom pool outline
- weekly reports
- chemistry
- route progress/stops-before-you/ETA
- customer questions/chat
- quote/approval basics
- notification preferences
- basic admin dashboard
- basic technician flow
- required photo flow
- data isolation and permission checks
- clear support process
- ability to roll back or pause beta use

## Gate 5 — V1 Launch

Launch to all Shipwrecked customers/leads.

Must include:
- lead/customer onboarding
- household invites
- payment method and billing basics
- invoice/payment views
- quote/repair approvals
- master job internal grouping foundation
- final summary reports for multi-visit jobs where applicable
- commercial customer type support if launching commercial accounts
- admin-reviewed commercial exports if used
- deal/product notifications with opt-out
- before/after galleries
- notification settings
- admin portal core workflows
- QA/security pass
- privacy/account deletion/export basics
- app store/play store readiness

## Gate 6 — Skimmer Parallel Period

Must define:
- run Shipwrecked app and Skimmer in parallel temporarily
- verify route management
- verify reports/photos/chemistry
- verify billing/payment handling
- verify customer communication
- verify admin workload
- verify data migration/import process
- define what remains in Skimmer during parallel period

## Gate 7 — Skimmer Replacement

Must define:
- app handles route management
- app handles reports/photos/chemistry
- app handles customer text/push/email communication
- app handles billing/invoices/payments
- app handles CRM/customer records
- app handles quotes/repairs/master jobs
- app handles admin operations
- app has monitoring/backups/recovery
- team is trained
- Skimmer cutover checklist complete

## Gate 8 — Future SaaS / Valuation Layer

Must define:
- multi-tenant readiness
- analytics/profitability
- local pool system database
- commercial compliance exports
- advanced suggested chemical guidance
- product/deal intelligence
- operational dashboards
- possible SaaS packaging

For each gate, include:
- purpose
- required features
- minimum tests/checks
- what is intentionally not required yet
- risks/blockers
- go/no-go checklist

Update `STATUS_BOARD.md` for S00-015 and create the handoff note. If useful, update `v1-scope.md` or `MASTER_INDEX.md` only with cross-references to `release-gates.md`.

## Acceptance Criteria

S00-015 is complete only if:

- `docs/product/release-gates.md` exists.
- It includes Gate 0 through Gate 8.
- Each gate includes purpose, required features, checks, not-required-yet items, risks, and go/no-go checklist.
- It reflects Paul’s journey, custom pool outline, route progress, reports, quotes, billing, master jobs, commercial exports, before/after photos, chemical guidance, chat, admin portal, and Skimmer replacement.
- `STATUS_BOARD.md` has S00-015 row.
- S00-015 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-015 changes before finalizing.

Check:
1. Did you create `docs/product/release-gates.md`?
2. Does it define all requested gates?
3. Does each gate include practical go/no-go criteria?
4. Does it clearly distinguish beta, V1, Skimmer parallel, and Skimmer replacement?
5. Does it include the feature amendments where relevant?
6. Did you avoid implementation code?
7. Did you update status board and handoff?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/product/release-gates.md docs/product/v1-scope.md docs/prompt-packs/MASTER_INDEX.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-015-create-release-gate-definitions.md
git commit -m "Complete S00-015 release gate definitions"
```

If optional files were not modified, omit them from `git add`.
