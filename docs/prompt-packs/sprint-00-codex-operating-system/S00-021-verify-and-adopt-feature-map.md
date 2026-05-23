# Prompt Pack: S00-021 — Verify and Adopt FEATURE_MAP.md

## Pack Metadata

- **Pack ID:** S00-021
- **Title:** Verify and Adopt FEATURE_MAP.md
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / feature mapping
- **Can Run In Parallel:** No
- **Depends On:** S00-019, S00-020
- **Blocks:** dependency mapping, sprint recalculation, future feature implementation

## Goal

Verify, adopt, and if needed refine `docs/prompt-packs/FEATURE_MAP.md` so it maps every major Shipwrecked Pools feature to affected sprints, roles, data objects, permissions, visibility rules, and likely prompt-pack areas.


## Common Scope Rule For This V2 Governance Pack

This is a documentation/governance pack only.

Do not modify implementation code.
Do not modify app/admin/API implementation files.
Do not modify database migrations or schema implementation files.
Do not modify auth, billing, payment, notification, report, route, quote, repair, pool outline, chemical guidance, commercial export, or chat implementation.
Do not modify package/workspace config unless the prompt pack explicitly requires a small documentation-related cross-reference.
Do not delete or rewrite completed prompt packs.
Do not delete previous handoffs.
Do not overwrite the existing real `STATUS_BOARD.md` with a seed/example status board.


## Files Codex Should Read First

Read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/product/paul-demo-persona.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/FEATURE_MAP.md` if it exists
- `docs/prompt-packs/DEPENDENCY_MAP.md` if it exists
- `docs/prompt-packs/PROTECTED_RULES.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-021-verify-and-adopt-feature-map.md`

May modify only if needed:

- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`

## Build Prompt For Codex

Execute S00-021 only.

Verify that `FEATURE_MAP.md` exists and maps all current major features.

If it exists, refine it only as needed. If it does not exist, create it.

The feature map must include at least:

1. **Role-Based Single App**
   - customer, household member, technician, owner/admin, commercial contact/export recipient.
   - affected sprints: auth, mobile shell, admin, permissions, route/tech, etc.

2. **Custom Pool Outline / Service Points**
   - admin outline studio, mobile rendering, service points, markers, visibility.

3. **Routes / Technician Progress**
   - stops-before-you, ETA, no exact customer-facing GPS, route reorder, visit workflow.

4. **Technician Workflow**
   - gate/pet/access notes, arrival popups, safety reminders, required photos, chemistry entry, completion restriction.

5. **Reports / Photos / Before-After**
   - maintenance reports, repair reports, green-to-clean, acid wash, final summary, before/after pairing, admin hide.

6. **Chemistry / Suggested Chemical Guidance**
   - required data, readings, suggested vs actual, admin-editable tables, not customer-visible.

7. **Questions / Context-Aware Chat**
   - context confirmation, admin/tech routing, async tech chat, internal notes, reopen behavior.

8. **Requests / Quotes / Repairs**
   - approval, checkbox, typed signature, upfront payment, audit logs.

9. **Master Jobs**
   - internal grouping, individual visit reports, final summary report, internal profitability/cost rollups.

10. **Billing / Payments**
   - invoices, payment methods, Stripe references, no raw cards, technician invisibility.

11. **Notifications**
   - push-first, service/report/quote/repair/deal, opt-outs, logs, household preferences.

12. **Commercial Accounts / Compliance Exports**
   - commercial customer type, property manager, health inspector, admin-reviewed exports.

13. **Deals / Products / Robots**
   - eligibility, product recommendations, opt-out, quote/install tasks.

14. **Privacy / Data Export / Deletion / Audit Logs**
   - protected sensitive data and compliance.

15. **Admin Portal**
   - desktop admin, customer/route/report/quote/billing/chat/export/analytics.

For each feature, include:

- description
- user roles involved
- customer-visible surface
- technician-visible surface
- admin-visible surface
- data objects likely needed
- permission/data visibility concerns
- protected rules involved
- affected sprints
- affected future prompt-pack categories
- dependencies
- priority: Beta / V1 / Post-V1 / SaaS-Valuation

Update `STATUS_BOARD.md` for S00-021.

Create the S00-021 handoff.

## Acceptance Criteria

S00-021 is complete only if:

- `FEATURE_MAP.md` exists.
- It covers all major current feature areas listed above.
- It maps features to roles, data objects, affected sprints, dependencies, and protected rules.
- It preserves S00-008A feature decisions.
- It does not invent new implementation requirements beyond documented scope.
- `STATUS_BOARD.md` has S00-021 marked implemented/self-reviewed.
- S00-021 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-021 changes before finalizing.

Check:
1. Did you avoid implementation files?
2. Did you preserve current product direction?
3. Does the feature map include all S00-008A amendments?
4. Does it include roles/data/visibility/dependencies/sprints for each feature?
5. Did you update status board and create handoff?
6. Did you avoid conflicting with protected rules?

Fix material issues before completion.
