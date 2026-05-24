# Prompt Pack: S00-019 — Verify and Adopt MASTER_INDEX_CHANGELOG.md

## Pack Metadata

- **Pack ID:** S00-019
- **Title:** Verify and Adopt MASTER_INDEX_CHANGELOG.md
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / governance verification
- **Can Run In Parallel:** No
- **Depends On:** Master Index V2 source-of-truth docs installed, S00-001 through S00-018 complete
- **Blocks:** Master Index V2 integrity review, future implementation under V2

## Goal

Verify, adopt, and if needed refine `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md` so it becomes the durable change log for Master Index V2 and future roadmap changes.

This pack should not invent unrelated product direction. It should ensure the changelog records the V2 transition and gives future Codex runs clear rules for recording Master Index changes.

## Why This Matters

The V2 Master Index system makes the Master Index a living source of truth. Future product changes should not be scattered across chat threads. They need a change log that records what changed, why, what files were affected, what sprints/packs need recalculation, and which protected rules were checked.

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
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md` if it exists
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md` if it exists
- `docs/prompt-packs/FEATURE_MAP.md` if it exists
- `docs/prompt-packs/DEPENDENCY_MAP.md` if it exists
- `docs/prompt-packs/PROTECTED_RULES.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/codex/SPRINT_00_CLOSEOUT.md` if it exists
- `docs/codex/SPRINT_01_CLOSEOUT.md` if it exists

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-019-verify-and-adopt-master-index-changelog.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/README.md`

## Build Prompt For Codex

Execute S00-019 only.

Verify that `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md` exists and is sufficient as the durable changelog for Master Index V2.

If the changelog exists, refine it only as needed. If it does not exist, create it.

The changelog must include:

1. **Purpose**
   - Explain that this file records meaningful changes to the Master Index, prompt-pack roadmap, feature scope, protected rules, and dependency maps.

2. **When to Add a Changelog Entry**
   - New feature idea affects app scope.
   - Existing feature changes priority.
   - A sprint gains/loses prompt packs.
   - A protected rule changes or is added.
   - A dependency changes.
   - A completed sprint needs retrofit/reconciliation.
   - The user adds a new source-of-truth document.

3. **Required Entry Format**
   Each entry should include:
   - date
   - change title
   - summary
   - source of change
   - affected docs
   - affected features
   - affected sprints
   - affected prompt packs
   - protected rules checked
   - dependency impact
   - status board impact
   - follow-up actions
   - implemented/verified by
   - commit reference placeholder

4. **Initial V2 Transition Entry**
   Add an entry documenting the adoption of Master Index V2 source-of-truth docs:
   - `MASTER_INDEX.md`
   - `MASTER_INDEX_CHANGELOG.md`
   - `MASTER_INDEX_UPDATE_PROTOCOL.md`
   - `FEATURE_MAP.md`
   - `DEPENDENCY_MAP.md`
   - `PROTECTED_RULES.md`
   - status-board merge requirements
   - new S00 governance packs S00-019 through S00-026

5. **Rules**
   - Do not use chat memory as source of truth once docs are committed.
   - Future major changes must update changelog first or as part of the change.
   - Completed prompt packs are historical unless a correction pack supersedes them.
   - Status board must never be blindly overwritten by seed files.
   - Protected rules must be checked before accepting a change.

Update `STATUS_BOARD.md` for S00-019.

Create the S00-019 handoff.

## Acceptance Criteria

S00-019 is complete only if:

- `MASTER_INDEX_CHANGELOG.md` exists.
- It has a clear purpose and required entry format.
- It includes an initial Master Index V2 adoption entry.
- It references affected docs, feature map, dependency map, protected rules, and status board.
- `STATUS_BOARD.md` has S00-019 marked implemented/self-reviewed.
- S00-019 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-019 changes before finalizing.

Check:

1. Did you avoid implementation files?
2. Did you preserve existing status board progress?
3. Did you create/refine `MASTER_INDEX_CHANGELOG.md` without inventing unrelated feature scope?
4. Did you include a V2 adoption entry?
5. Did you update status board and create handoff?
6. Did you avoid overwriting existing completed docs or handoffs?

Fix material issues before completion.
