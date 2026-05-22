# Handoff - {{PACK_ID}} {{PACK_TITLE}}

## Header
- Pack ID: `{{PACK_ID}}`
- Pack Title: `{{PACK_TITLE}}`
- Sprint: `{{SPRINT_ID}} - {{SPRINT_TITLE}}`
- Date Completed: `{{YYYY-MM-DD}}`
- Implemented By: `{{Codex|Operator Name}}`
- Review Status: `{{Self-Review Complete|Needs Fix|Blocked}}`
- Final Status: `{{Complete|Needs Fix|Blocked}}`

## Purpose
- What this pack was expected to accomplish.
- Why this outcome matters for Shipwrecked customer confidence, clarity, consistency, privacy, and Skimmer-replacement readiness.

## Summary of Work Completed
- Plain-English summary of what was done.
- Include Shipwrecked-specific context where relevant.
- Avoid generic phrasing such as "updated docs" without details.

## Files Created
| File | Purpose | Product Relevance |
|---|---|---|
| `{{path/to/file}}` | {{why created}} | `{{customer|admin|technician|backend|cross-cutting}}` |

## Files Modified
| File | Purpose of Change | Expected By Pack |
|---|---|---|
| `{{path/to/file}}` | {{what changed and why}} | `{{Yes|No - explain}}` |

## Files Not Touched / Scope Confirmation
- Confirm only expected files were changed.
- Confirm no unrelated files were changed.
- For docs-only packs: explicitly confirm no implementation code changed.
- For implementation packs: explicitly confirm unrelated systems were not touched.

## Business Rules Applied
- List Shipwrecked rules considered or enforced by this pack.
- Example checks:
  - Customers see customer-friendly notes only.
  - Technicians cannot see billing/profitability data.
  - Route progress is stops-before-you and ETA, not exact live GPS.
  - Commercial exports require admin review before outbound email.
  - Master jobs remain internal grouping objects.
  - Internal chemical recommendations are never customer-visible.

## Permission and Visibility Checks
- Roles affected: `{{customer|household|technician|admin|owner|commercial contact|export recipient}}`
- Role-boundary checks performed:
  - {{boundary check 1}}
  - {{boundary check 2}}
- Visibility checks performed:
  - {{customer-facing vs internal check}}

## Security / Privacy / Audit Notes
- Sensitive data touched or considered:
  - `{{gate codes|payment references|internal notes|photos|exports|quote approvals|none}}`
- Audit implications considered:
  - {{what was logged, reviewed, or explicitly out of scope}}
- Confirm no sensitive data was exposed in customer-facing surfaces by this pack.

## Tests and Checks Run
- Commands/checks run:
  - `{{command or manual check}}`
- Results:
  - {{pass/fail summary}}
- If docs-only:
  - Explicitly state no code/build tests were required because no implementation code changed.
- If checks were not run:
  - State why and required follow-up.

## Codex Self-Review Results
- Findings:
  - {{finding 1}}
  - {{finding 2}}
- Fixes made:
  - {{fix 1}}
  - {{fix 2}}
- Remaining issues:
  - {{none or list}}

## Known Risks / Caveats
- Any uncertainty, limitation, or dependency to monitor.
- Any assumptions that future packs must validate.

## Follow-Up Prompt Packs
- Packs unblocked by this work.
- Packs affected by this work.
- Packs that should be regenerated or updated if this pack changes.

## Recommended Commit
- Stage only expected files:
```bash
git add {{file1}} {{file2}} {{fileN}}
```
- Suggested commit message:
```bash
git commit -m "Complete {{PACK_ID}} {{short-description}}"
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
