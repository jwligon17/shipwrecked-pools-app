# Prompt Pack: S00-020 — Verify and Adopt MASTER_INDEX_UPDATE_PROTOCOL.md

## Pack Metadata

- **Pack ID:** S00-020
- **Title:** Verify and Adopt MASTER_INDEX_UPDATE_PROTOCOL.md
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / governance protocol
- **Can Run In Parallel:** No
- **Depends On:** S00-019
- **Blocks:** future roadmap changes, feature amendments, sprint recalculations

## Goal

Verify, adopt, and if needed refine `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md` so future changes are handled consistently.

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
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md` if it exists
- `docs/prompt-packs/FEATURE_MAP.md` if it exists
- `docs/prompt-packs/DEPENDENCY_MAP.md` if it exists
- `docs/prompt-packs/PROTECTED_RULES.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md` if it exists
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md` if it exists
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-020-verify-and-adopt-master-index-update-protocol.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`

## Build Prompt For Codex

Execute S00-020 only.

Verify that `MASTER_INDEX_UPDATE_PROTOCOL.md` exists and gives a clear process for updating Master Index V2 and companion source-of-truth files.

If it exists, refine it only as needed. If it does not exist, create it.

The protocol must define:

1. **Source-of-Truth Hierarchy**
   - Master Index V2
   - Feature Map
   - Dependency Map
   - Protected Rules
   - Changelog
   - Status Board
   - Product/security docs
   - Handoffs

2. **When the Protocol Must Be Used**
   - New feature.
   - Feature priority change.
   - New sprint or pack.
   - Changed dependency.
   - Changed protected rule.
   - Completed pack needs retrofit.
   - User introduces external/current conversation source-of-truth files.

3. **Required Update Sequence**
   - Capture change.
   - Check protected rules.
   - Update changelog.
   - Update feature map.
   - Update dependency map.
   - Update master index affected sprint/pack rows.
   - Update status board if new packs are added.
   - Update affected product/security docs if needed.
   - Create/update prompt packs.
   - Run integrity review.
   - Commit.

4. **Codex Rules**
   - Codex must not implement feature-changing code until source-of-truth docs are updated.
   - Codex must stop if protected rules conflict with requested change.
   - Codex must not overwrite `STATUS_BOARD.md` with a seed file.
   - Codex must not renumber completed prompt packs unless explicitly directed.
   - Codex must create handoff notes for governance changes.

5. **Human Operator Rules**
   - Work from clean git tree.
   - Use branch for major index changes.
   - Review diff/stat.
   - Commit source-of-truth updates before implementation packs.
   - Push after major governance updates.

Update `STATUS_BOARD.md` for S00-020.

Create the S00-020 handoff.

## Acceptance Criteria

S00-020 is complete only if:

- `MASTER_INDEX_UPDATE_PROTOCOL.md` exists.
- It defines the source-of-truth hierarchy.
- It defines required update sequence.
- It includes Codex stop rules and protected-rule checks.
- It says not to overwrite `STATUS_BOARD.md`.
- It says not to implement feature-changing work before governance docs are updated.
- `STATUS_BOARD.md` has S00-020 marked implemented/self-reviewed.
- S00-020 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-020 changes before finalizing.

Check:

1. Did you preserve existing status-board progress?
2. Did you create/refine update protocol without adding unrelated product scope?
3. Does the protocol define clear update sequence?
4. Does it include protected-rule and no-implementation-before-governance rules?
5. Did you update status board and create handoff?
6. Did you avoid implementation files?

Fix material issues before completion.
