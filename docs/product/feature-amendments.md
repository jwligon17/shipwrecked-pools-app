# Shipwrecked Feature Amendments (Post S00-006/S00-007)

## Purpose
This document records feature decisions added after `S00-006` (permission matrix) and `S00-007` (data visibility rules) so future prompt packs and implementation work follow the updated product direction.

These amendments are planning and policy inputs only. They do not imply implementation is already complete.

## Scope And Status
- Pack source: `S00-008A`
- Amendment status: documented and reconciled into living docs
- Affected completed docs: `mission.md`, `paul-story.md`, `v1-scope.md`, `permission-matrix.md`, `data-visibility-rules.md`, `MASTER_INDEX.md`, AGENTS guidance

## Amendment Summary Matrix
| Area | Classification | Affected Roles | Affected Objects | Privacy/Permission Implications | Implementation Notes |
|---|---|---|---|---|---|
| Single app with role-based experiences | Beta Critical, V1 Launch | owner_admin, admin, technician, customer, household_member | user session, role context, app navigation | Role context must gate all features; no technician financial exposure | One mobile app shell with role-driven experience; owner may operate as technician with additional permissions |
| Master jobs for non-maintenance work | V1 Launch | admin, owner_admin, technician, customer | master_job, job_visit, final_summary_report, quote approval artifacts | Master jobs internal/backend objects; no generic customer master-job page; technician cannot view margin/profit/billing | Weekly/biweekly maintenance excluded from master jobs; each visit report + final summary report |
| Commercial accounts and compliance exports | V1 Launch, Post-V1 | admin, owner_admin, customer contacts | customer_type, commercial_contact, export_request, compliance_report, export_recipient | Export recipients must not receive billing/profit/internal notes; admin review required before email | Separate commercial customer type; multiple contacts; PDF/CSV/monthly exports |
| Before/after photo pairing | Beta Critical, V1 Launch | technician, admin, customer | photo, before_after_pair, pair_label, report_media | Admin can hide uploaded photos from customer view; internal notes never customer-visible | Manual pairing by technician/admin; labels required; available across work types |
| Technician arrival critical pop-ups | Beta Critical | admin, technician | arrival_popup, popup_ack_log, route_stop, master_job_ref | Internal-only visibility; must acknowledge before service can begin | Scopeable to customer/property/body-of-water/route stop/master job/service point/equipment |
| Desktop admin portal baseline | Beta Critical | admin, owner_admin | admin_dashboard views and workflows | Admin access to sensitive operations requires audit trail and role checks | Desktop-first acceptable for beta; owner/admin may have limited mobile admin tools |
| Technician safety reminders | Beta Critical | admin, technician | route_start_reminder, reminder_ack_log | Internal-only; customer cannot view; acknowledgments auditable | Admin-customizable reminders; weather/seasonal when relevant |
| Suggested chemical guidance | V1 Launch | technician, admin, owner_admin, customer | chemistry_readings, recommendation, applied_amount, recommendation_table | Suggestions internal-only; customers see only applied amounts + plain English; recommendation tables admin-editable only | Require full required readings and profile data before suggestion; threshold-based admin review when needed |
| Context-aware chat | Beta Critical, V1 Launch | customer, technician, admin, owner_admin | conversation, chat_context, chat_assignment, internal_chat_note | Customer must confirm context before attach; technician chat asynchronous only; internal notes never customer-visible | Multi-entry chat, topic-based routing, admin triage/intercept/reassign, closed chats auto-reopen on customer reply |

## Detailed Amendments

### 1. Single App, Role-Based Experiences
- Shipwrecked runs one true mobile app with role-based experiences.
- Owner/admin may operate as technician when needed, with owner/admin permissions retained.
- Technicians are technician-only users.
- Customers are customer-only users and may invite household members.
- Technicians may view future routes outside work hours.
- Technicians must not submit service completion between `9:00 PM` and `8:00 AM` local time.

### 2. Master Jobs For Non-Weekly/Non-Biweekly Work
- Any non-weekly/non-biweekly maintenance job is a master job.
- Weekly/biweekly maintenance must never be attached to master jobs.
- Master jobs are internal grouping objects, not a generic customer-facing page.
- Customers see individual visit reports and final summary reports through normal history/report flows.
- Internal rollups include trips, labor/time, chemicals, costs, total price, profitability/margin, and pricing learnings.
- Technicians may see master-job association but not profitability, margin, billing status, or sensitive financial details.
- Master jobs do not mix job types.

### 3. Commercial Accounts And Compliance Exports
- Commercial accounts are a separate customer type.
- Commercial properties may include multiple bodies of water.
- Compliance exports (health department/property management) require admin review before any external email.
- Export recipients may include inspectors and property managers.
- Exports must exclude billing, profitability, internal notes, and unrelated private data.

### 4. Before/After Photo Pairing
- Before/after pairing is available across work types.
- Pairing is manual by technician or admin.
- Each pair requires a label.
- Customers access photo progress through report/history/service-point flows rather than a master-job page.
- Admin may hide uploaded photos from customer view.

### 5. Technician Arrival Pop-Ups
- Admin-authored arrival pop-ups are internal-only.
- Acknowledgment is required before service start.
- Pop-ups support one-time, recurring, until-resolved, date-limited, and job-window options.

### 6. Admin Portal Requirement
- Admin operations require a desktop admin portal.
- Beta may use a basic admin dashboard that still supports critical operating workflows.

### 7. Technician Safety Reminders
- Reminders appear at route start.
- Admin-customizable, can include seasonal/weather reminders.
- Technician acknowledgment is required and logged.
- Reminders are internal-only.

### 8. Suggested Chemical Guidance
- Suggestions appear only after required readings are complete.
- Missing required data blocks suggestions and marks profile completion needs.
- Suggestions are separate per body of water based on pool/spa relationship.
- Technicians may edit suggested quantities before applying/confirming actual usage.
- Customers never see internal suggestions; they see only actual applied chemicals with plain-English explanation.
- Admin can review suggested, edited, applied amounts, and follow/edit behavior.
- Recommendation tables are admin-editable only.

### 9. Context-Aware Chat
- Chat entry points exist across major app surfaces.
- Customers must choose technician/admin/Shipwrecked team intent and confirm context attachment.
- Context is never auto-attached without confirmation.
- Technician chat is asynchronous only and limited to active/recent assigned context.
- Admin can intercept, triage, reassign, and respond to any chat.
- Chat supports customer photo uploads and internal notes (internal-only).
- Closed chats auto-reopen on customer reply.

## Sprint Impact Notes
- S02/S03 will need schema and permission modeling for master jobs, commercial customer/contact and export review, chat context and status, arrival/safety acknowledgments, and chemistry recommendation traceability.
- S08/S09/S10/S11/S12/S16 require workflow/UI/API updates for route timing constraints, report/photo behavior, chemical guidance controls, and admin triage.
- S13/S18/S19 require enforcement and testing for financial visibility boundaries and export privacy controls.

## Durable Guardrails For Future Packs
- Never introduce a customer-facing generic master-job page.
- Never send commercial compliance exports without admin review approval.
- Never expose internal chemical recommendations to customers.
- Always require explicit customer confirmation before attaching contextual metadata to chats.
- Treat technician chat as asynchronous only.
