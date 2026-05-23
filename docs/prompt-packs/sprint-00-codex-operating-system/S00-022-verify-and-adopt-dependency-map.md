# Prompt Pack: S00-022 — Verify and Adopt DEPENDENCY_MAP.md

## Pack Metadata

- **Pack ID:** S00-022
- **Title:** Verify and Adopt DEPENDENCY_MAP.md
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / dependency mapping
- **Can Run In Parallel:** No
- **Depends On:** S00-019, S00-020, S00-021
- **Blocks:** sprint recalculation, safe prompt-pack sequencing, implementation readiness

## Goal

Verify, adopt, and if needed refine `docs/prompt-packs/DEPENDENCY_MAP.md` so Codex and the user understand build order, unsafe parallel work, and dependencies between features, sprints, prompt packs, and data objects.


## Common Scope Rule For This V2 Governance Pack

This is a documentation/governance pack only.

Do not modify implementation code.
Do not modify app/admin/API implementation files.
Do not modify database migrations or schema implementation files.
Do not modify auth, billing, payment, notification, report, route, quote, repair, pool outline, chemical guidance, commercial export, or chat implementation.
Do not modify package/workspace config unless the prompt pack explicitly requires a small documentation-related cross-reference.
Do not delete or rewrite completed prompt packs.
Do not delete previous handoffs.
Do not overwrite the existing real `STATUS_BOARD.md` with a seed/example status board.


## Files Codex Should Read First

Read:

- `AGENTS.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md` if it exists
- `docs/prompt-packs/PROTECTED_RULES.md` if it exists
- `docs/codex/PARALLEL_WORK_RULES.md` if it exists
- `docs/product/feature-amendments.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-022-verify-and-adopt-dependency-map.md`

May modify only if needed:

- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/codex/PARALLEL_WORK_RULES.md`

## Build Prompt For Codex

Execute S00-022 only.

Verify that `DEPENDENCY_MAP.md` exists and clearly maps build dependencies.

If it exists, refine it only as needed. If it does not exist, create it.

The dependency map must include:

1. **Sprint-Level Dependencies**
   - S00 governance before source-of-truth-changing implementation.
   - S01 infrastructure before app/package implementation.
   - S02 database/domain model before feature APIs.
   - S03 auth/roles/permissions before customer/technician data access.
   - Onboarding/water bodies before pool outlines/reports/chemistry.
   - Routes/technician workflow before service reports.
   - Reports before advanced customer history.
   - Quote/repair before billing/payment triggers.
   - Notifications after event models/preferences.
   - Commercial exports after reports/data visibility/admin review.
   - Master jobs after quotes/repairs/reports/billing foundations.

2. **Feature Dependencies**
   Include dependencies for:
   - pool outline
   - service points
   - reports
   - before/after galleries
   - master jobs
   - commercial exports
   - chemical guidance
   - context-aware chat
   - route progress
   - technician alerts/safety reminders
   - billing/payments
   - deal/product eligibility
   - privacy/export/deletion

3. **Unsafe Parallel Work**
   Mark as never-parallel:
   - database migrations
   - auth/permission guards
   - billing/payment flows
   - API contracts/shared types
   - protected data visibility rules
   - master job core model
   - commercial export model
   - chemical guidance rules/tables
   - pool outline data format

4. **Limited Parallel Work**
   Mark UI/admin/mobile work as parallel only after backend/API contracts exist.

5. **Codex Stop Rules**
   Codex must stop when:
   - dependency not met
   - protected rule conflict
   - status board mismatch
   - uncommitted prior pack changes
   - feature map not updated for a feature change
   - dependency map not updated for a sequencing change

Update `STATUS_BOARD.md` for S00-022.

Create the S00-022 handoff.

## Acceptance Criteria

S00-022 is complete only if:

- `DEPENDENCY_MAP.md` exists.
- It maps sprint-level and feature-level dependencies.
- It includes unsafe/limited parallelization rules.
- It includes Codex stop rules.
- It reflects S00-008A feature amendments.
- `STATUS_BOARD.md` has S00-022 marked implemented/self-reviewed.
- S00-022 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-022 changes before finalizing.

Check:
1. Did you avoid implementation files?
2. Does dependency map cover sprints, features, parallelization, and stop rules?
3. Does it include all high-risk amendments: master jobs, commercial exports, before/after, chemical guidance, chat?
4. Does it align with parallel work rules and master index?
5. Did you update status board and create handoff?

Fix material issues before completion.
