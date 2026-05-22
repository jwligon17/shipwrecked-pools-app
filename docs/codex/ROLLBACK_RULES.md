# Rollback Rules (Shipwrecked Pools)

## 1. Core Safety Principle
- Do not panic.
- Do not delete the repository.
- Do not delete `MASTER_INDEX.md`.
- Do not restart the project unless explicitly necessary.
- Most bad runs are recoverable by:
  - reverting uncommitted files,
  - reverting a bad commit, or
  - running a scoped recovery prompt.

## 2. Before Every Prompt Pack
Run:
```bash
git status
git log --oneline --decorate -5
```
Require a clean working tree before running the next pack.

## 3. If Codex Has Not Been Committed Yet
Inspect first:
```bash
git status
git diff --stat
git diff --name-only
```
If changes are bad or unrelated, use one of these options:
- Ask Codex to revert only out-of-scope files.
- Manually discard specific files.
- Discard all uncommitted changes from that pack.

Safe commands:
```bash
git restore path/to/file
git restore .
git clean -fd
```
Warning: `git clean -fd` deletes untracked files. Use it only when you intentionally want to remove untracked pack outputs.

## 4. If Codex Modified Unrelated Files
Recovery process:
1. Run `git diff --name-only` and `git status --short`.
2. Compare changed files against expected pack files.
3. Ask Codex to revert unrelated files.
4. If needed, use `git restore <path>` manually.
5. Re-run pack self-review before continuing.

## 5. If Codex Updated the Wrong Pack ID
- Correct `docs/prompt-packs/STATUS_BOARD.md` immediately.
- Correct the pack handoff note.
- Verify only intended pack is marked implemented.
- Do not proceed until pack identity is accurate.

## 6. If Codex Ran Multiple Prompt Packs
- Stop immediately.
- Inspect all changed files.
- Decide whether to discard all uncommitted changes and rerun one pack at a time.
- Do not commit mixed-pack work unless you intentionally want a consolidation commit.
- Preferred path: revert and re-run packs sequentially.

## 7. If Tests Fail
- Ask Codex to fix tests inside current pack scope.
- Do not accept broad unrelated rewrites to force passing tests.
- If Codex cannot fix within scope, mark pack `Needs Fix` or `Blocked`.
- Do not commit until checks are acceptable, unless deliberately creating a WIP branch.

## 8. If a Bad Commit Was Already Made
Safer options:
- Create a corrective follow-up commit.
- Revert the bad commit.
- Avoid destructive reset on shared branches.

Commands:
```bash
git log --oneline
git revert <commit_hash>
```
`git revert` is generally safer than rewriting shared history.

## 9. If Main Branch Gets Messy
- Stop running new packs.
- Inspect recent commits and board state.
- Create a backup branch before deeper recovery.
- Ask ChatGPT/developer guidance before destructive commands.

Command:
```bash
git branch backup-before-recovery
```

## 10. If Database Migrations Break
Even before migration-heavy sprints, follow these rules:
- Do not delete prior migrations without review.
- Do not run migration-changing packs in parallel.
- Prefer a new corrective migration after merge.
- Escalate when schema direction is uncertain.

## 11. If Billing/Auth/Permission Work Goes Wrong
High caution:
- Do not accept partial fixes when role boundaries are unclear.
- Do not commit untested payment logic.
- Require Codex review plus permission tests.
- Escalate if ambiguity remains.

## 12. If Commercial Export Or Privacy Work Goes Wrong
Do not commit if external recipients can see:
- internal notes
- billing/profitability data
- gate codes/access data
- unrelated customer data
- unapproved exports

Require a data-visibility review before retry.

## 13. If Suggested Chemical Guidance Work Goes Wrong
Do not commit if:
- customers can see internal recommendation suggestions
- missing required profile/reading data does not block suggestions
- technicians can edit recommendation tables
- safety/SOP warnings are missing

## 14. If Context-Aware Chat Work Goes Wrong
Do not commit if:
- context auto-attaches without customer confirmation
- technician chat behaves like live chat
- internal notes are exposed to customer views
- closed chats do not reopen when customer replies

## 15. Pack Recovery Statuses
Use these in `STATUS_BOARD.md` when recovering:
- `Needs Fix`
- `Blocked`
- `Reverted`
- `Re-run Required`
- `Superseded`
- `Completed After Fix`

## 16. Recovery Prompt Template
Use this prompt when a pack run goes wrong:

```txt
You are recovering from a problematic prompt pack run. Do not implement new features. Inspect the current git diff, compare it against PACK_PATH, identify out-of-scope changes, propose a recovery plan, and do not modify files until you list exact files to restore or fix.
```

## 17. When To Ask ChatGPT Or A Developer
Escalate when uncertain about:
- destructive git commands
- migration conflicts
- permission/security ambiguity
- payment/billing ambiguity
- privacy/commercial export ambiguity
- repeated Codex inability to fix checks
- large unexpected unrelated file changes
- whether to revert or preserve current changes

## Short Recovery Sequence
1. Stop and inspect diff.
2. Confirm intended pack scope.
3. Restore out-of-scope files.
4. Re-run self-review/checks.
5. Update status/handoff accurately.
6. Resume only when tree and scope are clean.
