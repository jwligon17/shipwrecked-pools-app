# Prompt Pack: S00-011 — Create Handoff Note Template

## Pack Metadata

- **Pack ID:** S00-011
- **Title:** Create Handoff Note Template
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Documentation / process setup only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-010, including S00-008A if present
- **Blocks:** Future prompt packs that must produce consistent handoff notes

## Goal

Create a reusable handoff note template that Codex must use after every prompt pack. The template should give the user and their wife enough context to understand what changed, what was reviewed, what risks remain, what tests/checks were run, and what should happen next.

## Why This Matters

The user and their wife are using Codex as their main implementation partner. They are not planning to manually review every code detail. Strong handoff notes are therefore critical for continuity, quality control, rollback safety, and deciding what to run next.

A good handoff note should reduce the need to ask ChatGPT for verification after every prompt pack.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists

## Files Codex Should Create

Create:

- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`
- `docs/handoffs/S00-011-create-handoff-note-template.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify:

- implementation code
- app/admin/API/database implementation files
- auth/billing/notification implementation files
- `package.json`
- workspace/config files
- completed prompt pack files unless explicitly needed for documentation references

This is a process-documentation pack only.

## Build Prompt For Codex

Execute S00-011 only.

Create `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`, a reusable template that every future Codex prompt pack should use when creating its handoff note.

The handoff template must include these sections:

1. **Header**
   - Pack ID
   - Pack title
   - Sprint
   - Date completed
   - Implemented by
   - Review status
   - Final status: Complete / Needs Fix / Blocked

2. **Purpose**
   - What this pack was supposed to accomplish.
   - Why it matters for Shipwrecked Pools.

3. **Summary of Work Completed**
   - Clear plain-English summary.
   - Avoid generic language.
   - Include Shipwrecked-specific context where relevant.

4. **Files Created**
   - File path
   - Purpose
   - Customer/admin/technician/backend relevance

5. **Files Modified**
   - File path
   - Purpose of change
   - Whether change was expected by prompt pack

6. **Files Not Touched / Scope Confirmation**
   - Confirm no unrelated files were changed.
   - For docs-only packs, confirm no implementation code changed.
   - For implementation packs, confirm unrelated systems were not touched.

7. **Business Rules Applied**
   - Any relevant Shipwrecked rules applied.
   - Examples:
     - customers see only customer-friendly notes
     - technicians cannot see billing/profitability
     - route progress only, not exact GPS
     - commercial exports require admin review
     - master jobs are internal grouping objects
     - suggested chemical guidance is internal only

8. **Permission and Visibility Checks**
   - Which role boundaries were involved.
   - Customer, household, technician, admin, owner, commercial contact, export recipient implications.

9. **Security / Privacy / Audit Notes**
   - Sensitive data touched or considered.
   - Audit requirements considered.
   - Gate codes, payment data, internal notes, photos, commercial exports, quote approvals.

10. **Tests and Checks Run**
    - Commands run.
    - Results.
    - If docs-only, state no code/build tests were required and why.
    - If tests could not be run, state why and whether follow-up is required.

11. **Codex Self-Review Results**
    - Findings.
    - Fixes made.
    - Remaining issues.

12. **Known Risks / Caveats**
    - Any uncertainty.
    - Any dependencies.
    - Any future prompt packs that must follow up.

13. **Follow-Up Prompt Packs**
    - Packs unblocked.
    - Packs affected.
    - Packs that should be regenerated/updated if needed.

14. **Recommended Commit**
    - Exact `git add` guidance.
    - Exact commit message.

15. **Human Operator Checklist**
    - `git status`
    - `git diff --stat`
    - confirm files match expected scope
    - commit
    - verify clean tree
    - proceed to next pack

16. **Rollback Notes**
    - How to revert if the pack caused problems.
    - Prefer commit-level rollback once committed.

Update `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md` and/or `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md` only if needed to tell future Codex runs to use the handoff template.

Update `STATUS_BOARD.md` for S00-011 and create the S00-011 handoff note.

## Bite-Sized Implementation Steps

1. Read the required docs and existing handoff notes if helpful.
2. Create `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`.
3. Include all required sections.
4. Make the template clear enough for Codex to fill in without asking the user.
5. Include Shipwrecked-specific examples and reminders.
6. Optionally update the prompt pack template/runner to reference the handoff template.
7. Update `STATUS_BOARD.md` for S00-011.
8. Create the S00-011 handoff note.
9. Self-review for completeness and scope.

## Acceptance Criteria

S00-011 is complete only if:

- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md` exists.
- The template includes all required sections.
- The template is specific to Shipwrecked Pools and future prompt pack work.
- The template includes permission, visibility, security, testing, review, commit, and rollback sections.
- `STATUS_BOARD.md` has a correct S00-011 row.
- `docs/handoffs/S00-011-create-handoff-note-template.md` exists.
- No implementation code is changed.
- Any runner/template changes are tightly scoped.

## Codex Self-Review Prompt

Review the S00-011 changes before finalizing.

Check:

1. Did you create the handoff note template?
2. Does it include all required sections?
3. Is it specific to Shipwrecked Pools and this app’s operating model?
4. Does it include permission/visibility/security/test/review/commit/rollback sections?
5. Does it help the user and their wife avoid needing manual code expertise?
6. Did you update status board and create the S00-011 handoff?
7. Did you avoid implementation code and unrelated files?
8. If you modified the runner or prompt pack template, were those changes necessary and scoped?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/handoffs/HANDOFF_NOTE_TEMPLATE.md docs/prompt-packs/PROMPT_PACK_TEMPLATE.md docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-011-create-handoff-note-template.md
git commit -m "Complete S00-011 handoff note template"
```

If runner/template files were not modified, omit them from `git add`.
