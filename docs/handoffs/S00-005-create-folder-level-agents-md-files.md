# Handoff — S00-005 Create Folder-Level AGENTS.md Files

## Pack

- Pack ID: S00-005
- Title: Create Folder-Level AGENTS.md Files
- Sprint: S00
- Date: 2026-05-02

## Files Created

- `apps/mobile/AGENTS.md`
- `apps/admin/AGENTS.md`
- `apps/api/AGENTS.md`
- `packages/db/AGENTS.md`
- `packages/shared-types/AGENTS.md`
- `packages/api-client/AGENTS.md`
- `packages/ui/AGENTS.md`
- `packages/config/AGENTS.md`
- `packages/auth/AGENTS.md`
- `packages/notifications/AGENTS.md`
- `packages/pool-outline/AGENTS.md`
- `packages/test-utils/AGENTS.md`
- `docs/product/AGENTS.md`
- `docs/architecture/AGENTS.md`
- `docs/api/AGENTS.md`
- `docs/database/AGENTS.md`
- `docs/security/AGENTS.md`
- `docs/billing/AGENTS.md`
- `docs/qa/AGENTS.md`
- `docs/prompt-packs/AGENTS.md`
- `docs/handoffs/S00-005-create-folder-level-agents-md-files.md`

## Files Modified

- `docs/prompt-packs/STATUS_BOARD.md`

## Summary Of Folder-Level Strategy

Added scoped AGENTS instructions for each major app/package/docs domain so local constraints are enforced where work occurs, while inheriting root AGENTS global rules. The local files are concise and Shipwrecked-specific, emphasizing role boundaries, customer-safe visibility, V1 non-negotiables, high-risk data controls, and prompt-pack workflow discipline.

## Folders Intentionally Not Given AGENTS.md Files

None beyond the explicit pack list. This pack created AGENTS.md files only for the required target folders.

## Checks Run

- `git status --short`
- `git diff --stat`

## Self-Review Findings

- Executed only S00-005.
- Root `AGENTS.md` was not modified.
- No app/API/database/package/auth/billing implementation files were modified.
- All listed folder-level AGENTS.md files exist.
- Local instructions are concise and aligned with root AGENTS.md.
- Required local rules are present for mobile, admin, API, DB, notifications, pool-outline, and prompt-packs.
- STATUS_BOARD and handoff updates are complete.

## Fixes Made

- None required after self-review; no material issues found.

## Known Limitations

- Files define instruction guardrails only; they do not implement runtime enforcement by themselves.

## Recommended Next Pack

- S00-006 — Create Permission Matrix Doc
