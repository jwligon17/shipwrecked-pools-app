# Master Index Changelog

Purpose: Record meaningful changes to the Master Index system, prompt-pack roadmap, feature scope, protected rules, dependency relationships, and source-of-truth governance documents.

## Change ID Format
`MI-YYYY-MM-DD-###`

## Status Values
- Proposed
- Accepted
- Mapped
- Implemented in Master Index
- Requires Retrofit
- Closed

## When to Add a Changelog Entry
Add an entry when any of the following occur:
- A new feature idea changes app scope, role behavior, or operational workflow.
- An existing feature changes priority tier or delivery phase.
- A sprint gains, loses, splits, or re-sequences prompt packs.
- A protected business/architecture rule is added, removed, or changed.
- A feature dependency or build-sequencing dependency changes.
- A completed sprint or pack requires retrofit/reconciliation.
- A new source-of-truth document is introduced for product, security, governance, or sequencing.

## Required Entry Format
Each changelog entry must include:
- `change_id`
- `date`
- `change_title`
- `summary`
- `source_of_change`
- `affected_docs`
- `affected_features`
- `affected_sprints`
- `affected_prompt_packs`
- `protected_rules_checked`
- `dependency_impact`
- `status_board_impact`
- `follow_up_actions`
- `implemented_or_verified_by`
- `commit_reference` (placeholder allowed until merged)

---

## MI-2026-05-23-001 — Master Index V2 Source-of-Truth Adoption

- `change_id`: MI-2026-05-23-001
- `date`: 2026-05-23
- `change_title`: Adopt Living Master Index V2 governance system
- `summary`: Establish Master Index V2 as the durable source-of-truth system and require relational governance updates before feature-changing implementation.
- `source_of_change`: Shipwrecked product-direction reconciliation and Sprint 00 governance expansion.
- `affected_docs`:
  - `docs/prompt-packs/MASTER_INDEX.md`
  - `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
  - `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
  - `docs/prompt-packs/FEATURE_MAP.md`
  - `docs/prompt-packs/DEPENDENCY_MAP.md`
  - `docs/prompt-packs/PROTECTED_RULES.md`
  - `docs/prompt-packs/STATUS_BOARD.md`
- `affected_features`:
  - source-of-truth-governance
  - route-optimization
  - commercial-pools
  - commercial-daily-chemical-logs
  - media-retention
  - pool-outline
  - service-points
  - billing-payments
  - payment-failure-suspension
  - conversations
  - weather-intelligence
  - technician-accountability
  - repair-workflows
- `affected_sprints`:
  - S00, S02, S03, S04, S06, S08, S10, S11, S13, S14, S16, S18, S19
- `affected_prompt_packs`:
  - S00-019 through S00-026 (new governance batch)
  - Upstream/downstream retrofit packs as needed when implemented work is impacted
- `protected_rules_checked`: Yes. Protected rules were reviewed and expanded to cover pool-outline linkage, visibility boundaries, route privacy, human-answered V1 questions, quote-audit requirements, payment-failure enforcement, and related governance constraints.
- `dependency_impact`: Yes. Feature and sequencing dependencies require explicit mapping in `FEATURE_MAP.md` and `DEPENDENCY_MAP.md`, with retrofit creation when completed packs are affected.
- `status_board_impact`: Yes. Governance packs must be tracked in `STATUS_BOARD.md` with additive updates only; the board must never be replaced by seed/example files.
- `follow_up_actions`:
  - Complete S00-019 through S00-026 sequential governance adoption.
  - Run Master Index integrity reviews before any feature-changing implementation.
  - Create retrofit packs where accepted changes impact already-implemented packs.
- `implemented_or_verified_by`: Codex
- `commit_reference`: TODO (human-managed commit)

---

## MI-2026-05-23-002 — Master Index V2 Integrity Review Tidy-Up

- `change_id`: MI-2026-05-23-002
- `date`: 2026-05-23
- `change_title`: Normalize Sprint 00 registry identity and governance references after integrity review
- `summary`: Applied governance-only corrections to remove Sprint 00 registry/count/risk/title drift and strengthen AGENTS source-of-truth references.
- `source_of_change`: Master Index V2 Integrity Review `PASS WITH NOTES` follow-up corrections.
- `affected_docs`:
  - `docs/prompt-packs/MASTER_INDEX.md`
  - `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
  - `AGENTS.md`
- `affected_features`:
  - source-of-truth-governance
- `affected_sprints`:
  - S00 (direct), downstream governance consumers in S01+ (indirect)
- `affected_prompt_packs`:
  - S00-008A (explicitly represented/normalized in registry)
  - S00-018 (title/purpose normalization in registry)
  - S00-024 through S00-026 (risk normalized to Critical in registry)
- `protected_rules_checked`: Yes. No protected product or security behavior changed; governance metadata only.
- `dependency_impact`: Low direct impact; improves sequencing integrity clarity and reduces governance drift risk.
- `status_board_impact`: None required. `STATUS_BOARD.md` already reflected canonical rows/risk for S00-024 through S00-026 and was not overwritten or downgraded.
- `follow_up_actions`:
  - Rerun Master Index V2 integrity review to confirm notes resolved.
  - Continue Sprint 01+ work using normalized governance references.
- `implemented_or_verified_by`: Codex
- `commit_reference`: TODO (human-managed commit)

## Rules
- Committed repository docs are source of truth; chat memory is not.
- Major roadmap or feature changes must update this changelog first or in the same governance change set.
- Completed prompt packs remain historical records unless superseded by explicit correction/retrofit packs.
- `docs/prompt-packs/STATUS_BOARD.md` must be updated in place and must never be blindly overwritten from templates or seed files.
- Protected rules must be checked before accepting and implementing roadmap changes.

---

## Entry Template

```txt
change_id:
date:
change_title:
summary:
source_of_change:
affected_docs:
affected_features:
affected_sprints:
affected_prompt_packs:
protected_rules_checked:
dependency_impact:
status_board_impact:
follow_up_actions:
implemented_or_verified_by:
commit_reference:
```
