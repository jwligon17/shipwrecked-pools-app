# Handoff — S00-004 Create Root AGENTS.md

## Pack

- Pack ID: S00-004
- Title: Create Root AGENTS.md
- Sprint: S00
- Date: 2026-05-02

## Files Created

- `docs/handoffs/S00-004-create-root-agents-md.md`

## Files Modified

- `AGENTS.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Summary

Replaced the temporary root `AGENTS.md` with a durable, Shipwrecked-specific instruction file for Codex. The new document includes required sections for mission, source docs, intended architecture guidance, core priorities, V1 non-negotiables, role/data visibility boundaries, privacy/audit rules, prompt-pack workflow rules, planning/scope controls, verification expectations, handoff requirements, review guidelines, escalation/stop conditions, and explicit "not to build yet" guardrails.

The guidance explicitly enforces:

- customer-first product decisions,
- true mobile V1,
- required custom pool outline,
- route privacy model (stops-before-you + ETA, not exact GPS),
- human-answered V1 questions,
- strict technician restrictions from billing/profitability/financial data,
- customer-safe vs internal note separation,
- audit logging for sensitive actions,
- one-pack-at-a-time execution discipline.

Updated `STATUS_BOARD.md` with a new S00-004 implemented row and docs-only self-reviewed status.

## Checks Run

- `git status --short`
- `git diff --stat`

## Self-Review Findings

- Executed only S00-004.
- No folder-level `AGENTS.md` files were changed.
- No app/API/database/package/auth/billing implementation files were changed.
- Root `AGENTS.md` is Shipwrecked-specific and includes required product/workflow constraints.
- Status board and handoff requirements are satisfied.

## Fixes Made

- None required after self-review; no material issues found.

## Known Limitations

- This pack defines root-level agent rules only. Folder-level instruction files are intentionally deferred to S00-005.

## Recommended Next Pack

- S00-005 — Create Folder-Level AGENTS.md Files
