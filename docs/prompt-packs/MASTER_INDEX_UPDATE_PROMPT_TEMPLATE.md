# Master Index Update Prompt Template

Purpose: Reusable prompt for updating Shipwrecked Master Index/source-of-truth governance docs before any feature-changing implementation.

## Full Version (Major Changes)

```txt
You are working in the Shipwrecked Pools app repo.

Run a Master Index governance update only. Do not implement product/app/API/admin/database code.

Change Request Inputs:
- Raw change idea:
- Reason / business goal:
- Delivery phase impact (Beta / V1 / Post-V1 / SaaS-Valuation):
- Users/roles affected:
- Data objects affected:
- Workflow areas affected:
- Billing/payment impact (if any):
- Privacy/security concerns:
- Known contradictions/conflicts:
- Urgency:
- Have any related prompt packs already run? If yes, list them:

Before editing:
1. Read AGENTS.md.
2. Read docs/prompt-packs/MASTER_INDEX.md.
3. Read docs/prompt-packs/MASTER_INDEX_CHANGELOG.md.
4. Read docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md.
5. Read docs/prompt-packs/FEATURE_MAP.md.
6. Read docs/prompt-packs/DEPENDENCY_MAP.md.
7. Read docs/prompt-packs/PROTECTED_RULES.md.
8. Read docs/prompt-packs/STATUS_BOARD.md.
9. Read docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md.
10. Read docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md.
11. Read relevant product/security docs (feature-amendments, permission matrix, data visibility rules).
12. Check git status and current diff.
13. Stop if working tree is not clean.

Required Codex behavior:
1. Summarize the requested change.
2. Identify affected features, sprints, and prompt packs.
3. Check for protected-rule conflicts.
4. Update MASTER_INDEX_CHANGELOG.md.
5. Update FEATURE_MAP.md.
6. Update DEPENDENCY_MAP.md.
7. Update MASTER_INDEX.md where sprint/pack sequencing or priorities are affected.
8. Update STATUS_BOARD.md if new/retrofit packs are needed.
9. Update product/security governance docs if the policy surface changes.
10. Propose/create amendment or retrofit prompt packs when completed work is impacted.
11. Run (or provide output using) the Master Index integrity review checklist.
12. Create a handoff note in docs/handoffs/.
13. Stop before implementation.

Stop conditions:
- Protected-rule conflict exists.
- High-risk ambiguity remains unresolved.
- Change impacts billing/payment/privacy/security without enough detail.
- STATUS_BOARD state is mismatched for required pack operations.
- Working tree is not clean.
- Requested action would overwrite completed historical records.
- User asks for implementation before governance update is complete.

Output format:
1. Change summary
2. Affected docs
3. Affected features
4. Affected sprints
5. Affected prompt packs
6. Protected-rule findings
7. Dependency findings
8. Recommended new/retrofit prompt packs
9. Expected files to change
10. Whether implementation can proceed (yes/no)
11. Exact git commands for review and commit

Do not commit unless explicitly instructed by the user.
```

## Quick Version (Small Changes)

```txt
Run a governance-only Master Index update for this small change:
[PASTE CHANGE]

Do not implement code.

Read and update as needed:
- docs/prompt-packs/MASTER_INDEX_CHANGELOG.md
- docs/prompt-packs/FEATURE_MAP.md
- docs/prompt-packs/DEPENDENCY_MAP.md
- docs/prompt-packs/MASTER_INDEX.md
- docs/prompt-packs/PROTECTED_RULES.md
- docs/prompt-packs/STATUS_BOARD.md
- docs/prompt-packs/AFFECTED_SPRINT_RECALCULATION_RULES.md
- docs/prompt-packs/MASTER_INDEX_INTEGRITY_REVIEW_CHECKLIST.md

Rules:
- Stop on protected-rule conflict.
- Stop if working tree is not clean.
- Stop if implementation is requested before governance updates.
- Create retrofit pack recommendations if completed packs are impacted.

Return:
- change summary
- affected docs/features/sprints/packs
- protected-rule/dependency findings
- expected file changes
- implementation can proceed: yes/no
- git commands
```

## Usage Notes
- Use Full Version for new features, priority shifts, dependency changes, protected-rule updates, integrations, or retrofit scenarios.
- Use Quick Version for small governance edits that still require source-of-truth consistency.
- Both versions enforce governance-before-implementation.
