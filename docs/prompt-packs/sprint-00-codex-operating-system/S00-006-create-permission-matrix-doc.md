# Prompt Pack: S00-006 — Create Permission Matrix Doc

## Metadata

- **Pack ID:** S00-006
- **Sprint:** Sprint 00 — Codex Operating System
- **Title:** Create Permission Matrix Doc
- **Priority:** P0 — Beta Critical Path
- **Risk Level:** Critical
- **Parallelization:** No. Run after S00-001 through S00-005 are complete and committed.
- **Primary Output:** Documentation only

## Goal

Create a detailed permission matrix for the Shipwrecked Pools app that defines exactly what each user role can see and do.

This document should become the source of truth for future backend auth guards, mobile screen access, admin dashboard access, technician access, customer data isolation, billing privacy, route privacy, gate code visibility, and audit logging requirements.

## Why This Matters

Shipwrecked Pools is not just a customer app. It is intended to become a Skimmer replacement, internal CRM, technician workflow system, billing layer, quote/repair approval system, reporting engine, route management tool, product/deal engine, and future SaaS-capable backend.

Permissions must be defined before database, API, auth, admin, technician, and customer app work begins.

The most important business rule is:

> Technicians may see operational information needed to complete assigned work, but they must never see billing status, payment data, customer profitability, route profitability, quote margin, or sensitive business financial information.

The second most important rule is:

> Customers and household members may only see data tied to their own customer/property access.

## Dependencies

This pack assumes these are complete:

- S00-001 — Product Mission Doc
- S00-002 — Paul Story Source Doc
- S00-003 — V1 Scope Doc
- S00-004 — Root AGENTS.md
- S00-005 — Folder-Level AGENTS.md Files

## Expected Files To Create

Create:

```txt
docs/security/permission-matrix.md
docs/handoffs/S00-006-create-permission-matrix-doc.md
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

This is a documentation-only pack. Do not implement auth, database, billing, API, or UI code.

## Required Content For `docs/security/permission-matrix.md`

The document must include all of the following sections.

### 1. Purpose

Explain that this permission matrix is the source of truth for role access decisions across:

- mobile customer app
- technician app role
- admin dashboard
- backend API
- database access patterns
- billing/payment workflows
- route management
- reports
- quotes/repairs
- notifications
- CRM/history
- future SaaS/multi-tenant expansion

### 2. Core Principles

Include these principles:

- Organization-scoped data from day one.
- Customers can only access their own data.
- Household members can only access invited customer/property data.
- Technicians can only access assigned route/stop/customer operational data.
- Technicians cannot access billing, payment data, quote margin, customer profitability, route profitability, or sensitive admin-only CRM notes.
- Customer-facing content must use customer-friendly notes.
- Internal notes must not leak to customers.
- Exact technician GPS should not be customer-visible in V1; customers see route progress, stops-before-you, and ETA.
- Access to gate codes and sensitive access instructions must be logged.
- Quote approvals, payment events, report publishing/corrections, account deletion/export, and admin view-as events must be auditable.

### 3. Roles

Define these roles:

- `owner_admin`
- `admin`
- `technician`
- `customer`
- `household_member`
- `lead`
- `system_service`

For each role, include:

- short description
- main responsibilities
- what they should generally see
- what they should generally not see

### 4. Role Capability Summary

Create a concise table with rows for roles and columns for high-level capabilities:

- Create account
- Manage organization settings
- Manage leads/customers
- Manage household members
- View customer profile
- View property/access notes
- View gate codes
- View pet/dog treat notes
- View assigned route
- Reorder route stops
- Complete service visits
- Enter chemistry
- Upload service photos
- Create technician recommendations
- Publish/modify reports
- Create quotes
- Approve quotes
- View billing/payment data
- Charge payment method
- View profitability
- Manage deals/products
- Request data export/deletion
- View audit logs

Use clear values such as:

```txt
Allowed
Limited
Assigned only
Own data only
Admin only
Owner only
Not allowed
System only
```

### 5. Data Domain Permission Matrix

Create a more detailed matrix by data domain.

Include these domains:

- organizations
- users/auth profiles
- leads
- customers
- household members
- properties
- gate codes/access instructions
- pets/dog treat permissions
- water bodies
- water body relationships
- equipment/system type
- pool outlines
- service points/markers
- service point internal notes
- service point customer-friendly notes
- routes
- route stops
- technician route progress
- service visits
- checklists
- service photos
- chemistry readings
- chemical dosages
- reports
- report comments
- customer questions/conversations
- requests
- quotes
- quote approvals/signatures
- repair jobs
- repair reports
- billing customers
- payment methods
- invoices
- payments
- products/deals
- notification preferences
- notification delivery logs
- analytics
- customer profitability
- route profitability
- audit logs
- data export requests
- account deletion requests
- admin view-as/impersonation events

For each domain, define access for:

- owner_admin
- admin
- technician
- customer
- household_member
- lead
- system_service

### 6. Critical Deny Rules

List explicit non-negotiable deny rules, including:

- technician cannot see billing status
- technician cannot see payment methods
- technician cannot see customer profitability
- technician cannot see route profitability
- technician cannot see quote margin or internal pricing strategy
- customer cannot see internal notes
- household member cannot access data unless invited
- lead cannot access service history before conversion
- customer cannot see other customers on the route
- customer cannot see exact technician GPS in V1
- customer cannot see another customer's property/photos/reports
- deal targeting rules cannot expose other customers' equipment/profile data

### 7. Sensitive Action Audit Requirements

Define which actions must create audit logs:

- viewing gate code/access instructions
- changing gate code/access instructions
- viewing payment-related details
- creating/updating quote
- approving/declining quote
- capturing typed signature
- charging payment method
- publishing report
- correcting report before customer opens
- deleting report/comment/photo
- route stop reorder
- marking stop skipped/delayed/gate locked/aggressive dog/weather issue/rescheduled
- admin view-as customer
- data export request
- account deletion request
- notification sent for critical status
- household invitation accepted/removed

### 8. API Guard Expectations

Define future implementation expectations:

- all API endpoints must enforce organization scope
- all customer endpoints must use customer ownership checks
- all household endpoints must use invitation/membership checks
- all technician endpoints must use assignment checks
- all admin endpoints must use admin/owner checks
- all sensitive views/actions must emit audit logs
- response serializers must strip fields the role should not see

### 9. Examples Using Paul

Include examples such as:

- Paul can see his reports, chemistry, pool outline, quotes, invoices, and Cooper's pet profile.
- Megan can see Paul’s property data only if invited.
- Paul’s technician can see Cooper’s treat permission and gate code for the assigned stop.
- Paul’s technician cannot see Paul’s billing status or quote margin.
- Paul can see “2 stops before you” and ETA, but not other customer names/addresses.
- Paul can approve a quote with checkbox and typed signature.
- Admin can create the quote, see approval status, and manage billing.

### 10. Open Questions / Future Decisions

List unresolved implementation details that should be decided later, such as:

- exact 2FA enforcement policy by role
- whether admin view-as is mobile, admin dashboard, or both
- exact retention policy for technician access logs
- full SaaS tenant packaging later
- offline technician permission caching later

## Build Prompt For Codex

```txt
Execute S00-006 only.

Create docs/security/permission-matrix.md as the authoritative permission matrix for the Shipwrecked Pools app.

Use docs/product/mission.md, docs/product/paul-story.md, docs/product/v1-scope.md, AGENTS.md, and relevant folder-level AGENTS.md files as context.

This is documentation-only. Do not modify app code, backend code, database files, package files, auth implementation, billing implementation, or unrelated files.

The permission matrix must be specific to Shipwrecked Pools and must include the roles, data domains, deny rules, audit requirements, API guard expectations, and Paul examples listed in this prompt pack.

After creating the document, update docs/prompt-packs/STATUS_BOARD.md for S00-006 and create docs/handoffs/S00-006-create-permission-matrix-doc.md.
```

## Bite-Sized Implementation Steps

1. Read the project mission, Paul story, V1 scope, root AGENTS.md, and relevant folder AGENTS.md files.
2. Create `docs/security/permission-matrix.md` with the required sections.
3. Make the matrix detailed enough to guide future backend and frontend implementation.
4. Include explicit allow/deny rules for each role.
5. Include Paul-specific examples.
6. Update `docs/prompt-packs/STATUS_BOARD.md` for S00-006.
7. Create `docs/handoffs/S00-006-create-permission-matrix-doc.md`.
8. Self-review the diff.

## Acceptance Criteria

S00-006 is complete only if:

- `docs/security/permission-matrix.md` exists.
- The document includes all required roles.
- The document includes high-level role capability summary.
- The document includes detailed data domain matrix.
- The document includes critical deny rules.
- The document includes sensitive action audit requirements.
- The document includes future API guard expectations.
- The document includes Paul examples.
- The document is specific to Shipwrecked Pools, not generic SaaS boilerplate.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-006.
- `docs/handoffs/S00-006-create-permission-matrix-doc.md` exists.
- No app/API/database/package/auth/billing implementation files were changed.

## Codex Self-Review Prompt

```txt
Self-review S00-006.

Check:
1. Did you execute only S00-006?
2. Did you create docs/security/permission-matrix.md?
3. Did you avoid app/API/database/package/auth/billing implementation changes?
4. Did you include all required roles?
5. Did you include all required data domains?
6. Did you include explicit technician deny rules for billing, payment, profitability, quote margin, and sensitive admin-only data?
7. Did you include customer and household data isolation rules?
8. Did you include gate code/access audit requirements?
9. Did you include quote approval, typed signature, payment, report correction, route reorder, notification, export, deletion, and admin view-as audit requirements?
10. Did you include route privacy rules showing stops-before-you and ETA but not exact GPS or other customer details?
11. Did you include examples using Paul, Megan, Cooper, and the assigned technician?
12. Did you update STATUS_BOARD.md for S00-006?
13. Did you create the S00-006 handoff note?
14. Is the doc specific to Shipwrecked Pools and future Skimmer replacement?

Fix any material issues before reporting completion.
```

## Handoff Note Requirements

Create:

```txt
docs/handoffs/S00-006-create-permission-matrix-doc.md
```

The handoff note must include:

- Pack ID and title
- Files created
- Files modified
- Summary of permission decisions
- Critical deny rules added
- Audit requirements added
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
git commit -m "Complete S00-006 permission matrix doc"
```
