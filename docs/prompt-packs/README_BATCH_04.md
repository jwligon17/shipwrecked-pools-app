# Sprint 00 Batch 04 Prompt Packs

This batch includes the next 4 Sprint 00 prompt packs:

- `S00-010-create-codex-review-checklist.md`
- `S00-011-create-handoff-note-template.md`
- `S00-012-create-parallel-work-rules.md`
- `S00-013-create-rollback-rules.md`

Run them one at a time with the universal prompt pack runner.

Recommended order:

1. S00-010
2. S00-011
3. S00-012
4. S00-013

Each pack is documentation/process only. None should modify app/API/database/billing/auth/notification implementation code.

Before running each pack:

```bash
git status
```

After Codex completes each pack:

```bash
git status
git diff --stat
```

Then commit that pack before moving to the next one.
