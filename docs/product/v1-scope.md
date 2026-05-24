# Shipwrecked Pools App V1 Scope

## Purpose of This Scope Document

This document defines what belongs in each phase of delivery so Shipwrecked can launch a high-confidence product without overbuilding or shipping a diluted experience. It is the reference for deciding whether features belong in internal demo, friendly beta, V1 launch, post-V1 Skimmer replacement, or later SaaS/valuation work.

## Product Priorities

- Deliver one true role-based mobile app experience (not a PWA) for customers, technicians, and owner/admin.
- Prioritize customer experience over internal tooling in early phases (roughly 75% customer experience, 25% internal operations).
- Preserve the path to full Skimmer replacement while accepting staged migration.
- Treat the custom top-down pool outline as mandatory in beta/V1, not optional polish.
- Keep V1 questions human-answered by Shipwrecked staff, not AI.
- Enforce role boundaries: technicians can see operational data but not billing, pricing, profitability, or sensitive business financial data.

## Internal Demo Scope

The internal demo must prove Shipwrecked can deliver the core story for Paul-style usage.

Internal demo must prove:

- Paul can exist as a customer record.
- Megan can exist as a household member.
- Cooper can exist as Paul’s dog.
- Cooper has dog treat permission.
- Paul has a property record.
- Paul has pool data and connected/spa-separate capability.
- Paul has a custom top-down pool outline.
- Paul’s outline includes service point markers.
- Paul can see basic pool status.
- Paul can see a seeded demo/past report.
- Paul can see chemistry readings.
- Paul can see a pending quote.
- Paul can see seeded route progress.

## Friendly Customer Beta Scope

The 3–5 customer beta is the first real-world validation phase and must include:

- True mobile app access.
- Customer account creation and login.
- 2FA setup path or prompt.
- Customer profile management basics.
- Household invitation flow.
- Property and access details.
- Pet profile and treat permission.
- Pool/spa setup.
- Custom top-down pool outline.
- Service point markers with customer-friendly status context.
- Route progress with stops-before-you and ETA (no exact live GPS exposure).
- Weekly maintenance reports.
- Required report photos.
- Chemistry readings with plain-English summaries.
- Report comments.
- Customer questions answered by Shipwrecked humans.
- Quote/request flow.
- Basic repair approval flow.
- Notification preferences.
- Service/report/quote notifications.
- Basic admin dashboard for operations.
- Basic technician workflow support.
- Technician route-start safety reminder acknowledgment.
- Technician arrival internal pop-up acknowledgment before service begin.
- Context-aware chat entry points with explicit customer context confirmation.
- Asynchronous technician chat only (no live chat expectation).
- Before/after photo pairing with required labels.
- Admin ability to hide uploaded photos from customer view.

## V1 Launch Scope

V1 launch includes all beta capabilities plus launch-critical business workflows:

- Stable billing and payment method support.
- Invoice and payment visibility for customer/admin roles.
- Quote approval flow with approval action, checkbox, typed signature, audit log, and payment method charge.
- Repair job creation after approval.
- Separate repair reports.
- Separate green-to-clean reports.
- Product/deal notifications with independent opt-out.
- Route exception notifications.
- Admin management for routes, customers, reports, quotes, repairs, and billing.
- Master-job workflows for non-weekly/non-biweekly work as internal grouping objects, including per-visit reports and final summary reports.
- Commercial account support as separate customer type with admin-reviewed compliance export workflow before email delivery.
- Suggested chemical guidance workflow: required-data gating, technician edit + applied amount tracking, and admin-only recommendation table editing.
- Terms and privacy acceptance tracking.
- Account deletion request path.
- Basic customer data export path.
- Audit logging for sensitive actions.

## Post-V1 / Skimmer Replacement Scope

Post-V1 focuses on deeper operational replacement of Skimmer and migration resilience:

- Full route management workflows.
- Full service report replacement coverage.
- Deeper photo/report/chemistry history and retrieval.
- Billing migration and reconciliation support.
- Maintenance plans and lifecycle workflows.
- Expanded technician operations tooling.
- Internal CRM depth improvements.
- Customer migration tooling.
- Structured Skimmer parallel-period and cutover plan.
- Operational analytics for quality and throughput.
- Expanded commercial reporting templates and policy-specific compliance exports.

## Later SaaS and Valuation Layer

Later phases can expand to strategic platform and valuation capabilities:

- Multi-tenant SaaS hardening.
- Advanced analytics and benchmarking.
- Route and customer profitability analytics.
- Local pool-system database insights.
- Product recommendation intelligence.
- Quote conversion analytics.
- Repair revenue analytics.
- Robot sales analytics.
- Automation and AI-assisted internal suggestions.

## Explicitly Out of Scope for Beta

- Full Skimmer replacement cutover.
- Advanced profitability analytics.
- Multi-tenant SaaS controls.
- Fully mature billing migration operations.
- Deep automation or AI-assisted customer answer workflows.
- Nice-to-have UI polish that does not improve confidence or clarity.

## Explicitly Out of Scope for Initial V1

- Complete SaaS commercialization and tenant self-serve tooling.
- Advanced valuation dashboards and investor-grade analytics suites.
- Full automation of internal decision workflows.
- Non-essential experimental features that weaken launch focus.

## Non-Negotiable V1 Requirements

- True single role-based mobile app delivery (not PWA).
- Support for both customers and leads.
- Custom top-down pool outline in beta and V1.
- Route progress with stops-before-you and ETA, not exact GPS surveillance.
- Support for connected and separate bodies of water (pool/spa).
- Weekly maintenance, repair, and green-to-clean reports as separate report types.
- Human-answered customer questions in V1.
- Quote/repair approval workflow with explicit customer consent artifacts.
- Billing/payment support by launch.
- Deal notifications independently toggleable from essential service notifications.
- Strict role boundaries that block technician access to billing/pricing/profitability and sensitive financial data.
- Technician service completion restrictions enforce no completion submissions between 9:00 PM and 8:00 AM local time.

## Beta-Critical Feature List

- Account access and baseline security prompting (including 2FA path).
- Customer/household/property/access/pet onboarding.
- Pool/spa data with custom outline and service markers.
- Route progress visibility with ETA and stops-before-you.
- Weekly report flow with photos, chemistry, and plain-language context.
- Human question-and-answer channel.
- Quote/request and basic repair approval path.
- Notification preferences and essential service notifications.
- Basic admin and technician operational flows.

## Launch-Critical Feature List

- Reliable billing/payment method support and invoice visibility.
- Full quote approval controls: action, checkbox, typed signature, audit event, payment method charge.
- Repair job creation and separate repair reporting.
- Separate green-to-clean report workflow.
- Deal notification delivery with independent opt-out.
- Route exception notification handling.
- Expanded admin workflows for operational control.
- Master-job visibility and reporting model where master jobs stay internal while customers receive visit-level and final summary reporting in normal history/report flows.
- Commercial compliance exports with mandatory admin review prior to outbound email.
- Suggested chemical guidance controls with internal-only recommendation visibility.
- Customer-confirmed context-aware chat routing and automatic reopen of closed chats when customers reply.
- Privacy/terms acceptance records, deletion request, basic export, and sensitive-action auditing.

## Feature Deferral Rules

- Defer any feature that does not clearly improve customer confidence, operational reliability, compliance, or launch readiness.
- Defer if the feature depends on unstable architecture not yet validated by beta.
- Defer if the feature is analytics-heavy but provides low immediate customer/operations value for beta/V1.
- Defer if adding it risks delaying non-negotiable V1 requirements.
- Defer if it can run safely during post-V1 Skimmer migration without customer harm.

## Scope Decision Checklist for Future Prompt Packs

Use this checklist before implementing any new prompt pack:

- Does this feature belong to internal demo, beta, launch, post-V1, or later SaaS?
- Does it directly improve customer confidence or critical operations?
- Is it required for a non-negotiable V1 requirement?
- Does it violate role/privacy boundaries?
- Does it assume exact GPS exposure where stops-before-you + ETA is the intended model?
- Does it preserve separate report types (maintenance vs repair vs green-to-clean)?
- Does it preserve support for connected/separate water-body configurations?
- Does it introduce AI for V1 customer questions (if yes, reject for V1 scope)?
- Could it be deferred with low customer/business risk?
- If included now, what launch-critical outcome does it unlock?
