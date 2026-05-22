# Codex Review Checklist (Shipwrecked Pools)

## Purpose
Use this checklist after completing any Shipwrecked prompt pack and before handing work to a human for commit.

Review outcome labels:
- `PASS`
- `PASS WITH NOTES`
- `NEEDS FIX`
- `STOP - OUT OF SCOPE OR UNSAFE`

## 1) Pack Identity Review
- [ ] Active execution matched only `PACK_PATH`.
- [ ] Pack ID and title in work output match pack file metadata.
- [ ] `docs/prompt-packs/STATUS_BOARD.md` was updated for the same Pack ID.
- [ ] No future pack was started or partially implemented.
- [ ] Required handoff note for the active pack was created in `docs/handoffs/`.

## 2) Scope Review
- [ ] Only files allowed by the active pack were created/modified.
- [ ] Docs-only packs did not modify app/API/admin/database/auth/billing implementation files.
- [ ] No unrelated refactors or opportunistic cleanup were included.
- [ ] Existing completed prompt-pack artifacts were preserved as historical records.

## 3) Shipwrecked Product-Rule Review
- [ ] Work preserves one true role-based mobile app model.
- [ ] Custom top-down customer pool outline remains V1-critical.
- [ ] Route progress uses stops-before-you and ETA only; no customer-facing exact live GPS.
- [ ] V1 customer questions remain human-answered by technicians/admins.
- [ ] Customer-facing notes stay customer-friendly; internal notes stay internal.
- [ ] Master jobs remain internal grouping objects only, not a generic customer-facing page.
- [ ] Commercial export flow keeps mandatory admin review before outbound email.
- [ ] Internal chemical recommendation suggestions remain non-customer-visible.
- [ ] Customer chat context requires explicit context-attachment confirmation.
- [ ] Technician chat behavior remains asynchronous only.

## 4) Permission And Data-Visibility Review
- [ ] Customer access is limited to authorized own household/property/service data.
- [ ] Household-member access is limited to invitation scope.
- [ ] Technician access is limited to assigned operational context.
- [ ] Technician cannot view billing/payment/profitability/margin/admin-only financial notes.
- [ ] Admin/owner broader access remains role-gated and auditable.
- [ ] Internal notes do not leak to customer/household surfaces.
- [ ] Commercial export recipients receive only export-approved data.

## 5) Security, Privacy, And Audit Review
- [ ] Sensitive actions changed in this pack are auditable (actor, target, timestamp, outcome).
- [ ] Gate-code views/changes are guarded and auditable when in scope.
- [ ] Quote approvals, typed signatures, and payment actions are auditable when in scope.
- [ ] Photo visibility controls are explicit when photo/report behavior is touched.
- [ ] Data export/deletion impacts are considered when relevant.
- [ ] Sensitive data is not exposed in logs or customer-facing output.

## 6) Backend/API Review (Code Packs)
- [ ] Role guards enforce organization and role scope.
- [ ] Ownership/assignment checks exist for customer/household/technician paths.
- [ ] Input validation is present and coherent.
- [ ] Error handling avoids leaking sensitive internals.
- [ ] Audit events are emitted for sensitive actions.
- [ ] API contracts/types/docs are updated for behavior changes.
- [ ] Tests cover both allowed and denied role access.

## 7) Mobile/Customer UX Review (Code Packs)
- [ ] Loading, empty, error, and success states are implemented.
- [ ] Customer-facing language is clear, specific, and confidence-building.
- [ ] Internal-only context is not shown in customer views.
- [ ] Context-aware chat requires confirmation before attaching context.
- [ ] Deal/product notifications remain independently toggleable from essential service notifications.
- [ ] Route progress UI reveals no other-customer identity or location data.

## 8) Technician Workflow Review (Code Packs)
- [ ] Technician workflows are mobile-first and operationally usable.
- [ ] Technician sees required gate/access/pet/service context for assigned stops.
- [ ] Technician cannot access sensitive business financial data.
- [ ] Arrival alerts require acknowledgment before service start when in scope.
- [ ] Route-start safety reminders require acknowledgment when in scope.
- [ ] 9:00 PM to 8:00 AM local-time service-completion restriction is enforced where applicable.
- [ ] Suggested chemical guidance requires complete required readings/data and technician confirmation of applied amounts.

## 9) Admin Dashboard Review (Code Packs)
- [ ] Admin workflows support route/report/customer/quote/repair operations in scope.
- [ ] Admin can review/edit/hide customer-visible photos when in scope.
- [ ] Admin can review commercial exports before outbound email.
- [ ] Admin can triage/intercept/reassign customer chats when in scope.
- [ ] Admin-only financial data remains admin/owner-only.

## 10) Billing, Quote, And Payment Review (Code Packs)
- [ ] Quote approval requires approval action, checkbox, typed signature, and audit trail.
- [ ] Upfront payment model for master jobs/non-maintenance work is preserved when in scope.
- [ ] Payment method raw data is not stored directly in app DB; provider references/tokens only.
- [ ] Technician surfaces do not expose payment/billing/profitability details.

## 11) Reports, Photos, And Chemistry Review (Code Packs)
- [ ] Report types remain distinct (weekly maintenance, repair, green-to-clean, and other defined work types).
- [ ] Master-job flows keep visit-level reports plus final summary where applicable.
- [ ] Before/after photo pairing is labeled and visibility-controlled.
- [ ] Internal chemical suggestions are never customer-visible.
- [ ] Customers see actual applied chemicals plus plain-English explanation.

## 12) Notification And Commercial Review (Code Packs)
- [ ] Essential service notifications remain reliable and role-appropriate.
- [ ] Deal/product notifications remain independently toggleable.
- [ ] Route exception notifications are customer-safe and do not leak other-customer details.
- [ ] Commercial export workflows enforce admin review and outbound data minimization.

## 13) Testing Review
- [ ] Tests were added/updated when business logic changed.
- [ ] Permission tests exist for role-boundary changes.
- [ ] Visibility tests exist for customer/internal data-boundary changes.
- [ ] Billing/payment tests exist for money-flow changes.
- [ ] Notification tests exist for notification-behavior changes.
- [ ] Docs-only packs explicitly state no code/build tests were required.

## 14) Documentation And Handoff Review
- [ ] Relevant docs were updated for behavior/policy changes.
- [ ] Handoff note includes: pack ID/title, files changed, checks run, self-review findings, fixes made, limitations, and next recommended pack.
- [ ] Status board row reflects accurate status, review status, checks status, and handoff status.

## 15) Final Decision
Choose exactly one:
- `PASS`: All acceptance criteria met; no material issues.
- `PASS WITH NOTES`: Acceptance criteria met; only minor follow-ups remain.
- `NEEDS FIX`: Material issues found that must be corrected before handoff.
- `STOP - OUT OF SCOPE OR UNSAFE`: Request conflicts, unsafe action, or scope violation detected.
