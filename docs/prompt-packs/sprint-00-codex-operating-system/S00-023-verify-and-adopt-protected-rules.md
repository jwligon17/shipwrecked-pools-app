# Prompt Pack: S00-023 — Verify and Adopt PROTECTED_RULES.md

## Pack Metadata

- **Pack ID:** S00-023
- **Title:** Verify and Adopt PROTECTED_RULES.md
- **Sprint:** S00 — Codex Operating System / Master Index V2 Governance
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / protected rules
- **Can Run In Parallel:** No
- **Depends On:** S00-019 through S00-022
- **Blocks:** Master Index integrity review, future implementation under V2

## Goal

Verify, adopt, and if needed refine `docs/prompt-packs/PROTECTED_RULES.md` so it clearly defines non-negotiable product, privacy, role, billing, reporting, route, chemical, commercial, and Codex workflow rules.

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
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected:

- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/handoffs/S00-023-verify-and-adopt-protected-rules.md`

May modify only if needed:

- `AGENTS.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`

## Build Prompt For Codex

Execute S00-023 only.

Verify that `PROTECTED_RULES.md` exists and captures the non-negotiable rules future Codex work must preserve.

If it exists, refine it only as needed. If it does not exist, create it.

Protected rules must include:

## 1. Role and Access Rules

- One app with role-based experiences.
- Customers see only their own data.
- Household members see only invited household/location data.
- Technicians see assigned operational data only.
- Owner/admin may operate as technician with added permissions.
- Technicians are technician-only unless explicitly owner/admin.
- Customers can invite household members/residents.
- Technicians may view future routes but cannot complete service between 9 PM and 8 AM local time.

## 2. Technician Financial Restrictions

Technicians must never see:

- billing status
- payment details
- payment history
- quote margins
- route profitability
- customer profitability
- internal financial notes
- master job cost/profit rollups

## 3. Customer Visibility Rules

- Customers see customer-friendly notes only.
- Internal notes never leak.
- Customer sees route progress/stops-before-you/ETA, not exact live GPS.
- Customer does not see internal chemical suggestions.
- Customer sees actual chemicals used and plain-English explanations.
- Customer does not see generic master job page.
- Customer sees individual job visit reports and final summary reports where applicable.

## 4. Commercial Export Rules

- Commercial exports require admin review before email.
- Export recipients only receive approved export data.
- Export recipients do not receive billing, profitability, internal notes, gate codes unless explicitly export-approved, or unrelated private data.
- Technician identity is shown as "Shipwrecked Pools technician" unless future rules change.

## 5. Master Job Rules

- All non-weekly/non-biweekly maintenance jobs are master jobs.
- Weekly/biweekly maintenance is never tied to master jobs.
- Master jobs are internal grouping objects.
- Master jobs do not mix job types.
- Upfront payment is required; no deposits/milestones in V1.

## 6. Photo / Before-After Rules

- Before/after pairing available for all work types.
- Pairs are manually paired and labeled.
- Admin can hide photos from customer view.
- Customer-visible photo content must not expose internal/private context.

## 7. Chemical Guidance Rules

- Suggestions require complete readings/profile data.
- Missing required data blocks suggestions.
- Technician can edit and apply actual amount.
- Admin can edit recommendation tables.
- Technician cannot edit recommendation tables.
- Suggested chemical guidance is internal only.
- Safety/SOP warnings must be preserved.

## 8. Chat Rules

- Chat context must be confirmed before attachment.
- Technician chat is active/recent-service only.
- Technician chat is asynchronous only.
- Admin can intercept/triage/reassign.
- Internal chat notes must be clearly marked and customer-hidden.
- Closed chats reopen when customer replies.
- No AI answers to customer questions in V1.

## 9. Billing / Quote / Approval Rules

- Quote approvals require approval action, checkbox, typed signature, audit log.
- Payment methods use provider references, not raw card storage.
- Sensitive billing/payment actions must be audited.
- Technician cannot see billing/payment/profitability.

## 10. Codex Workflow Rules

- Do not implement feature-changing work until source-of-truth docs are updated.
- Do not overwrite real `STATUS_BOARD.md` with seed status board.
- Do not run future packs ahead.
- Do not touch implementation code in governance/doc packs.
- Stop on protected-rule conflict.
- Completed prompt packs are historical; use amendment/reconciliation packs for changes.

Update `STATUS_BOARD.md` for S00-023.

Create the S00-023 handoff.

## Acceptance Criteria

S00-023 is complete only if:

- `PROTECTED_RULES.md` exists.
- It includes all protected rule categories above.
- It aligns with permission and data visibility docs.
- It preserves all S00-008A feature decisions.
- It includes Codex stop rules.
- `STATUS_BOARD.md` has S00-023 marked implemented/self-reviewed.
- S00-023 handoff exists.
- No implementation code is modified.

## Codex Self-Review Prompt

Review S00-023 changes before finalizing.

Check:

1. Did you avoid implementation files?
2. Are all protected rules included?
3. Do protected rules align with permission/data visibility docs?
4. Does the doc include stop rules for Codex?
5. Did you update status board and create handoff?
6. Did you avoid inventing new product scope?

Fix material issues before completion.
