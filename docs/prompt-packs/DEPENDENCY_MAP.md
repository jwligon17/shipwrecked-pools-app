# Dependency Map

Purpose: Define sequencing dependencies between governance, sprints, feature domains, and pack categories so work is executed safely and retrofit needs are explicit.

## Sprint-Level Dependency Chain

```txt
S00 governance and source-of-truth controls
  -> S01 repo/infrastructure foundations
    -> S02 database/domain model foundations
      -> S03 auth/role/permission enforcement
        -> S04 onboarding/customer-commercial setup
          -> S05 water bodies/equipment modeling
            -> S06 pool outline studio
              -> S07 customer shell feature delivery
                -> S08 routes and progress engine
                  -> S09 technician visit workflow
                    -> S10 reports/photos/chemistry engine
                      -> S11 questions and conversations
                        -> S12 requests/quotes/repairs
                          -> S13 billing/payments
                            -> S14 notifications
                              -> S15 deals/products
                                -> S16 admin CRM/operations
                                  -> S18 analytics/valuation
                                    -> S19 privacy/security hardening
                                      -> S20 release/migration
```

## Required Sprint Dependency Rules

- S00 governance must be complete before source-of-truth-changing implementation work.
- S01 infrastructure must be stable before app/package feature implementation.
- S02 schema/domain model must exist before feature APIs and workflow UIs.
- S03 auth/permissions must gate customer/household/technician/admin access before feature release.
- Onboarding + water-body modeling (S04/S05) must precede full pool-outline/report/chemistry workflows.
- Route foundations (S08/S09) must precede reliable service-report progression and technician accountability.
- Reports and chemistry outputs (S10) must exist before advanced customer history and compliance flows.
- Quote/repair workflow maturity (S12) should precede dependent billing/payment triggers (S13).
- Work-order progress lifecycle (approval -> part/no-part readiness -> completion) must remain distinct from weekly maintenance visit completion state.
- Notifications (S14) should follow event producers and preference models.
- Commercial exports require report readiness + data visibility controls + admin review controls.
- Master jobs depend on quote/repair/report/billing foundations and remain internal grouping objects.

## Feature Dependency Map

### Pool Outline

```txt
S02 water-body + outline + marker relationship schemas
  -> S06 outline studio authoring
    -> S07 customer rendering
    -> S09 visit/service-point status updates
    -> S10 report/photo linkage
    -> S12 quote/repair context linkage
```

### Service Points

```txt
S02 service-point schema + status history constraints
  -> S06 marker management
    -> S09 technician stop execution updates
    -> S10 report and chemistry references
```

### Reports

```txt
S02 report/photo schemas
S09 visit completion events
  -> S10 report engine + publishing rules
    -> S11 customer question context
    -> S12 quote/repair history context
    -> S16 admin review/correction controls
```

### Before/After Galleries

```txt
S02 photo + pairing data model
S10 report media workflows
  -> S16 admin hide/review controls
    -> customer-facing history/report surfaces
```

### Master Jobs

```txt
S02 master-job internal model
S12 non-maintenance job flows
S10 visit + final summary reports
S13 payment/billing event linkage
  -> S16 admin profitability/rollup operations
```

### Commercial Exports

```txt
S02 commercial account/contact/export schemas
S03 commercial permission guards
S10 compliance-report data availability
  -> S16 admin review/approve/send workflows
    -> S19 export privacy/security tests
```

### Chemical Guidance

```txt
S02 chemistry + recommendation traceability model
S09 technician readings capture
S10 suggestion + applied-amount workflows
  -> S16 admin recommendation-table controls
    -> S19 visibility boundary tests
```

### Context-Aware Chat

```txt
S02 conversation/context models
S03 role + assignment + visibility guards
  -> S11 chat routing/triage/workflows
    -> S16 admin oversight/intercept/reassign tooling
```

### Route Progress

```txt
S02 route/stop/eta data model
  -> S08 route optimization + progress logic
    -> S09 stop status execution
    -> S14 customer-safe notifications
    -> S16 admin route control
```

### Technician Alerts / Safety Reminders

```txt
S02 reminder/popup acknowledgment models
S03 technician assignment + access rules
  -> S09 route-start and arrival acknowledgment flows
    -> S16 admin authoring/monitoring
```

### Billing / Payments

```txt
S02 billing schema + suspension state model
S12 quote/repair payment trigger readiness
  -> S13 payment workflows + failure thresholds
    -> S14 failure/suspension notifications
    -> S16 suspension operations controls
    -> S19 money-flow and visibility security tests

### Work-Order Progress Tracker

```txt
S02 work-order lifecycle + state history model
S12 approval/part/no-part/completion trigger logic
  -> S07 customer home/work-order progress surfaces
  -> S14 progress notifications/reminders
  -> S16 admin pending/active queue visibility
  -> S19 privacy and lifecycle integrity validation
```

### Workflow-Linked Shopping List

```txt
S02 shopping-list schema + source classification model
S09 technician/admin item status updates
S12 workflow linkage (approved, pending, inventory, non-billable)
  -> S16 shopping-list and pending-approval dashboards
  -> S18 revenue-association analytics
  -> S19 permission and data-separation tests
```
```

### Deal/Product Eligibility

```txt
S04/S05 customer + pool/equipment profile completeness
S10 service and chemistry history context
  -> S15 recommendation/deal targeting
    -> S16 campaign operations
    -> S18 performance analytics
```

### Privacy / Export / Deletion

```txt
S02 audit + retention/deletion data models
S03 policy and role guards
S13 billing-retention intersections
  -> S19 privacy/security hardening + test suites
    -> S20 release migration and compliance readiness
```

## Unsafe Parallel Work (Never Parallel)

- Database migrations and core schema changes.
- Auth/permission guard model changes.
- Billing/payment money-flow changes.
- API contracts/shared-types contract changes.
- Protected data visibility rule changes.
- Master job core model changes.
- Commercial export model and outbound controls.
- Chemical guidance rules/table logic.
- Pool outline data format and marker-relationship model.

## Limited Parallel Work

Parallel execution is allowed only after backend contracts are stable for that domain:

- Mobile UI polish and states.
- Admin list/detail UI surfaces.
- Documentation and handoff updates.
- Notification copy/content iteration.
- Non-breaking QA prompts and test-case documentation.

## Codex Stop Rules

Codex must stop and report before edits when any of the following is true:

- A required dependency is not yet implemented or approved.
- Requested change conflicts with `PROTECTED_RULES.md`.
- Status board state is mismatched for the targeted pack.
- Prior-pack uncommitted changes conflict with requested pack scope.
- A feature change is requested without corresponding `FEATURE_MAP.md` update.
- A sequencing/dependency change is requested without corresponding `DEPENDENCY_MAP.md` update.

## Retrofit Rule

If upstream dependencies change after downstream packs are implemented:

- Create retrofit packs.
- Update `STATUS_BOARD.md` with retrofit pack status.
- Do not silently adjust only future packs.
