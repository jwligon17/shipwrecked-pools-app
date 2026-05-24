# Master Index Update Protocol

Purpose: Ensure roadmap and feature changes are applied relationally across all source-of-truth docs before feature-changing implementation begins.

## Source-of-Truth Hierarchy

Apply updates in this order of authority:

1. `docs/prompt-packs/MASTER_INDEX.md`
2. `docs/prompt-packs/FEATURE_MAP.md`
3. `docs/prompt-packs/DEPENDENCY_MAP.md`
4. `docs/prompt-packs/PROTECTED_RULES.md`
5. `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
6. `docs/prompt-packs/STATUS_BOARD.md`
7. Product/security governance docs (for example `docs/product/*`, `docs/security/*`)
8. `docs/handoffs/*` as execution records

## When This Protocol Must Be Used

Run this protocol whenever any of the following happen:

- A new feature or workflow changes scope.
- A feature changes priority tier or timeline.
- A sprint gains, loses, renumbers, or resequences prompt packs.
- A dependency relationship changes.
- A protected rule changes or a new durable rule is introduced.
- A completed pack requires retrofit/reconciliation.
- New external or current-conversation source-of-truth files are introduced.

## Required Update Sequence

1. Capture the proposed change and scope.
2. Check for protected-rule conflicts.
3. Update `MASTER_INDEX_CHANGELOG.md` with required entry fields.
4. Update `FEATURE_MAP.md` for impacted feature families.
5. Update `DEPENDENCY_MAP.md` for sequencing and downstream impact.
6. Update affected sprint/pack rows in `MASTER_INDEX.md`.
7. Update `STATUS_BOARD.md` if new or retrofit packs are added/changed.
8. Update affected product/security governance docs when the policy surface changes.
9. Create or update prompt packs needed for implementation or retrofit.
10. Run Master Index integrity review and resolve material contradictions.
11. Commit governance updates before implementation packs begin.

## Codex Rules

- Do not implement feature-changing code until the source-of-truth governance docs above are updated.
- Stop immediately if a requested change conflicts with `PROTECTED_RULES.md`.
- Never overwrite `docs/prompt-packs/STATUS_BOARD.md` with a seed/example file.
- Do not renumber completed prompt packs unless explicitly instructed.
- Create a handoff note for governance changes.
- If pack IDs conflict between prompt text, file path, and status board, stop and report the conflict before editing.

## Human Operator Rules

- Start from a clean git working tree.
- Use a dedicated branch/worktree for significant Master Index governance changes.
- Review `git diff --stat` and scoped file list before commit.
- Commit source-of-truth governance updates before feature implementation packs.
- Push governance updates after review when major sequencing/protected-rule changes are introduced.

## Master Index Integrity Review Prompt

```txt
Review docs/prompt-packs/MASTER_INDEX.md, MASTER_INDEX_CHANGELOG.md, FEATURE_MAP.md, DEPENDENCY_MAP.md, PROTECTED_RULES.md, and STATUS_BOARD.md.

Find contradictions, missing downstream sprint updates, missing affected pack IDs, stale priorities, unsafe parallelization labels, and retrofit needs for already-implemented packs.

Return:
1. Critical contradictions
2. Missing affected sprints
3. Missing affected pack IDs
4. Packs requiring priority/risk changes
5. Retrofit packs required
6. Suggested exact edits

Do not modify files until asked.
```

## Apply Approved Governance Update Prompt

```txt
Apply the approved Master Index governance update in the latest changelog entry.

Update only the required source-of-truth docs:
- MASTER_INDEX.md
- MASTER_INDEX_CHANGELOG.md
- FEATURE_MAP.md
- DEPENDENCY_MAP.md
- PROTECTED_RULES.md (if rule changes apply)
- STATUS_BOARD.md (if pack/status sequencing changes)

Do not implement app/API/admin/database feature code.
Do not modify unrelated prompt packs.
After edits, run an integrity review and create a handoff note.
```
