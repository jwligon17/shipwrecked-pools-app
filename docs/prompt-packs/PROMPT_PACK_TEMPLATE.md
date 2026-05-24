# Prompt Pack: {{PACK_ID}} — {{TITLE}}

## Metadata

- **Pack ID:** `{{PACK_ID}}`
- **Sprint:** `{{SPRINT_ID}} — {{SPRINT_NAME}}`
- **Title:** `{{TITLE}}`
- **Priority:** `{{P0|P1|P2}}`
- **Risk Level:** `{{Low|Medium|High|Critical}}`
- **Parallelization:** `{{Can run in parallel? If not, state required sequencing}}`
- **Primary Output:** `{{Documentation only|Code + tests|Schema + API + tests|etc.}}`

Instruction:

- Use exact pack ID and title that match the filename and status board row.
- Explicitly state whether this pack is docs-only or code-producing.

## Goal

Instruction:

- Define one clear deliverable outcome.
- Keep the goal narrow enough to complete in one Codex task.

## Why This Matters

Instruction:

- Explain operational/product risk if this work is skipped or vague.
- Tie impact to Shipwrecked outcomes: customer confidence, clarity, consistency, privacy, and Skimmer-replacement path.

## Dependencies

Instruction:

- List prerequisite packs by pack ID and title.
- If prerequisites are missing, direct Codex to stop and report.

## Expected Files To Create

Instruction:

- List exact file paths to create.
- Use fenced `txt` block with one path per line.

```txt
{{path/to/new-file}}
```

## Expected Files To Modify

Instruction:

- List exact file paths that may be edited.
- Include `docs/prompt-packs/STATUS_BOARD.md` unless there is a documented exception.

```txt
{{path/to/modified-file}}
```

## Files Not To Touch

Instruction:

- List out-of-scope directories/files Codex must not modify.
- Include app/API/database/package/auth/billing paths unless pack scope explicitly requires them.

```txt
{{path-or-glob}}
```

## Business Rules

Instruction:

- Include pack-specific product rules in concrete language.
- Avoid generic statements; define what must happen and what must never happen.

## Security / Permission Rules

Instruction:

- State role boundaries and sensitive-data handling expectations relevant to this pack.
- Reference `docs/security/permission-matrix.md` when applicable.

## Data Visibility Rules

Instruction:

- Define customer-facing vs internal data expectations for this pack.
- Reference `docs/security/data-visibility-rules.md` when applicable.

## Technical Rules

Instruction:

- Define implementation constraints, architecture assumptions, and non-goals.
- For code packs, include required testing scope and guardrails.

## Required Content / Required Behavior

Instruction:

- Specify the exact required sections, fields, endpoints, or behaviors that must be included.
- Make this checklist concrete enough for objective verification.

## Build Prompt For Codex

Instruction:

- Provide copy/paste-ready execution instructions.
- Must enforce: one-pack execution, `PACK_PATH` source of truth, conflict-stop behavior, scoped edits, no auto-commit, status board update, and handoff creation.

```txt
Execute {{PACK_ID}} only.

PACK_PATH="{{full/path/to/this-pack.md}}"

Before editing:
1. Read AGENTS.md.
2. Read docs/prompt-packs/MASTER_INDEX.md.
3. Read docs/prompt-packs/STATUS_BOARD.md.
4. Read the prompt pack at PACK_PATH.
5. Derive Pack ID/title from PACK_PATH and pack contents.
6. Stop and report if Pack IDs conflict.
7. Summarize plan and expected file changes.

Then implement only this pack scope.
Do not commit.
```

## Bite-Sized Implementation Steps

Instruction:

- Provide sequential, small, checkable steps.
- Keep steps specific to the pack outcome and acceptance criteria.

## Acceptance Criteria

Instruction:

- Define objective completion checks.
- Include required files, required content/behavior, required status board update, required handoff note, and prohibited file-change guardrails.

## Tests / Checks To Run

Instruction:

- For docs-only packs: list doc/diff/scope checks only and state no code/build tests required.
- For code packs: list required test commands and validation checks.
- Include what to do if checks fail.

## Codex Self-Review Prompt

Instruction:

- Provide a checklist prompt Codex can execute immediately after implementation.
- Must verify scope control, acceptance criteria, status board update, handoff creation, and prohibited-file protections.

```txt
Self-review {{PACK_ID}}.

Check:
1. Did you execute only {{PACK_ID}}?
2. Did you create/modify exactly the scoped files?
3. Did you satisfy every acceptance criterion?
4. Did you update STATUS_BOARD.md for {{PACK_ID}}?
5. Did you create the required handoff note?
6. Did you avoid prohibited files?

Fix any material issues before final output.
```

## Fix Prompt

Instruction:

- Provide a short remediation prompt to address self-review findings while preserving scope.

```txt
Fix any {{PACK_ID}} self-review findings.
Keep changes scoped to this pack's allowed files.
Do not touch prohibited files.
```

## Handoff Note Requirements

Instruction:

- Specify the exact handoff file path and required sections.
- Required content should include: pack ID/title, files created, files modified, checks run, self-review findings, fixes made, limitations, and next recommended pack(s).

## Expected Final Summary From Codex

Instruction:

- Require this exact summary structure:
- Pack ID completed
- files created
- files modified
- checks run
- self-review findings
- fixes made
- whether the pack is complete
- exact git add / git commit commands

## Suggested Commit Message

Instruction:

- Provide one exact commit message.
- Keep it pack-specific and concise.

```bash
git commit -m "Complete {{PACK_ID}} {{short-description}}"
```

## Required Quality Rules For Future Prompt Packs

Future prompt packs should:

- Be small enough to finish in one Codex task.
- Have one clear output goal.
- Include dependencies.
- Include files not to touch.
- Include acceptance criteria.
- Include review prompts.
- Include tests/checks.
- Include handoff note requirements.
- Include exact commit message suggestion.
- State whether the pack is documentation-only or code-producing.
- State parallelization safety.
- State risk level.
- Reference permission/data visibility docs when relevant.
