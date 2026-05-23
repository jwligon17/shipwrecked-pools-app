# Prompt Pack: S00-024 — Create Master Index Integrity Review Checklist

## Pack Metadata

- **Pack ID:** S00-024
- **Title:** Create Master Index Integrity Review Checklist
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / review checklist
- **Can Run In Parallel:** No
- **Depends On:** S00-019 through S00-023
- **Blocks:** Master Index V2 integrity review, future source-of-truth changes

## Goal

Create a durable checklist for reviewing Master Index V2 integrity before implementation work resumes or after any significant roadmap/feature update.


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

- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists
- `AGENTS.md`

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-024-create-master-index-integrity-review-checklist.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `AGENTS.md`

## Build Prompt For Codex

Execute S00-024 only.

Create `docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md`.

The checklist must help Codex and the user verify that the Master Index V2 ecosystem is consistent.

Include sections:

1. **Required Files Check**
   - `MASTER_INDEX.md`
   - `MASTER_INDEX_CHANGELOG.md`
   - `MASTER_INDEX_UPDATE_PROTOCOL.md`
   - `FEATURE_MAP.md`
   - `DEPENDENCY_MAP.md`
   - `PROTECTED_RULES.md`
   - `STATUS_BOARD.md`

2. **Status Board Alignment**
   - every pack in Master Index appears or is intentionally not tracked
   - completed rows have handoffs
   - new governance packs have rows
   - no seed board overwrite occurred

3. **Feature Map Alignment**
   - every major feature in product docs appears in feature map
   - every feature has roles, affected sprints, dependencies, protected rules

4. **Dependency Alignment**
   - affected sprint order is correct
   - unsafe parallelization is marked
   - completed packs needing retrofit are identified

5. **Protected Rule Alignment**
   - all non-negotiable rules are represented
   - no feature/sprint contradicts protected rules

6. **Master Index Counts and Pack IDs**
   - pack counts plausible
   - no duplicate IDs
   - no skipped amendment IDs causing ambiguity
   - retrofits clearly marked

7. **Completed Work Reconciliation**
   - completed S00/S01 work still fits V2
   - handoffs align with status board
   - old prompt packs are historical
   - new V2 governance packs are adopted

8. **Implementation Readiness**
   - safe to resume S01 or start S02 only if no critical issues
   - no feature-changing implementation before governance update

9. **Final Result Categories**
   - PASS
   - PASS WITH NOTES
   - NEEDS FIX
   - STOP

10. **Read-Only Integrity Review Prompt**
   Include a reusable prompt users can paste into Codex to run a read-only integrity review.

Update `STATUS_BOARD.md` for S00-024.

Create S00-024 handoff.

## Acceptance Criteria

S00-024 is complete only if:

- `MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md` exists.
- It covers required files, status board, feature map, dependency map, protected rules, pack IDs/counts, completed work reconciliation, and implementation readiness.
- It includes PASS/PASS WITH NOTES/NEEDS FIX/STOP result categories.
- It includes a reusable read-only Codex review prompt.
- `STATUS_BOARD.md` has S00-024 implemented/self-reviewed.
- S00-024 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-024 changes before finalizing.

Check:
1. Did you create the integrity checklist?
2. Does it validate the whole V2 source-of-truth system?
3. Does it include reusable read-only review prompt?
4. Did you update status board and handoff?
5. Did you avoid implementation files?

Fix material issues before completion.
