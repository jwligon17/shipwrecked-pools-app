# Prompt Pack Status Board Guide

## 1. Purpose
`docs/prompt-packs/STATUS_BOARD.md` is the operating board for running Shipwrecked prompt packs. It tracks progress, risk, dependencies, review status, testing/check status, and handoff completion so execution stays controlled and auditable.

## 2. How To Use It (You + Your Wife)
1. Before starting a pack, open `STATUS_BOARD.md` and find the next unblocked row.
2. Confirm dependencies are already implemented.
3. Confirm parallelization safety before running anything in parallel.
4. Mark status changes as work progresses.
5. After Codex completes a pack, update review/tests/handoff fields.
6. After commit, update the status to `Committed`.

## 3. Column Meanings
- `Pack ID`: exact prompt pack ID.
- `Sprint`: sprint grouping (for example `S00`).
- `Title`: pack title.
- `Priority`: priority tier (`P0`, `P1`, `P2`).
- `Risk`: risk level (`Low`, `Medium`, `High`, `Critical`).
- `Status`: current execution state.
- `Assigned To`: who is executing (for example `Codex`, `Unassigned`).
- `Branch/Worktree`: execution location.
- `Depends On`: prerequisite packs.
- `Parallelization`: whether pack can run in parallel and with what constraints.
- `Review Status`: quality/review stage.
- `Tests/Checks Status`: docs/code checks stage.
- `Handoff Created`: whether required handoff note exists.
- `Last Updated`: date of last row update (`YYYY-MM-DD`).
- `Notes`: context, warnings, or blockers.

## 4. Status Value Definitions
Preferred values:
- `Not Started`: pack exists but execution has not begun.
- `Prompt Pack Added`: pack file added but not executed.
- `In Progress`: active execution.
- `Implemented`: scope implemented and documented.
- `Needs Codex Review`: waiting for review pass.
- `Review Findings`: review found issues.
- `Needs Fix`: remediation required before completion.
- `Passed Review`: review complete with no blocking findings.
- `Committed`: changes committed by human.
- `Blocked`: cannot proceed due to dependency/risk/conflict.
- `Skipped`: intentionally not executed.

## 5. Review Status Definitions
Preferred values:
- `Not Required Yet`
- `Not Started`
- `Self-Review Complete`
- `Findings Found`
- `Findings Fixed`
- `Passed`

## 6. Tests/Checks Status Definitions
Preferred values:
- `Docs Only — No Code Tests Required`
- `Not Started`
- `Passed`
- `Failed`
- `Failed — Needs Fix`
- `Not Applicable`

## 7. Risk Definitions
- `Low`: small scope; low regression/compliance exposure.
- `Medium`: moderate cross-doc or workflow impact.
- `High`: broad impact or sequencing sensitivity.
- `Critical`: core security/privacy/data/payment/auth/schema risk.

## 8. Parallelization Definitions
Use one of:
- `No`
- `Limited`
- `Yes`
- `Only After Backend Contract Exists`
- `Only After UI Contract Exists`
- `Do Not Parallelize With Database Migrations`
- `Do Not Parallelize With Auth/Permissions`
- `Do Not Parallelize With Billing/Payments`

## 9. After Adding New Prompt Packs
1. Add new rows with dependencies, risk, and parallelization guidance.
2. Set `Status` to `Not Started` or `Prompt Pack Added`.
3. Set `Assigned To` to `Unassigned` until work begins.
4. Add warning notes for high-risk sequencing.

## 10. After Codex Executes A Pack
1. Update `Status` to `Implemented` (or `Needs Fix` if incomplete).
2. Set `Assigned To`, `Branch/Worktree`, and `Last Updated`.
3. Update `Tests/Checks Status` based on actual checks run.
4. Set `Handoff Created` to `Yes` only when handoff file exists.

## 11. After Codex Self-Review
1. Set `Review Status` to `Self-Review Complete`, `Findings Found`, or `Findings Fixed`.
2. If issues remain, set `Status` to `Needs Fix`.
3. Add concise findings/fix context in `Notes`.

## 12. After Human Commit
1. Confirm files are committed.
2. Update `Status` to `Committed`.
3. Keep `Review Status` and `Tests/Checks Status` as record of completion quality.

## 13. When To Pause And Ask For Help
Pause before continuing if:
- Pack ID conflicts across prompt, pack file, and status board.
- Dependencies are missing or unclear.
- Requested edits require prohibited files.
- A critical-risk pack is being run in parallel unsafely.
- Self-review flags unresolved material issues.

## 14. Examples Of Good Rows
Good row characteristics:
- Exact Pack ID/title match.
- Dependency chain is explicit.
- Risk + parallelization are realistic.
- `Tests/Checks Status` matches actual checks.
- `Handoff Created` reflects actual file existence.
- Notes contain concrete warnings (not generic text).

## 15. Red Flags
- Missing dependencies for `Critical` packs.
- `Implemented` status with `Handoff Created = No`.
- `Passed` review but `Tests/Checks Status = Failed`.
- Rows updated without date changes.
- Parallelization marked `Yes` for migration/auth/billing critical path packs.
- Pack IDs in board not matching actual prompt-pack filenames.
