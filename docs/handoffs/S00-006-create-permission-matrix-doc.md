# Handoff — S00-006 Create Permission Matrix Doc

## Pack

- Pack ID: S00-006
- Title: Create Permission Matrix Doc
- Sprint: S00
- Date: 2026-05-02

## Files Created

- `docs/security/permission-matrix.md`
- `docs/handoffs/S00-006-create-permission-matrix-doc.md`

## Files Modified

- `docs/prompt-packs/STATUS_BOARD.md`

## Summary Of Permission Decisions

- Established `owner_admin`, `admin`, `technician`, `customer`, `household_member`, `lead`, and `system_service` as the canonical roles.
- Defined role capability boundaries for operations, reporting, quotes, billing, profitability, deals, privacy actions, and audit visibility.
- Established domain-level access expectations for all required entities, including routes, reports, chemistry, conversations, quotes, repairs, billing, analytics, and audit events.
- Enforced Shipwrecked route privacy model: customers see stops-before-you and ETA, not exact live GPS or other customer identity/address data.
- Aligned customer-facing versus internal note exposure boundaries.

## Critical Deny Rules Added

- Technician denied billing status, payment methods/details, customer profitability, route profitability, quote margin, and internal pricing strategy.
- Customer denied internal notes, cross-customer route/customer/property/photo/report visibility, and exact technician GPS.
- Household member denied non-invited access.
- Lead denied pre-conversion service history.
- Deal targeting denied use of other customers’ profile/equipment data exposure.

## Audit Requirements Added

- Gate-code view/change auditing.
- Payment-detail view and charge-event auditing.
- Quote create/update and approval/decline auditing.
- Typed-signature capture auditing.
- Report publish/correction/delete auditing.
- Route stop reorder and exception state auditing.
- Admin view-as auditing.
- Data export and deletion request auditing.
- Critical notification and household invite lifecycle auditing.

## Checks Run

- `git status --short`
- `git diff -- docs/security/permission-matrix.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-006-create-permission-matrix-doc.md`

## Self-Review Findings

- Executed only S00-006.
- Created required `docs/security/permission-matrix.md`.
- Included all required roles and all required data domains.
- Included explicit technician deny rules for billing/payment/profitability/quote margin/admin-sensitive data.
- Included customer and household data isolation rules.
- Included gate code/access and all required sensitive-action audit requirements.
- Included route privacy constraints (stops-before-you/ETA, no exact GPS, no other-customer details).
- Included Paul, Megan, Cooper, and assigned technician examples.
- Updated `STATUS_BOARD.md` and created S00-006 handoff note.
- No app/API/database/package/auth/billing implementation files changed.

## Fixes Made

- None required after self-review; no material gaps found.

## Follow-Up Packs That Should Use This Document

- S00-007 — Create Data Visibility Rules Doc
- S03 sprint packs for auth/role guards and permission tests
- S08/S09 route/technician workflow packs
- S10/S12/S13 report, quote, and billing enforcement packs
- S19 privacy/security hardening packs
