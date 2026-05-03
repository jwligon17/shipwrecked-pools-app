# Shipwrecked Pools Permission Matrix

## 1. Purpose
This document is the access-control source of truth for Shipwrecked Pools across the mobile customer app, technician app role, admin dashboard, backend API, database access patterns, billing/payment workflows, route management, report workflows, quote/repair workflows, notifications, CRM/history, and future multi-tenant SaaS expansion.

This matrix is the contract future implementation must enforce in auth guards, endpoint serializers, UI visibility, query scoping, and audit logging.

## 2. Core Principles
- Organization-scoped data from day one.
- Customers can only access their own data.
- Household members can only access invited customer/property data.
- Technicians can only access assigned route/stop/customer operational data.
- Technicians cannot access billing, payment data, quote margin, customer profitability, route profitability, or sensitive admin-only CRM notes.
- Customer-facing content must use customer-friendly notes.
- Internal notes must not leak to customers.
- Exact technician GPS is not customer-visible in V1; customers see route progress, stops-before-you, and ETA.
- Access to gate codes and sensitive access instructions must be logged.
- Quote approvals, payment events, report publishing/corrections, account deletion/export, and admin view-as events must be auditable.

## 3. Roles
### `owner_admin`
- Description: Business owner with full organization authority.
- Main responsibilities: Financial oversight, policy decisions, exceptions, risk controls.
- Generally sees: All organization operational and financial data, including audit data.
- Generally does not see: Cross-organization data outside authorized tenant scope.

### `admin`
- Description: Internal operations/admin staff role.
- Main responsibilities: Day-to-day operations, customer/admin workflows, route/report/quote/billing operations.
- Generally sees: Most operational and billing data required to run service.
- Generally does not see: Owner-only strategic profitability rollups and margin-sensitive strategy views where explicitly owner-restricted.

### `technician`
- Description: Field service operator.
- Main responsibilities: Assigned stop execution, chemistry, photos, report inputs, customer-safe communication.
- Generally sees: Assigned route stops, property access context, pet/treat notes, service history needed to perform work.
- Generally does not see: Billing/payment details, profitability data, quote margin/pricing strategy, admin-only CRM notes.

### `customer`
- Description: Paying household account holder.
- Main responsibilities: Review service outcomes, manage approvals, billing actions, communication.
- Generally sees: Own household/property/service records, quotes, invoices, reports, notifications.
- Generally does not see: Other customers, internal-only notes, technician exact GPS, internal profitability/admin data.

### `household_member`
- Description: Invited household participant (for example Megan).
- Main responsibilities: Shared household visibility/actions per invitation scope.
- Generally sees: Invited customer/property/service/billing views allowed by inviter policy.
- Generally does not see: Any data not explicitly granted by invitation/membership; cross-customer data.

### `lead`
- Description: Pre-conversion contact/prospect.
- Main responsibilities: Intake, onboarding progression, quote/request initiation pre-customer conversion.
- Generally sees: Own lead profile, intake status, allowed pre-customer communications.
- Generally does not see: Service history, route history, full customer artifacts before conversion.

### `system_service`
- Description: Trusted non-human service principal.
- Main responsibilities: Background workflows (notifications, billing sync, audit pipelines, exports).
- Generally sees: System-scoped data needed for approved job context.
- Generally does not see: Interactive UI access; unrestricted reads outside job-scoped policy.

## 4. Role Capability Summary
| Role | Create account | Manage organization settings | Manage leads/customers | Manage household members | View customer profile | View property/access notes | View gate codes | View pet/dog treat notes | View assigned route | Reorder route stops | Complete service visits | Enter chemistry | Upload service photos | Create technician recommendations | Publish/modify reports | Create quotes | Approve quotes | View billing/payment data | Charge payment method | View profitability | Manage deals/products | Request data export/deletion | View audit logs |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| owner_admin | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed |
| admin | Allowed | Limited | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Allowed | Limited | Allowed | Allowed | Admin only | Allowed | Allowed | Limited |
| technician | Allowed | Not allowed | Limited | Not allowed | Assigned only | Assigned only | Assigned only | Assigned only | Assigned only | Limited | Allowed | Allowed | Allowed | Allowed | Limited | Limited | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed |
| customer | Allowed | Not allowed | Own data only | Limited | Own data only | Own data only | Own data only | Own data only | Own data only | Not allowed | Not allowed | Own data only | Own data only | Not allowed | Not allowed | Own data only | Allowed | Own data only | Allowed | Not allowed | Limited | Allowed | Not allowed |
| household_member | Allowed | Not allowed | Not allowed | Limited | Own data only | Own data only | Own data only | Own data only | Own data only | Not allowed | Not allowed | Own data only | Own data only | Not allowed | Not allowed | Own data only | Limited | Own data only | Limited | Not allowed | Limited | Allowed | Not allowed |
| lead | Allowed | Not allowed | Own data only | Not allowed | Own data only | Limited | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Not allowed | Limited | Not allowed | Not allowed | Not allowed | Not allowed | Limited | Allowed | Not allowed |
| system_service | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only | System only |

## 5. Data Domain Permission Matrix
Legend: `Allowed`, `Limited`, `Assigned only`, `Own/Invited only`, `Not allowed`, `System only`.

| Data Domain | owner_admin | admin | technician | customer | household_member | lead | system_service |
|---|---|---|---|---|---|---|---|
| organizations | Allowed | Limited | Not allowed | Not allowed | Not allowed | Not allowed | System only |
| users/auth profiles | Allowed | Limited | Assigned only | Own/Invited only | Own/Invited only | Own/Invited only | System only |
| leads | Allowed | Allowed | Limited | Not allowed | Not allowed | Own/Invited only | System only |
| customers | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| household members | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| properties | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Limited | System only |
| gate codes/access instructions | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| pets/dog treat permissions | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| water bodies | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| water body relationships | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| equipment/system type | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Limited | System only |
| pool outlines | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Limited | System only |
| service points/markers | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| service point internal notes | Allowed | Allowed | Assigned only | Not allowed | Not allowed | Not allowed | System only |
| service point customer-friendly notes | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| routes | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| route stops | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| technician route progress | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| service visits | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| checklists | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| service photos | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| chemistry readings | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| chemical dosages | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| reports | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| report comments | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| customer questions/conversations | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Limited | System only |
| requests | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Own/Invited only | System only |
| quotes | Allowed | Allowed | Assigned only (no margin view) | Own/Invited only | Own/Invited only | Limited | System only |
| quote approvals/signatures | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only (if delegated) | Not allowed | System only |
| repair jobs | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| repair reports | Allowed | Allowed | Assigned only | Own/Invited only | Own/Invited only | Not allowed | System only |
| billing customers | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only | Not allowed | System only |
| payment methods | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only (view masked) | Not allowed | System only |
| invoices | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only | Not allowed | System only |
| payments | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only | Not allowed | System only |
| products/deals | Allowed | Allowed | Limited | Own/Invited only | Own/Invited only | Limited | System only |
| notification preferences | Allowed | Allowed | Assigned only (operational only) | Own/Invited only | Own/Invited only | Own/Invited only | System only |
| notification delivery logs | Allowed | Limited | Not allowed | Limited (own event receipts only) | Limited (own event receipts only) | Not allowed | System only |
| analytics | Allowed | Limited | Not allowed | Not allowed | Not allowed | Not allowed | System only |
| customer profitability | Allowed | Admin only | Not allowed | Not allowed | Not allowed | Not allowed | System only |
| route profitability | Allowed | Admin only | Not allowed | Not allowed | Not allowed | Not allowed | System only |
| audit logs | Allowed | Limited | Not allowed | Not allowed | Not allowed | Not allowed | System only |
| data export requests | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only | Own/Invited only | System only |
| account deletion requests | Allowed | Allowed | Not allowed | Own/Invited only | Own/Invited only | Own/Invited only | System only |
| admin view-as/impersonation events | Allowed | Limited | Not allowed | Not allowed | Not allowed | Not allowed | System only |

## 6. Critical Deny Rules
- Technician cannot see billing status.
- Technician cannot see payment methods.
- Technician cannot see customer profitability.
- Technician cannot see route profitability.
- Technician cannot see quote margin or internal pricing strategy.
- Customer cannot see internal notes.
- Household member cannot access data unless invited.
- Lead cannot access service history before conversion.
- Customer cannot see other customers on the route.
- Customer cannot see exact technician GPS in V1.
- Customer cannot see another customer's property/photos/reports.
- Deal targeting rules cannot expose other customers' equipment/profile data.

## 7. Sensitive Action Audit Requirements
The following actions must generate immutable audit events with actor, role, organization, target entity, timestamp, and outcome:
- Viewing gate code/access instructions.
- Changing gate code/access instructions.
- Viewing payment-related details.
- Creating/updating quote.
- Approving/declining quote.
- Capturing typed signature.
- Charging payment method.
- Publishing report.
- Correcting report before customer opens.
- Deleting report/comment/photo.
- Route stop reorder.
- Marking stop skipped/delayed/gate locked/aggressive dog/weather issue/rescheduled.
- Admin view-as customer.
- Data export request.
- Account deletion request.
- Notification sent for critical status.
- Household invitation accepted/removed.

## 8. API Guard Expectations
- All API endpoints must enforce organization scope.
- All customer endpoints must use customer ownership checks.
- All household endpoints must use invitation/membership checks.
- All technician endpoints must use assignment checks.
- All admin endpoints must use admin/owner checks.
- All sensitive views/actions must emit audit logs.
- Response serializers must strip fields the role should not see.

## 9. Examples Using Paul
- Paul can see his reports, chemistry history, custom pool outline, quotes, invoices, and Cooper's pet profile.
- Megan can see Paul’s property data only if Paul invited her as a household member.
- Paul’s assigned technician can see Cooper’s treat permission and gate code for that assigned stop.
- Paul’s technician cannot see Paul’s billing status, payment details, customer profitability, route profitability, or quote margin.
- Paul can see “2 stops before you” and ETA, but not other customer names or addresses.
- Paul can approve a quote using explicit approval action, confirmation checkbox, and typed signature.
- Admin can create the quote, monitor approval status, and manage billing operations.

## 10. Open Questions / Future Decisions
- Exact 2FA enforcement policy by role (required for all roles or staged by sensitivity).
- Whether admin view-as is allowed in mobile, admin dashboard, or both.
- Exact retention policy and access cadence controls for technician gate-code access logs.
- Full SaaS tenant packaging and cross-tenant operational support boundaries.
- Offline technician permission caching strategy and revocation timing guarantees.
