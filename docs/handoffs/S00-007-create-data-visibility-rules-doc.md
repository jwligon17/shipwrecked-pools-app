# Handoff — S00-007 Create Data Visibility Rules Doc

## Pack
- Pack ID: S00-007
- Title: Create Data Visibility Rules Doc
- Sprint: S00
- Date: 2026-05-02

## Files Created
- `docs/security/data-visibility-rules.md`
- `docs/handoffs/S00-007-create-data-visibility-rules-doc.md`

## Files Modified
- `docs/prompt-packs/STATUS_BOARD.md`

## Summary Of Visibility Decisions
- Defined canonical visibility levels for field/display behavior, including `masked`, `audit_only`, `never_customer_visible`, and `never_technician_visible`.
- Established required note taxonomy and enforced explicit visibility declaration for all future note-like fields.
- Defined role-specific visibility boundaries for customer, household member, technician, admin, owner, lead, and system contexts.
- Preserved Shipwrecked route privacy model: customers see stops-before-you and ETA, never exact technician GPS in V1 and never other-customer identity/address data.
- Defined visibility rules for photos, reports, quote/repair/billing workflows, deals, and notifications with masking and role-safe content requirements.
- Added implementation rules that future Codex tasks must follow for serializer boundaries, isolation tests, technician financial restrictions, and sensitive-access logging.

## Important Examples Added
- Paul and Megan visibility differences for shared household access.
- Assigned technician visibility for gate code and Cooper dog treat permission.
- Admin/owner differences for internal operations versus profitability/strategy data.
- Quote approval with checkbox and typed signature visibility/audit handling.
- Deal notification visibility and independent opt-out behavior.

## Checks Run
- `git status --short`
- `git diff -- docs/security/data-visibility-rules.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-007-create-data-visibility-rules-doc.md`
- `rg -n "\| S00-007 \|" docs/prompt-packs/STATUS_BOARD.md`

## Self-Review Findings
- Executed only S00-007.
- Created required `docs/security/data-visibility-rules.md`.
- Included required visibility levels and note types.
- Clearly separated customer-friendly, technician, admin, owner, system, and audit data classes.
- Protected internal notes from customer visibility and billing/profitability/margin data from technician visibility.
- Included route privacy rules, photo/report/quote/repair/billing/deal/notification visibility sections.
- Included Paul, Megan, Cooper, technician, admin, and owner examples.
- Updated `STATUS_BOARD.md` and created S00-007 handoff note.
- No app/API/database/package/auth/billing implementation files changed.

## Fixes Made
- None required after self-review; no material issues found.

## Follow-Up Packs That Should Use This Document
- S03-011 — Internal Notes Protection
- S03-012 — Billing Visibility Protection
- S03-013 / S03-014 / S03-015 — role-boundary isolation tests
- S08 route visibility packs
- S10 report generation and correction packs
- S12 quote/repair approval packs
- S13 billing/payment visibility packs
- S14 notification safety and preference packs
