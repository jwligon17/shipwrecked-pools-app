# Shipwrecked Pools — Sprint 00 Batch 01 Prompt Packs

This batch contains the first three high-quality Sprint 00 prompt packs:

1. `S00-001-create-product-mission-doc.md`
2. `S00-002-create-paul-story-source-doc.md`
3. `S00-003-create-v1-scope-doc.md`

These packs should be added to:

```txt
docs/prompt-packs/sprint-00-codex-operating-system/
```

Run them with Codex one at a time, in order. Do not ask Codex to execute multiple packs at once.

Recommended sequence:

```txt
1. Run S00-001.
2. Ask Codex to self-review S00-001.
3. Commit S00-001 result.
4. Run S00-002.
5. Ask Codex to self-review S00-002.
6. Commit S00-002 result.
7. Run S00-003.
8. Ask Codex to self-review S00-003.
9. Commit S00-003 result.
```

Expected output after all three:

```txt
docs/product/mission.md
docs/product/paul-story.md
docs/product/v1-scope.md
docs/handoffs/S00-001-create-product-mission-doc.md
docs/handoffs/S00-002-create-paul-story-source-doc.md
docs/handoffs/S00-003-create-v1-scope-doc.md
docs/prompt-packs/STATUS_BOARD.md
```

These are documentation/operating-system packs only. They should not create app code, database migrations, billing logic, mobile screens, admin screens, or API endpoints.
