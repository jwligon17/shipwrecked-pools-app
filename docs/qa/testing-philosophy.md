# Shipwrecked Pools Testing Philosophy

## 1. Testing Mission

Testing is the operational safety net that lets Shipwrecked run Codex quickly without blind trust. Tests protect customer confidence, enforce role boundaries, prevent sensitive-data leakage, and keep weekly service, repair, chemistry, billing, and communication workflows reliable as the app replaces Skimmer.

## 2. Test Categories

- Unit tests: Verify isolated business rules, transformers, serializers, validation utilities, pricing calculators, and workflow state transitions.
- Integration tests: Verify multi-component flows (API + DB + policies + eventing) for realistic execution paths.
- API/contract tests: Verify request/response shapes, schema constraints, OpenAPI alignment, and backward-compatible contract behavior.
- Permission/authorization tests: Verify allowed and denied access for `owner_admin`, `admin`, `technician`, `customer`, `household_member`, `lead`, and service principals.
- Data visibility tests: Verify field-level visibility/masking rules and note-type isolation (`customer_friendly_note` vs internal notes).
- Mobile screen smoke tests: Verify key customer and technician screens render and behave across loading/empty/error/success states.
- Admin dashboard smoke tests: Verify core admin workflows and sensitive-action guards.
- Technician workflow tests: Verify route/service operations, required acknowledgments, required photos/readings, and completion rules.
- Billing/payment tests: Verify provider-reference-only storage, charge paths, failure handling, idempotency, and visibility boundaries.
- Notification tests: Verify category toggles, routing, role-safe payloads, and fallback behavior.
- Report generation tests: Verify report type separation, required artifacts, publishing lifecycle, and revision handling.
- Photo visibility tests: Verify before/after pair labels, hide/show behavior, and customer visibility guards.
- Chemistry/suggested guidance tests: Verify required-data gating, per-body logic, edit/apply tracking, and customer invisibility of internal suggestions.
- Commercial export tests: Verify admin review gating and outbound payload minimization.
- Audit log tests: Verify sensitive actions emit immutable audit records with actor, role, target, timestamp, outcome.
- Regression tests: Lock in fixed bugs and critical workflows to prevent backsliding.

## 3. Shipwrecked-Specific Test Priorities

High-priority scenarios for every relevant pack:

- Customers can access only their own household/property/pool/reports/photos/quotes/invoices.
- Household members can access only invited-scope data.
- Technicians can access assigned operational context only.
- Technicians cannot access billing, payment, quote margin, route/customer profitability, or internal financial notes.
- Owner/admin broader access is role-gated and auditable.
- Customers receive only customer-friendly notes.
- Internal notes never leak to customer/household surfaces.
- Commercial export recipients receive only approved, policy-safe export payloads.
- Master-job profitability is admin/owner-only.
- Route progress shows stops-before-you and ETA only; no exact GPS and no other-customer identity leakage.
- Quote approval requires action, checkbox, typed signature, audit event, and payment flow where applicable.
- Before/after photos respect visibility and admin hide controls.
- Report classes remain distinct: weekly maintenance, repair, green-to-clean, acid wash, commercial compliance, and final summary.
- Suggested chemical guidance blocks when required data is missing.
- Suggested chemical guidance is never customer-visible.
- Chat context is not attached until customer confirmation.
- Closed chats reopen when customers reply.
- Technician completion is blocked from 9:00 PM to 8:00 AM local time.

## 4. Testing By App Area

### Backend/API

- Role guards and ownership/assignment checks.
- Input validation and sanitized error handling.
- Organization-scoped query behavior.
- Sensitive action audit emission.
- API contract updates with compatibility checks.
- Failure-path behavior (timeouts, missing data, denied access, conflicts).

### Mobile Customer App

- Loading/empty/error/success states on core screens.
- Dynamic home priority-state correctness.
- Pool-outline rendering and marker visibility.
- Reports, chemistry history, quote/approval flow correctness.
- Context-aware chat confirmation behavior.
- Notification preference controls including deal opt-out independence.

### Technician Mobile Workflow

- Route assignment and future-route visibility.
- Arrival pop-up and route-start safety reminder acknowledgments.
- Required photos and chemistry capture.
- Suggested guidance gating + technician edit/apply behavior.
- Visit completion validation, including 9 PM–8 AM restriction.

### Admin Dashboard

- Customer/profile, route, and pool-outline management.
- Quote/repair/master-job operational flows.
- Commercial export review/approval prior to send.
- Photo review/hide behavior.
- Chat triage/intercept/reassignment.
- Audit log access boundaries.

### Billing and Payments

- Provider token/reference-only payment method handling.
- Quote-approval charge behavior and failure handling.
- Upfront payment behavior for master jobs.
- No raw card data persistence.
- Webhook/event reconciliation behavior when implemented.

### Notifications

- Preference routing by role and household scope.
- Essential service notifications vs deal/product opt-out independence.
- Service/report/quote/repair notification correctness.
- Push-first behavior with SMS/email fallback when implemented.

## 5. Minimum Test Expectations By Prompt Pack Type

- Docs-only packs: Scope/diff checks only; explicitly state no code/build tests required.
- Backend logic packs: Unit + integration + permission + regression tests for changed logic.
- Database migration packs: Migration validation, rollback path checks, data integrity checks, and affected query behavior tests.
- API endpoint packs: Contract + permission + validation + error-path tests.
- Mobile UI packs: Screen/state tests and permission/visibility assertions for shown data.
- Admin UI packs: Workflow/state tests for admin actions and restricted data rendering.
- Billing/payment packs: Charge flow, failure/retry/idempotency, masking, and denial tests for technician/customer boundaries.
- Notification packs: Trigger, preference, and payload safety tests.
- Permission/security packs: Allowed/denied matrices plus serializer filtering tests.
- QA/review packs: Ensure required checks, status updates, and handoff completeness are documented and enforced.

## 6. Acceptance Criteria For Future Prompt Packs

Implementation prompt packs are incomplete unless:

- Relevant tests were added or updated for behavior changes.
- Required check commands were executed.
- Failures were fixed or documented as blockers.
- Codex self-review includes test/check results.
- Handoff note includes tests/checks run and outcomes.
- `docs/prompt-packs/STATUS_BOARD.md` reflects accurate test/check status.

## 7. If Tests Cannot Run

- State exactly why tests could not run.
- Document environment or dependency blocker.
- Do not claim tests passed.
- Mark pack `Needs Fix` or `Blocked` when risk remains.
- Do not commit risky implementation logic without checks (docs-only changes are the exception when correctly scoped).

## 8. Human Operator Checklist

- Run `git status`.
- Run `git diff --stat`.
- Run required pack-specific test commands (once Sprint 01 test tooling is installed).
- Verify handoff note includes test/check outcomes.
- Verify status board test/check columns are accurate.
- Confirm only scoped files changed before commit.
