# Shipwrecked Pools App — Prompt Pack Master Index & Development Sequence

**Purpose:** This is the control document for building the Shipwrecked Pools app with Codex. It is not a single prompt pack. It is the roadmap that defines the sprint order, prompt pack IDs, dependencies, risk levels, parallelization rules, and implementation discipline.

**Project goal:** Build a premium true mobile app and internal operating system for Shipwrecked Pools that can eventually replace Skimmer for customer communication, route management, service reports, photos, chemistry readings, billing, customer records, quote/repair approvals, technician workflows, internal CRM, deal/product recommendations, analytics, and privacy/security workflows.

**Current source-of-truth version:** V2 — Living Master Index update. This version incorporates the added requirements for master-index change control, dependency recalculation, feature-oriented indexing, automated route optimization, commercial chemical logging, two-year high-quality media retention, monthly/autopay billing, payment failure suspension workflows, advanced conversations, weather intelligence, technician accountability tracking, and protected pool-outline-to-operational-data relationships.

**Single source-of-truth rule:** Once this file is committed into the repo, this file and the companion files it creates (`MASTER_INDEX_CHANGELOG.md`, `FEATURE_MAP.md`, `DEPENDENCY_MAP.md`, `PROTECTED_RULES.md`, and `MASTER_INDEX_UPDATE_PROTOCOL.md`) supersede prior chat threads, detached notes, and earlier versions of the index. New ideas should be translated into a logged Master Index change before Codex implements related code.

---

## How to Use This Master Index

Use this file as the source of truth for development order.

Recommended workflow for each prompt pack:

1. Pull latest `main`.
2. Open `docs/prompt-packs/STATUS_BOARD.md`.
3. Pick the next unblocked prompt pack.
4. Create a branch or worktree for that pack.
5. Run the prompt pack in Codex.
6. Ask Codex to implement only the requested scope.
7. Ask Codex to run tests.
8. Ask Codex to fix failing tests.
9. Ask Codex to review the diff.
10. Ask Codex to fix review findings.
11. Ask Codex to update documentation.
12. Ask Codex to create a handoff note in `docs/handoffs/`.
13. Merge only after tests/review pass.
14. Update `STATUS_BOARD.md`.

---

## Living Master Index System

The Master Index must be treated as a living operating system, not just a roadmap. Any meaningful project change should update the index and related docs before implementation.

Required repo files:

```txt
/docs/prompt-packs/MASTER_INDEX.md
/docs/prompt-packs/MASTER_INDEX_CHANGELOG.md
/docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md
/docs/prompt-packs/FEATURE_MAP.md
/docs/prompt-packs/DEPENDENCY_MAP.md
/docs/prompt-packs/PROTECTED_RULES.md
/docs/prompt-packs/STATUS_BOARD.md
```

Change protocol:

1. Capture the new idea or decision in `MASTER_INDEX_CHANGELOG.md`.
2. Assign it a Change ID.
3. Identify affected features in `FEATURE_MAP.md`.
4. Identify affected sprints and pack IDs in `DEPENDENCY_MAP.md`.
5. Decide whether the change affects already-implemented packs.
6. If it affects completed work, create a retrofit/fix prompt pack instead of silently changing later packs.
7. Update affected sprint rows, priorities, risks, and parallelization rules.
8. Update `PROTECTED_RULES.md` if the change creates a permanent business or architecture rule.
9. Run a Codex Master Index Integrity Review before implementation begins.

Codex must not implement a feature-changing idea until the Master Index, feature map, dependency map, and changelog have been updated.

---

## Feature-Oriented Indexing

In addition to sprint-based organization, the project must maintain `FEATURE_MAP.md`. This allows future project changes to update every affected sprint instead of only the obvious one.

Required feature families:

```txt
customer-experience
lead-onboarding
customer-profile
household-members
pets-and-access
water-bodies
commercial-pools
pool-outline
service-points
route-optimization
technician-progress
technician-visit-workflow
chemistry
commercial-daily-chemical-logs
reports
media-retention
conversations
requests-quotes-repairs
billing-payments
payment-failure-suspension
notifications
weather-intelligence
deals-products
admin-crm
technician-accountability
analytics-valuation
privacy-security
release-migration
```

Every prompt pack should eventually include a `Feature Tags` field so updates can be traced relationally.

---

## Protected Project Rules

These rules should live in `PROTECTED_RULES.md` and should also be referenced inside `AGENTS.md`.

1. The pool outline must never be treated as a decorative image only. Service markers must remain tied to operational records including reports, photos, service visits, chemistry where relevant, quotes, repairs, comments, recommendations, and status history.
2. Customers must never see admin-only internal notes.
3. Technicians must never see billing, payment details, customer profitability, route profitability, quote margin, or sensitive business data.
4. Route progress must protect customer and technician privacy. Customers see progress, stops-before-you, and ETA, not other customer addresses or unnecessary tech off-route movement.
5. Weekly/biweekly recurring services should remain on the same weekday unless admin intentionally changes them.
6. Commercial chemical logging must support property-management users who can submit required daily chemical readings and chemical additions.
7. High-quality media should be retained for two years, then compressed/archive-optimized after two years. Account deletion should remove pool-owner-specific account information except historical photos and report logs retained for liability purposes.
8. V1 customer questions must be answered by humans, not AI.
9. All quote approvals must include approval action, checkbox confirmation, typed signature, quote version, payment event, and audit log.
10. Failed payment workflows must be enforceable operationally, including customer suspension and technician skip-service notifications after the configured failure threshold.

## Priority Tiers

| Tier | Meaning | Description |
|---|---|---|
| P0 | Beta Critical Path | Needed for the first internal/friendly-customer beta. |
| P1 | V1 Launch | Needed before confidently launching to all customers/leads. |
| P2 | Skimmer Replacement / Valuation Layer | Needed for deeper CRM, analytics, product/deal revenue, and operational scale. |

---

## Status Values

Use these statuses in `STATUS_BOARD.md`:

- Not Started
- In Progress
- Implemented
- Tests Failing
- Needs Codex Review
- Review Findings
- Needs Fix
- Passed Review
- Merged
- Blocked
- Skipped

---

## Risk Values

- Low
- Medium
- High
- Critical

Critical prompt packs include auth, permissions, database migrations, billing, quote approval/signature logic, payment flows, customer data isolation, technician data restrictions, gate code visibility, report generation, pool outline data structure, pool-outline-to-operational-record relationships, route optimization, commercial chemical logging, payment-failure suspension logic, media retention/deletion exceptions, privacy deletion/export, and notification preference logic.

---

## Parallelization Rules

### Never run these in parallel

- Database migrations
- Auth/permission guards
- Payment/billing flows
- Quote approval/signature logic
- Pool outline data format
- Report generation engine
- Notification preference model
- Customer data deletion/export
- Master Index integrity/change protocol updates
- Route optimization data model
- Commercial chemical log data model
- Media retention/deletion exception model

### Safe to run in parallel later

- Documentation
- Seed data
- UI empty/loading/error states
- Admin list views
- Notification copy
- Deal/product screens
- QA prompts
- Handoff docs

### Main branch ownership

One person should own main branch, merge order, migration order, and the prompt pack status board. The other person can run safe parallel packs after backend contracts are stable.

---

## Sprint Overview

| Sprint | Area | Packs | Priority | Parallelization | Risk |
|---|---:|---:|---|---|---|
| S00 | Codex Operating System | 27 tracked entries (26 numbered + S00-008A amendment) | P0 | Mostly sequential | High |
| S01 | Repo, Infrastructure, Tooling | 16 | P0 | Mostly sequential | High |
| S02 | Core Database / Domain Model | 37 | P0 | Low | Critical |
| S03 | Auth, Roles, Permissions | 24 | P0 | Low | Critical |
| S04 | Lead, Customer, Household Onboarding | 26 | P0 | Medium | High |
| S05 | Water Bodies, Pool/Spa Logic, Equipment | 20 | P0 | Medium | High |
| S06 | Custom Pool Outline Studio | 38 | P0 | Low/Medium | Critical |
| S07 | Customer Mobile Shell + Dynamic Home | 24 | P0 | Medium | High |
| S08 | Route Management + Technician Progress | 31 | P0 | Medium | High |
| S09 | Technician Visit Workflow | 28 | P0/P1 | Medium | Critical |
| S10 | Chemistry + Report Engine | 31 | P0/P1 | Medium | Critical |
| S11 | Questions + Conversations | 24 | P0/P1 | Medium | High |
| S12 | Requests, Quotes, Repairs | 30 | P0/P1 | Medium | Critical |
| S13 | Billing + Payments | 35 | P1 | Low/Medium | Critical |
| S14 | Notifications | 33 | P0/P1 | Medium | High |
| S15 | Deals, Robots, Product Recommendations | 18 | P1/P2 | Medium | Medium |
| S16 | Admin Dashboard / Internal CRM | 34 | P0/P1/P2 | Medium | High |
| S17 | Technician Mobile Polish | 18 | P1 | Medium | High |
| S18 | Analytics, Profitability, Valuation Data | 27 | P2 | Medium | Medium |
| S19 | Privacy, Security, QA, Hardening | 37 | P0/P1/P2 | Medium | Critical |
| S20 | Release, Beta, Migration from Skimmer | 24 | P1/P2 | Medium | High |

**Total planned numbered prompt packs:** 581
**Tracked Sprint 00 entries:** 27 (S00-001 through S00-026 plus S00-008A amendment/reconciliation pack)

---

## Critical Beta Path

For the first 3–5 friendly customer beta, prioritize:

- S00 — Codex Operating System and Master Index Integrity
- S01 — Repo/Infrastructure
- S02 — Core Database
- S03 — Auth/Permissions
- S04 — Onboarding
- S05 — Water Bodies
- S06 — Pool Outline Studio
- S07 — Customer Home
- S08 — Route Progress and Route Optimization Basics
- S09 — Technician Visit Basics
- S10 — Reports/Chemistry Basics
- S11 — Questions Basics
- S12 — Quote/Repair Basics
- S14 — Essential Notifications
- S16 — Admin Basics
- S19 — Beta QA/Security
- S20 — Beta Launch

Beta should still include the custom pool outline, reports, chemistry, customer profile, pet/dog treat profile, questions, quote approval basics, route progress, push notifications, admin basics, and technician workflow basics.

---

# Full Prompt Pack Registry

## S00 — Codex Operating System

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S00-001 | P0 | No | High | Create Product Mission Doc | Define what the app is, why it exists, and how it creates value for customers and Shipwrecked. |
| S00-002 | P0 | No | High | Create Paul Story Source Doc | Store Paul’s app walkthrough as the product narrative Codex can reference. |
| S00-003 | P0 | No | High | Create V1 Scope Doc | Define beta, V1, and post-V1 scope boundaries. |
| S00-004 | P0 | No | Critical | Create Root AGENTS.md | Create durable repo-wide Codex instructions. |
| S00-005 | P0 | No | High | Create Folder-Level AGENTS.md Files | Add scoped rules for mobile, admin, API, DB, docs, and shared packages. |
| S00-006 | P0 | No | Critical | Create Permission Matrix Doc | Define access for owner/admin/technician/customer/household/lead. |
| S00-007 | P0 | No | Critical | Create Data Visibility Rules Doc | Define customer-friendly notes, technician-visible notes, and admin-only notes. |
| S00-008 | P0 | No | High | Create Prompt Pack Format Template | Standardize every future prompt pack. |
| S00-008A | P0 | No | Critical | Reconcile Feature Amendments With Scope, Permissions, Visibility, and Roadmap | Reconcile post-pack feature amendments across product/security/master-index governance docs. |
| S00-009 | P0 | No | High | Create Prompt Pack Status Board | Track progress, owner, branch, status, dependencies, and risk. |
| S00-010 | P0 | No | High | Create Codex Review Checklist | Define review questions Codex must answer after every pack. |
| S00-011 | P0 | Yes | Medium | Create Handoff Note Template | Standardize implementation handoff notes. |
| S00-012 | P0 | Yes | Medium | Create Parallel Work Rules | Define what two operators can safely run at the same time. |
| S00-013 | P0 | Yes | Medium | Create Rollback Rules | Define how to recover from bad Codex output. |
| S00-014 | P0 | Yes | High | Create Testing Philosophy Doc | Define testing expectations for backend, mobile, admin, billing, reports, and permissions. |
| S00-015 | P0 | Yes | High | Create Release Gate Definitions | Define internal demo, beta, V1 launch, and Skimmer replacement gates. |
| S00-016 | P0 | Yes | Medium | Create Paul Demo Persona Spec | Define Paul, Megan, Cooper, pool/spa, reports, quotes, and notifications. |
| S00-017 | P0 | Yes | Medium | Create Codex Skill Plan | Define reusable Codex skills for repeated workflows. |
| S00-018 | P0 | No | Critical | Finalize Sprint 00 Master Index and Sprint 01 Readiness | Close out Sprint 00 governance and establish Sprint 01 readiness criteria. |
| S00-019 | P0 | No | Critical | Create MASTER_INDEX_CHANGELOG.md | Create the change log used to track every project direction change and its reason. |
| S00-020 | P0 | No | Critical | Create MASTER_INDEX_UPDATE_PROTOCOL.md | Define the required process for changing the Master Index before implementation. |
| S00-021 | P0 | No | Critical | Create FEATURE_MAP.md | Create feature-oriented indexing so each idea maps to all affected sprints/packs. |
| S00-022 | P0 | No | Critical | Create DEPENDENCY_MAP.md | Create dependency tracking between packs, features, backend contracts, and release gates. |
| S00-023 | P0 | No | Critical | Create PROTECTED_RULES.md | Store permanent rules Codex must never violate. |
| S00-024 | P0 | No | Critical | Create Master Index Integrity Review Checklist | Define how Codex checks for contradictions after each index update. |
| S00-025 | P0 | No | Critical | Create Affected Sprint Recalculation Rules | Teach Codex to identify downstream sprint changes after new ideas. |
| S00-026 | P0 | No | Critical | Create Master Index Update Prompt Template | Create a reusable prompt template for future index updates. |

## S01 — Repo, Infrastructure, Tooling

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S01-001 | P0 | No | High | Initialize Monorepo | Create app/package structure. |
| S01-002 | P0 | Limited | High | Create Mobile App Shell | Initialize true mobile app structure. |
| S01-003 | P0 | Limited | High | Create API App Shell | Initialize backend API structure. |
| S01-004 | P0 | Limited | High | Create Admin Dashboard Shell | Initialize internal web dashboard. |
| S01-005 | P0 | Limited | High | Create Shared Types Package | Centralize TypeScript types. |
| S01-006 | P0 | Limited | Medium | Create Shared UI Package | Prepare reusable UI components. |
| S01-007 | P0 | No | Critical | Create DB Package | Prepare migrations, schema, and seed flow. |
| S01-008 | P0 | Limited | High | Create API Client Package | Prepare generated/typed API client layer. |
| S01-009 | P0 | Yes | Medium | Add Formatting Rules | Add formatting/lint consistency. |
| S01-010 | P0 | Yes | Medium | Add Testing Frameworks | Add backend, frontend, and shared package tests. |
| S01-011 | P0 | Yes | Medium | Add Environment Templates | Create `.env.example` files. |
| S01-012 | P0 | Yes | Medium | Add Local Dev Scripts | Make it easy to run mobile, API, admin, and tests. |
| S01-013 | P0 | Yes | Medium | Add CI Checks | Add automated checks for future work. |
| S01-014 | P0 | Limited | Medium | Add Seed Data System | Prepare reusable test data. |
| S01-015 | P0 | Yes | Low | Add Handoff Folder | Create documentation output location for Codex handoffs. |
| S01-016 | P0 | No | High | Verify Empty App Build | Ensure the blank app, admin, API, and tests run. |

## S02 — Core Database / Domain Model

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S02-001 | P0 | No | Critical | Organization Schema | Support Shipwrecked now and future SaaS possibility. |
| S02-002 | P0 | No | Critical | User Schema | Store core user records. |
| S02-003 | P0 | No | Critical | Role + Membership Schema | Support owner/admin/technician/customer/household roles. |
| S02-004 | P0 | No | High | Lead Schema | Support people who are not customers yet. |
| S02-005 | P0 | No | High | Customer Schema | Store customer records. |
| S02-006 | P0 | No | High | Household Member Schema | Allow Paul to invite Megan. |
| S02-007 | P0 | No | High | Property Schema | Store service addresses and property-level data. |
| S02-008 | P0 | No | Critical | Access + Gate Code Schema | Store gate codes and access notes securely. |
| S02-009 | P0 | No | High | Pet Schema | Store dog names, notes, and treat permission. |
| S02-010 | P0 | No | Critical | Water Body Schema | Support pool, spa, connected spa, and separate spa. |
| S02-011 | P0 | No | Critical | Water Body Relationship Schema | Model shared vs separate chemistry/report histories. |
| S02-012 | P0 | No | High | Equipment Schema | Store filter, pump, cleaner, heater, salt system, etc. |
| S02-013 | P0 | No | Critical | Pool Outline Schema | Store custom outline data. |
| S02-014 | P0 | No | Critical | Service Point Schema | Store plus markers and customer-visible statuses. |
| S02-015 | P0 | No | High | Route Schema | Store route days and route assignments. |
| S02-016 | P0 | No | High | Route Stop Schema | Store stop order, ETA, status, and reorder history. |
| S02-017 | P0 | No | High | Service Visit Schema | Store weekly maintenance visit records. |
| S02-018 | P0 | No | High | Checklist Schema | Store required visit checklist items. |
| S02-019 | P0 | No | High | Photo Schema | Store photo metadata and relationships. |
| S02-020 | P0 | No | High | Chemistry Schema | Store readings per water body. |
| S02-021 | P0 | No | High | Chemical Dosage Schema | Store chemicals added and quantities. |
| S02-022 | P0 | No | Critical | Report Schema | Store maintenance, repair, and green-to-clean reports separately. |
| S02-023 | P0 | No | High | Conversation Schema | Store customer questions and replies. |
| S02-024 | P0 | No | High | Request Schema | Store quote/repair/general/service requests. |
| S02-025 | P0 | No | Critical | Quote + Approval Schema | Store quotes, signatures, approvals, and declines. |
| S02-026 | P0 | No | Critical | Repair Job Schema | Store repair workflows and repair reports. |
| S02-027 | P1 | No | Critical | Billing + Payment Schema | Store invoices, payment references, and billable events. |
| S02-028 | P0 | No | Critical | Notification + Audit Schema | Store notification preferences, delivery logs, and audit logs. |
| S02-029 | P0 | No | Critical | Route Optimization Schema | Store route optimization inputs including geography, recurrence, service time estimates, pool type, and job type. |
| S02-030 | P1 | No | High | Commercial Facility Schema | Support commercial pools, apartment complexes, property-management contacts, and facility-level records. |
| S02-031 | P1 | No | Critical | Commercial Daily Chemical Log Schema | Allow commercial property managers to log required daily chemical readings and chemical additions. |
| S02-032 | P0 | No | Critical | Media Retention + Archive Schema | Support two-year high-quality media retention and post-two-year compression/archive states. |
| S02-033 | P1 | No | High | Weather Intelligence Schema | Store weather alerts, route impacts, freeze warnings, rain/lightning delays, and pump-warning rules. |
| S02-034 | P0 | No | High | Advanced Conversation Schema | Support message images, voice notes, unread states, typing indicators, escalation, priority, and admin oversight. |
| S02-035 | P1 | No | Critical | Billing Suspension + Partial Payment Schema | Support monthly billing, autopay, grace periods, failed payment thresholds, partial payments, invoices, and suspension. |
| S02-036 | P2 | No | High | Technician Accountability Metrics Schema | Track missed checklist items, skipped photos, route speed anomalies, repeat chemistry corrections, complaints, and dirty-pool flags. |
| S02-037 | P0 | No | Critical | Pool Outline Operational Relationship Constraints | Enforce relationships between service markers and reports, visits, photos, quotes, repairs, comments, and status history. |

## S03 — Auth, Roles, Permissions

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S03-001 | P0 | No | Critical | Auth Provider Setup | Implement account creation/login foundation. |
| S03-002 | P0 | No | High | Two-Factor Auth Setup Path | Add 2FA setup and enforcement path. |
| S03-003 | P0 | No | Critical | Role Guard System | Protect backend endpoints by role. |
| S03-004 | P0 | No | Critical | Admin Permission Rules | Allow admins to manage operations. |
| S03-005 | P0 | No | Critical | Owner Permission Rules | Allow owners to see everything including profitability. |
| S03-006 | P0 | No | Critical | Technician Permission Rules | Techs see operational data but not billing/profitability. |
| S03-007 | P0 | No | Critical | Customer Permission Rules | Customers see only their own data. |
| S03-008 | P0 | No | Critical | Household Permission Rules | Household members see invited data only. |
| S03-009 | P0 | No | High | Lead Permission Rules | Leads can create profile but not access service history. |
| S03-010 | P0 | No | Critical | Gate Code Access Logging | Log technician/admin gate code access. |
| S03-011 | P0 | No | Critical | Internal Notes Protection | Prevent internal notes from leaking to customers. |
| S03-012 | P0 | No | Critical | Billing Visibility Protection | Prevent tech access to billing/payment/profitability. |
| S03-013 | P0 | No | Critical | Customer Data Isolation Tests | Verify customers cannot access other customers. |
| S03-014 | P0 | No | Critical | Technician Access Tests | Verify technician boundaries. |
| S03-015 | P0 | No | High | Household Access Tests | Verify Megan-style access. |
| S03-016 | P0 | No | High | Admin Access Tests | Verify admin access. |
| S03-017 | P0 | Limited | Medium | Terms Acceptance | Require terms acceptance. |
| S03-018 | P0 | Limited | Medium | Privacy Policy Acceptance | Require privacy acknowledgment. |
| S03-019 | P0 | Limited | Medium | Session Handling | Add refresh/logout behavior. |
| S03-020 | P0 | Limited | Medium | Password Reset Flow | Add account recovery. |
| S03-021 | P0 | Limited | Medium | Auth Error States | Add mobile/admin auth error handling. |
| S03-022 | P0 | No | Critical | Auth Review Pack | Codex reviews auth/permission implementation. |
| S03-023 | P1 | No | Critical | Commercial Property Manager Permission Rules | Allow property-management users to submit/view permitted commercial chemical logs without broader admin access. |
| S03-024 | P1 | No | Critical | Commercial Chemical Log Permission Tests | Verify property managers can log readings only for assigned commercial properties. |

## S04 — Lead, Customer, Household Onboarding

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S04-001 | P0 | Limited | High | Lead Signup Flow | Allow non-customers to create accounts. |
| S04-002 | P0 | Limited | High | Customer Signup Flow | Allow invited/approved customers to create accounts. |
| S04-003 | P0 | Yes | Medium | Profile Setup Screen | Collect name, phone, email. |
| S04-004 | P0 | Yes | Medium | Property Setup Screen | Collect address/property info. |
| S04-005 | P0 | Limited | Critical | Gate Code Screen | Collect secure gate code. |
| S04-006 | P0 | Yes | High | Access Instructions Screen | Collect access details. |
| S04-007 | P0 | Yes | High | Pet Profile Screen | Add dog/pet name and notes. |
| S04-008 | P0 | Yes | Medium | Dog Treat Permission | Add treat yes/no setting. |
| S04-009 | P0 | Yes | Medium | Preferred Contact Screen | Capture contact preference. |
| S04-010 | P0 | Yes | Medium | Service Window Preferences | Capture preferred time/window info. |
| S04-011 | P0 | Yes | High | Technician Arrival Reminders | Capture notes that pop up on technician arrival. |
| S04-012 | P0 | Yes | High | Pool Details Intake | Collect pool details. |
| S04-013 | P0 | Yes | High | Spa Details Intake | Collect connected/separate spa info. |
| S04-014 | P0 | Yes | Medium | Equipment Notes Intake | Collect filter/pump/system notes. |
| S04-015 | P0 | Limited | Medium | Optional Pool Photo Upload | Let customers upload photos. |
| S04-016 | P0 | Limited | High | Household Invite Flow | Allow Paul to invite Megan. |
| S04-017 | P0 | Limited | High | Household Accept Invite Flow | Allow Megan to join. |
| S04-018 | P0 | Limited | Medium | Admin Lead Review | Let Shipwrecked review lead details. |
| S04-019 | P0 | Limited | High | Lead-to-Customer Conversion | Convert lead to customer internally. |
| S04-020 | P0 | Yes | Medium | Customer Profile Edit | Let customers edit allowed fields. |
| S04-021 | P0 | No | Critical | Sensitive Field Update Rules | Protect gate codes and key info. |
| S04-022 | P0 | Yes | Medium | Onboarding Progress State | Show incomplete/complete onboarding. |
| S04-023 | P0 | Limited | High | Onboarding Tests | Verify profile creation works. |
| S04-024 | P0 | No | High | Onboarding Review Pack | Codex reviews onboarding. |
| S04-025 | P1 | Limited | High | Commercial Property Manager Onboarding | Allow approved property-management contacts to create accounts for daily chemical logging. |
| S04-026 | P1 | Limited | High | Commercial Facility Intake | Capture commercial/apartment pool facility details and assigned responsible contacts. |

## S05 — Water Bodies, Pool/Spa Logic, Equipment

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S05-001 | P0 | Limited | High | Water Body Backend Service | Manage pool/spa records. |
| S05-002 | P0 | Limited | Critical | Connected Spa Logic | Support pool + connected spa. |
| S05-003 | P0 | Limited | Critical | Separate Spa Logic | Support separate non-connected bodies of water. |
| S05-004 | P0 | Limited | Critical | Shared Chemistry Rules | Define when chemistry is shared. |
| S05-005 | P0 | Limited | Critical | Separate Chemistry Rules | Define when chemistry is separate. |
| S05-006 | P0 | Limited | High | Water Body Report History | Keep separate report histories. |
| S05-007 | P0 | Limited | High | Equipment Backend Service | Manage equipment records. |
| S05-008 | P0 | Yes | Medium | Filter Type Model | Cartridge/sand/DE support. |
| S05-009 | P0 | Yes | Medium | Pump Type Model | Pump info support. |
| S05-010 | P0 | Yes | Medium | Salt System Model | Salt system info support. |
| S05-011 | P0 | Yes | Medium | Heater Model | Heater info support. |
| S05-012 | P0 | Yes | Medium | Cleaner/Robot Model | Cleaner and robot data support. |
| S05-013 | P0 | Yes | Medium | Equipment Photo Support | Attach photos to equipment. |
| S05-014 | P0 | Yes | Medium | Customer Pool Profile Screen | Show customer-friendly pool/equipment info. |
| S05-015 | P0 | Yes | Medium | Admin Pool Profile Screen | Edit detailed pool/equipment info. |
| S05-016 | P0 | Yes | Medium | Technician Pool Profile View | Show operationally useful info only. |
| S05-017 | P1 | Yes | Medium | Product Eligibility Tags | Support future deal targeting. |
| S05-018 | P0 | Limited | High | Water Body Tests | Verify connected/separate logic. |
| S05-019 | P0 | Limited | High | Equipment Tests | Verify equipment data rules. |
| S05-020 | P0 | No | High | Water Body Review Pack | Codex reviews water body implementation. |

## S06 — Custom Pool Outline Studio

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S06-001 | P0 | No | Critical | Pool Outline Data Contract | Define structured outline format. |
| S06-002 | P0 | Limited | High | Outline Source Image Upload | Upload satellite/customer/technician images. |
| S06-003 | P0 | Limited | High | Outline Draft Creation | Create draft outline records. |
| S06-004 | P0 | Limited | Critical | Outline Manual Trace Tool | Let admin trace pool shape. |
| S06-005 | P0 | Limited | Critical | Outline Point Editing | Adjust traced outline points. |
| S06-006 | P0 | Limited | High | Outline Smoothing Tool | Improve visual shape quality. |
| S06-007 | P0 | Limited | Critical | SVG Path Generation | Convert outline to renderable SVG/path. |
| S06-008 | P0 | No | Critical | Normalized Coordinate System | Make markers work across screen sizes. |
| S06-009 | P0 | Limited | High | Outline Versioning | Track draft/published/archived versions. |
| S06-010 | P0 | Limited | Critical | Outline Publish Flow | Publish customer-visible outline. |
| S06-011 | P0 | Yes | Medium | Outline Preview Screen | Preview exactly what customer sees. |
| S06-012 | P0 | Limited | Critical | Service Point Creation | Create marker objects. |
| S06-013 | P0 | Yes | High | Service Point Type Library | Define skimmer, steps, spa, returns, equipment pad, etc. |
| S06-014 | P0 | Limited | Critical | Marker Placement Tool | Place plus markers on outline. |
| S06-015 | P0 | Limited | High | Marker Color Status | Green/yellow/red status support. |
| S06-016 | P0 | Limited | Critical | Customer-Friendly Marker Notes | Show only safe/customer-facing notes. |
| S06-017 | P0 | Limited | Critical | Internal Marker Notes | Store admin/tech notes separately. |
| S06-018 | P0 | Yes | Medium | Marker Photo Attachment | Attach photos to service points. |
| S06-019 | P0 | Limited | High | Marker History Timeline | Store status/note/photo history. |
| S06-020 | P0 | Limited | High | Marker Quote/Repair Links | Attach quotes/repairs to markers. |
| S06-021 | P0 | Limited | Critical | Customer Outline Renderer | Render outline on mobile. |
| S06-022 | P0 | Limited | Critical | Customer Marker Tap Panel | Show marker details on tap. |
| S06-023 | P0 | Limited | High | Multiple Water Body Outlines | Support pool and separate spa outlines. |
| S06-024 | P0 | Limited | High | Connected Spa Outline Handling | Support connected spa visually. |
| S06-025 | P0 | No | Critical | Admin Outline Permissions | Only admin can edit/publish. |
| S06-026 | P0 | Yes | Medium | Outline Empty State | Handle customers without published outline. |
| S06-027 | P0 | Yes | Medium | Paul Demo Outline Seed | Create seeded Paul outline. |
| S06-028 | P0 | Yes | Medium | Outline Mobile Responsiveness | Test different device sizes. |
| S06-029 | P0 | Yes | Medium | Outline Accessibility | Add labels and tap targets. |
| S06-030 | P0 | Limited | Critical | Outline Tests | Backend and rendering tests. |
| S06-031 | P0 | No | Critical | Outline QA Review | Codex reviews outline system. |
| S06-032 | P0 | Yes | Medium | Pool Outline Handoff | Document how to create customer outlines. |
| S06-033 | P0 | Limited | High | Minimal Modern Line-Art Style Rules | Define the visual style for pool outlines as premium minimal modern line art. |
| S06-034 | P0 | Limited | High | North-Up Orientation Lock | Ensure outlines render north-up consistently. |
| S06-035 | P0 | Limited | High | Landscaping + Adjacent Water Context Layer | Include relevant landscaping, adjacent bodies of water, and detached spas in the outline context. |
| S06-036 | P0 | No | Critical | Marker Operational Relationship Enforcement | Ensure service markers stay tied to visits, reports, photos, quotes, repairs, comments, and history. |
| S06-037 | P0 | No | Critical | Outline Relationship Regression Tests | Test that marker-operational relationships cannot be broken by future changes. |
| S06-038 | P0 | Yes | Medium | Outline Visual QA Handoff | Document visual QA standards for custom pool outlines. |

## S07 — Customer Mobile Shell + Dynamic Home

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S07-001 | P0 | Limited | High | Mobile Navigation Structure | Create main app navigation. |
| S07-002 | P0 | Limited | High | Customer App Shell | Build logged-in customer layout. |
| S07-003 | P0 | Limited | Medium | Lead App Shell | Build logged-in lead layout. |
| S07-004 | P0 | Limited | Critical | Dynamic Home Priority Engine | Decide what appears first. |
| S07-005 | P0 | Limited | High | Service Day Home State | Show technician progress first on service day. |
| S07-006 | P0 | Limited | High | Report Ready Home State | Show new report priority. |
| S07-007 | P0 | Limited | High | Pending Quote Home State | Show pending quote priority. |
| S07-008 | P0 | Limited | High | Normal Pool Status Home State | Show outline/status when no urgent action. |
| S07-009 | P0 | Limited | Critical | Pool Outline Hero Card | Show custom pool outline prominently. |
| S07-010 | P0 | Yes | Medium | Pool Status Summary Card | Show good/watch/action status. |
| S07-011 | P0 | Yes | Medium | Chemistry Summary Card | Show latest chemistry. |
| S07-012 | P0 | Yes | Medium | Reports Access Card | Clean access to previous reports. |
| S07-013 | P0 | Yes | Medium | Quotes/Requests Card | Access pending and past quotes. |
| S07-014 | P0 | Yes | Medium | Questions Card | Ask and view questions. |
| S07-015 | P0 | Yes | Medium | Profile Card | Access customer profile. |
| S07-016 | P0 | Yes | Medium | Pet Profile Card | Access dog/pet info. |
| S07-017 | P1 | Yes | Medium | Billing Card | Access billing/payment basics. |
| S07-018 | P0 | Yes | Medium | Notification Settings Card | Access notification preferences. |
| S07-019 | P0 | Yes | Medium | Premium Empty States | Make incomplete states polished. |
| S07-020 | P0 | Yes | Medium | Loading States | Add loading skeletons/spinners. |
| S07-021 | P0 | Yes | Medium | Error States | Add graceful error handling. |
| S07-022 | P1 | Yes | Medium | Dark Mode Foundation | Prepare premium dark mode. |
| S07-023 | P0 | Limited | High | Customer Home Tests | Test dynamic priority states. |
| S07-024 | P0 | No | High | Customer Shell Review Pack | Codex reviews mobile shell. |

## S08 — Route Management + Technician Progress

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S08-001 | P0 | Limited | High | Route Backend Service | Create route management backend. |
| S08-002 | P0 | Limited | High | Route Day Creation | Create daily routes. |
| S08-003 | P0 | Limited | High | Route Stop Creation | Add customers to route. |
| S08-004 | P0 | Limited | High | Technician Assignment | Assign routes to techs. |
| S08-005 | P0 | Limited | Critical | Route Reordering | Allow tech to reorder stops. |
| S08-006 | P0 | No | Critical | Route Reorder Audit Log | Log all route changes. |
| S08-007 | P0 | Limited | High | Start Route Status | Tech starts route. |
| S08-008 | P0 | Limited | High | Start Stop Status | Tech starts a customer stop. |
| S08-009 | P0 | Limited | High | Complete Stop Status | Tech completes service. |
| S08-010 | P0 | Limited | High | Skip Stop Status | Tech marks skipped stop. |
| S08-011 | P0 | Limited | High | Delay Status | Tech marks delay. |
| S08-012 | P0 | Limited | High | Gate Locked Status | Tech marks gate locked. |
| S08-013 | P0 | Limited | High | Aggressive Dog Status | Tech marks dog issue. |
| S08-014 | P0 | Limited | High | Weather Issue Status | Tech marks weather issue. |
| S08-015 | P0 | Limited | High | Customer Reschedule Status | Tech marks requested reschedule. |
| S08-016 | P0 | Limited | High | Customer Push Status Events | Notify customer of route issues. |
| S08-017 | P0 | Limited | High | Stops Before You Calculation | Show route progress. |
| S08-018 | P0 | Limited | High | ETA Calculation | Show customer-friendly ETA. |
| S08-019 | P0 | Limited | High | Customer Route Progress Screen | Show approximate progress only. |
| S08-020 | P0 | No | Critical | Route Privacy Rules | Hide other customer data. |
| S08-021 | P0 | Limited | Medium | Admin Route Dashboard Basic | View and manage routes. |
| S08-022 | P0 | Limited | Medium | Technician Route Screen Basic | Show today’s route. |
| S08-023 | P0 | Limited | Critical | Route Tests | Test progress, privacy, reorder. |
| S08-024 | P0 | No | Critical | Route Review Pack | Codex reviews route system. |
| S08-025 | P0 | No | Critical | Automated Route Optimization Engine | Generate optimized routes from geography, job type, recurrence, and expected service duration. |
| S08-026 | P0 | No | Critical | Geography Clustering Rules | Cluster routes geographically while respecting service days. |
| S08-027 | P0 | Limited | High | Projected Service Time Model | Store and use expected service time per location, such as a 45-minute weekly visit. |
| S08-028 | P0 | Limited | High | Green/Repair/Commercial Weighting | Adjust optimization for green pools, repair visits, and commercial vs residential stops. |
| S08-029 | P0 | No | Critical | Recurring Weekday Lock | Keep weekly and biweekly recurring services on the same weekday unless admin overrides. |
| S08-030 | P0 | Limited | High | Route Optimization Admin Override | Allow admin and technicians to manually reorder when needed while preserving audit history. |
| S08-031 | P0 | No | Critical | Route Optimization Tests | Test optimization, privacy, weekday locks, manual overrides, and ETA impacts. |

## S09 — Technician Visit Workflow

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S09-001 | P0 | Limited | High | Technician Home Screen | Show assigned route. |
| S09-002 | P0 | Limited | High | Technician Stop Detail | Show customer/property/pool info. |
| S09-003 | P0 | Limited | Critical | Access Reminder Panel | Show gate, dog, treat, arrival reminders. |
| S09-004 | P0 | Limited | High | Arrival Confirmation | Start visit. |
| S09-005 | P0 | Limited | Critical | Gate Arrival Photo Requirement | Require arrival gate photo. |
| S09-006 | P0 | Limited | High | Water Body Checklist | Show checklist per pool/spa. |
| S09-007 | P0 | Yes | High | Deep End Photo Requirement | Capture required photo. |
| S09-008 | P0 | Yes | High | Shallow End Photo Requirement | Capture required photo. |
| S09-009 | P0 | Yes | High | Steps Photo Requirement | Capture required photo. |
| S09-010 | P0 | Yes | Medium | Alcove Photo Requirement | Capture if applicable. |
| S09-011 | P0 | Yes | High | Spa Photo Requirement | Capture attached/separate spa photos. |
| S09-012 | P0 | Yes | High | Filter Pressure Photo Requirement | Capture filter pressure. |
| S09-013 | P0 | Yes | High | Equipment Photo Requirement | Capture equipment issues/work. |
| S09-014 | P0 | Limited | High | Chemistry Entry Form | Enter readings. |
| S09-015 | P0 | Limited | High | Chemical Dosage Entry | Enter chemicals added. |
| S09-016 | P1 | Limited | High | Chemical Usage Billing Link | Track usage for billing/admin. |
| S09-017 | P0 | Limited | Critical | Internal Technician Notes | Add internal notes. |
| S09-018 | P0 | Limited | Critical | Customer-Friendly Notes | Add customer-visible notes. |
| S09-019 | P0 | Limited | High | Issue Flagging | Flag watch/action-needed issues. |
| S09-020 | P0 | Limited | High | Service Point Status Updates | Update marker statuses from visit. |
| S09-021 | P0 | Limited | High | Technician Quote Recommendation | Recommend quote/repair from field. |
| S09-022 | P0 | Limited | Critical | Gate Departure Photo Requirement | Require departure gate photo. |
| S09-023 | P0 | No | Critical | Complete Visit Validation | Block completion if required fields missing. |
| S09-024 | P1 | Limited | Medium | Time On Site Tracking | Track service time. |
| S09-025 | P0 | Limited | High | Visit Exception Handling | Handle locked gate/weather/dog/etc. |
| S09-026 | P0 | Limited | Critical | Technician Visit Tests | Test required photo/checklist flow. |
| S09-027 | P0 | No | Critical | Technician Visit Review Pack | Codex reviews visit workflow. |
| S09-028 | P0 | Yes | Medium | Technician Workflow Handoff | Document technician usage. |

## S10 — Chemistry + Report Engine

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S10-001 | P0 | Limited | High | Chemistry Backend Service | Store/read chemistry readings. |
| S10-002 | P0 | Limited | High | Chemistry Target Ranges | Define ideal/warning ranges. |
| S10-003 | P0 | Limited | Medium | Plain-English Chemistry Summary | Explain readings to customers. |
| S10-004 | P0 | Yes | Medium | Chlorine Reading Support | Add chlorine logic. |
| S10-005 | P0 | Yes | Medium | pH Reading Support | Add pH logic. |
| S10-006 | P0 | Yes | Medium | Alkalinity Reading Support | Add alkalinity logic. |
| S10-007 | P0 | Yes | Medium | Salt Reading Support | Add salt logic. |
| S10-008 | P0 | Yes | Medium | CYA Reading Support | Add cyanuric acid logic. |
| S10-009 | P0 | Yes | Medium | Calcium Hardness Support | Add calcium hardness logic. |
| S10-010 | P0 | Yes | Medium | Chemical Dosage Display | Show chemicals added. |
| S10-011 | P0 | Limited | Critical | Weekly Maintenance Report Generator | Auto-generate weekly reports. |
| S10-012 | P0 | Limited | High | Maintenance Report Template | Create customer-friendly layout. |
| S10-013 | P0 | Limited | High | Repair Report Template | Separate repair report type. |
| S10-014 | P0 | Limited | High | Green-to-Clean Report Template | Separate green-to-clean report type. |
| S10-015 | P0 | Limited | High | Report Photo Sections | Organize required photos. |
| S10-016 | P0 | Yes | Medium | “Everything Looks Perfect” State | Positive report state when no issues. |
| S10-017 | P0 | Limited | High | Report Timeline | Show past reports cleanly. |
| S10-018 | P0 | Limited | High | Report Detail Screen | Customer report view. |
| S10-019 | P0 | Limited | Medium | Report Commenting | Customer can comment. |
| S10-020 | P0 | Limited | High | Report Open Tracking | Track if customer opened report. |
| S10-021 | P1 | Limited | High | Admin Correction Before Open | Allow admin override before customer opens. |
| S10-022 | P0 | Limited | High | Report Ready Notification Trigger | Trigger notification after report creation. |
| S10-023 | P0 | Limited | High | Separate Water Body Report Sections | Support separate pool/spa reports. |
| S10-024 | P0 | Limited | High | Chemistry History Screen | Show readings indefinitely. |
| S10-025 | P1 | Limited | Medium | Photo Retention Rules | Keep photos while emphasizing readings/history. |
| S10-026 | P0 | Limited | Critical | Report Tests | Test generation, comments, visibility. |
| S10-027 | P0 | No | Critical | Report Review Pack | Codex reviews report engine. |
| S10-028 | P0 | Yes | Medium | Report Handoff | Document report creation flow. |
| S10-029 | P1 | Limited | Critical | Commercial Daily Chemical Logs | Let assigned commercial property managers log readings and chemicals added. |
| S10-030 | P1 | Limited | High | Commercial Chemical Log History | Store and display daily commercial chemical history by facility/water body. |
| S10-031 | P1 | Limited | High | Commercial Compliance Export | Export commercial daily chemical logs for compliance/liability needs. |

## S11 — Questions + Conversations

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S11-001 | P0 | Limited | High | Conversation Backend Service | Create messages/conversations. |
| S11-002 | P0 | Limited | Medium | Ask General Question Flow | Customer asks a general question. |
| S11-003 | P0 | Limited | Medium | Ask From Report Flow | Question tied to report. |
| S11-004 | P0 | Limited | Medium | Ask From Quote Flow | Question tied to quote. |
| S11-005 | P0 | Limited | Medium | Ask From Service Point Flow | Question tied to marker. |
| S11-006 | P0 | Limited | Medium | Admin Assignment Flow | Assign to admin. |
| S11-007 | P0 | Limited | Medium | Technician Assignment Flow | Assign to technician. |
| S11-008 | P0 | Limited | Medium | Technician Reply Flow | Tech replies through app. |
| S11-009 | P0 | Limited | Medium | Admin Reply Flow | Admin replies through app. |
| S11-010 | P0 | Limited | Medium | Customer Conversation Screen | Customer views/replies. |
| S11-011 | P0 | Limited | Medium | Conversation Notification Trigger | Notify customer/admin/tech. |
| S11-012 | P0 | Limited | Medium | Conversation History Link | Attach question to pool history. |
| S11-013 | P0 | No | Critical | No-AI Guardrails | Ensure no automated AI answers in V1. |
| S11-014 | P0 | No | Critical | Conversation Permissions | Prevent cross-customer access. |
| S11-015 | P0 | Limited | High | Conversation Tests | Test permissions and assignment. |
| S11-016 | P0 | No | High | Conversation Review Pack | Codex reviews messaging. |
| S11-017 | P0 | Limited | High | Conversation Image Uploads | Allow customers, techs, and admins to attach images to conversations. |
| S11-018 | P1 | Limited | Medium | Conversation Voice Notes | Allow voice-note messages where supported. |
| S11-019 | P0 | Limited | Medium | Unread Indicators | Show unread message counts and states. |
| S11-020 | P1 | Limited | Medium | Technician Typing Indicators | Show typing indicators for technician/admin replies where appropriate. |
| S11-021 | P0 | Limited | High | Message Escalation | Allow conversations to escalate from technician to admin/owner. |
| S11-022 | P0 | Limited | High | Message Priority | Mark conversations as normal, important, urgent, or blocked. |
| S11-023 | P0 | No | Critical | Admin Oversight of Technician Messaging | Ensure admin can read all technician-customer messaging. |
| S11-024 | P0 | No | High | Advanced Conversation Review Pack | Codex reviews attachments, priority, escalation, unread states, and oversight. |

## S12 — Requests, Quotes, Repairs

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S12-001 | P0 | Limited | Critical | Combined Request Backend | One request system with categories. |
| S12-002 | P0 | Limited | High | Request Category Library | Quote, repair, green-to-clean, robot, billing, etc. |
| S12-003 | P0 | Limited | High | Customer Request Flow | Customer submits request. |
| S12-004 | P0 | Limited | High | Small Repair Request Flow | Customer requests small repair. |
| S12-005 | P0 | Limited | High | Major Repair Request Flow | Customer requests larger repair. |
| S12-006 | P0 | Limited | High | Technician Recommendation Flow | Tech recommends repair/quote. |
| S12-007 | P0 | Limited | High | Admin Quote Creation | Admin creates quote. |
| S12-008 | P0 | Limited | High | Quote Template System | Common quote templates. |
| S12-009 | P0 | Yes | Medium | Filter Clean Quote Template | Template for filter cleaning. |
| S12-010 | P1 | Yes | Medium | Cleaner/Robot Quote Template | Template for cleaner/robot work. |
| S12-011 | P1 | Yes | Medium | Salt Cell Quote Template | Template for salt cell work. |
| S12-012 | P0 | Yes | Medium | Green-to-Clean Quote Template | Template for green-to-clean work. |
| S12-013 | P0 | Limited | High | Quote Line Items | Support itemized quote details. |
| S12-014 | P0 | Limited | High | Customer Quote Screen | Customer views quote. |
| S12-015 | P0 | Limited | Medium | Quote Question Flow | Customer asks about quote. |
| S12-016 | P0 | Limited | Critical | Quote Approval Button | Customer approves quote. |
| S12-017 | P0 | Limited | Critical | Approval Checkbox | Customer confirms approval. |
| S12-018 | P0 | Limited | Critical | Typed Signature | Customer types signature. |
| S12-019 | P0 | No | Critical | Approval Audit Log | Store who/when/what/version approved. |
| S12-020 | P0 | Limited | High | Quote Decline Flow | Customer declines quote. |
| S12-021 | P0 | Limited | High | Decline Reason Storage | Store decline reason/history. |
| S12-022 | P1 | No | Critical | Payment Trigger On Approval | Charge stored payment method. |
| S12-023 | P0 | Limited | Critical | Repair Job Creation | Create job after approval. |
| S12-024 | P0 | Limited | High | Attach Repair to Service Visit | Attach if appropriate. |
| S12-025 | P0 | Limited | High | Separate Repair Scheduling | Schedule separate repair if needed. |
| S12-026 | P0 | Limited | High | Before/After Repair Photos | Store before/after proof. |
| S12-027 | P0 | Limited | High | Repair Report Generation | Generate repair report. |
| S12-028 | P0 | Limited | High | Quote/Repair Notifications | Trigger quote/repair updates. |
| S12-029 | P0 | Limited | Critical | Quote/Repair Tests | Test approvals, signatures, permissions. |
| S12-030 | P0 | No | Critical | Quote/Repair Review Pack | Codex reviews revenue workflow. |

## S13 — Billing + Payments

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S13-001 | P1 | No | Critical | Stripe Customer Setup | Connect app users to Stripe customers. |
| S13-002 | P1 | No | Critical | Payment Method Setup | Save card on file. |
| S13-003 | P1 | Limited | High | Payment Method Screen | Customer manages payment method. |
| S13-004 | P1 | Limited | High | Default Payment Method | Set default card. |
| S13-005 | P1 | No | Critical | Invoice Model | Store invoice records. |
| S13-006 | P1 | Limited | High | Invoice List Screen | Customer sees invoices. |
| S13-007 | P1 | Limited | High | Invoice Detail Screen | Customer sees invoice details. |
| S13-008 | P1 | Limited | High | Payment History Screen | Customer sees payments. |
| S13-009 | P1 | No | Critical | Maintenance Billing Logic | Bill ongoing maintenance. |
| S13-010 | P1 | No | Critical | Approved Quote Charge Logic | Charge after approved quote. |
| S13-011 | P1 | No | Critical | Repair Charge Logic | Charge repair jobs. |
| S13-012 | P1 | No | Critical | Product/Robot Charge Logic | Charge products/robots. |
| S13-013 | P1 | Limited | Critical | Failed Payment Handling | Handle failed payments. |
| S13-014 | P1 | Limited | High | Payment Receipt Notification | Notify on successful payment. |
| S13-015 | P1 | Limited | High | Failed Payment Notification | Notify on failed payment. |
| S13-016 | P1 | Limited | High | Admin Billing Dashboard | Internal billing management. |
| S13-017 | P1 | No | Critical | Billing Permissions | Hide billing from technicians. |
| S13-018 | P1 | No | Critical | Stripe Webhook Handler | Process payment events. |
| S13-019 | P1 | No | Critical | Billing Audit Logs | Log billing/payment events. |
| S13-020 | P2 | Limited | High | Refund Support Basic | Admin refund support. |
| S13-021 | P1 | Limited | High | Subscription/Plan Support | Maintenance plan structure. |
| S13-022 | P2 | Limited | Medium | Billable Chemical Usage Link | Connect chemical usage to billing if needed. |
| S13-023 | P1 | Limited | Critical | Billing Tests | Test payments and visibility. |
| S13-024 | P1 | Limited | Critical | Webhook Tests | Test Stripe event handling. |
| S13-025 | P1 | No | Critical | Billing Review Pack | Codex reviews billing system. |
| S13-026 | P1 | Yes | Medium | Billing Handoff | Document payment/billing flow. |
| S13-027 | P1 | No | Critical | Monthly Billing Logic | Support monthly recurring maintenance billing. |
| S13-028 | P1 | No | Critical | One-Time Charges | Support one-time charges for repairs, products, green-to-clean, and other jobs. |
| S13-029 | P1 | No | Critical | Autopay Settings | Allow autopay setup, status, and customer/admin visibility. |
| S13-030 | P1 | No | Critical | Failed Payment Grace Periods | Support configurable grace periods after failed payment. |
| S13-031 | P1 | No | Critical | Two-Failed-Payments Skip Service Flag | Notify technician/admin to skip that week’s service after configured failed-payment threshold. |
| S13-032 | P1 | No | Critical | Customer Suspension Workflow | Suspend/resume customers based on billing status and admin action. |
| S13-033 | P1 | No | Critical | Partial Payment Support | Allow partial invoice payments and track remaining balance. |
| S13-034 | P1 | No | Critical | Customer Invoicing | Generate and display customer invoices for recurring and one-time charges. |
| S13-035 | P1 | No | Critical | Billing Suspension Tests | Test grace periods, partial payments, autopay, suspension, and technician skip-service visibility. |

## S14 — Notifications

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S14-001 | P0 | Limited | High | Notification Backend Service | Create notification event system. |
| S14-002 | P0 | Limited | High | Device Token Registration | Store push tokens. |
| S14-003 | P0 | No | Critical | Notification Preferences Model | Store user preferences. |
| S14-004 | P0 | Limited | High | Household Preferences | Separate preferences per household user. |
| S14-005 | P0 | Limited | High | Notification Settings Screen | Let customers manage categories. |
| S14-006 | P0 | Limited | High | Service Day Reminder | Notify before service day. |
| S14-007 | P0 | Limited | Medium | Add Water Reminder | Remind customer to add water. |
| S14-008 | P0 | Limited | High | Technician On The Way Notification | Trigger route status update. |
| S14-009 | P0 | Limited | High | Arriving Soon Notification | Trigger closer arrival update. |
| S14-010 | P0 | Limited | High | Service Complete Notification | Notify service completion. |
| S14-011 | P0 | Limited | High | Report Ready Notification | Notify report availability. |
| S14-012 | P0 | Limited | High | Quote Ready Notification | Notify quote availability. |
| S14-013 | P0 | Limited | High | Quote Approved Notification | Notify after approval. |
| S14-014 | P1 | Limited | Medium | Repair Scheduled Notification | Notify repair schedule. |
| S14-015 | P0 | Limited | High | Repair Complete Notification | Notify repair completion. |
| S14-016 | P0 | Limited | High | Gate Locked Notification | Notify customer and admin. |
| S14-017 | P0 | Limited | High | Aggressive Dog Notification | Notify customer and admin. |
| S14-018 | P0 | Limited | High | Weather Delay Notification | Notify customer and admin. |
| S14-019 | P0 | Limited | High | Reschedule Notification | Notify customer and admin. |
| S14-020 | P0 | Limited | High | Urgent Pool Issue Notification | Notify important pool issue. |
| S14-021 | P1 | Limited | Medium | Deal Notification | Notify product/deal availability. |
| S14-022 | P1 | Limited | High | Billing Notification | Notify payment/invoice events. |
| S14-023 | P1 | Limited | High | SMS Fallback Rules | Add SMS fallback logic. |
| S14-024 | P1 | Limited | Medium | Email Fallback Rules | Add email fallback logic. |
| S14-025 | P1 | Limited | Medium | Notification Log Admin View | View sent notifications. |
| S14-026 | P0 | Limited | Critical | Notification Tests | Test preferences and delivery logic. |
| S14-027 | P0 | No | Critical | Notification Review Pack | Codex reviews notification system. |
| S14-028 | P0 | Yes | Medium | Notification Handoff | Document notification categories. |
| S14-029 | P1 | Limited | High | Weather Intelligence Backend | Connect weather conditions to notifications, delays, warnings, and route impacts. |
| S14-030 | P1 | Limited | High | Freeze/Pump Warning Notifications | Notify customers to run pumps or protect equipment during cold conditions. |
| S14-031 | P1 | Limited | High | Rain/Lightning Service Delay Rules | Trigger service delay messaging based on unsafe or service-disrupting weather. |
| S14-032 | P1 | Limited | High | Weather-Based ETA/Route Adjustments | Allow weather to affect route estimates and admin/tech route decisions. |
| S14-033 | P1 | No | High | Weather Notification Tests | Test weather alert rules, preference handling, and route-delay impacts. |

## S15 — Deals, Robots, Product Recommendations

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S15-001 | P1 | Limited | Medium | Product Catalog Model | Store robots, filters, parts, etc. |
| S15-002 | P1 | Limited | Medium | Deal Model | Store active deals. |
| S15-003 | P1 | Limited | High | Deal Eligibility Rules | Match deals to pool/equipment type. |
| S15-004 | P1 | Limited | Medium | Cartridge Filter Deal Targeting | Avoid sending to sand filter customers. |
| S15-005 | P1 | Limited | Medium | Robot Deal Targeting | Target likely robot buyers. |
| S15-006 | P1 | Limited | Medium | Admin Deal Creation | Create deals manually. |
| S15-007 | P1 | Limited | Medium | Customer Deal Screen | Customer views deals. |
| S15-008 | P1 | Limited | Medium | Deal Notification Trigger | Notify eligible customers. |
| S15-009 | P1 | Limited | High | Turn Off Deal Notifications | Customer disables deals only. |
| S15-010 | P1 | Limited | Medium | Product Quote Request | Customer requests product quote. |
| S15-011 | P1 | Limited | Medium | Product Install Request | Customer requests install/setup. |
| S15-012 | P2 | Limited | High | Product Purchase Flow | Customer buys directly. |
| S15-013 | P1 | Limited | Medium | Product Task Creation | Create internal task after purchase. |
| S15-014 | P2 | Limited | Medium | Deal Analytics | Track opens/conversions. |
| S15-015 | P1 | Limited | Medium | Admin Product Dashboard | Manage product/deal catalog. |
| S15-016 | P1 | Limited | High | Deal Permission Tests | Test preference/eligibility rules. |
| S15-017 | P1 | No | High | Deal Review Pack | Codex reviews deal system. |
| S15-018 | P1 | Yes | Low | Deal Handoff | Document product/deal workflow. |

## S16 — Admin Dashboard / Internal CRM

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S16-001 | P0 | Limited | High | Admin Dashboard Shell | Create admin app layout. |
| S16-002 | P0 | Limited | Medium | Lead Dashboard | View/manage leads. |
| S16-003 | P0 | Limited | Medium | Customer Dashboard | View/manage customers. |
| S16-004 | P0 | Limited | High | Customer Detail Page | Full customer profile. |
| S16-005 | P0 | Limited | High | Property Detail Page | Address/access/property data. |
| S16-006 | P0 | Limited | Critical | Pet + Access Admin View | Manage dog/gate notes. |
| S16-007 | P0 | Limited | High | Water Body Admin View | Manage pools/spas. |
| S16-008 | P0 | Limited | Medium | Equipment Admin View | Manage equipment data. |
| S16-009 | P0 | Limited | High | Pool Outline Admin Entry | Link to outline studio. |
| S16-010 | P0 | Limited | High | Route Admin Dashboard | View/manage routes. |
| S16-011 | P1 | Limited | Medium | Technician Admin Dashboard | Manage technicians. |
| S16-012 | P0 | Limited | High | Service Visit Admin View | View visits/checklists/photos. |
| S16-013 | P0 | Limited | High | Report Admin View | View/edit reports. |
| S16-014 | P0 | Limited | High | Quote Admin Dashboard | Manage quotes. |
| S16-015 | P0 | Limited | High | Repair Admin Dashboard | Manage repairs. |
| S16-016 | P1 | Limited | High | Billing Admin Dashboard | Manage invoices/payments. |
| S16-017 | P0 | Limited | Medium | Conversation Admin Inbox | Answer customer questions. |
| S16-018 | P1 | Limited | Medium | Deal Admin Dashboard | Manage deals/products. |
| S16-019 | P1 | Limited | Medium | Notification Log Dashboard | Review sent notifications. |
| S16-020 | P0 | Limited | High | Audit Log Dashboard | Review sensitive actions. |
| S16-021 | P2 | Limited | High | Customer Profitability View | Admin-only profitability. |
| S16-022 | P2 | Limited | High | Route Profitability View | Admin-only route profitability. |
| S16-023 | P1 | Limited | High | Data Export Request Admin | Manage exports. |
| S16-024 | P1 | Limited | High | Deletion Request Admin | Manage account deletion. |
| S16-025 | P2 | Limited | Medium | Admin Impersonation/View-As | Admin can view customer experience. |
| S16-026 | P1 | Limited | Medium | Admin Search | Search customers/properties/routes. |
| S16-027 | P1 | Limited | Medium | Admin Filters/Tags | Organize CRM. |
| S16-028 | P1 | Limited | High | Admin Tests | Test admin permissions. |
| S16-029 | P1 | No | High | Admin Review Pack | Codex reviews admin dashboard. |
| S16-030 | P1 | Yes | Low | Admin Handoff | Document admin usage. |
| S16-031 | P1 | Limited | High | Commercial Property Admin View | Manage apartment/commercial pool facilities and property-management contacts. |
| S16-032 | P1 | Limited | High | Commercial Daily Chemical Log Admin View | Review daily commercial chemical readings and chemical additions. |
| S16-033 | P1 | Limited | Critical | Suspension Admin View | Manage failed-payment grace periods, suspension state, and resume service. |
| S16-034 | P0 | Limited | High | Route Optimization Admin Controls | View optimized route logic, override route order, and inspect service-time assumptions. |

## S17 — Technician Mobile Polish

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S17-001 | P1 | Limited | Medium | Technician Navigation | Create tech-specific navigation. |
| S17-002 | P1 | Limited | Medium | Technician Route UX Polish | Improve route flow. |
| S17-003 | P1 | Limited | Medium | Stop Detail UX Polish | Improve stop page. |
| S17-004 | P1 | Limited | High | Access Reminder UX | Make gate/dog notes obvious. |
| S17-005 | P1 | Limited | High | Photo Capture UX | Make required photos easy. |
| S17-006 | P1 | Limited | Medium | Chemistry Entry UX | Make readings easy to enter. |
| S17-007 | P1 | Limited | Medium | Chemical Dosage UX | Make chemical usage easy. |
| S17-008 | P1 | Limited | Medium | Issue Flagging UX | Make problems easy to flag. |
| S17-009 | P1 | Limited | Medium | Quote Recommendation UX | Recommend repairs from field. |
| S17-010 | P1 | Limited | High | Completion Validation UX | Clearly show missing items. |
| S17-011 | P1 | Limited | Medium | Delay/Skip UX | Make exception statuses easy. |
| S17-012 | P1 | Limited | Medium | Technician Question Inbox | See assigned customer questions. |
| S17-013 | P1 | Limited | Medium | Manual Notify Customer | Let tech manually notify if needed. |
| S17-014 | P1 | Yes | Low | Technician Empty States | Clean states if no route/stops. |
| S17-015 | P1 | Yes | Low | Technician Error States | Handle failures gracefully. |
| S17-016 | P1 | Limited | High | Technician Tests | Test core technician flows. |
| S17-017 | P1 | No | High | Technician Review Pack | Codex reviews technician polish. |
| S17-018 | P1 | Yes | Low | Technician Handoff | Document technician app usage. |

## S18 — Analytics, Profitability, Valuation Data

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S18-001 | P2 | Limited | Medium | Analytics Event Model | Track meaningful app/business events. |
| S18-002 | P2 | Limited | Medium | Report Open Analytics | Track report engagement. |
| S18-003 | P2 | Limited | Medium | Quote Conversion Analytics | Track approval/decline rates. |
| S18-004 | P2 | Limited | Medium | Repair Revenue Analytics | Track repair revenue. |
| S18-005 | P2 | Limited | Medium | Deal Conversion Analytics | Track deal performance. |
| S18-006 | P2 | Limited | Medium | Robot Sales Analytics | Track robot revenue. |
| S18-007 | P2 | Limited | High | Customer Profitability Model | Admin-only customer profitability. |
| S18-008 | P2 | Limited | High | Route Profitability Model | Admin-only route profitability. |
| S18-009 | P2 | Limited | Medium | Chemical Usage Analytics | Track chemical costs/usage. |
| S18-010 | P2 | Limited | Medium | Time On Site Analytics | Track labor time. |
| S18-011 | P2 | Limited | Medium | Technician Performance Metrics | Internal operational metrics. |
| S18-012 | P2 | Limited | Medium | Service Consistency Metrics | Track missed photos/checklists/issues. |
| S18-013 | P2 | Limited | Medium | Pool System Type Database | Build historical pool/equipment dataset. |
| S18-014 | P2 | Limited | Medium | Local Market Pool Data Insights | Surface equipment/system trends. |
| S18-015 | P2 | Limited | Medium | Customer Lifetime Value Basics | Track LTV indicators. |
| S18-016 | P2 | Limited | Medium | Churn Risk Indicators | Flag disengaged/problem customers. |
| S18-017 | P2 | Limited | Medium | Admin Analytics Dashboard | Display metrics. |
| S18-018 | P2 | Limited | Medium | Analytics Tests | Verify data events. |
| S18-019 | P2 | No | Medium | Analytics Review Pack | Codex reviews analytics. |
| S18-020 | P2 | Yes | Low | Valuation Data Handoff | Document strategic business data. |
| S18-021 | P2 | Limited | Medium | Missed Checklist Metrics | Track missed checklist items by technician, route, and account. |
| S18-022 | P2 | Limited | Medium | Skipped Photo Metrics | Track skipped or missing required photo patterns. |
| S18-023 | P2 | Limited | Medium | Route Speed Anomaly Metrics | Track unusually fast/slow service patterns without creating a customer-visible score. |
| S18-024 | P2 | Limited | Medium | Repeat Chemistry Correction Metrics | Track repeated chemical corrections and recurring water-balance issues. |
| S18-025 | P2 | Limited | Medium | Customer Complaint Frequency Metrics | Track complaint frequency and unresolved issue patterns. |
| S18-026 | P2 | Limited | Medium | Pool Still Dirty Flag Metrics | Track post-service dirty-pool flags and related follow-up. |
| S18-027 | P2 | Limited | Medium | Technician Coaching History | Store admin-only coaching/follow-up history without customer-visible quality scores. |

## S19 — Privacy, Security, QA, Hardening

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S19-001 | P0 | Limited | Critical | Sensitive Data Inventory | Identify gate codes, payments, notes, photos, etc. |
| S19-002 | P1 | Limited | High | Data Export Flow | Basic customer data export. |
| S19-003 | P1 | Limited | High | Account Deletion Flow | Customer account deletion request. |
| S19-004 | P1 | Limited | High | Deletion Admin Review | Admin handles deletion request. |
| S19-005 | P0 | Limited | Medium | Privacy Policy Linkage | Ensure privacy policy is shown/accepted. |
| S19-006 | P0 | Limited | Medium | Terms Linkage | Ensure terms are shown/accepted. |
| S19-007 | P1 | No | Critical | Payment Security Review | Verify no raw card storage. |
| S19-008 | P0 | No | Critical | Gate Code Security Review | Verify gate access is restricted/logged. |
| S19-009 | P0 | No | Critical | Photo Privacy Review | Verify photos are customer-specific/private. |
| S19-010 | P0 | No | Critical | Technician Data Restriction Review | Verify no tech access to sensitive business data. |
| S19-011 | P0 | No | Critical | Customer Isolation Review | Verify no cross-customer data leakage. |
| S19-012 | P0 | No | Critical | Internal Notes Leakage Review | Verify no internal notes leak. |
| S19-013 | P0 | No | Critical | Route Privacy Review | Verify no other customer route info leaks. |
| S19-014 | P0 | No | Critical | Audit Log Coverage Review | Verify important events are logged. |
| S19-015 | P0 | Limited | High | Backend Unit Test Pack | Add/verify backend tests. |
| S19-016 | P0 | Limited | High | API Integration Test Pack | Add/verify API tests. |
| S19-017 | P0 | Limited | High | Mobile Smoke Test Pack | Test critical mobile flows. |
| S19-018 | P0 | Limited | High | Admin Smoke Test Pack | Test admin flows. |
| S19-019 | P0 | Limited | High | Technician Smoke Test Pack | Test tech flows. |
| S19-020 | P1 | Limited | Critical | Billing Test Pack | Test payment/quote/invoice flows. |
| S19-021 | P0 | Limited | High | Notification Test Pack | Test preferences/delivery triggers. |
| S19-022 | P0 | Limited | Critical | Report Generation Test Pack | Test report flow. |
| S19-023 | P0 | Limited | Critical | Pool Outline Test Pack | Test outline rendering/editing. |
| S19-024 | P0 | Limited | Critical | Quote Approval Test Pack | Test signature/approval/payment. |
| S19-025 | P1 | Limited | Medium | Error Monitoring Setup | Add error/crash monitoring. |
| S19-026 | P1 | Limited | High | Backup Verification | Verify database backup strategy. |
| S19-027 | P0 | Yes | Medium | Seed Beta Customer Data | Create beta-ready test data. |
| S19-028 | P1 | Limited | Medium | Performance Basic Review | Catch obvious slow screens/queries. |
| S19-029 | P1 | Limited | Medium | Accessibility Basic Review | Basic mobile accessibility. |
| S19-030 | P0 | No | Critical | Security Review Pack | Codex reviews security. |
| S19-031 | P0 | No | Critical | QA Review Pack | Codex reviews QA readiness. |
| S19-032 | P0 | Yes | Medium | Beta Readiness Handoff | Summarize readiness and risks. |
| S19-033 | P0 | No | Critical | High-Quality Two-Year Media Retention Policy | Retain high-quality photos for up to two years for service proof and liability reduction. |
| S19-034 | P1 | No | Critical | Post-Two-Year Media Compression Workflow | Compress/archive old media after two years while preserving historical evidence. |
| S19-035 | P1 | No | Critical | Account Deletion Liability Exception | Delete pool-owner account information while retaining historical photos and report logs for liability. |
| S19-036 | P1 | No | Critical | Retained Report/Photo Access Rules | Define who can access retained historical photos/report logs after account deletion. |
| S19-037 | P1 | No | Critical | Media Retention + Deletion Tests | Test media retention, compression, deletion, and liability-exception rules. |

## S20 — Release, Beta, Migration from Skimmer

| Pack ID | Priority | Parallel | Risk | Title | Purpose |
|---|---|---|---|---|---|
| S20-001 | P1 | Yes | Medium | Internal Demo Script | Create demo flow using Paul. |
| S20-002 | P1 | Yes | Medium | Beta Customer Selection Plan | Define 3–5 friendly customer beta. |
| S20-003 | P1 | Limited | Medium | Beta Invite Flow | Invite beta customers. |
| S20-004 | P1 | Limited | Medium | Beta Feedback Collection | Collect structured feedback. |
| S20-005 | P1 | Limited | Medium | Beta Issue Triage Board | Track beta issues. |
| S20-006 | P1 | Limited | High | Beta Release Checklist | Verify required beta features. |
| S20-007 | P1 | Yes | Medium | App Store Prep Checklist | Prepare app store needs. |
| S20-008 | P1 | Yes | Medium | Google Play Prep Checklist | Prepare Play Store needs. |
| S20-009 | P1 | Limited | High | Production Environment Setup | Prepare production. |
| S20-010 | P1 | Limited | High | Staging Environment Setup | Prepare staging. |
| S20-011 | P1 | Limited | High | Production Seed/Bootstrap | Set up Shipwrecked org/admins. |
| S20-012 | P2 | Limited | High | Customer Migration Plan | Plan moving customers from Skimmer. |
| S20-013 | P2 | Limited | High | Skimmer Parallel Period Plan | Define temporary dual-system operation. |
| S20-014 | P2 | Limited | Medium | Skimmer Data Import Manual Flow | Manual import where API unavailable. |
| S20-015 | P1 | Yes | Medium | Customer Launch Communication | Draft customer messaging. |
| S20-016 | P1 | Yes | Medium | Technician Training Guide | Train technicians. |
| S20-017 | P1 | Yes | Medium | Admin Training Guide | Train internal admin use. |
| S20-018 | P1 | Yes | Medium | Support Playbook | Define customer support process. |
| S20-019 | P1 | Limited | Critical | Billing Cutover Checklist | Move billing carefully. |
| S20-020 | P1 | Limited | High | Report Cutover Checklist | Move reports/photos/chemistry. |
| S20-021 | P1 | Limited | High | Route Cutover Checklist | Move route management. |
| S20-022 | P1 | Limited | High | Post-Beta Fix Sprint | Fix issues found in beta. |
| S20-023 | P1 | No | Critical | V1 Launch Readiness Review | Codex reviews readiness. |
| S20-024 | P2 | No | Critical | Skimmer Replacement Readiness Review | Determine what blocks replacing Skimmer fully. |

---

# First Three Vertical Slices

## Vertical Slice 1 — Paul’s Pool Exists

Success condition: Paul logs in and sees his account, property, dog Cooper, pool/spa profile, custom pool outline, service markers, and customer profile.

Related sprints: S00, S01, S02, S03, S04, S05, S06, S07.

## Vertical Slice 2 — Paul Gets Serviced

Success condition: Technician completes a visit and Paul receives an on-the-way notification, route progress, service complete status, report-ready notification, weekly maintenance report, photos, chemistry readings, and customer-friendly notes.

Related sprints: S08, S09, S10, S14.

## Vertical Slice 3 — Paul Makes a Decision

Success condition: Paul asks a question, receives a human response, requests a quote, views the quote, approves with checkbox + typed signature, payment is triggered, repair job is created, and repair report is published.

Related sprints: S11, S12, S13, S14, S16.

---

# Prompt Pack Template Requirement

Every actual prompt pack should follow this format:

```txt
# Prompt Pack: SXX-000-title

## Goal
What Codex should accomplish.

## Why This Matters
How this supports Paul, Shipwrecked, Skimmer replacement, or valuation.

## Prerequisites
Which packs must be complete first.

## Files Likely Involved
Where Codex should work.

## Files Not To Touch
Where Codex should avoid changes.

## Business Rules
Shipwrecked-specific rules.

## Data Rules
Database/API/visibility rules.

## Permission Rules
Role restrictions.

## Build Prompt
The main implementation prompt.

## Bite-Sized Prompts
Step 1:
Step 2:
Step 3:
Step 4:

## Acceptance Criteria
What must be true when done.

## Tests To Add
Specific tests Codex must write.

## Commands To Run
Expected test/build commands.

## Codex Review Prompt
Ask Codex to review its own diff.

## Fix Prompt
Ask Codex to address review findings.

## Documentation Prompt
Ask Codex to update docs.

## Handoff Prompt
Ask Codex to create handoff note.

## Completion Checklist
Status update requirements.
```

---

# Immediate Next Step After This File

After adding and committing this `MASTER_INDEX.md`, create the Sprint 00 prompt pack files in:

```txt
docs/prompt-packs/sprint-00-codex-operating-system/
```

Start with:

```txt
S00-001-create-product-mission-doc.md
S00-002-create-paul-story-source-doc.md
S00-003-create-v1-scope-doc.md
S00-004-create-root-agents-md.md
S00-005-create-folder-level-agents-md-files.md
S00-019-create-master-index-changelog.md
S00-020-create-master-index-update-protocol.md
S00-021-create-feature-map.md
S00-022-create-dependency-map.md
S00-023-create-protected-rules.md
```

Do not ask Codex to build app features until S00, S01, S02, and S03 are complete. Do not ask Codex to implement project direction changes until the Master Index changelog, feature map, dependency map, protected rules, and affected sprint updates have been updated.
