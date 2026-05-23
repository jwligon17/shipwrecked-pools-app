# Prompt Pack: S00-025 — Create Affected Sprint Recalculation Rules

## Pack Metadata

- **Pack ID:** S00-025
- **Title:** Create Affected Sprint Recalculation Rules
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / recalculation rules
- **Can Run In Parallel:** No
- **Depends On:** S00-019 through S00-024
- **Blocks:** safe future feature amendments and roadmap changes

## Goal

Create durable rules for recalculating which sprints/prompt packs are affected when a feature, protected rule, dependency, or product requirement changes.


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
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/product/feature-amendments.md` if it exists

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-025-create-affected-sprint-recalculation-rules.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/FEATURE_MAP.md`

## Build Prompt For Codex

Execute S00-025 only.

Create `docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md`.

The document must define how to determine affected sprints and packs when a change occurs.

Include:

## 1. Change Types

- New feature
- Feature priority change
- Permission/role change
- Data visibility change
- New protected rule
- Dependency change
- New integration
- Commercial/export change
- Billing/payment change
- Database/domain change
- UI-only change
- Documentation/governance change

## 2. Recalculation Process

Step-by-step:

1. Identify changed feature/rule.
2. Locate feature in `FEATURE_MAP.md`.
3. Identify affected roles.
4. Identify affected data objects.
5. Identify protected rules touched.
6. Identify dependency map impacts.
7. Identify completed packs affected.
8. Identify future packs affected.
9. Decide whether a retrofit prompt pack is needed.
10. Update changelog, feature map, dependency map, master index, status board.
11. Run integrity review.

## 3. Sprint Impact Heuristics

Provide guidance:

- Role/auth changes affect S03, mobile/admin views, API guards, tests.
- Data visibility changes affect S02/S03, API, reports, admin, tests.
- Database/domain changes affect S02 and all dependent feature sprints.
- Billing/payment changes affect quote/repair/master jobs, billing sprint, tests, security.
- Commercial export changes affect customer types, reports, permissions, admin, notifications.
- Master job changes affect quote/repair, billing, reports, technician visits, profitability.
- Pool outline changes affect water bodies, service points, mobile rendering, admin studio, reports.
- Suggested chemical guidance changes affect water body profiles, chemistry, technician workflow, safety, tests.
- Chat changes affect mobile screens, admin inbox, technician workflow, permissions, notifications.
- Notification changes affect events, preferences, mobile, household members, logs, tests.
- UI-only changes may affect fewer sprints if no data/permissions change.

## 4. Retrofit Rules

Define when to create a retrofit pack:

- completed sprint docs conflict with new direction
- a completed pack omitted a protected rule
- a completed infrastructure package needs docs updated
- future implementation would be unsafe without reconciliation
- status board/master index mismatch exists

## 5. Do-Not-Recalculate Cases

Clarify that not every wording change requires pack changes:
- typo fixes
- formatting-only changes
- nonfunctional copy changes with no scope impact
- historical handoff notes unless they are misleading

## 6. Output Format

Include a template for affected sprint analysis:
- change summary
- affected features
- affected roles
- affected data objects
- protected rules touched
- affected completed packs
- affected future packs
- required docs to update
- required prompt packs to create/regenerate
- safe to proceed? yes/no

Update `STATUS_BOARD.md` for S00-025.

Create S00-025 handoff.

## Acceptance Criteria

S00-025 is complete only if:

- `AFFECTED_SPRINT_RECALCULATION_RULES.md` exists.
- It defines change types, recalculation process, sprint impact heuristics, retrofit rules, do-not-recalculate cases, and output template.
- It references feature map, dependency map, protected rules, changelog, master index, and status board.
- `STATUS_BOARD.md` has S00-025 implemented/self-reviewed.
- S00-025 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-025 changes before finalizing.

Check:
1. Did you create affected sprint recalculation rules?
2. Are rules specific to Shipwrecked features?
3. Do they explain when to create retrofit prompt packs?
4. Do they avoid over-triggering changes for tiny copy edits?
5. Did you update status board and handoff?
6. Did you avoid implementation files?

Fix material issues before completion.
