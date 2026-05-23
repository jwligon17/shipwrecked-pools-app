# Master Index Update Protocol

Purpose: Ensure new ideas change the project relationally instead of creating contradictions.

## Required Process for New Ideas

1. **Capture the idea.** Write the raw idea in the changelog template.
2. **Classify the feature family.** Update `FEATURE_MAP.md`.
3. **Identify dependencies.** Update `DEPENDENCY_MAP.md` with affected sprints and pack IDs.
4. **Check already-implemented packs.** If affected packs are already merged, create retrofit prompt packs.
5. **Update `MASTER_INDEX.md`.** Add/modify sprint rows, pack counts, priorities, risk, and parallelization.
6. **Update `PROTECTED_RULES.md`.** Only when the decision creates a durable business or architecture rule.
7. **Run Master Index Integrity Review.** Ask Codex to inspect contradictions before implementation.
8. **Only then implement code.** Do not let Codex build app code before the index update is complete.

## Codex Prompt: Master Index Integrity Review

```txt
Review docs/prompt-packs/MASTER_INDEX.md, MASTER_INDEX_CHANGELOG.md, FEATURE_MAP.md, DEPENDENCY_MAP.md, and PROTECTED_RULES.md.

Find contradictions, missing downstream sprint updates, missing protected rules, stale priorities, incorrect pack counts, unsafe parallelization labels, and any implemented-pack retrofit needs.

Return:
1. Critical contradictions
2. Missing affected sprints
3. Missing affected pack IDs
4. Packs that need priority/risk changes
5. Retrofit packs required
6. Suggested exact edits

Do not modify files until asked.
```

## Codex Prompt: Apply Approved Master Index Update

```txt
Apply the approved Master Index update described in the latest changelog entry.

Update:
- MASTER_INDEX.md
- FEATURE_MAP.md
- DEPENDENCY_MAP.md
- PROTECTED_RULES.md if applicable
- STATUS_BOARD.md if applicable

Do not implement app code.
Do not change unrelated prompt packs.
After edits, run a Master Index Integrity Review and create a handoff note.
```
