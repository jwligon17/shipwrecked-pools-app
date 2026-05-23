# Affected Sprint Recalculation Rules

Purpose: Define how to recalculate affected sprints and prompt packs whenever feature scope, protected rules, dependencies, or product direction changes.

## Required Source Documents
Always use these docs together:
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## 1) Change Types
Recalculation can be triggered by:
- New feature
- Feature priority change
- Permission/role change
- Data visibility change
- New protected rule or protected-rule change
- Dependency/sequencing change
- New integration/provider dependency
- Commercial/export policy change
- Billing/payment workflow change
- Database/domain model change
- UI-only change
- Documentation/governance-only change

## 2) Recalculation Process
1. Identify the changed feature/rule and summarize scope.
2. Locate related feature families in `FEATURE_MAP.md`.
3. Identify impacted roles.
4. Identify impacted data objects.
5. Identify protected rules touched.
6. Identify upstream/downstream dependency impacts in `DEPENDENCY_MAP.md`.
7. Identify completed packs impacted.
8. Identify future packs impacted.
9. Decide whether retrofit packs are required.
10. Update changelog, feature map, dependency map, master index, and status board.
11. Run the Master Index integrity review checklist before implementation.

## 3) Sprint Impact Heuristics
Use these heuristics to avoid under- or over-scoping:
- Role/auth changes typically affect S03, role-gated API surfaces, mobile/admin visibility, and permission tests.
- Data visibility changes typically affect S02/S03 models/serializers, reports/history surfaces, admin views, and regression tests.
- Database/domain changes propagate from S02 into all dependent feature sprints.
- Billing/payment changes affect S12/S13 flows, master-job payment behavior, notifications, and security/audit tests.
- Commercial export changes affect customer/account typing, S03 permissions, S10 report data readiness, S16 admin export controls, and notification/security edges.
- Master-job changes affect S09/S10/S12/S13/S16 plus visibility boundaries around profitability.
- Pool outline/service-point changes affect S05/S06/S07/S09/S10 and any report/repair linkage packs.
- Suggested chemical guidance changes affect water-body profiles, S09/S10 technician workflows, admin controls, and safety/visibility tests.
- Chat changes affect S11 customer + technician flows, S16 admin inbox, permissions, and notification behavior.
- Notification changes affect event producers, preference models, household handling, delivery logs, and tests.
- UI-only changes can remain narrow if they do not alter data, permissions, or dependencies.

## 4) Retrofit Rules
Create retrofit packs when:
- Completed sprint docs conflict with new accepted direction.
- A completed pack omitted or violated a protected rule.
- A completed infrastructure/governance artifact is stale against current source-of-truth.
- Future implementation would be unsafe without reconciling completed work.
- Status board and master index disagree on pack existence/order/state.

## 5) Do-Not-Recalculate Cases
Do not trigger broad recalculation for:
- Typo/grammar-only edits.
- Formatting-only edits.
- Nonfunctional copy edits with no behavior/scope/dependency impact.
- Historical handoff wording tweaks unless materially misleading.

## 6) Output Format Template
Use this template for each recalculation analysis:

```txt
change_summary:
affected_features:
affected_roles:
affected_data_objects:
protected_rules_touched:
affected_completed_packs:
affected_future_packs:
required_docs_to_update:
required_prompt_packs_to_create_or_regenerate:
safe_to_proceed_after_governance_updates: yes/no
```

## 7) Decision Rules
- If protected rules are touched, validate against `PROTECTED_RULES.md` before proposing implementation packs.
- If completed packs are impacted, create retrofit packs instead of silently changing only future packs.
- If dependency sequence changes, update `DEPENDENCY_MAP.md` and `MASTER_INDEX.md` together.
- If pack sequencing/status changes, update `STATUS_BOARD.md` in place (never overwrite with seed/example).
