# Prompt Pack: S01-015 — Add Handoff Folder and Handoff Index

## Pack Metadata

- **Pack ID:** S01-015
- **Title:** Add Handoff Folder and Handoff Index
- **Sprint:** S01 — Repo, Infrastructure, Tooling
- **Priority:** P0
- **Risk Level:** Medium
- **Expected Type:** Documentation / process organization
- **Can Run In Parallel:** Limited
- **Depends On:** S00 handoff system and S01-001 through S01-014
- **Blocks:** long-term handoff navigation and Codex continuity

## Goal

Organize the handoff system so handoff notes remain navigable as the repo grows.

This pack should create an index/README for handoffs, define naming conventions, and optionally categorize Sprint 00 and Sprint 01 handoffs without rewriting prior handoff files.

## Why This Matters

The project will eventually have hundreds of prompt packs. Handoff notes are the memory system for the user, wife, and Codex. Without an index, the handoff folder will become difficult to navigate.

## Files Codex Should Read First

Before editing, read:

- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`
- existing `docs/handoffs/` files
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/codex/ROLLBACK_RULES.md`
- `docs/prompt-packs/STATUS_BOARD_GUIDE.md` if it exists

## Files Codex Should Create or Modify

Expected files:

- `docs/handoffs/README.md`
- `docs/handoffs/HANDOFF_INDEX.md`
- `docs/handoffs/S01-015-add-handoff-folder.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`

## Files Codex Must Not Touch

Do not modify implementation files.

Do not rewrite completed handoff notes unless fixing a broken filename/path reference is essential.

Do not delete or move prior handoff notes without explicit reason.

## Build Prompt For Codex

Execute S01-015 only.

Create a handoff navigation system.

### Requirements

Create `docs/handoffs/README.md` explaining:

- what handoff notes are
- when Codex creates them
- naming conventions
- how user/wife should use them
- how handoffs relate to status board
- how handoffs help rollback/recovery

Create `docs/handoffs/HANDOFF_INDEX.md` with:

- Sprint 00 handoff list
- Sprint 01 handoff list so far
- Pack ID
- title
- file path
- short purpose
- status if available from status board

Do not attempt to deeply summarize every file if that would be inaccurate; use concise purpose.

### Handoff Rules

Document:

- every completed prompt pack should have one handoff
- handoff filename should match Pack ID/title
- batch commits may include multiple handoffs
- handoff should include tests/checks and caveats
- do not mark handoff created if file does not exist
- if pack is rerun or superseded, create a new corrective handoff or add clear notes rather than deleting history

### Optional Updates

If useful, update:

- `HANDOFF_NOTE_TEMPLATE.md`
- universal runner
- prompt pack template

Only add short references to the handoff index if needed.

Update `STATUS_BOARD.md` for S01-015.

Create S01-015 handoff.

## Acceptance Criteria

S01-015 is complete only if:

- `docs/handoffs/README.md` exists.
- `docs/handoffs/HANDOFF_INDEX.md` exists.
- Existing handoffs are not deleted or broadly rewritten.
- Index includes Sprint 00 and Sprint 01 handoffs so far.
- Handoff naming/usage rules are documented.
- `STATUS_BOARD.md` has S01-015 row.
- S01-015 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S01-015 before finalizing.

Check:

1. Did you create handoff README and index?
2. Does the index accurately reflect existing handoffs?
3. Did you avoid deleting/moving/reworking completed handoff notes?
4. Did you update status board and create S01-015 handoff?
5. Are optional template/runner changes minimal and useful?
6. Did you avoid implementation code?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S01-015 handoff index"
```
