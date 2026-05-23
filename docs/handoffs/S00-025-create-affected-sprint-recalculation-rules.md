# Handoff — S00-025 Create Affected Sprint Recalculation Rules

## Pack ID and Title
- Pack ID: S00-025
- Title: Create Affected Sprint Recalculation Rules

## Summary
Created `AFFECTED_SPRINT_RECALCULATION_RULES.md` defining change classes, recalculation workflow, Shipwrecked-specific sprint impact heuristics, retrofit triggers, do-not-recalculate exceptions, and standardized output template for governance updates.

## Files Changed
- Created: `docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md`
- Modified: `docs/prompt-packs/STATUS_BOARD.md`
- Created: `docs/handoffs/S00-025-create-affected-sprint-recalculation-rules.md`

## Checks Run
- `git status --short` (scope + file audit)
- Manual S00-025 self-review checklist
- Docs-only validation (no implementation files changed)

## Self-Review Findings
- No material issues found.
- Rules are specific to Shipwrecked domains and define when retrofit packs are required while avoiding over-triggering on minor edits.

## Fixes Made
- N/A

## Limitations
- Documentation/governance-only pack; no code/build tests required.

## Next Recommended Pack
- S00-026 — Create Master Index Update Prompt Template

## Tests/Build
- Docs-only pack; no code/build tests were required.
