# Sprint 00 Closeout

## 1. Sprint 00 Purpose

Sprint 00 established the Shipwrecked Codex operating system and planning baseline before implementation work. It produced product direction docs, role/permission controls, data visibility rules, prompt-pack execution standards, review and handoff procedures, parallel/rollback process rules, testing philosophy, release gates, demo persona definitions, and Codex skill planning.

## 2. Completed Sprint 00 Packs

| Pack                                             | Expected Output Doc(s)                                                                                                                                                | Purpose                                                          | Completion Evidence / Check                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| S00-001 Product Mission                          | `docs/product/mission.md`                                                                                                                                             | Define core product mission and customer-confidence outcome.     | File exists; mission reflects true mobile + role boundaries.                   |
| S00-002 Paul Story Source                        | `docs/product/paul-story.md`                                                                                                                                          | Anchor decisions in an end-to-end customer narrative.            | File exists; narrative includes route progress, reports, chemistry, approvals. |
| S00-003 V1 Scope                                 | `docs/product/v1-scope.md`                                                                                                                                            | Define demo/beta/V1 boundaries and out-of-scope lines.           | File exists; phased scope documented.                                          |
| S00-004 Root AGENTS.md                           | `AGENTS.md`                                                                                                                                                           | Establish repo-level execution and quality rules for Codex work. | File exists; one-pack workflow and scope controls present.                     |
| S00-005 Folder-Level AGENTS.md Files             | `apps/**/AGENTS.md`, `packages/**/AGENTS.md`, `docs/**/AGENTS.md` (where defined)                                                                                     | Add local guardrails by workspace area.                          | Files exist in scoped folders; root guidance references them.                  |
| S00-006 Permission Matrix                        | `docs/security/permission-matrix.md`                                                                                                                                  | Define allowed/denied actions by role.                           | File exists; technician financial-deny boundaries documented.                  |
| S00-007 Data Visibility Rules                    | `docs/security/data-visibility-rules.md`                                                                                                                              | Define customer-friendly vs internal visibility policy.          | File exists; internal-note and sensitive-data visibility rules present.        |
| S00-008 Prompt Pack Format Template              | `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`, `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`                                                                             | Standardize pack structure and execution flow.                   | Files exist; PACK_PATH and conflict-stop workflow documented.                  |
| S00-008A Feature Amendment Reconciliation        | `docs/product/feature-amendments.md` and aligned updates in living docs                                                                                               | Reconcile amendments into scope, permissions, and roadmap.       | File exists; amendment set captured and referenced in planning docs.           |
| S00-009 Prompt Pack Status Board                 | `docs/prompt-packs/STATUS_BOARD.md`                                                                                                                                   | Track pack progress and completion state.                        | File exists; Sprint 00 rows maintained through S00-018.                        |
| S00-010 Codex Review Checklist                   | `docs/codex/CODEX_REVIEW_CHECKLIST.md`                                                                                                                                | Enforce repeatable post-change review quality.                   | File exists; review gates and failure checks documented.                       |
| S00-011 Handoff Note Template                    | `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md`                                                                                                                              | Standardize pack handoff artifacts.                              | File exists; required sections/checklists included.                            |
| S00-012 Parallel Work Rules                      | `docs/codex/PARALLEL_WORK_RULES.md`                                                                                                                                   | Define safe parallelization boundaries.                          | File exists; no-parallel rules and coordination guidance documented.           |
| S00-013 Rollback Rules                           | `docs/codex/ROLLBACK_RULES.md`                                                                                                                                        | Define scoped rollback/recovery process.                         | File exists; rollback paths and containment rules documented.                  |
| S00-014 Testing Philosophy                       | `docs/qa/testing-philosophy.md`                                                                                                                                       | Define testing expectations per pack type and risk.              | File exists; docs-only vs code-pack expectations documented.                   |
| S00-015 Release Gates                            | `docs/product/release-gates.md`                                                                                                                                       | Define go/no-go readiness gates through launch/replacement.      | File exists; staged readiness model documented.                                |
| S00-016 Paul Demo Persona                        | `docs/product/paul-demo-persona.md`                                                                                                                                   | Define stable demo persona/test context.                         | File exists; Paul/Megan/Cooper scenario coverage present.                      |
| S00-017 Codex Skill Plan                         | `docs/codex/CODEX_SKILL_PLAN.md`                                                                                                                                      | Define reusable execution skills/workflows.                      | File exists; cross-domain skill plan documented.                               |
| S00-018 Sprint 00 Closeout / Sprint 01 Readiness | `docs/codex/SPRINT_00_CLOSEOUT.md`, `docs/codex/SPRINT_01_READINESS_CHECKLIST.md`, `docs/handoffs/S00-018-finalize-sprint-00-master-index-and-sprint-01-readiness.md` | Final closeout and Sprint 01 go/no-go readiness package.         | Files created; STATUS_BOARD row updated; handoff created.                      |

## 3. Product Direction Summary

- The product is a true mobile app, not a PWA-only delivery.
- The system remains one app with role-based experiences.
- Roles include customer, household member, technician, admin/owner, and commercial account contexts.
- Owner/admin may operate in technician flows with stricter admin authority.
- Customer confidence and clarity are primary outcomes.
- The custom top-down pool outline is V1-critical.
- The roadmap targets Skimmer replacement across operations.
- Admin desktop portal remains part of intended architecture.
- Multi-tenant SaaS remains a future optional direction.

## 4. Feature Amendment Summary (S00-008A)

- Master jobs are required internal grouping objects for non-maintenance work.
- Commercial account support includes health department/property manager export workflows with review controls.
- Before/after photo galleries apply across work types with visibility controls.
- Technician arrival pop-up reminders are included in operational behavior.
- Admin portal beta requirements are included in planning.
- Technician safety reminders are included as internal workflow requirements.
- Suggested chemical guidance is included as an internal recommendation flow.
- Context-aware chat requires explicit customer confirmation before context attachment.
- Technician completion restriction window (9 PM to 8 AM) is captured for route/workflow constraints.

## 5. High-Risk Rules to Preserve

- Technicians never see billing, payment status, margin, route profitability, customer profitability, or internal financial notes.
- Customers see customer-friendly notes only.
- Internal notes never leak to customers.
- Route progress is stops-before-you plus ETA; exact live customer-facing GPS is prohibited.
- Commercial exports require admin review before outbound email.
- Export recipients receive only approved export-safe data.
- Master jobs are internal grouping constructs, not generic customer-facing pages.
- Suggested chemical guidance is internal only.
- Chemical recommendation tables are admin-editable only.
- Context-aware chat must ask customers to confirm context attachment.
- Technician chat is asynchronous only.
- Closed chat threads reopen on customer reply.
- Admin can control before/after photo customer visibility.
- Gate-code access must be role-guarded and auditable.
- Quote approvals require approval action, confirmation checkbox, typed signature, audit log, and payment flow when applicable.

## 6. Sprint 00 Quality Check

- [x] Product docs present
- [x] Security docs present
- [x] Prompt pack docs present
- [x] Codex workflow docs present
- [x] Handoff template present
- [x] Review checklist present
- [x] Parallel work rules present
- [x] Rollback rules present
- [x] Testing philosophy present
- [x] Release gates present
- [x] Paul persona present
- [x] Skill plan present
- [x] Status board updated
- [x] Master index updated
- [x] No implementation code required yet

## 7. Known Caveats or Follow-Ups

- No blocking caveats found during Sprint 00 closeout.
- Follow-up discipline: Sprint 01 should keep changes limited to repo/infrastructure/tooling packs and preserve all Sprint 00 role/visibility constraints.
