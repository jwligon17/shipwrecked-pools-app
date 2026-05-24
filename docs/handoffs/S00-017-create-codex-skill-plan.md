# Handoff - S00-017 Create Codex Skill Plan

## Header

- Pack ID: `S00-017`
- Pack Title: `Create Codex Skill Plan`
- Sprint: `S00 - Codex Operating System`
- Date Completed: `2026-05-22`
- Implemented By: `Codex`
- Review Status: `Self-Review Complete`
- Final Status: `Complete`

## Purpose

- Define a reusable skill-planning framework to reduce repeated Codex prompt text while preserving strict prompt-pack governance and Shipwrecked safety rules.
- Create a durable map for future skill implementation sequencing.

## Summary of Work Completed

- Created `docs/codex/CODEX_SKILL_PLAN.md` with guidance on when to use skills vs prompt packs.
- Documented 29 planned skills across foundation/process, backend/API, database, mobile/admin, Shipwrecked feature domains, and QA/release.
- For each planned skill, included purpose, usage, expected inputs, touch boundaries, required checks/tests, Shipwrecked rules, and expected output/handoff shape.
- Updated `.agents/skills/README.md` to reference the skill plan and clarify that actual skill implementations come later.

## Files Created

| File                                               | Purpose                                                                                            | Product Relevance |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------- |
| `docs/codex/CODEX_SKILL_PLAN.md`                   | Defines planned reusable Codex skills and governance expectations for consistent future execution. | `cross-cutting`   |
| `docs/handoffs/S00-017-create-codex-skill-plan.md` | Records S00-017 completion and verification results.                                               | `cross-cutting`   |

## Files Modified

| File                                | Purpose of Change                                                | Expected By Pack |
| ----------------------------------- | ---------------------------------------------------------------- | ---------------- |
| `.agents/skills/README.md`          | Added reference to skill plan and future implementation posture. | `Yes`            |
| `docs/prompt-packs/STATUS_BOARD.md` | Marked S00-017 implemented with review/check/handoff status.     | `Yes`            |

## Files Not Touched / Scope Confirmation

- Only expected documentation/skill-plan files were changed.
- No implementation code, package files, migrations, auth/billing/notification implementation files, or unrelated docs were changed.

## Business Rules Applied

- Reinforced one-pack-at-a-time prompt-pack governance.
- Reinforced role and data-visibility boundaries as mandatory skill constraints.
- Included explicit planned skills for master jobs, commercial exports, before/after photos, route privacy, context-aware chat, and chemical guidance.
- Kept this pack planning-only (no live skill execution artifacts added).

## Permission and Visibility Checks

- Roles affected by planning scope: `customer`, `household_member`, `technician`, `admin`, `owner_admin`, `lead`, `system_service`.
- Role-boundary checks performed:
  - Planned skill definitions include required permission and denial checks.
  - Technician financial-deny and customer/internal data boundaries are explicitly enforced in skill rules.
- Visibility checks performed:
  - Planned skills require customer-safe output filtering and internal-note protection.

## Security / Privacy / Audit Notes

- Sensitive areas covered in skill planning: `billing`, `exports`, `chat context`, `gate/access data`, `audit events`, `chemical guidance visibility`.
- Audit implications considered:
  - Planned audit workflow skill and release/review skills include auditable-action requirements.
- No sensitive implementation data was introduced.

## Tests and Checks Run

- Commands/checks run:
  - `git status --short`
  - `git diff --stat`
  - `git diff --name-only`
  - Manual check against S00-017 required skill coverage and section requirements.
- Results:
  - Scope and content checks passed.
- Docs-only note:
  - No code/build tests were required because no implementation code changed.

## Codex Self-Review Results

- Findings:
  - No material issues found.
- Fixes made:
  - N/A.
- Remaining issues:
  - None.

## Known Risks / Caveats

- This plan is intentionally non-executable until future packs implement concrete skill folders/files.
- Future skill implementations must map planned touch rules to actual repo paths as codebase expands.

## Follow-Up Prompt Packs

- Next listed pack in sequence is `S00-018` (out of this batch scope).
- Sprint 01/S02 implementation packs can use this plan as skill implementation backlog.

## Recommended Commit

- Stage only expected files:

```bash
git add docs/codex/CODEX_SKILL_PLAN.md .agents/skills/README.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-017-create-codex-skill-plan.md
```

- Suggested commit message:

```bash
git commit -m "Complete S00-017 Codex skill plan"
```

## Human Operator Checklist

- [ ] Run `git status`
- [ ] Run `git diff --stat`
- [ ] Confirm changed files match expected scope
- [ ] Confirm handoff includes checks and self-review findings
- [ ] Commit changes
- [ ] Verify clean working tree
- [ ] Proceed to next pack only after current pack is complete

## Rollback Notes

- If not committed:
  - Use `git diff --name-only` and `git restore <path>` for out-of-scope files.
  - Use `git restore .` and `git clean -fd` only with care when discarding all uncommitted work.
- If committed:
  - Prefer commit-level rollback with `git revert <commit_hash>`.
- Keep rollback scoped; avoid destructive history rewriting on shared branches.
