# Prompt Pack: S00-007 — Create Data Visibility Rules Doc

## Metadata

- **Pack ID:** S00-007
- **Sprint:** Sprint 00 — Codex Operating System
- **Title:** Create Data Visibility Rules Doc
- **Priority:** P0 — Beta Critical Path
- **Risk Level:** Critical
- **Parallelization:** No. Run after S00-006 is complete and committed.
- **Primary Output:** Documentation only

## Goal

Create a detailed data visibility rules document for the Shipwrecked Pools app.

This document should define how every category of data is classified, who can see it, how notes are separated, how photos are protected, how reports are rendered, how route progress is privacy-safe, and how internal/admin/technician/customer-facing data must be separated throughout the system.

## Why This Matters

The Shipwrecked Pools app will contain sensitive information:

- gate codes
- pet/dog notes
- customer phone numbers
- pool photos
- technician visit notes
- internal admin notes
- quote approvals
- payment references
- invoices
- profitability data
- route progress
- customer service history
- repair photos
- product/deal targeting criteria

If data visibility is not defined early, future Codex tasks may accidentally leak internal notes, billing data, other customers' route details, or sensitive business information into customer or technician screens.

The app needs to feel premium and transparent to customers without exposing information they should not see.

## Dependencies

This pack assumes these are complete:

- S00-001 — Product Mission Doc
- S00-002 — Paul Story Source Doc
- S00-003 — V1 Scope Doc
- S00-004 — Root AGENTS.md
- S00-005 — Folder-Level AGENTS.md Files
- S00-006 — Permission Matrix Doc

## Expected Files To Create

Create:

```txt
docs/security/data-visibility-rules.md
docs/handoffs/S00-007-create-data-visibility-rules-doc.md
```

## Expected Files To Modify

Modify:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

## Files Not To Touch

Do not modify:

```txt
apps/mobile/
apps/admin/
apps/api/
packages/
package.json
pnpm-workspace.yaml
tsconfig.base.json
AGENTS.md
apps/*/AGENTS.md
packages/*/AGENTS.md
docs/*/AGENTS.md
```

This is a documentation-only pack. Do not implement code.

## Required Content For `docs/security/data-visibility-rules.md`

The document must include all of the following sections.

### 1. Purpose

Explain that this document defines what data can be shown to each role and how data should be transformed before display.

It should reference that the permission matrix defines access, while this document defines visibility, field-level exposure, note separation, masking, and customer-friendly language.

### 2. Data Visibility Levels

Define visibility levels:

- `public_marketing`
- `lead_visible`
- `customer_visible`
- `household_visible`
- `technician_visible`
- `admin_visible`
- `owner_only`
- `system_only`
- `audit_only`
- `masked`
- `never_customer_visible`
- `never_technician_visible`

For each level, define:

- who can see it
- example fields
- risks
- implementation notes

### 3. Note Types

Define these note types:

- `customer_friendly_note`
- `technician_operational_note`
- `admin_internal_note`
- `owner_financial_note`
- `system_generated_note`
- `audit_note`

Explain that every future note-like field must declare its visibility level.

Include examples:

- Customer-friendly: “Light staining near the return jet is being monitored.”
- Technician operational: “Check return jet marker during next visit; customer asked about staining.”
- Admin internal: “Customer prefers detailed explanations before approving repairs.”
- Owner financial: “High-margin repair opportunity; review pricing before sending.”
- System/audit: “Gate code viewed by technician at 12:41 PM.”

### 4. Customer-Facing Data Rules

Define what customers may see:

- their own profile
- their household members
- their property/address
- their own pet profile and dog treat permission
- their own pool/spa/water body profiles
- customer-friendly equipment info
- their published pool outline
- customer-visible service points
- customer-friendly marker notes
- weekly maintenance reports
- repair reports
- green-to-clean reports
- chemistry readings and plain-English explanations
- service photos included in their reports
- quote requests and quotes sent to them
- quote approvals/declines
- invoices/payment history tied to their account
- notification preferences
- deal/product recommendations targeted to their pool type
- conversations/questions they started or that are shared with them

Also define what customers must not see:

- internal notes
- technician-only notes
- admin-only notes
- owner financial notes
- route details for other customers
- exact technician GPS in V1
- other customer identities/addresses/photos
- internal route profitability
- quote margin/cost basis
- employee compensation/commission assumptions
- audit logs except maybe limited customer-facing activity history later

### 5. Household Member Visibility Rules

Define that household members can see customer/property data only after invitation and acceptance.

Clarify whether household members should see:

- reports
- chemistry
- pool outline
- route progress
- quotes
- invoices
- payment methods
- notification preferences
- pet profile

Recommend that household members can see service/report/pool status by default, but billing/payment authority and quote approval authority should be configurable or admin/customer-controlled.

### 6. Technician Visibility Rules

Define what assigned technicians may see:

- assigned route and stops
- customer name
- customer phone number
- service address
- gate code/access notes
- pet/dog notes and treat permission
- arrival reminders
- pool/spa profile
- equipment profile needed for service
- required checklist
- relevant service history
- customer questions assigned to them
- service point statuses/technician notes needed for work
- previous service/repair notes necessary for assigned work

Define what technicians must not see:

- billing status
- invoices
- payment methods
- customer profitability
- route profitability
- quote margin
- internal admin-only notes
- owner financial notes
- deal revenue/margin details
- other technicians' compensation assumptions

### 7. Admin / Owner Visibility Rules

Define admin visibility and owner-only visibility.

Admins can generally manage operations, customers, reports, routes, quotes, repairs, deals, and billing, but owner-only data should include:

- customer profitability
- route profitability
- company-level financial analytics
- sensitive business strategy notes
- compensation/margin strategy if added later

### 8. Lead Visibility Rules

Define what leads can see before becoming customers:

- their own lead profile
- onboarding steps
- basic request/quote status
- communication from Shipwrecked
- uploaded pool photos they submitted

Define what leads cannot see:

- service history
- reports
- route progress
- technician details
- internal review notes
- customer-only app features until approved/converted

### 9. Route Progress Privacy Rules

Define:

- customer sees service day status
- customer sees stops-before-you and ETA
- customer may see a route-progress visualization
- customer should not see exact GPS in V1
- customer should not see tech lunch/gas/restroom breaks
- customer should not see other customer names/addresses
- status ends after service is complete
- route exception notifications should be customer-safe and not reveal other customers

### 10. Photo Visibility Rules

Define visibility for:

- customer-uploaded onboarding photos
- technician service photos
- gate arrival/departure photos
- deep end / shallow end / steps / spa photos
- equipment photos
- filter pressure photos
- repair before/after photos
- internal-only issue photos
- admin-only photos if needed

Rules:

- Photos must be scoped to organization/customer/property/water body/service visit/report.
- Customer sees only photos attached to their own reports/quotes/repairs or profile.
- Technician sees only photos relevant to assigned/current work.
- Admin sees operationally relevant photos.
- Deleted/hidden photos should preserve audit/history where required.

### 11. Report Visibility Rules

Define visibility differences between:

- weekly maintenance reports
- repair reports
- green-to-clean reports
- inspection reports
- internal draft reports
- corrected reports

Include:

- reports are customer-visible after publishing
- report comments are customer-visible unless internal-only
- admin correction before customer opens should be tracked
- internal notes used to generate the report must not leak into customer report text

### 12. Quote / Repair / Billing Visibility Rules

Define visibility for:

- quote request
- quote draft
- quote sent
- quote approved
- checkbox approval
- typed signature
- payment method reference
- invoice/payment history
- declined quotes
- repair job
- repair report
- before/after photos

Rules:

- customer sees quote amount and line items sent to them
- technician may see work instructions but not margin/pricing strategy
- payment methods should be masked
- raw card details must never be stored or displayed
- approvals must be auditable

### 13. Deals / Product Recommendation Visibility Rules

Define:

- customers only see deals eligible for their pool/equipment type
- deal targeting cannot expose hidden customer data
- customers can turn off deal/product notifications while keeping service-critical notifications
- admin can create/manage deals
- technician does not need revenue/margin details unless explicitly allowed later

### 14. Notification Visibility Rules

Define:

- notification content must be role-safe
- push/SMS/email fallback should not include sensitive gate code or billing details
- notification logs may be admin-visible
- customers can manage notification categories
- household members have separate preferences

### 15. Multi-Tenant / Future SaaS Visibility Rules

Define that all future data should be organization-scoped to preserve optional SaaS expansion.

### 16. Paul Examples

Include examples showing what Paul, Megan, technician, admin, and owner can see for:

- pool outline marker note
- technician route progress
- weekly report
- quote approval
- repair report
- gate code
- dog treat permission
- robot deal notification
- turning off deal notifications

### 17. Implementation Rules For Future Codex Tasks

State that future Codex tasks must:

- declare visibility for new fields
- separate internal and customer-facing notes
- serialize API responses by role
- avoid exposing hidden fields in mobile/admin screens
- test for customer data isolation
- test technician no-billing/no-profitability access
- log sensitive access

## Build Prompt For Codex

```txt
Execute S00-007 only.

Create docs/security/data-visibility-rules.md as the authoritative field-level and display-level visibility guide for Shipwrecked Pools.

Use docs/security/permission-matrix.md, docs/product/mission.md, docs/product/paul-story.md, docs/product/v1-scope.md, AGENTS.md, and folder-level AGENTS.md files as context.

This is documentation-only. Do not modify app code, backend code, database files, package files, auth implementation, billing implementation, or unrelated files.

The document must define visibility levels, note types, customer/household/technician/admin/lead visibility, route privacy, photo visibility, report visibility, quote/repair/billing visibility, deal/product visibility, notification visibility, and Paul-specific examples.

After creating the document, update docs/prompt-packs/STATUS_BOARD.md for S00-007 and create docs/handoffs/S00-007-create-data-visibility-rules-doc.md.
```

## Bite-Sized Implementation Steps

1. Read S00-006 permission matrix and the product docs.
2. Create `docs/security/data-visibility-rules.md`.
3. Define visibility levels and note types.
4. Define role-specific visibility rules.
5. Define photo/report/quote/repair/billing/notification/deal visibility rules.
6. Include Paul examples.
7. Add future implementation rules for Codex tasks.
8. Update `docs/prompt-packs/STATUS_BOARD.md` for S00-007.
9. Create the S00-007 handoff note.
10. Self-review the diff.

## Acceptance Criteria

S00-007 is complete only if:

- `docs/security/data-visibility-rules.md` exists.
- The document defines visibility levels.
- The document defines note types.
- The document separates customer-friendly, technician, admin, owner, system, and audit data.
- The document includes route progress privacy rules.
- The document includes photo visibility rules.
- The document includes report visibility rules.
- The document includes quote/repair/billing visibility rules.
- The document includes deals/product notification visibility rules.
- The document includes Paul examples.
- The document includes future Codex implementation rules.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-007.
- `docs/handoffs/S00-007-create-data-visibility-rules-doc.md` exists.
- No app/API/database/package/auth/billing implementation files were changed.

## Codex Self-Review Prompt

```txt
Self-review S00-007.

Check:
1. Did you execute only S00-007?
2. Did you create docs/security/data-visibility-rules.md?
3. Did you avoid app/API/database/package/auth/billing implementation changes?
4. Did you define all required visibility levels?
5. Did you define all required note types?
6. Did you clearly separate customer-friendly, technician, admin, owner, system, and audit data?
7. Did you protect internal notes from customer visibility?
8. Did you protect billing, payment, profitability, and quote margin from technician visibility?
9. Did you include route progress privacy rules with stops-before-you and ETA but not exact GPS in V1?
10. Did you include photo/report/quote/repair/billing/deal/notification visibility rules?
11. Did you include Paul, Megan, Cooper, technician, admin, and owner examples?
12. Did you update STATUS_BOARD.md for S00-007?
13. Did you create the S00-007 handoff note?
14. Is the doc specific to Shipwrecked Pools and future Skimmer replacement?

Fix any material issues before reporting completion.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-007-create-data-visibility-rules-doc.md
```

The handoff note must include:

- Pack ID and title
- Files created
- Files modified
- Summary of visibility decisions
- Important examples added
- Checks run
- Self-review findings
- Follow-up packs that should use this document

## Expected Final Summary From Codex

Codex should end with:

- Pack ID completed
- files created
- files modified
- checks run
- self-review findings
- fixes made
- whether the pack is complete
- exact git add / git commit commands

## Suggested Commit Message

```bash
git commit -m "Complete S00-007 data visibility rules doc"
```
