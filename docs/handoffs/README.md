# Handoffs

## Purpose
Handoff notes are the execution record for each completed prompt pack. They preserve what changed, what checks were run, what limitations existed, and what should happen next.

## When Codex Creates A Handoff
Codex should create one handoff note for every completed pack.

Minimum handoff content:
- Pack ID and title
- files created/modified
- checks run and outcomes
- self-review findings
- fixes made
- limitations/caveats
- next recommended pack

## Naming Convention
- Filename format: `<PACK_ID>-<kebab-title>.md`
- Example: `S01-013-add-ci-checks.md`
- Keep Pack ID exact and consistent with status board rows.

## How To Use Handoffs
- Use handoffs to quickly understand current repo state before running the next pack.
- Use handoffs with `docs/prompt-packs/STATUS_BOARD.md` to verify implementation continuity.
- Use handoffs during rollback/recovery to identify scope and intended file changes.

## Handoff + Status Board Relationship
- A pack should not be marked `Handoff Created: Yes` unless the corresponding handoff file exists.
- Handoff filenames should align with status board Pack ID/title.
- If a pack is rerun or superseded, add a corrective handoff instead of deleting historical handoffs.

## Batch Execution Notes
- Batch commits may include multiple handoffs.
- Each pack in the batch still requires its own handoff note.
