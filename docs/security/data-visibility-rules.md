# Shipwrecked Pools Data Visibility Rules

## 1. Purpose

This document defines what data may be displayed to each role and how data must be transformed before display.

`docs/security/permission-matrix.md` defines role access and action authorization. This document defines field-level and display-level visibility, including note separation, masking, customer-safe language, and serializer behavior.

## 2. Data Visibility Levels

### `public_marketing`

- Who can see it: Anyone, including non-authenticated visitors.
- Example fields: Public service descriptions, generic feature marketing copy.
- Risks: Overpromising features not delivered yet.
- Implementation notes: Keep separate from customer/account data tables.

### `lead_visible`

- Who can see it: The lead and authorized internal staff.
- Example fields: Lead contact profile, request status, onboarding progress.
- Risks: Accidental exposure of customer-only records before conversion.
- Implementation notes: Enforce lead-only ownership checks until conversion.

### `customer_visible`

- Who can see it: Authenticated customer on their own account scope.
- Example fields: Customer profile, published reports, own chemistry and quotes.
- Risks: Cross-customer leakage.
- Implementation notes: Always apply organization + customer ownership filters.

### `household_visible`

- Who can see it: Invited household members after acceptance.
- Example fields: Shared property data, pool status, report history per invitation.
- Risks: Household member receiving access before invite acceptance.
- Implementation notes: Require accepted invitation/membership and permission flags.

### `technician_visible`

- Who can see it: Assigned technician for assigned stops/work.
- Example fields: Gate code, pet/treat notes, checklist, assigned stop history.
- Additional examples: Master-job association status, route-start safety reminder, arrival pop-up acknowledgment prompt.
- Risks: Technician seeing non-assigned customer or financial data.
- Implementation notes: Require assignment checks on every read/write.

### `admin_visible`

- Who can see it: Admin and owner roles.
- Example fields: Route management views, billing operations, quote workflows.
- Risks: Broad internal data exposure without need-to-know controls.
- Implementation notes: Keep owner-only categories explicitly excluded.

### `owner_only`

- Who can see it: Owner/admin role only (`owner_admin`).
- Example fields: Route profitability, customer profitability, sensitive strategy notes.
- Risks: Margin strategy leakage inside team.
- Implementation notes: Dedicated owner checks; do not inherit via general admin role.

### `system_only`

- Who can see it: Service principals only, not human UI roles.
- Example fields: Webhook payload internals, delivery pipeline metadata.
- Risks: Internal service metadata leaking into UI/API responses.
- Implementation notes: Never serialize directly to client apps.

### `audit_only`

- Who can see it: Authorized audit reviewers (owner/admin per policy).
- Example fields: Gate-code access events, admin view-as logs, deletion events.
- Risks: Tampering or silent access to sensitive action history.
- Implementation notes: Immutable append-only logging with actor + context.

### `masked`

- Who can see it: Roles allowed to reference value but not full raw value.
- Example fields: Payment method display (`**** 4242`), partial tokens.
- Risks: Re-identification if masking is weak.
- Implementation notes: Store raw sensitive data only in compliant providers; expose masked projection.

### `never_customer_visible`

- Who can see it: Internal roles only; never customers/household.
- Example fields: Internal notes, cost basis, margin strategy, internal QA flags.
- Risks: Trust breach if leaked into customer report/app views.
- Implementation notes: Explicit serializer deny list for customer/household roles.

### `never_technician_visible`

- Who can see it: Owner/admin/system only.
- Example fields: Billing status, payment records, profitability, margin strategy.
- Risks: Financial and privacy boundary violations.
- Implementation notes: Role guards plus response filtering; add regression tests.

## 3. Note Types

Every note-like field added in future work must declare a note type and a visibility level.

### `customer_friendly_note`

- Purpose: Plain-language message safe for customers.
- Visibility: `customer_visible`, `household_visible`, `admin_visible`, `owner_only`.
- Example: "Light staining near the return jet is being monitored."

### `technician_operational_note`

- Purpose: Field execution guidance for assigned technicians.
- Visibility: `technician_visible`, `admin_visible`, `owner_only`.
- Example: "Check return jet marker during next visit; customer asked about staining."

### `admin_internal_note`

- Purpose: Internal service/account handling context.
- Visibility: `admin_visible`, `owner_only`.
- Example: "Customer prefers detailed explanations before approving repairs."

### `owner_financial_note`

- Purpose: Sensitive financial strategy and margin context.
- Visibility: `owner_only`.
- Example: "High-margin repair opportunity; review pricing before sending."

### `system_generated_note`

- Purpose: Automated operational/system messages.
- Visibility: Depends on destination role; default `system_only` until mapped.
- Example: "Route exception notification queued for delivery."

### `audit_note`

- Purpose: Security/compliance event record.
- Visibility: `audit_only`.
- Example: "Gate code viewed by technician at 12:41 PM."

## 4. Customer-Facing Data Rules

Customers may see:

- Their own profile.
- Their household members.
- Their property/address.
- Their own pet profile and dog treat permission.
- Their own pool/spa/water body profiles.
- Customer-friendly equipment info.
- Their published pool outline.
- Customer-visible service points.
- Customer-friendly marker notes.
- Weekly maintenance reports.
- Repair reports.
- Green-to-clean reports.
- Master-job-related visit reports and final summary reports through normal report/history flows.
- Chemistry readings and plain-English explanations.
- Service photos included in their reports.
- Quote requests and quotes sent to them.
- Quote approvals/declines.
- Invoices/payment history tied to their account.
- Notification preferences.
- Deal/product recommendations targeted to their pool type.
- Conversations/questions they started or that are shared with them.

Customers must not see:

- Internal notes.
- Technician-only notes.
- Admin-only notes.
- Owner financial notes.
- Route details for other customers.
- Exact technician GPS in V1.
- Other customer identities/addresses/photos.
- Internal route profitability.
- Quote margin/cost basis.
- Employee compensation/commission assumptions.
- Internal master-job rollup objects (cost, margin, profitability).
- Internal chemical recommendation suggestions.
- Internal technician arrival pop-ups or safety reminders.
- Audit logs (except possible limited customer activity view in a future explicit pack).

## 5. Household Member Visibility Rules

Household members can view customer/property data only after invitation and acceptance.

Baseline default visibility after invite acceptance:

- Reports: Yes.
- Chemistry: Yes.
- Pool outline: Yes.
- Route progress: Yes (same privacy limits as customer).
- Pet profile: Yes.
- Quotes: View by default; approval authority configurable.
- Invoices: View configurable.
- Payment methods: Masked view configurable; edit authority restricted by account owner/admin policy.
- Notification preferences: Separate household-level preferences.

Policy rule:

- Service/report/pool status should be visible by default.
- Billing/payment authority and quote approval authority must be configurable by customer/admin controls.

## 6. Technician Visibility Rules

Assigned technicians may see:

- Assigned route and stops.
- Customer name.
- Customer phone number.
- Service address.
- Gate code/access notes.
- Pet/dog notes and treat permission.
- Arrival reminders.
- Pool/spa profile.
- Equipment profile needed for service.
- Required checklist.
- Relevant service history.
- Customer questions assigned to them.
- Service point statuses/technician notes needed for work.
- Previous service/repair notes necessary for assigned work.
- A visit-level indicator that work belongs to a master job.
- Arrival pop-ups and route-start safety reminders requiring acknowledgment.
- Suggested chemical guidance only after required readings/data are complete.

Technicians must not see:

- Billing status.
- Invoices.
- Payment methods.
- Customer profitability.
- Route profitability.
- Quote margin.
- Internal admin-only notes.
- Owner financial notes.
- Deal revenue/margin details.
- Other technicians' compensation assumptions.
- Master-job profitability, margin, internal costs, or billing status.
- Customer-visible billing/payment details for any account.
- Chemical recommendation table administration controls.

## 7. Admin / Owner Visibility Rules

Admins can manage operations, customers, reports, routes, quotes, repairs, deals, and billing workflows needed to run Shipwrecked service.

Owner-only visibility includes:

- Customer profitability.
- Route profitability.
- Company-level financial analytics.
- Sensitive business strategy notes.
- Compensation/margin strategy (if added later).

## 8. Lead Visibility Rules

Leads can see before conversion:

- Their own lead profile.
- Onboarding steps.
- Basic request/quote status.
- Communication from Shipwrecked.
- Uploaded pool photos they submitted.

Leads cannot see before conversion:

- Service history.
- Reports.
- Route progress.
- Technician details.
- Internal review notes.
- Customer-only app features until approved/converted.

## 9. Route Progress Privacy Rules

- Customer sees service day status.
- Customer sees stops-before-you and ETA.
- Customer may see route-progress visualization.
- Customer should not see exact GPS in V1.
- Customer should not see tech lunch/gas/restroom breaks.
- Customer should not see other customer names/addresses.
- Status feed ends after service is complete.
- Route exception notifications must be customer-safe and must not reveal other customers.

## 10. Photo Visibility Rules

Photo categories in scope:

- Customer-uploaded onboarding photos.
- Technician service photos.
- Gate arrival/departure photos.
- Deep end / shallow end / steps / spa photos.
- Equipment photos.
- Filter pressure photos.
- Repair before/after photos.
- Internal-only issue photos.
- Admin-only photos where required.

Rules:

- Photos must be scoped to organization/customer/property/water body/service visit/report.
- Customer sees only photos attached to their own reports/quotes/repairs or profile.
- Technician sees only photos relevant to assigned/current work.
- Admin sees operationally relevant photos.
- Hidden/deleted photos should preserve required audit/history records.
- Before/after pairs are manually created by technician or admin and require labels.
- Admin may hide uploaded photos from customer view; hidden state and actor must be auditable.

## 11. Report Visibility Rules

Report types and visibility:

- Weekly maintenance reports: customer-visible after publish.
- Repair reports: customer-visible after publish, separate from weekly maintenance.
- Green-to-clean reports: customer-visible after publish as separate report class.
- Inspection reports: visibility determined by publish target; customer-visible only when published for customer.
- Internal draft reports: internal-only until explicit publish action.
- Corrected reports: customer-visible latest revision; corrections tracked.

Additional rules:

- Reports are customer-visible after publishing.
- Report comments are customer-visible unless explicitly marked internal-only.
- Admin correction before customer opens must be tracked/audited.
- Internal notes used to generate report content must never leak into customer report text.

## 12. Quote / Repair / Billing Visibility Rules

Visibility coverage:

- Quote request: customer/household/admin visible within account scope.
- Quote draft: admin/owner internal; technician only sees operational instruction subset when assigned.
- Quote sent: customer-visible line items and totals sent to that account.
- Quote approved: customer + admin + owner visible; auditable state transition.
- Checkbox approval and typed signature: visible to customer/admin/owner and auditable.
- Payment method reference: customer/admin/owner with masking.
- Invoice/payment history: customer/household (per authority scope), admin/owner.
- Declined quotes: customer/admin/owner visible with reason where provided.
- Repair job and repair report: customer-facing once published; technician operational visibility when assigned.
- Before/after photos: customer-visible when part of customer repair report.
- Master-job financial rollups: admin/owner only.
- Master-job customer views: visit reports and final summary reports in standard report/history surfaces (not a generic master-job page).

Rules:

- Customer sees quote amount and line items sent to them.
- Technician may see work instructions but not margin/pricing strategy.
- Payment methods should be masked.
- Raw card details must never be stored or displayed.
- Approvals must be auditable.

## 13. Deals / Product Recommendation Visibility Rules

- Customers only see deals eligible for their pool/equipment type.
- Deal targeting must not expose hidden customer data.
- Customers can turn off deal/product notifications while keeping service-critical notifications.
- Admin can create/manage deals.
- Technician should not see revenue/margin details unless explicitly allowed in a future pack.

## 14. Notification Visibility Rules

- Notification content must be role-safe.
- Push/SMS/email fallback must not include sensitive gate code or billing details.
- Notification logs may be admin-visible.
- Customers can manage notification categories.
- Household members have separate notification preferences.

## 14A. Commercial Export Visibility Rules

- Commercial exports require explicit admin review/approval before outbound email.
- Export recipients may include property managers and health department inspectors.
- Export payloads must exclude billing details, profitability, internal notes, and unrelated customer/property data.
- Export-send actions and approvals must be auditable.

## 14B. Technician Reminder/Pop-Up Visibility Rules

- Arrival pop-ups are internal-only and must be acknowledged before service can begin.
- Safety reminders appear at route start, are internal-only, and require acknowledgment.
- Customer and household roles cannot view reminder/popup contents or acknowledgment logs.

## 14C. Chemical Recommendation Visibility Rules

- Suggested chemical amounts are internal guidance only.
- Customers view only actual applied chemicals and plain-English explanation.
- Admin can review suggested amount, technician-edited amount, applied amount, and follow/edit behavior.
- Chemical recommendation table editing is admin/owner only.
- Suggestions must be blocked when required profile/readings data is incomplete.

## 14D. Context-Aware Chat Visibility Rules

- Customer must explicitly confirm whether context from the current screen should be attached.
- Context must never auto-attach without customer confirmation.
- Technician chat is asynchronous only and limited to active/recent assigned context.
- Admin can intercept, triage, reassign, and respond across all chats.
- Internal chat notes are clearly marked and never customer-visible.
- Closed chats automatically reopen when a customer sends a reply.

## 15. Multi-Tenant / Future SaaS Visibility Rules

All future data models and reads must remain organization-scoped to preserve multi-tenant SaaS optionality.

No role should ever query or render cross-organization data unless explicit cross-tenant support is added in a future controlled pack.

## 16. Paul Examples

- Pool outline marker note: Paul sees customer-friendly marker text; technician sees operational note; admin can see internal context; owner can also see financial strategy notes if present.
- Technician route progress: Paul and Megan see "stops before you" + ETA only; assigned technician sees full operational stop sequence; admin sees route operations; owner sees same plus profitability dashboards.
- Weekly report: Paul and Megan see published weekly report with photos and plain-English chemistry; technician sees assigned execution context; admin/owner can inspect internal draft and correction metadata.
- Quote approval: Paul can approve with action + checkbox + typed signature; Megan approval rights depend on invitation authority settings; technician can see approved work instructions only; admin/owner can see approval audit chain.
- Repair report: Paul sees before/after evidence tied to his property; assigned technician sees only necessary repair context; admin/owner can see full repair workflow record.
- Gate code: Assigned technician can view for active stop; Paul can view his own access data; admin/owner can manage access data; all views are auditable.
- Dog treat permission: Paul and Megan see Cooper's preference; assigned technician sees it for safe visit execution; admin/owner can edit policy context.
- Robot deal notification: Paul receives a pool-compatible robot offer; offer eligibility does not reveal other customers' data.
- Turning off deal notifications: Paul can disable deal/product notifications while still receiving service, route, report, and quote-critical notifications.

## 17. Implementation Rules For Future Codex Tasks

Future prompt-pack implementations must:

- Declare visibility level for every new field.
- Separate internal and customer-facing notes at schema and serializer boundaries.
- Serialize API responses by role and scope.
- Avoid exposing hidden fields in mobile/admin screens.
- Add customer data-isolation tests.
- Add technician no-billing/no-profitability access tests.
- Add tests for customer context-confirmation behavior before chat context attachment.
- Add tests enforcing asynchronous technician chat expectations.
- Add tests ensuring chemical recommendation suggestions are never customer-visible.
- Log sensitive access (gate code, payment visibility, approval actions, admin view-as, export/deletion requests).

These rules are mandatory for Shipwrecked’s Skimmer-replacement direction and customer trust outcomes.
