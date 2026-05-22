# Prompt Pack: S00-010 — Create Codex Review Checklist

## Pack Metadata

- **Pack ID:** S00-010
- **Title:** Create Codex Review Checklist
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Documentation / QA operating-system setup only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-009, including S00-008A if present
- **Blocks:** Future prompt packs that require Codex self-review, QA review, or acceptance review

## Goal

Create the reusable Codex review checklist that every future prompt pack can use after implementation. This checklist should help Codex review its own diffs for scope, correctness, security, permission boundaries, data visibility, documentation updates, tests, and Shipwrecked-specific business rules.

This pack should make it possible for the user and their wife to rely on a repeatable review process rather than manually inspecting every detail.

## Why This Matters

The Shipwrecked Pools app will eventually include customer data, technician route workflows, gate codes, pet/access notes, chemical readings, commercial reports, quote approvals, payment flows, admin dashboards, before/after photos, master jobs, and internal profitability data.

A generic code review checklist is not enough.

The review checklist must repeatedly protect the app from:

- customer data leakage
- internal notes leaking to customers
- technicians seeing billing/profitability
- commercial export over-sharing
- exact GPS tracking leaking when only route progress is allowed
- quote approval/payment mistakes
- missing audit logs
- missing handoff notes
- skipped documentation
- broad/unrelated Codex changes
- prompt packs running ahead

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`

## Files Codex Should Create

Create:

- `docs/codex/CODEX_REVIEW_CHECKLIST.md`
- `docs/handoffs/S00-010-create-codex-review-checklist.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify:

- app implementation files
- API implementation files
- admin implementation files
- database migrations/schema implementation files
- billing implementation files
- auth implementation files
- notification implementation files
- `package.json`
- `pnpm-workspace.yaml`
- `tsconfig.base.json`
- `.env.example`

This is a documentation/process pack only.

## Build Prompt For Codex

Execute S00-010 only.

Create a durable `docs/codex/CODEX_REVIEW_CHECKLIST.md` file that defines how Codex should review every future prompt pack implementation before the user commits it.

The checklist must be specific to Shipwrecked Pools and must include, at minimum:

1. **Pack identity review**
   - Did Codex execute only the pack at `PACK_PATH`?
   - Did it update the correct Pack ID in `STATUS_BOARD.md`?
   - Did it avoid running future prompt packs?
   - Did it create the correct handoff note?

2. **Scope review**
   - Did Codex modify only files allowed by the prompt pack?
   - Did it avoid app/API/database/package files for docs-only packs?
   - Did it avoid unrelated changes?
   - Did it preserve completed prompt packs as history?

3. **Shipwrecked product-rule review**
   - Single true mobile app with role-based experiences.
   - Custom top-down pool outline remains V1-critical.
   - Route progress only; no exact customer-facing technician GPS.
   - Human-answered customer questions in V1.
   - Customers see customer-friendly notes only.
   - Before/after photos must not leak internal context.
   - Master jobs are internal grouping objects, not generic customer-facing pages.
   - Commercial exports require admin review before emailing.
   - Suggested chemical guidance is internal and not customer-visible.

4. **Permission/data-visibility review**
   - Customer can access only their own data.
   - Household members can access only invited household/location data.
   - Technicians can access assigned route/service operational data.
   - Technicians cannot see billing, payment status, profit, margin, route profitability, customer profitability, or internal financial notes.
   - Admin/owner access is broader but still auditable.
   - Commercial export recipients receive only export-approved data.
   - Internal notes never leak to customers.

5. **Security/privacy/audit review**
   - Gate code access is guarded and auditable.
   - Quote approvals and typed signatures are auditable.
   - Payment actions are auditable.
   - Admin impersonation/view-as actions are auditable when implemented.
   - Photo visibility is explicitly handled.
   - Data export/deletion implications are considered.
   - Sensitive data is not exposed in logs or customer-facing docs.

6. **Backend/API review for code packs**
   - Role guards are present.
   - Inputs are validated.
   - Errors are handled.
   - Audit logs are created for sensitive actions.
   - API contract/types are updated.
   - Tests cover allowed and denied access.

7. **Mobile/customer UX review for code packs**
   - Loading, empty, error, and success states exist.
   - Customer-facing copy is clear and premium.
   - Customer-facing views show customer-friendly language.
   - Chat context requires confirmation before attaching.
   - Deal notifications remain separately toggleable.
   - Route progress avoids revealing other customers.

8. **Technician workflow review**
   - Technician views are mobile-first.
   - Technician sees necessary access/pet/gate/service data.
   - Technician does not see sensitive business data.
   - Arrival alerts require acknowledgment.
   - Safety reminders require acknowledgment when applicable.
   - Service completion restriction from 9 PM to 8 AM is respected when applicable.
   - Suggested chemical guidance requires complete data and technician confirmation.

9. **Admin dashboard review**
   - Admin portal workflows support the operational process.
   - Admin can review/edit/hide customer-visible photos where applicable.
   - Admin can review commercial exports before emailing.
   - Admin can triage/reassign chats.
   - Admin-only financial data stays admin-only.

10. **Billing/quote/payment review**
    - Quote approval uses approval action, checkbox, typed signature, audit log.
    - Upfront payment model is respected for master jobs/non-maintenance jobs.
    - Payment method data is not stored directly in app DB.
    - Technician never sees payment/billing/profitability data.

11. **Reports/photos/chemistry review**
    - Weekly maintenance, repair, green-to-clean, acid wash, and other job reports remain distinct.
    - Individual visit reports and final summary reports are supported for master jobs where applicable.
    - Before/after photo pairs are labeled and customer visibility is controlled.
    - Chemical suggestions are not shown to customers.
    - Customers see actual chemicals used and plain-English explanations.

12. **Testing review**
    - Tests were added/updated when logic changed.
    - Permission tests exist when role behavior changed.
    - Visibility tests exist when customer/internal data boundaries changed.
    - Billing/payment tests exist when money flows changed.
    - Notification tests exist when notification behavior changed.
    - Docs-only packs clearly say code/build tests were not required.

13. **Documentation/handoff review**
    - Relevant docs were updated.
    - Handoff note includes files changed, tests/checks run, risks, and follow-ups.
    - Status board reflects accurate pack status.

14. **Final decision output**
    - `PASS`
    - `PASS WITH NOTES`
    - `NEEDS FIX`
    - `STOP — OUT OF SCOPE OR UNSAFE`

Also update the universal runner and/or prompt pack template only if doing so makes future prompt-pack execution clearer. Do not over-modify.

Update `STATUS_BOARD.md` for S00-010 and create the S00-010 handoff.

## Bite-Sized Implementation Steps

1. Read all required project, scope, security, and prompt-pack docs.
2. Create `docs/codex/CODEX_REVIEW_CHECKLIST.md`.
3. Make the checklist specific to Shipwrecked Pools, not generic software.
4. Include separate review sections for docs-only, backend, mobile, admin, technician, billing, notification, reporting, chemistry, commercial, and security work.
5. Include the final review decision states.
6. Optionally update `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md` to reference the review checklist.
7. Optionally update `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md` to reference the review checklist.
8. Update `docs/prompt-packs/STATUS_BOARD.md` for S00-010.
9. Create the S00-010 handoff note.
10. Self-review for scope, completeness, and specificity.

## Acceptance Criteria

S00-010 is complete only if:

- `docs/codex/CODEX_REVIEW_CHECKLIST.md` exists.
- The checklist is specific to Shipwrecked Pools.
- The checklist includes scope, permission, data visibility, privacy, audit, app, backend, admin, technician, billing, report, photo, chemistry, notification, commercial, and documentation review items.
- The checklist includes final decision labels.
- `STATUS_BOARD.md` has a correct S00-010 row.
- `docs/handoffs/S00-010-create-codex-review-checklist.md` exists.
- No implementation code is changed.
- Any runner/template updates are tightly scoped and useful.

## Codex Self-Review Prompt

Review the S00-010 changes before finalizing.

Check:

1. Did you create `docs/codex/CODEX_REVIEW_CHECKLIST.md`?
2. Is the checklist specific to Shipwrecked Pools rather than generic?
3. Did you include review sections for scope, permissions, visibility, security, audit, backend, mobile, technician, admin, billing, notifications, reports, photos, chemistry, commercial exports, tests, docs, and handoffs?
4. Did you include the specific rules from feature amendments: master jobs, commercial exports, before/after photo pairing, arrival alerts, safety reminders, suggested chemical guidance, and context-aware chat?
5. Did you avoid changing implementation code?
6. Did you update `STATUS_BOARD.md` for S00-010?
7. Did you create the handoff note?
8. Did you avoid unrelated files?
9. Are any changes to runner/template files clearly justified and scoped?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/codex/CODEX_REVIEW_CHECKLIST.md docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md docs/prompt-packs/PROMPT_PACK_TEMPLATE.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-010-create-codex-review-checklist.md
git commit -m "Complete S00-010 Codex review checklist"
```

If runner/template files were not modified, omit them from `git add`.
