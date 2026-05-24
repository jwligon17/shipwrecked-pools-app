# Database Package Agent Rules

## Risk Level

Database work is high-risk and must be sequenced carefully.

## Migration Rules

- Run only one migration/schema prompt at a time.
- Destructive migrations require explicit human direction.
- Prefer additive, reversible migration strategies when possible.

## Modeling Rules

- Prefer relational clarity over shortcuts.
- Preserve future organization/multi-tenant support.
- Support separate water bodies and connected/non-connected pool-spa logic.
- Keep internal notes and customer-visible notes separated in data modeling.
- Model non-weekly/non-biweekly work with internal master-job grouping while keeping weekly/biweekly maintenance outside master-job linkage.
- Preserve structures needed for before/after pair labeling, commercial export review gates, and recommendation-vs-applied chemistry traceability.

## Audit And Integrity

- Ensure sensitive events can be represented in audit-log structures.
- Avoid schema choices that weaken role-based visibility enforcement.
