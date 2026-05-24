# Shipwrecked Pools Release Gates

This document defines go/no-go release gates for the Shipwrecked Pools app lifecycle. Each gate includes purpose, required features, minimum checks, intentionally not-required-yet items, risks/blockers, and final checklist.

## Gate 0 - Repo/Process Ready

### Purpose

Confirm the Sprint 00 operating system is stable before implementation work scales.

### Required Features

- Product docs exist: mission, Paul story, V1 scope.
- Master index exists.
- Feature amendments are reconciled.
- Permission matrix exists.
- Data visibility rules exist.
- Prompt pack template exists.
- Universal prompt pack runner exists.
- Codex review checklist exists.
- Handoff template exists.
- Parallel work rules exist.
- Rollback rules exist.
- Testing philosophy exists.
- Status board is current and accurate.

### Minimum Tests/Checks

- `git status` clean before each pack.
- Prompt-pack scope and ID checks pass.
- Status board and handoff validation pass for completed packs.

### Intentionally Not Required Yet

- Production infrastructure.
- Full app/API implementation.
- App store readiness.

### Risks/Blockers

- Missing governance docs.
- Inaccurate status board.
- Mixed-pack execution in one run.

### Go/No-Go Checklist

- [ ] All required governance docs exist.
- [ ] Status board rows match reality.
- [ ] Team follows one-pack-at-a-time rules.

## Gate 1 - Internal Demo: "Paul's Pool Exists"

### Purpose

Prove the first customer trust moment using Paul persona baseline data.

### Required Features

- Paul can log in.
- Paul customer + property profile exists.
- Paul pool/spa profile exists.
- Cooper pet profile + treat permission exists.
- Custom pool outline exists.
- Service points/markers exist.
- Profile + notification settings visible.
- Admin can create/edit core Paul records.
- Visibility boundaries hold.

### Minimum Tests/Checks

- Persona and visibility checks pass.
- Basic role-boundary checks pass (customer sees own data only).

### Intentionally Not Required Yet

- Full billing and payment automation.
- Skimmer cutover.

### Risks/Blockers

- Generic or missing pool outline.
- Cross-customer data leakage.

### Go/No-Go Checklist

- [ ] Paul baseline data is complete and coherent.
- [ ] Pool outline and marker model work.
- [ ] Permission/visibility checks pass.

## Gate 2 - Internal Operations Test: "Paul Gets Serviced"

### Purpose

Prove technician-to-customer visit flow works in production-like operations.

### Required Features

- Technician logs in via technician role in same app.
- Technician sees assigned route/stop.
- Technician sees gate/pet/access notes.
- Arrival pop-ups appear when configured.
- Route-start safety reminder acknowledgment enforced.
- Required visit flow can be completed.
- Chemistry can be logged.
- Actual chemicals used can be recorded.
- Report auto-generates.
- Paul receives report-ready notification.
- Paul views report, photos, chemistry, notes.
- No technician financial leakage.

### Minimum Tests/Checks

- Technician assignment + denied-financial visibility tests.
- Visit/report/notification integration tests.
- Route privacy assertions.

### Intentionally Not Required Yet

- Full commercial export program.
- Full analytics suites.

### Risks/Blockers

- Missing technician safeguards.
- Report/photo visibility bugs.
- Route privacy violations.

### Go/No-Go Checklist

- [ ] End-to-end visit/report flow passes.
- [ ] Customer receives and reads service outcome.
- [ ] Technician financial restrictions are enforced.

## Gate 3 - Decision/Revenue Test: "Paul Makes a Decision"

### Purpose

Prove customer decision and revenue-critical paths are operational.

### Required Features

- Context-aware customer question flow works.
- Admin/technician response flow works.
- Quote/request workflow works.
- Approval action + checkbox + typed signature works.
- Upfront payment model works in test/sandbox.
- Repair/master-job workflow can be created.
- Before/after proof can be shown.
- Repair/job report remains separate from weekly report.

### Minimum Tests/Checks

- Quote approval + signature + audit tests.
- Sandbox payment tests.
- Repair-report separation checks.

### Intentionally Not Required Yet

- Full Skimmer replacement.
- Advanced pricing analytics.

### Risks/Blockers

- Approval or audit gaps.
- Payment workflow failures.
- Mixed report-type regressions.

### Go/No-Go Checklist

- [ ] Customer can ask, decide, approve, and pay.
- [ ] Repair flow produces distinct report artifacts.
- [ ] Financial controls and audit logs pass.

## Gate 4 - Friendly Customer Beta

### Purpose

Run controlled real-customer validation with 3-5 friendly customers.

### Required Features

- Customer onboarding/invite.
- Role-based login.
- Custom pool outline.
- Weekly reports + chemistry.
- Route progress with stops-before-you + ETA only.
- Customer questions/chat.
- Quote/approval basics.
- Notification preferences.
- Basic admin dashboard.
- Basic technician flow.
- Required photo flow.
- Permission/data isolation checks.
- Support process for beta users.
- Rollback/pause capability for beta operations.

### Minimum Tests/Checks

- Critical smoke suite (customer + technician + admin).
- Permission/visibility regression suite.
- Incident/rollback drill check.

### Intentionally Not Required Yet

- Full commercial expansion.
- Full post-migration billing reconciliation.

### Risks/Blockers

- Customer trust regressions.
- Support overload.
- Inability to pause safely.

### Go/No-Go Checklist

- [ ] Beta users can complete core journey safely.
- [ ] Support/triage process is staffed.
- [ ] Rollback plan is tested and ready.

## Gate 5 - V1 Launch

### Purpose

Launch to all Shipwrecked customers and leads with launch-critical reliability.

### Required Features

- Lead/customer onboarding.
- Household invites.
- Payment method and billing basics.
- Invoice/payment views.
- Quote/repair approvals.
- Master-job internal grouping foundation.
- Final summary reports for multi-visit jobs where applicable.
- Commercial type + admin-reviewed exports if commercial is live.
- Deal/product notifications with independent opt-out.
- Before/after galleries.
- Notification settings.
- Core admin portal workflows.
- QA/security pass.
- Privacy/account deletion/export basics.
- App Store/Play Store readiness.

### Minimum Tests/Checks

- Launch-critical regression suite pass.
- Billing/payment and quote approval suite pass.
- Permission/privacy suite pass.
- Manual go-live checklist signoff.

### Intentionally Not Required Yet

- Full SaaS tenant packaging.
- Advanced valuation dashboards.

### Risks/Blockers

- Billing instability.
- Permission leaks.
- App store readiness gaps.

### Go/No-Go Checklist

- [ ] Launch-critical workflows pass tests and manual QA.
- [ ] Security/privacy gates pass.
- [ ] Release operations and support coverage are ready.

## Gate 6 - Skimmer Parallel Period

### Purpose

Operate Shipwrecked app with Skimmer in parallel while validating migration readiness.

### Required Features

- Defined parallel-operation period.
- Route management parity checks.
- Reports/photos/chemistry parity checks.
- Billing/payment handling verification.
- Customer communication verification.
- Admin workload viability verification.
- Data migration/import process validation.
- Explicit definition of what remains in Skimmer during parallel window.

### Minimum Tests/Checks

- Parallel-run reconciliation checks.
- Data consistency spot checks.
- Operational incident reviews.

### Intentionally Not Required Yet

- Immediate Skimmer shutdown.
- Full SaaS market expansion.

### Risks/Blockers

- Double-entry operational confusion.
- Data mismatch between systems.
- Billing divergence.

### Go/No-Go Checklist

- [ ] Parallel workflows are stable.
- [ ] Data reconciliation is acceptable.
- [ ] Remaining Skimmer dependencies are documented.

## Gate 7 - Skimmer Replacement

### Purpose

Complete operational cutover so Shipwrecked app is primary operating system.

### Required Features

- Route management in-app.
- Reports/photos/chemistry in-app.
- Customer communication (text/push/email) in-app.
- Billing/invoices/payments in-app.
- CRM/customer records in-app.
- Quotes/repairs/master jobs in-app.
- Admin operations in-app.
- Monitoring/backups/recovery established.
- Team training completed.
- Cutover checklist completed.

### Minimum Tests/Checks

- Cutover readiness checklist signoff.
- Monitoring and recovery drill pass.
- Post-cutover hypercare plan active.

### Intentionally Not Required Yet

- Full external SaaS commercialization.

### Risks/Blockers

- Unresolved legacy dependency.
- Inadequate support readiness.
- Backup/recovery immaturity.

### Go/No-Go Checklist

- [ ] All Skimmer-critical functions replaced.
- [ ] Recovery/monitoring proven.
- [ ] Team trained and support-ready.

## Gate 8 - Future SaaS / Valuation Layer

### Purpose

Expand from internal operating system to scalable multi-tenant and valuation capabilities.

### Required Features

- Multi-tenant readiness controls.
- Analytics/profitability layers.
- Local pool system dataset maturity.
- Commercial compliance export maturity.
- Advanced chemical guidance workflows.
- Product/deal intelligence.
- Operational dashboards.
- Potential SaaS packaging strategy.

### Minimum Tests/Checks

- Tenant-isolation and data-boundary tests.
- Advanced analytics data quality checks.
- Compliance export audit coverage.

### Intentionally Not Required Yet

- Immediate public self-serve tenant onboarding.

### Risks/Blockers

- Cross-tenant leakage risk.
- Data quality drift at scale.
- Compliance/legal gaps.

### Go/No-Go Checklist

- [ ] Multi-tenant isolation is validated.
- [ ] Analytics and compliance data quality is acceptable.
- [ ] Product packaging and support model are defined.
