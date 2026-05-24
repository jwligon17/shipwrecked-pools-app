# Prompt Pack: S00-026 — Create Master Index Update Prompt Template

## Pack Metadata

- **Pack ID:** S00-026
- **Title:** Create Master Index Update Prompt Template
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / reusable prompt template
- **Can Run In Parallel:** No
- **Depends On:** S00-019 through S00-025
- **Blocks:** safe future Master Index updates

## Goal

Create a reusable prompt template for future Master Index/source-of-truth updates so the user can paste one prompt into Codex whenever a new feature idea, major change, or roadmap update occurs.

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

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md` if it exists
- `docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md` if it exists
- `AGENTS.md`

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROMPT_TEMPLATE.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-026-create-master-index-update-prompt-template.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `AGENTS.md`

## Build Prompt For Codex

Execute S00-026 only.

Create `docs/prompt-packs/MASTER_INDEX_UPDATE_PROMPT_TEMPLATE.md`.

The template should be a reusable prompt the user can paste into Codex when they need to update the Master Index/source-of-truth docs.

The prompt template must include:

## 1. Purpose

Explain that it is used for:

- new feature ideas
- major priority changes
- dependency changes
- protected-rule changes
- new integrations
- roadmap/sprint changes
- retrofits to completed work

## 2. Inputs User Should Provide

Ask user to provide:

- raw change idea
- reason/business goal
- whether it affects beta/V1/post-V1/SaaS
- users/roles affected
- data affected
- workflow affected
- billing/payment affected
- privacy/security concerns
- known contradictions
- urgency
- whether any prompt packs already ran

## 3. Required Codex Reads

The template must tell Codex to read:

- Master Index
- changelog
- update protocol
- feature map
- dependency map
- protected rules
- status board
- affected sprint recalculation rules
- integrity checklist
- relevant product/security docs

## 4. Required Codex Behavior

The template must instruct Codex to:

- not implement code
- first summarize the change
- identify affected features/sprints/packs
- check protected rules
- update changelog
- update feature map
- update dependency map
- update master index
- update status board if new packs are needed
- update product/security docs if needed
- create amendment/reconciliation prompt packs if needed
- run or recommend integrity review
- create a handoff
- stop before implementation

## 5. Stop Conditions

Template must make Codex stop if:

- protected rule conflict exists
- user has not clarified a high-risk ambiguity
- requested change affects billing/payment/privacy/security but lacks enough info
- status board is dirty/mismatched
- working tree is not clean
- change would overwrite completed history
- implementation requested before governance update

## 6. Output Format

Template should require:

- change summary
- affected docs
- affected features
- affected sprints
- affected prompt packs
- protected rule findings
- dependency findings
- recommended new/retrofit prompt packs
- files expected to change
- whether implementation can proceed
- git commands

## 7. Quick Version

Include a shorter version users can paste for small changes.

Update `STATUS_BOARD.md` for S00-026.

Create S00-026 handoff.

## Acceptance Criteria

S00-026 is complete only if:

- `MASTER_INDEX_UPDATE_PROMPT_TEMPLATE.md` exists.
- It contains a full reusable prompt template.
- It contains a quick-version prompt template.
- It enforces no implementation before governance update.
- It references changelog, feature map, dependency map, protected rules, status board, recalculation rules, and integrity checklist.
- It includes stop conditions.
- `STATUS_BOARD.md` has S00-026 implemented/self-reviewed.
- S00-026 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-026 changes before finalizing.

Check:

1. Did you create the Master Index update prompt template?
2. Does it include full and quick versions?
3. Does it enforce protected rules and no implementation before source-of-truth updates?
4. Does it reference all companion V2 governance docs?
5. Did you update status board and handoff?
6. Did you avoid implementation files?

Fix material issues before completion.
