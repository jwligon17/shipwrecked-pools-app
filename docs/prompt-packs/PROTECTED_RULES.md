# Protected Rules

Purpose: Define non-negotiable Shipwrecked business, privacy, role-boundary, and governance rules that all future packs and implementation work must preserve.

## 1) Role and Access Rules
1. Shipwrecked operates as one app with role-based experiences.
2. Customers may access only their own authorized household/property/service data.
3. Household members may access only invited household/location data within granted scope.
4. Technicians may access assigned operational data only.
5. Owner/admin may operate in technician workflows with additional owner/admin permissions.
6. Technicians are technician-only unless explicitly also owner/admin.
7. Customers may invite household members/residents using scoped access.
8. Technicians may view future assigned routes, but may not complete service submissions from 9:00 PM to 8:00 AM local time.

## 2) Technician Financial Restrictions
Technicians must never see:
- billing status
- payment details
- payment history
- quote margins
- route profitability
- customer profitability
- internal financial notes
- master-job cost/profitability rollups

## 3) Customer Visibility Rules
1. Customers see customer-friendly notes only.
2. Internal/admin-only notes must never leak to customers.
3. Customer route visibility is limited to progress, stops-before-you, and ETA; exact live GPS is prohibited in V1.
4. Customers must never see internal chemical recommendation suggestions.
5. Customers should see actual applied chemicals and plain-English explanations.
6. Customers must not receive a generic master-job page.
7. Customers may see individual visit reports and final summary reports where applicable through standard history/report flows.

## 4) Commercial Export Rules
1. Commercial exports require admin review before outbound email.
2. Export recipients may receive only approved export-safe data.
3. Exports must exclude billing, profitability, internal notes, gate codes (unless explicitly export-approved), and unrelated private data.
4. Technician identity in exports defaults to "Shipwrecked Pools technician" unless future governance docs explicitly change that rule.

## 5) Master Job Rules
1. Non-weekly/non-biweekly maintenance work uses master-job grouping.
2. Weekly/biweekly maintenance must never be tied to master jobs.
3. Master jobs are internal grouping objects.
4. Master jobs must not mix job types.
5. V1 non-maintenance master-job billing is upfront payment only (no deposit/milestone split model).

## 6) Photo / Before-After Rules
1. Before/after pairing is supported for all work types.
2. Pairs must be manually paired and labeled.
3. Admin may hide photos from customer view.
4. Customer-visible photo content must not expose internal/private context.

## 7) Chemical Guidance Rules
1. Suggested guidance requires complete required readings/profile data.
2. Missing required data blocks suggestion output.
3. Technicians may edit suggested quantities and record actual applied amounts.
4. Admin may edit recommendation tables.
5. Technicians must not edit recommendation tables.
6. Suggested guidance is internal-only and never customer-visible.
7. Safety/SOP warnings and constraints must remain preserved where guidance is surfaced.

## 8) Chat Rules
1. Chat context attachment requires explicit confirmation before attach.
2. Technician chat scope is active/recent-service context only.
3. Technician chat is asynchronous only.
4. Admin may intercept, triage, and reassign chats.
5. Internal chat notes must be clearly marked and hidden from customers.
6. Closed chats reopen on customer reply.
7. V1 customer questions are answered by humans, not AI.

## 9) Billing / Quote / Approval Rules
1. Quote approval requires explicit approval action, checkbox confirmation, typed signature, and audit log.
2. Payment methods must be stored as provider references/tokens, not raw card data.
3. Sensitive billing/payment actions must be auditable.
4. Technician surfaces must never expose billing/payment/profitability details.

## 10) Codex Workflow Rules
1. Do not implement feature-changing work until source-of-truth governance docs are updated.
2. Do not overwrite `docs/prompt-packs/STATUS_BOARD.md` with seed/example status boards.
3. Do not run ahead to future packs.
4. Do not touch implementation code in governance/doc packs.
5. Stop and report when a requested change conflicts with protected rules.
6. Completed prompt packs are historical records; use amendment/reconciliation/retrofit packs for changes.
