# Prompt Pack: S00-013 — Create Rollback Rules

## Pack Metadata

- **Pack ID:** S00-013
- **Title:** Create Rollback Rules
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / safety workflow only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-012, including S00-008A if present
- **Blocks:** Safer Codex execution, recovery from bad prompt-pack runs, and future implementation work

## Goal

Create a clear rollback and recovery guide for what the user and their wife should do if Codex makes bad changes, touches unrelated files, fails tests, modifies the wrong Pack ID, creates a broken branch, or causes conflicts.

## Why This Matters

The user and wife are using Codex heavily and will eventually work through hundreds of prompt packs. Mistakes will happen. A rollback playbook keeps them from panicking, deleting the repo, restarting, or accepting unsafe changes.

The goal is to make recovery simple, predictable, and safe.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists
- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md` if it exists
- `docs/codex/PARALLEL_WORK_RULES.md` if it exists

## Files Codex Should Create

Create:

- `docs/codex/ROLLBACK_RULES.md`
- `docs/handoffs/S00-013-create-rollback-rules.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `AGENTS.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify implementation code, package files, database files, auth/billing/notification implementation, or unrelated product docs.

This is a process/safety pack only.

## Build Prompt For Codex

Execute S00-013 only.

Create `docs/codex/ROLLBACK_RULES.md`, a practical rollback and recovery playbook for the user and wife.

The document must include:

## 1. Core Safety Principle

- Do not panic.
- Do not delete the repo.
- Do not delete the master index.
- Do not restart the project unless explicitly necessary.
- Most problems are fixed by reverting uncommitted changes, reverting a commit, or running a targeted fix prompt.

## 2. Before Every Prompt Pack

Include pre-run safety checks:

```bash
git status
git log --oneline --decorate -5
```

Require a clean working tree before running a prompt pack.

## 3. If Codex Has Not Been Committed Yet

Explain how to inspect:

```bash
git status
git diff --stat
git diff --name-only
```

If changes are bad/unrelated, options include:

- ask Codex to revert unrelated changes
- manually discard specific files
- discard all uncommitted changes for that pack

Include safe commands and warnings:

```bash
git restore path/to/file
git restore .
git clean -fd
```

Explain that `git clean -fd` removes untracked files and should be used carefully.

## 4. If Codex Modified Unrelated Files

Provide a process:

1. Identify unexpected files with `git diff --name-only` and `git status --short`.
2. Compare against prompt pack expected files.
3. Ask Codex to revert unrelated changes.
4. If needed, use `git restore`.
5. Re-run self-review.

## 5. If Codex Updated the Wrong Pack ID

Explain:

- fix `STATUS_BOARD.md`
- correct the handoff note
- verify only the intended Pack ID is marked implemented
- do not continue until status board is accurate

## 6. If Codex Ran Multiple Prompt Packs

Explain:

- stop immediately
- inspect changed files
- decide whether to revert all uncommitted changes
- do not commit mixed-pack work unless the user intentionally chooses a consolidation commit
- prefer reverting and re-running one pack at a time

## 7. If Tests Fail

Explain:

- ask Codex to fix failing tests within the current pack scope
- do not accept unrelated rewrites to make tests pass
- if Codex cannot fix tests, mark pack as Needs Fix/Blocked
- commit nothing until tests/checks are acceptable, unless intentionally saving a WIP branch

## 8. If a Bad Commit Was Already Made

Explain safe options:

- create a new corrective commit
- revert the bad commit
- avoid destructive reset on shared branches unless the user knows what they are doing

Include commands:

```bash
git log --oneline
git revert <commit_hash>
```

Explain that `git revert` is safer than history rewriting on shared branches.

## 9. If Main Branch Gets Messy

Explain:

- stop running new prompt packs
- inspect recent commits
- create a backup branch
- ask ChatGPT/developer for guidance before destructive reset

Include:

```bash
git branch backup-before-recovery
```

## 10. If Database Migrations Break

Even though no migrations exist yet, define future rules:

- do not manually delete old migrations without review
- do not run multiple migration-changing packs in parallel
- prefer new corrective migration after merge
- ask for help if schema/model direction is uncertain

## 11. If Billing/Auth/Permission Work Goes Wrong

Define extra caution:

- do not accept partial fixes
- do not commit if technician/customer boundaries are unclear
- do not commit if payment logic is untested
- require Codex review and permission tests
- ask for external help if ambiguity remains

## 12. If Commercial Export or Privacy Work Goes Wrong

Define extra caution:

- do not commit if external recipients can see internal notes, billing, profitability, gate codes, unrelated customer data, or unapproved exports
- require data visibility review

## 13. If Suggested Chemical Guidance Work Goes Wrong

Define extra caution:

- do not commit if customers can see internal recommendations
- do not commit if missing pool profile data does not block suggestions
- do not commit if technicians can edit recommendation tables
- do not commit if safety/SOP warnings are missing

## 14. If Context-Aware Chat Work Goes Wrong

Define extra caution:

- do not commit if context attaches automatically without confirmation
- do not commit if technician chat behaves like live chat
- do not commit if internal notes can leak to customers
- do not commit if closed chats fail to reopen on customer reply

## 15. Pack Recovery Statuses

Define how to mark `STATUS_BOARD.md`:

- Needs Fix
- Blocked
- Reverted
- Re-run Required
- Superseded
- Completed After Fix

## 16. Recovery Prompt Template

Include a reusable prompt that the user can paste into Codex:

```txt
You are recovering from a problematic prompt pack run. Do not implement new features. Inspect the current git diff, compare it against PACK_PATH, identify out-of-scope changes, propose a recovery plan, and do not modify files until you list exact files to restore or fix.
```

## 17. When to Ask ChatGPT or a Developer

List decision points:

- destructive git command uncertainty
- database migration conflicts
- permission/security ambiguity
- payment/billing ambiguity
- privacy/commercial export ambiguity
- Codex repeatedly fails to fix tests
- Codex modified many unrelated files
- unsure whether to revert or preserve a change

Update `STATUS_BOARD.md` for S00-013 and create the S00-013 handoff note.

## Bite-Sized Implementation Steps

1. Read the required workflow docs.
2. Create `docs/codex/ROLLBACK_RULES.md`.
3. Include recovery procedures for uncommitted changes, committed bad changes, wrong pack ID, multi-pack runs, failed tests, migration issues, billing/auth/privacy issues, and feature-specific risks.
4. Include safe git commands and warnings.
5. Include a reusable recovery prompt.
6. Optionally update root `AGENTS.md`, universal runner, or prompt pack template with a brief pointer to rollback rules.
7. Update `STATUS_BOARD.md`.
8. Create S00-013 handoff.
9. Self-review for practical usefulness and scope.

## Acceptance Criteria

S00-013 is complete only if:

- `docs/codex/ROLLBACK_RULES.md` exists.
- It includes step-by-step guidance for uncommitted and committed problems.
- It includes git commands and warnings.
- It includes specific guidance for wrong pack ID, multi-pack execution, failed tests, migration conflicts, billing/auth/permission issues, privacy/commercial export issues, suggested chemical guidance, and chat context issues.
- It includes a recovery prompt template.
- It is practical for the user and wife.
- `STATUS_BOARD.md` has S00-013 row.
- S00-013 handoff exists.
- No implementation code is changed.

## Codex Self-Review Prompt

Review the S00-013 changes before finalizing.

Check:

1. Did you create `docs/codex/ROLLBACK_RULES.md`?
2. Does it help recover from both uncommitted and committed bad changes?
3. Does it avoid encouraging dangerous git commands without warnings?
4. Does it cover wrong Pack ID, multiple packs run at once, unrelated file changes, failed tests, migrations, billing/auth/permission issues, commercial/privacy issues, suggested chemical issues, and chat context issues?
5. Does it include a recovery prompt template?
6. Did you update status board and create handoff?
7. Did you avoid implementation code?
8. Are optional updates to AGENTS/runner/template scoped and useful?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/codex/ROLLBACK_RULES.md AGENTS.md docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md docs/prompt-packs/PROMPT_PACK_TEMPLATE.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-013-create-rollback-rules.md
git commit -m "Complete S00-013 rollback rules"
```

If AGENTS/runner/template files were not modified, omit them from `git add`.
