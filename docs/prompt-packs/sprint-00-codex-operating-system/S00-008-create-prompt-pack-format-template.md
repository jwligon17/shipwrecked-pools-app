# Prompt Pack: S00-008 — Create Prompt Pack Format Template

## Metadata

- **Pack ID:** S00-008
- **Sprint:** Sprint 00 — Codex Operating System
- **Title:** Create Prompt Pack Format Template
- **Priority:** P0 — Beta Critical Path
- **Risk Level:** High
- **Parallelization:** No. Run after S00-007 is complete and committed.
- **Primary Output:** Documentation only

## Goal

Create the standard prompt pack template and reusable Codex runner instructions for the Shipwrecked Pools app build.

This pack should make future prompt packs consistent, detailed, bite-sized, reviewable, and safe for you and your wife to use with Codex.

## Why This Matters

The Shipwrecked Pools app will be built through many prompt packs. Quality depends on every pack being scoped, sequenced, explicit, and self-reviewable.

The project has already identified an important risk: copied runner prompts can accidentally contain hardcoded Pack ID language from an earlier pack. The standard runner must treat `PACK_PATH` as the source of truth and stop if conflicting Pack IDs appear.

This template should prevent future issues such as:

- vague prompts
- multiple packs being executed at once
- wrong status board updates
- missing handoff notes
- generic docs
- app code touched during docs-only packs
- database migrations run in parallel
- Codex modifying unrelated files
- insufficient acceptance criteria
- missing tests/reviews

## Dependencies

This pack assumes these are complete:

- S00-001 — Product Mission Doc
- S00-002 — Paul Story Source Doc
- S00-003 — V1 Scope Doc
- S00-004 — Root AGENTS.md
- S00-005 — Folder-Level AGENTS.md Files
- S00-006 — Permission Matrix Doc
- S00-007 — Data Visibility Rules Doc

## Expected Files To Create

Create:

```txt
docs/prompt-packs/PROMPT_PACK_TEMPLATE.md
docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md
docs/handoffs/S00-008-create-prompt-pack-format-template.md
```

## Expected Files To Modify

Modify:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

## Files Not To Touch

Do not modify:

```txt
apps/mobile/
apps/admin/
apps/api/
packages/
package.json
pnpm-workspace.yaml
tsconfig.base.json
AGENTS.md
apps/*/AGENTS.md
packages/*/AGENTS.md
docs/*/AGENTS.md
```

This is a documentation-only pack. Do not implement app, API, database, auth, billing, or package code.

## Required Content For `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`

Create a reusable template future ChatGPT/Codex-generated prompt packs should follow.

The template must include these sections:

1. Prompt Pack title
2. Metadata
   - Pack ID
   - Sprint
   - Title
   - Priority
   - Risk Level
   - Parallelization
   - Primary Output
3. Goal
4. Why This Matters
5. Dependencies
6. Expected Files To Create
7. Expected Files To Modify
8. Files Not To Touch
9. Business Rules
10. Security / Permission Rules
11. Data Visibility Rules
12. Technical Rules
13. Required Content / Required Behavior
14. Build Prompt For Codex
15. Bite-Sized Implementation Steps
16. Acceptance Criteria
17. Tests / Checks To Run
18. Codex Self-Review Prompt
19. Fix Prompt
20. Handoff Note Requirements
21. Expected Final Summary From Codex
22. Suggested Commit Message

For each section, include clear instructions about what belongs there.

## Required Content For `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`

Create a reusable runner prompt that you and your wife can copy into Codex for any single prompt pack.

The runner must include:

- `PACK_PATH="PASTE_PROMPT_PACK_PATH_HERE"`
- instructions to read `AGENTS.md`
- instructions to read `docs/prompt-packs/MASTER_INDEX.md`
- instructions to read `docs/prompt-packs/STATUS_BOARD.md`
- instructions to read the prompt pack at `PACK_PATH`
- instructions to derive Pack ID from `PACK_PATH` and the prompt pack itself
- instructions to stop if conflicting Pack IDs are detected
- instructions to execute exactly one pack
- instructions to not run ahead
- instructions to list expected files before editing
- instructions to update the status board for the current Pack ID
- instructions to create the handoff note for the current Pack ID
- scope rules for docs-only packs vs code packs
- self-review requirements
- final summary requirements
- instruction that Codex must not commit changes

The runner must avoid hardcoded S00-specific language except in examples.

## Required Quality Rules For Future Prompt Packs

Add rules that future prompt packs should:

- be small enough to finish in one Codex task
- have one clear output goal
- include dependencies
- include files not to touch
- include acceptance criteria
- include review prompts
- include tests/checks
- include handoff note requirements
- include exact commit message suggestion
- state whether the pack is documentation-only or code-producing
- state parallelization safety
- state risk level
- reference permission/data visibility docs when relevant

## Build Prompt For Codex

```txt
Execute S00-008 only.

Create docs/prompt-packs/PROMPT_PACK_TEMPLATE.md and docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md.

Use the completed Sprint 00 docs, AGENTS.md files, permission matrix, data visibility rules, and current prompt pack style as context.

This is documentation-only. Do not modify app code, backend code, database files, package files, auth implementation, billing implementation, or unrelated files.

The template must be detailed enough for future ChatGPT-generated prompt packs and future Codex execution. The universal runner must be safe for you and your wife to reuse by changing only PACK_PATH.

After creating the documents, update docs/prompt-packs/STATUS_BOARD.md for S00-008 and create docs/handoffs/S00-008-create-prompt-pack-format-template.md.
```

## Bite-Sized Implementation Steps

1. Review existing prompt packs S00-001 through S00-007.
2. Create `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`.
3. Include all required sections and explanations.
4. Create `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`.
5. Make sure the runner uses `PACK_PATH` as source of truth.
6. Make sure the runner stops on Pack ID conflicts.
7. Add quality rules for future prompt packs.
8. Update `docs/prompt-packs/STATUS_BOARD.md` for S00-008.
9. Create the S00-008 handoff note.
10. Self-review the diff.

## Acceptance Criteria

S00-008 is complete only if:

- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md` exists.
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md` exists.
- The template includes all required sections.
- The universal runner tells Codex to execute one prompt pack only.
- The universal runner treats `PACK_PATH` as source of truth.
- The universal runner tells Codex to stop if conflicting Pack IDs are detected.
- The universal runner includes status board and handoff requirements.
- The universal runner includes self-review and final summary requirements.
- The docs mention docs-only vs code-pack behavior.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-008.
- `docs/handoffs/S00-008-create-prompt-pack-format-template.md` exists.
- No app/API/database/package/auth/billing implementation files were changed.

## Codex Self-Review Prompt

```txt
Self-review S00-008.

Check:
1. Did you execute only S00-008?
2. Did you create docs/prompt-packs/PROMPT_PACK_TEMPLATE.md?
3. Did you create docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md?
4. Did you avoid app/API/database/package/auth/billing implementation changes?
5. Does the template include all required sections?
6. Does the universal runner tell Codex to execute exactly one pack only?
7. Does the universal runner treat PACK_PATH as source of truth?
8. Does the universal runner stop on Pack ID conflicts?
9. Does the universal runner avoid hardcoded Pack ID language except examples?
10. Does the universal runner require status board and handoff updates?
11. Does the universal runner require self-review and final summary?
12. Are future prompt pack quality rules included?
13. Did you update STATUS_BOARD.md for S00-008?
14. Did you create the S00-008 handoff note?

Fix any material issues before reporting completion.
```

## Fix Prompt

```txt
Fix any S00-008 self-review findings. Keep changes scoped to the prompt pack template, universal runner doc, status board, and handoff note. Do not touch app/API/database/package/auth/billing implementation files.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-008-create-prompt-pack-format-template.md
```

The handoff note must include:

- Pack ID and title
- Files created
- Files modified
- Summary of template decisions
- Summary of universal runner decisions
- Checks run
- Self-review findings
- Follow-up packs that should use this template

## Expected Final Summary From Codex

Codex should end with:

- Pack ID completed
- files created
- files modified
- checks run
- self-review findings
- fixes made
- whether the pack is complete
- exact git add / git commit commands

## Suggested Commit Message

```bash
git commit -m "Complete S00-008 prompt pack template"
```
