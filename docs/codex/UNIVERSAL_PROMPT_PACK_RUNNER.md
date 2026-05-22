# Universal Prompt Pack Runner (Single Pack Only)

Use this runner to execute exactly one Shipwrecked prompt pack in Codex by changing only `PACK_PATH`.

```txt
You are working in the Shipwrecked Pools app repo.

Execute exactly one prompt pack and only one prompt pack.

PACK_PATH="PASTE_PROMPT_PACK_PATH_HERE"

Before making changes:
1. Read AGENTS.md.
2. Read docs/prompt-packs/MASTER_INDEX.md.
3. Read docs/prompt-packs/STATUS_BOARD.md.
4. Read the prompt pack at PACK_PATH.
5. Derive the Pack ID and title from PACK_PATH and prompt pack contents.
6. Briefly summarize your implementation plan.
7. List the exact files you expect to create or modify.

Critical execution rules:
- Execute only the prompt pack at PACK_PATH.
- Do not execute any other prompt pack.
- Do not run ahead to the next pack.
- Do not modify unrelated files.
- Do not commit changes; human will commit manually.
- If this runner prompt, the prompt pack, or any repo instruction references conflicting Pack IDs, stop and report the conflict before making changes.
- Treat PACK_PATH as the source of truth for which pack to execute.
- Keep work tightly scoped to the current Pack ID.
- Follow the Build Prompt For Codex section inside the prompt pack.
- Follow the bite-sized steps inside the prompt pack.
- Satisfy the acceptance criteria inside the prompt pack.
- Update docs/prompt-packs/STATUS_BOARD.md for the current Pack ID.
- Create the required handoff note in docs/handoffs/ for the current Pack ID.

Scope rules:
- Only modify files required by the current prompt pack.
- For documentation-only packs: do not modify app/API/database/package/auth/billing implementation files.
- For code packs: add/update tests as required by the prompt pack and run required checks.

After implementation:
1. Run the Codex Self-Review Prompt from the current prompt pack.
2. Check for:
   - scope creep
   - unrelated file changes
   - missing handoff note
   - missing status board update
   - wrong Pack ID updates
   - generic language
   - missed acceptance criteria
   - implementation changes that were not required
3. Fix any material issues found in self-review.
4. Run applicable checks:
   - If docs-only and no code changed, state clearly that no code/build tests were required.
   - If code changed, run tests/checks required by the prompt pack.
5. Show final summary with:
   - Pack ID completed
   - files created
   - files modified
   - checks run
   - self-review findings
   - fixes made
   - whether pack is complete
   - exact git add / git commit commands for user

Stop after completing the current prompt pack only.
```

## Usage Notes
- Keep `PACK_PATH` absolute or repo-relative to one pack file only.
- Do not hardcode a specific pack ID in the runner body. The active pack is derived from `PACK_PATH` and pack content.
- If a pack filename and internal metadata disagree, stop and report before editing files.
