# Prompt Pack: S00-009 — Create Prompt Pack Status Board

## Metadata

- **Pack ID:** S00-009
- **Sprint:** Sprint 00 — Codex Operating System
- **Title:** Create Prompt Pack Status Board
- **Priority:** P0 — Beta Critical Path
- **Risk Level:** High
- **Parallelization:** No. Run after S00-008 is complete and committed.
- **Primary Output:** Documentation only

## Goal

Create or normalize the prompt pack status board system so you and your wife can track prompt pack execution without needing to ask ChatGPT after every pack.

The status board should show which prompt packs exist, their current status, risk level, dependencies, parallelization safety, review/test status, handoff status, and notes.

## Why This Matters

The Shipwrecked Pools app may eventually use hundreds of prompt packs. Without a clear status board, it will become difficult to know:

- what has been added to the repo
- what has been executed by Codex
- what has been reviewed
- what has been committed
- what is blocked
- what can safely run in parallel
- what is risky
- what should be run next

This pack turns `STATUS_BOARD.md` into a practical operating tool.

## Dependencies

This pack assumes these are complete:

- S00-001 — Product Mission Doc
- S00-002 — Paul Story Source Doc
- S00-003 — V1 Scope Doc
- S00-004 — Root AGENTS.md
- S00-005 — Folder-Level AGENTS.md Files
- S00-006 — Permission Matrix Doc
- S00-007 — Data Visibility Rules Doc
- S00-008 — Prompt Pack Format Template

## Expected Files To Create

Create:

```txt
docs/prompt-packs/STATUS_BOARD_GUIDE.md
docs/handoffs/S00-009-create-prompt-pack-status-board.md
```

## Expected Files To Modify

Modify:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

## Files Not To Touch

Do not modify:

```txt
apps/mobile/
apps/admin/
apps/api/
packages/
package.json
pnpm-workspace.yaml
tsconfig.base.json
AGENTS.md
apps/*/AGENTS.md
packages/*/AGENTS.md
docs/*/AGENTS.md
```

This is a documentation-only pack. Do not implement code.

## Required Behavior For `docs/prompt-packs/STATUS_BOARD.md`

Normalize or improve the existing status board without losing history.

### Preserve Existing Progress

Important:

- Do not delete existing rows for S00-001 through S00-008.
- Preserve any existing completion status, review status, tests status, handoff status, notes, or dates if present.
- If the existing board has different wording, normalize it carefully without losing meaning.

### Required Columns

The status board should include columns similar to:

```txt
Pack ID
Sprint
Title
Priority
Risk
Status
Assigned To
Branch/Worktree
Depends On
Parallelization
Review Status
Tests/Checks Status
Handoff Created
Last Updated
Notes
```

Use Markdown table format.

### Required Status Values

Document and use status values such as:

- `Not Started`
- `Prompt Pack Added`
- `In Progress`
- `Implemented`
- `Needs Codex Review`
- `Review Findings`
- `Needs Fix`
- `Passed Review`
- `Committed`
- `Blocked`
- `Skipped`

It is okay if existing rows use a slightly different completed status, but the guide should define the preferred values going forward.

### Required Review Status Values

Define values such as:

- `Not Required Yet`
- `Not Started`
- `Self-Review Complete`
- `Findings Found`
- `Findings Fixed`
- `Passed`

### Required Tests/Checks Status Values

Define values such as:

- `Docs Only — No Code Tests Required`
- `Not Started`
- `Passed`
- `Failed`
- `Failed — Needs Fix`
- `Not Applicable`

### Required Parallelization Values

Define values such as:

- `No`
- `Limited`
- `Yes`
- `Only After Backend Contract Exists`
- `Only After UI Contract Exists`
- `Do Not Parallelize With Database Migrations`
- `Do Not Parallelize With Auth/Permissions`
- `Do Not Parallelize With Billing/Payments`

### Required Risk Values

Define values:

- `Low`
- `Medium`
- `High`
- `Critical`

### Required Sprint 00 Rows

Ensure the status board has rows for:

- S00-001 through S00-018

Rows S00-001 through S00-009 should preserve current progress. Rows S00-010 through S00-018 can be marked `Not Started` or equivalent if they have not been created/executed yet.

### Required Notes

For S00-006 through S00-009, add notes that these are foundational governance/workflow docs.

For future high-risk packs, notes should include warnings like:

- Do not run in parallel with database migrations.
- Do not run before permission matrix exists.
- Requires Codex self-review.
- Requires handoff note.

## Required Content For `docs/prompt-packs/STATUS_BOARD_GUIDE.md`

Create a guide explaining:

1. Purpose of the status board
2. How you and your wife should use it
3. Meaning of every column
4. Status value definitions
5. Review status definitions
6. Tests/checks status definitions
7. Risk definitions
8. Parallelization definitions
9. How to update the board after adding prompt packs
10. How to update the board after Codex executes a pack
11. How to update the board after Codex self-review
12. How to update the board after committing a pack
13. When to pause and ask for help
14. Examples of good status board rows
15. Red flags to watch for

## Build Prompt For Codex

```txt
Execute S00-009 only.

Normalize docs/prompt-packs/STATUS_BOARD.md into a practical status tracking board for the Shipwrecked Pools prompt pack system.

Preserve existing history and do not delete progress already recorded for S00-001 through S00-008. Add rows for S00-001 through S00-018 if missing, preserving known statuses and marking not-yet-run packs as Not Started or equivalent.

Create docs/prompt-packs/STATUS_BOARD_GUIDE.md explaining how the status board should be used by the user and their wife while running Codex prompt packs.

This is documentation-only. Do not modify app code, backend code, database files, package files, auth implementation, billing implementation, or unrelated files.

After updating the status board and creating the guide, update the S00-009 row and create docs/handoffs/S00-009-create-prompt-pack-status-board.md.
```

## Bite-Sized Implementation Steps

1. Read current `docs/prompt-packs/STATUS_BOARD.md`.
2. Read `docs/prompt-packs/MASTER_INDEX.md` and relevant prompt pack docs.
3. Preserve existing completed progress.
4. Normalize the status board columns.
5. Ensure S00-001 through S00-018 are represented.
6. Add or preserve statuses for S00-001 through S00-009.
7. Mark future Sprint 00 packs as not started where appropriate.
8. Create `docs/prompt-packs/STATUS_BOARD_GUIDE.md`.
9. Update status board for S00-009.
10. Create the S00-009 handoff note.
11. Self-review the diff.

## Acceptance Criteria

S00-009 is complete only if:

- `docs/prompt-packs/STATUS_BOARD.md` exists and is normalized.
- Existing progress for prior packs is preserved.
- S00-001 through S00-018 are represented.
- The board includes clear columns for status, risk, dependencies, parallelization, review, tests/checks, and handoff.
- `docs/prompt-packs/STATUS_BOARD_GUIDE.md` exists.
- The guide explains how you and your wife should use the board.
- The guide defines status values, review values, test/check values, risk values, and parallelization values.
- The guide explains when to pause and ask for help.
- `docs/handoffs/S00-009-create-prompt-pack-status-board.md` exists.
- No app/API/database/package/auth/billing implementation files were changed.

## Codex Self-Review Prompt

```txt
Self-review S00-009.

Check:
1. Did you execute only S00-009?
2. Did you preserve existing STATUS_BOARD progress?
3. Did you avoid deleting or downgrading completed prior pack information?
4. Did you ensure S00-001 through S00-018 are represented?
5. Did you normalize the status board with useful columns?
6. Did you create docs/prompt-packs/STATUS_BOARD_GUIDE.md?
7. Does the guide explain how the user and wife should use the board?
8. Does the guide define status/review/test/risk/parallelization values?
9. Did you update the S00-009 row/status appropriately?
10. Did you create the S00-009 handoff note?
11. Did you avoid app/API/database/package/auth/billing implementation changes?

Fix any material issues before reporting completion.
```

## Fix Prompt

```txt
Fix any S00-009 self-review findings. Preserve existing status board history. Keep changes scoped to STATUS_BOARD.md, STATUS_BOARD_GUIDE.md, the S00-009 handoff note, and any required status board update. Do not touch app/API/database/package/auth/billing implementation files.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-009-create-prompt-pack-status-board.md
```

The handoff note must include:

- Pack ID and title
- Files created
- Files modified
- Summary of status board changes
- Whether prior progress was preserved
- Sprint 00 rows added/normalized
- Checks run
- Self-review findings
- Follow-up packs that should use the board

## Expected Final Summary From Codex

Codex should end with:

- Pack ID completed
- files created
- files modified
- checks run
- self-review findings
- fixes made
- whether the pack is complete
- exact git add / git commit commands

## Suggested Commit Message

```bash
git commit -m "Complete S00-009 prompt pack status board"
```
