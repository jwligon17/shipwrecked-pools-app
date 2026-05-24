# Prompt Packs Agent Rules

## Purpose

Keep prompt-pack execution disciplined, scoped, and auditable.

## Workflow Rules

1. Execute one prompt pack at a time.
2. Treat `PACK_PATH` as the source of truth for current execution.
3. Stop and report if Pack ID references conflict.
4. Keep packs small, scoped, and sequenced by dependency.
5. Include build, self-review, fix, docs, and handoff expectations in each pack.
6. Update `docs/prompt-packs/STATUS_BOARD.md` for the active pack.
7. Create a handoff note in `docs/handoffs/` for the active pack.
8. Do not run ahead to other packs.
