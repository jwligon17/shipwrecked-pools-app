# Handoff - S00-013 Create Rollback Rules

## Header

- Pack ID: `S00-013`
- Pack Title: `Create Rollback Rules`
- Sprint: `S00 - Codex Operating System`
- Date Completed: `2026-05-22`
- Implemented By: `Codex`
- Review Status: `Self-Review Complete`
- Final Status: `Complete`

## Purpose

- Provide a practical rollback/recovery guide for problematic prompt-pack runs.
- Make failures recoverable without panic, destructive repo actions, or unsafe mixed-pack commits.

## Summary of Work Completed

- Created `docs/codex/ROLLBACK_RULES.md` with pack recovery rules covering uncommitted cleanup, unrelated file restoration, wrong pack-ID correction, mixed-pack runs, failing tests, bad commits, messy mainline recovery, and escalation gates.
- Included high-risk caution sections for migrations, billing/auth/permissions, commercial exports/privacy, chemical guidance, and context-aware chat.
- Added a reusable recovery prompt template for scoped recovery-only Codex runs.
- Updated status board row for S00-013 to implemented.

## Files Created

- `docs/codex/ROLLBACK_RULES.md`
- `docs/handoffs/S00-013-create-rollback-rules.md`

## Files Modified

- `docs/prompt-packs/STATUS_BOARD.md`

## Files Not Touched / Scope Confirmation

- Only docs/process files were changed.
- No implementation code was modified.
- No app/mobile/admin/API/db/auth/billing/notification files were touched.

## Business Rules Applied

- Preserved Shipwrecked role-boundary and visibility-protection priorities in rollback gates.
- Explicitly blocked commits when customer/internal boundaries are violated.
- Preserved admin-review requirement for commercial exports.
- Preserved internal-only chemical recommendation visibility rule.

## Permission and Visibility Checks

- Recovery guidance includes explicit stop conditions for permission and data-visibility ambiguity.
- Requires status-board and handoff correction before proceeding after wrong-pack updates.

## Security / Privacy / Audit Notes

- Documentation-only pack; no runtime behavior changed.
- Recovery rules prioritize safe, auditable correction patterns (`git revert`, scoped restore) over destructive history changes.

## Tests and Checks Run

- `git status --short`
- `git diff --name-only`
- Manual review against S00-013 required section checklist.
- Result: pass; expected docs-only scope maintained.
- No code/build tests were required because no implementation code changed.

## Codex Self-Review Results

- Findings:
  - Rollback doc includes all required sections from S00-013.
  - Includes required command examples and warnings.
  - Includes status recovery labels and reusable recovery prompt template.
  - Status board and handoff updates completed.
- Fixes made:
  - None required after initial draft.
- Remaining issues:
  - None identified.

## Known Risks / Caveats

- Recovery quality depends on operator discipline to stop immediately when scope or security ambiguity appears.

## Follow-Up Prompt Packs

- Unblocks safer execution for downstream packs, beginning with `S00-014` (not executed in this run).

## Recommended Commit

```bash
git add docs/codex/ROLLBACK_RULES.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-013-create-rollback-rules.md
```

```bash
git commit -m "Complete S00-013 rollback rules"
```

## Human Operator Checklist

- [ ] Run `git status`
- [ ] Run `git diff --stat`
- [ ] Confirm files match expected scope
- [ ] Commit
- [ ] Verify clean tree

## Rollback Notes

- For uncommitted changes, use scoped `git restore <path>`.
- For committed changes, prefer `git revert <commit_hash>`.
