# S00-008A Feature Amendment Reconciliation Pack

This small package adds one prompt pack:

- `S00-008A-reconcile-feature-amendments-with-scope-permissions-visibility-and-roadmap.md`

Use it after committing S00-008 and before running S00-009.

Why this exists:
- S00-006 and S00-007 were completed before the new feature decisions were incorporated.
- This pack updates the living product docs, master index, permission matrix, data visibility rules, and durable instructions.
- It does not require deleting the master index, restarting the repo, or modifying implementation code.

Run this pack with the universal prompt pack runner and set:

```txt
PACK_PATH="docs/prompt-packs/sprint-00-codex-operating-system/S00-008A-reconcile-feature-amendments-with-scope-permissions-visibility-and-roadmap.md"
```
