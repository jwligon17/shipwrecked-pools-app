# Feature Map

Purpose: Map major Shipwrecked feature families to roles, visibility surfaces, protected rules, sprint areas, prompt-pack categories, and dependencies so roadmap changes are applied relationally.

## Usage Rules

- Update this file whenever feature scope/priority/dependency changes.
- Keep mappings aligned with `MASTER_INDEX.md`, `DEPENDENCY_MAP.md`, and `PROTECTED_RULES.md`.
- Use this map before adding or changing prompt packs.

## Feature Mapping Matrix

### 1) Role-Based Single App

- Description: One true mobile app with role-based experiences for customer, household member, technician, and owner/admin.
- Roles involved: customer, household_member, technician, admin, owner_admin, lead, commercial contacts/export recipients (as scoped users).
- Customer-visible surface: customer/household app shell, account-scoped service/billing/conversation views.
- Technician-visible surface: technician operational shell with assignment-only context.
- Admin-visible surface: admin dashboard and owner-only financial views.
- Data objects likely needed: user, role_assignment, session, organization_membership, household_invite, lead_profile.
- Permission/data visibility concerns: strict role gates; technician financial-data deny rules; household invitation scope.
- Protected rules involved: #2, #3, #15, #19.
- Affected sprints: S03, S04, S07, S16, S19.
- Affected prompt-pack categories: auth/permissions, mobile shell, admin access control, audit/visibility tests.
- Dependencies: S02 identity/org schema -> S03 auth/role guards -> S07/S16 surfaces.
- Priority: Beta / V1.

### 2) Custom Pool Outline / Service Points

- Description: Minimal north-up operational pool outline with service markers linked to operational records.
- Roles involved: customer, household_member, technician, admin, owner_admin.
- Customer-visible surface: read-only outline + customer-safe service point history.
- Technician-visible surface: assigned service-point context and updates.
- Admin-visible surface: outline studio and service-point governance.
- Data objects likely needed: water_body, pool_outline, service_point, outline_marker_relationship, service_point_status_history.
- Permission/data visibility concerns: customer sees only own property; internal notes hidden from customer.
- Protected rules involved: #1, #2, #3.
- Affected sprints: S02, S05, S06, S07, S09, S10, S12, S19.
- Affected prompt-pack categories: schema, outline studio, serialization/visibility guards, regression tests.
- Dependencies: S02 water-body/outline/service-point schema -> S06 studio -> S07/S09/S10/S12 integrations.
- Priority: Beta / V1.

### 3) Routes / Technician Progress

- Description: Route progress with stops-before-you and ETA, no exact customer-facing live GPS.
- Roles involved: customer, household_member, technician, admin, owner_admin.
- Customer-visible surface: route-progress timeline, stops-before-you, ETA only.
- Technician-visible surface: assigned route, stop sequencing, status transitions.
- Admin-visible surface: route planning/reorder/exception controls.
- Data objects likely needed: route, route_stop, route_progress_event, eta_projection.
- Permission/data visibility concerns: no cross-customer identity leakage; customer-safe route exceptions.
- Protected rules involved: #4, #5.
- Affected sprints: S02, S08, S09, S14, S16, S19.
- Affected prompt-pack categories: route schema/API, customer progress UI, notification/event models, privacy tests.
- Dependencies: S02 route schema -> S08 route engine -> S09 execution -> S14 notifications.
- Priority: Beta / V1.

### 4) Technician Workflow

- Description: Assigned-stop workflow including access notes, arrival popups, safety reminders, photos, chemistry, and local-time completion restriction.
- Roles involved: technician, admin, owner_admin.
- Customer-visible surface: resulting reports/status only.
- Technician-visible surface: stop execution, checklists, required acknowledgments, completion actions.
- Admin-visible surface: author/manage popups/reminders and compliance review.
- Data objects likely needed: visit_checklist, arrival_popup, reminder_ack_log, service_completion_event.
- Permission/data visibility concerns: technician assignment-only data; no billing/profit visibility.
- Protected rules involved: #3, #14, #19.
- Affected sprints: S03, S08, S09, S10, S16, S19.
- Affected prompt-pack categories: technician UX/API, acknowledgment audit logs, time-window enforcement tests.
- Dependencies: S03 assignment guards -> S08 route context -> S09 workflow -> S10 report outcomes.
- Priority: Beta / V1.

### 5) Reports / Photos / Before-After

- Description: Distinct report types with required photos and before/after pairing controls.
- Roles involved: customer, household_member, technician, admin, owner_admin.
- Customer-visible surface: published maintenance/repair/green-to-clean/final-summary reports.
- Technician-visible surface: report inputs and photo capture/pairing.
- Admin-visible surface: report corrections and photo hide controls.
- Data objects likely needed: report, report_type, report_photo, before_after_pair, visibility_override.
- Permission/data visibility concerns: internal comments/photos never leak to customer; audit for publish/corrections/hide.
- Protected rules involved: #1, #2, #9.
- Affected sprints: S02, S09, S10, S12, S16, S19.
- Affected prompt-pack categories: report engine, media visibility, admin controls, audit/visibility tests.
- Dependencies: S02 report/photo schema -> S09 visit capture -> S10 report generation -> S16 admin review.
- Priority: Beta / V1.

### 6) Chemistry / Suggested Chemical Guidance

- Description: Exact readings plus internal recommendation workflow with customer-visible applied chemical explanations only.
- Roles involved: technician, admin, owner_admin, customer, household_member.
- Customer-visible surface: applied chemicals + plain-English explanation.
- Technician-visible surface: readings entry, suggested-vs-actual workflow.
- Admin-visible surface: recommendation table management, threshold overrides.
- Data objects likely needed: chemistry_reading, recommendation_output, applied_chemical_event, recommendation_table.
- Permission/data visibility concerns: recommendations/tables internal-only; customer never sees internal suggestions.
- Protected rules involved: #18.
- Affected sprints: S02, S09, S10, S16, S19.
- Affected prompt-pack categories: chemistry model, recommendation logic, serializer deny-list tests.
- Dependencies: S02 chemistry schema -> S10 chemistry/report engine -> S16 admin controls.
- Priority: V1.

### 7) Questions / Context-Aware Chat

- Description: Human-answered conversations with explicit context-attach confirmation and async technician messaging.
- Roles involved: customer, household_member, technician, admin, owner_admin, lead.
- Customer-visible surface: chat entry points + explicit context-confirmation UX.
- Technician-visible surface: asynchronous assigned-context threads.
- Admin-visible surface: triage/intercept/reassign, oversight of technician messaging.
- Data objects likely needed: conversation_thread, message, context_attachment, chat_assignment, internal_chat_note.
- Permission/data visibility concerns: no auto context attach; internal notes non-customer-visible.
- Protected rules involved: #8, #19.
- Affected sprints: S02, S03, S11, S16, S19.
- Affected prompt-pack categories: messaging schema/API, context confirmation UI, moderation/audit flows.
- Dependencies: S03 role/assignment guards -> S11 chat workflows -> S16 admin oversight.
- Priority: Beta / V1.

### 8) Requests / Quotes / Repairs

- Description: Request-to-quote-to-repair flow with approval action, checkbox, typed signature, audit, and payment gating where applicable.
- Roles involved: customer, household_member (delegated), technician, admin, owner_admin, lead.
- Customer-visible surface: requests, quotes, approvals, repair status.
- Technician-visible surface: assigned repair execution without financial internals.
- Admin-visible surface: quote creation, approval tracking, repair operations.
- Data objects likely needed: request, quote, quote_version, quote_approval, typed_signature, repair_job.
- Permission/data visibility concerns: technician no margin/billing details; auditable signature/approval actions.
- Protected rules involved: #10, #16.
- Affected sprints: S02, S11, S12, S13, S16, S19.
- Affected prompt-pack categories: quote workflow, approval audit model, repair execution, payment integration.
- Dependencies: S02 request/quote schema -> S12 flow -> S13 billing/payment hooks.
- Priority: Beta / V1.

### 9) Master Jobs

- Description: Internal grouping for non-weekly/non-biweekly work with visit reports + final summary, internal rollups hidden from customers.
- Roles involved: admin, owner_admin, technician, customer/household (indirect report visibility only).
- Customer-visible surface: visit-level reports + final summary via normal history, not master-job page.
- Technician-visible surface: association/status only.
- Admin-visible surface: internal rollups including costs/profitability.
- Data objects likely needed: master_job, master_job_visit_link, final_summary_report, internal_profitability_rollup.
- Permission/data visibility concerns: no customer-facing master-job object; no technician profitability access.
- Protected rules involved: #16.
- Affected sprints: S02, S09, S10, S12, S13, S16, S19.
- Affected prompt-pack categories: schema constraints, report linkage, visibility guards, billing integration.
- Dependencies: S02 core schema -> S12 repair/non-maintenance flows -> S10 report outputs -> S13 billing.
- Priority: V1.

### 10) Billing / Payments

- Description: Monthly/autopay/one-time billing with provider-tokenized payment methods and suspension workflow.
- Roles involved: customer, household_member (scoped), admin, owner_admin, system_service.
- Customer-visible surface: invoices, payments, masked methods, suspension/resolution states.
- Technician-visible surface: none for financial details; operational skip-service signals only.
- Admin-visible surface: billing operations, failure workflows, exceptions.
- Data objects likely needed: invoice, payment, payment_method_reference, autopay_config, suspension_state.
- Permission/data visibility concerns: no raw card storage; technician never sees billing/payment/profit.
- Protected rules involved: #3, #11.
- Affected sprints: S02, S13, S14, S16, S19.
- Affected prompt-pack categories: billing schema/API, payment event handling, visibility/deny tests, suspension notifications.
- Dependencies: S02 billing schema -> S13 payment workflows -> S14 events -> S16 admin surfaces.
- Priority: V1.

### 11) Notifications

- Description: Push-first notifications with fallback channels and separate essential-service vs deal/product preference controls.
- Roles involved: customer, household_member, technician, admin, owner_admin, system_service.
- Customer-visible surface: notification feed/preferences and critical status alerts.
- Technician-visible surface: operational alerts (route exceptions, skip-service flags).
- Admin-visible surface: notification policy/templates/log monitoring.
- Data objects likely needed: notification_event, delivery_log, preference_profile, channel_template.
- Permission/data visibility concerns: role-safe payloads; no cross-customer data leakage.
- Protected rules involved: #4, #13.
- Affected sprints: S02, S08, S09, S11, S13, S14, S16, S19.
- Affected prompt-pack categories: event models, preference model, delivery integrations, privacy-safe copy tests.
- Dependencies: feature event producers (S08/S09/S10/S12/S13) -> S14 notification system.
- Priority: Beta / V1.

### 12) Commercial Accounts / Compliance Exports

- Description: Commercial customer type with property-manager workflows and admin-reviewed outbound compliance exports.
- Roles involved: admin, owner_admin, customer commercial contacts, inspectors/property managers (approved recipients).
- Customer-visible surface: export request/status visibility only.
- Technician-visible surface: operational context only, no export sending controls.
- Admin-visible surface: export review/approval/outbound controls.
- Data objects likely needed: commercial_account, commercial_contact, compliance_export_request, export_recipient, export_audit.
- Permission/data visibility concerns: must exclude billing/profit/internal notes from exports.
- Protected rules involved: #17.
- Affected sprints: S02, S03, S04, S10, S16, S19.
- Affected prompt-pack categories: commercial schema/permissions, export-generation pipeline, admin approval audit tests.
- Dependencies: S02 commercial schema -> S03 permissions -> S10 report data availability -> S16 admin export controls.
- Priority: V1 / Post-V1.

### 13) Deals / Products / Robots

- Description: Targeted recommendations/install opportunities with independent opt-out controls.
- Roles involved: customer, household_member, admin, owner_admin, technician (operational awareness only).
- Customer-visible surface: recommendations/deals and opt-out settings.
- Technician-visible surface: install-task context when assigned.
- Admin-visible surface: targeting rules, campaign operations, conversion tracking.
- Data objects likely needed: product_catalog, deal_offer, eligibility_rule, recommendation_event.
- Permission/data visibility concerns: no cross-customer inference/leakage in targeting.
- Protected rules involved: #13.
- Affected sprints: S15, S16, S18, S19.
- Affected prompt-pack categories: recommendations engine, preference controls, operational install flows.
- Dependencies: customer/profile/equipment data from S04/S05/S10 -> S15 feature layer.
- Priority: Post-V1 / SaaS-Valuation.

### 14) Privacy / Data Export / Deletion / Audit Logs

- Description: Export/deletion governance with liability-safe exceptions and immutable sensitive-action auditability.
- Roles involved: customer, household_member, admin, owner_admin, system_service.
- Customer-visible surface: request/export/deletion status and defined data scope.
- Technician-visible surface: none beyond operationally required policies.
- Admin-visible surface: request handling and audit trail review.
- Data objects likely needed: data_export_request, account_deletion_request, audit_log, retention_policy_state.
- Permission/data visibility concerns: least privilege, immutable audit events, protected retention exceptions.
- Protected rules involved: #2, #3, #7, #8, #10, #11.
- Affected sprints: S02, S03, S13, S19, S20.
- Affected prompt-pack categories: privacy policy implementation, audit model, retention/deletion tests, release readiness.
- Dependencies: foundational identity/billing/report schemas -> S19 privacy/security hardening -> S20 launch controls.
- Priority: V1 / SaaS-Valuation.

### 15) Admin Portal

- Description: Desktop-first operating console for route, report, customer, quote, billing, chat, export, and analytics workflows.
- Roles involved: admin, owner_admin.
- Customer-visible surface: none directly; downstream service quality/output.
- Technician-visible surface: none directly; receives admin-authored operational instructions.
- Admin-visible surface: full operational dashboards and role-scoped actions.
- Data objects likely needed: admin_dashboard_view_models, operational_queues, escalation_records.
- Permission/data visibility concerns: owner-only financial boundaries; auditable high-risk actions.
- Protected rules involved: #2, #3, #10, #17.
- Affected sprints: S01, S08, S09, S10, S11, S12, S13, S14, S16, S18, S19.
- Affected prompt-pack categories: admin UX, permission guards, auditing, operational tooling.
- Dependencies: domain data/models from S02+ and role guards from S03 before admin feature completion.
- Priority: Beta / V1 / SaaS-Valuation.
