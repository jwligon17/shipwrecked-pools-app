# Handoff - S00-012 Create Parallel Work Rules

## Header

- Pack ID: `S00-012`
- Pack Title: `Create Parallel Work Rules`
- Sprint: `S00 - Codex Operating System`
- Date Completed: `2026-05-22`
- Implemented By: `Codex`
- Review Status: `Self-Review Complete`
- Final Status: `Complete`

## Purpose

- Define safe, practical rules for two operators using Codex in parallel.
- Reduce merge conflicts, scope drift, and high-risk workflow collisions as Shipwrecked executes prompt packs.

## Summary of Work Completed

- Created `docs/codex/PARALLEL_WORK_RULES.md` with an operator-focused model covering one-pack discipline, role ownership (Mainline Owner and Feature Runner), branch/worktree hygiene, never-parallel domains, safer parallel domains, limited parallel domains, conflict detection, coordination steps, and Shipwrecked-specific risk areas.
- Updated status board row for S00-012 to implemented.

## Files Created

- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/handoffs/S00-012-create-parallel-work-rules.md`

## Files Modified

- `docs/prompt-packs/STATUS_BOARD.md`

## Files Not Touched / Scope Confirmation

- Changes are limited to documentation/process files required by S00-012.
- No implementation code was changed.
- No app/mobile/admin/API/db/auth/billing/notification implementation files were touched.

## Business Rules Applied

- Preserved one-pack-at-a-time execution discipline.
- Preserved role boundary and sensitive-data constraints as non-negotiable.
- Included Shipwrecked-specific warnings for pool outlines, master jobs, exports, chemical guidance, context-aware chat, and before/after galleries.

## Permission and Visibility Checks

- Reinforced requirement to pause parallel work when permission/visibility ambiguity appears.
- Reinforced escalation for customer/internal data-boundary uncertainty.

## Security / Privacy / Audit Notes

- This is documentation-only; no runtime behavior changed.
- Included decision gates that require escalation when privacy/security ambiguity exists.

## Tests and Checks Run

- `git status --short`
- `git diff --name-only`
- Manual review against S00-012 required section checklist.
- Result: pass; expected files only.
- No code/build tests were required because no implementation code changed.

## Codex Self-Review Results

- Findings:
  - Required sections were included and written for non-expert operators.
  - Never-parallel, safe-parallel, and limited-parallel sections are present.
  - Shipwrecked-specific high-risk feature coordination warnings are present.
  - Status board and handoff are complete.
- Fixes made:
  - None required after initial draft.
- Remaining issues:
  - None identified.

## Known Risks / Caveats

- Process quality still depends on human adherence to role ownership and scope controls.

## Follow-Up Prompt Packs

- Unblocks: `S00-013` and future packs where two-operator coordination is needed.

## Recommended Commit

```bash
git add docs/codex/PARALLEL_WORK_RULES.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-012-create-parallel-work-rules.md
```

```bash
git commit -m "Complete S00-012 parallel work rules"
```

## Human Operator Checklist

- [ ] Run `git status`
- [ ] Run `git diff --stat`
- [ ] Confirm only expected files changed
- [ ] Commit
- [ ] Verify clean working tree

## Rollback Notes

- If uncommitted, restore scoped files with `git restore <path>`.
- If committed and correction is needed, prefer `git revert <commit_hash>`.
