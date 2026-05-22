# Codex Skill Plan (Shipwrecked Pools)

## Purpose
This plan defines reusable Codex skills for recurring workflows in the Shipwrecked Pools repo. It standardizes repeated execution patterns while preserving prompt-pack scope control, role boundaries, visibility rules, review discipline, and handoff quality.

This pack defines planning only. It does not implement skill folders or runnable skill code yet.

## Skills vs Prompt Packs
Use prompt packs when:
- The work is milestone-scoped and tracked by pack ID.
- The result requires status-board progression and handoff artifacts.
- Dependencies and acceptance criteria are defined by a specific pack.

Use skills when:
- The workflow pattern repeats across many packs.
- The task can follow a consistent input/output checklist.
- Reusable guardrails reduce prompt repetition and operator error.

Rule: Skills accelerate execution; prompt packs remain the source of truth for scope.

## Required Governance For All Skills
Every future skill must:
- Respect `AGENTS.md` and active pack scope.
- Enforce role and visibility rules from security docs.
- Avoid prohibited files for the active task.
- Run required checks/tests for touched domains.
- Produce handoff-ready outputs (or explicit instructions to do so).
- Stop on pack-ID conflicts or out-of-scope change requests.

## Skill Specification Template
For each planned skill below, implementation should include:
- Purpose.
- When to use.
- Required inputs.
- Files it may touch.
- Files it must not touch.
- Required checks/tests.
- Shipwrecked-specific rules.
- Expected output/handoff.

## Foundation / Process Skills
### 1. `skill-prompt-pack-runner`
- Purpose: Execute one prompt pack (or approved sequential batch) with strict pack identity and scope control.
- When to use: Any pack execution session.
- Inputs: `PACK_PATH`, dependency confirmation, allowed file scope.
- May touch: Active pack outputs, `docs/prompt-packs/STATUS_BOARD.md`, required handoff file.
- Must not touch: Out-of-scope implementation files.
- Checks/tests: Pack-ID conflict check, scope diff check, acceptance-criteria review.
- Shipwrecked rules: Stop on conflicting Pack IDs; no skipping ahead.
- Expected output/handoff: Completed pack artifacts, updated status row, handoff note.

### 2. `skill-codex-review`
- Purpose: Apply codex review checklist and produce standardized decision.
- When to use: After any pack implementation.
- Inputs: Diff, active pack ID, acceptance criteria.
- May touch: Review notes/handoff sections.
- Must not touch: Unrelated implementation files.
- Checks/tests: Checklist coverage and PASS/PASS WITH NOTES/NEEDS FIX/STOP decision.
- Shipwrecked rules: Must verify permission/visibility boundaries.
- Expected output/handoff: Decision and remediation list.

### 3. `skill-handoff-writer`
- Purpose: Build complete handoff note from template.
- When to use: End of every completed pack.
- Inputs: Pack metadata, changed files, checks run, self-review findings.
- May touch: `docs/handoffs/<pack-file>.md`.
- Must not touch: Unrelated docs/code.
- Checks/tests: Required-section completeness check.
- Shipwrecked rules: Explicitly state docs-only vs code-test requirements.
- Expected output/handoff: Final handoff note ready for human commit review.

### 4. `skill-rollback-recovery`
- Purpose: Recover from out-of-scope or broken pack output.
- When to use: Any scope breach, wrong-pack run, or unsafe diff.
- Inputs: Current diff, expected file scope, rollback policy.
- May touch: Scoped files needed for restore/fix.
- Must not touch: Safe files outside recovery scope.
- Checks/tests: Pre/post diff comparison, scope restored check.
- Shipwrecked rules: Prefer scoped restore; avoid destructive history changes.
- Expected output/handoff: Recovery summary with remaining risk status.

## Backend / API Skills
### 5. `skill-backend-endpoint`
- Purpose: Add endpoint with validation, guards, tests, and docs.
- When to use: New or changed backend route behavior.
- Inputs: Domain object, role matrix, request/response contract.
- May touch: API modules, validators, tests, API docs.
- Must not touch: Unrelated services/domains.
- Checks/tests: Unit/integration/permission/contract tests.
- Shipwrecked rules: Organization + ownership/assignment scoping required.
- Expected output/handoff: Endpoint + tests + changelog notes.

### 6. `skill-api-contract-update`
- Purpose: Update OpenAPI/shared types/client contracts safely.
- When to use: Any API shape change.
- Inputs: Updated endpoint contract and impacted consumers.
- May touch: OpenAPI spec, shared types, generated client artifacts.
- Must not touch: Unrelated domain contracts.
- Checks/tests: Contract diff, consumer compile/tests.
- Shipwrecked rules: Prevent visibility-sensitive field leaks.
- Expected output/handoff: Synced contract artifacts and compatibility notes.

### 7. `skill-role-permission-test`
- Purpose: Add allow/deny role tests for changed behaviors.
- When to use: Any permission-sensitive change.
- Inputs: Roles, action matrix, domain object scope.
- May touch: Auth/policy tests.
- Must not touch: Unrelated features.
- Checks/tests: Positive + negative access tests per role.
- Shipwrecked rules: Technician financial-deny checks mandatory where relevant.
- Expected output/handoff: Permission test matrix coverage.

### 8. `skill-audit-log-workflow`
- Purpose: Add audit emission + verification for sensitive actions.
- When to use: Gate codes, quotes, payments, exports, report changes, etc.
- Inputs: Sensitive action list, event schema.
- May touch: Audit event emitters, schemas, tests.
- Must not touch: Unrelated logging systems.
- Checks/tests: Audit event shape and emission tests.
- Shipwrecked rules: Must include actor/role/target/timestamp/outcome.
- Expected output/handoff: Auditable workflow evidence.

## Database Skills
### 9. `skill-database-migration`
- Purpose: Create safe schema/migration updates.
- When to use: Data model changes.
- Inputs: Domain change spec, backward-compat constraints.
- May touch: Migration files, schema definitions, migration docs.
- Must not touch: Parallel migration branches.
- Checks/tests: Migration apply/rollback, data integrity checks.
- Shipwrecked rules: Never run migration packs in parallel.
- Expected output/handoff: Migration set + safety notes.

### 10. `skill-seed-data`
- Purpose: Build consistent Paul/demo/beta seed sets.
- When to use: Test/demo data creation packs.
- Inputs: Persona spec, role mappings, route/report scenarios.
- May touch: Seed files, fixture docs/tests.
- Must not touch: Production-only runtime paths.
- Checks/tests: Seed load validation and scenario assertions.
- Shipwrecked rules: No real private data.
- Expected output/handoff: Repeatable seeded scenarios.

## Mobile / Admin UI Skills
### 11. `skill-mobile-screen`
- Purpose: Add customer/technician screen with state handling.
- When to use: New mobile surface.
- Inputs: UI requirements, data contract, role visibility rules.
- May touch: Mobile screens/components/tests.
- Must not touch: Unrelated modules.
- Checks/tests: Rendering/state tests + smoke flows.
- Shipwrecked rules: Customer language must stay trust-building and clear.
- Expected output/handoff: Screen + tests + visibility validation.

### 12. `skill-technician-workflow`
- Purpose: Build technician route/service/checklist/photo/chemistry flows.
- When to use: Technician operation changes.
- Inputs: Route/visit requirements, permissions, timing constraints.
- May touch: Technician modules/tests.
- Must not touch: Billing/profitability customer-facing areas.
- Checks/tests: Assigned-only access, completion rules, required capture checks.
- Shipwrecked rules: Enforce 9 PM-8 AM completion block.
- Expected output/handoff: Workflow changes with safety checks.

### 13. `skill-admin-page`
- Purpose: Add desktop admin portal page/workflow.
- When to use: Admin operations expansion.
- Inputs: Admin task and policy boundaries.
- May touch: Admin views/components/tests.
- Must not touch: Unrelated role surfaces.
- Checks/tests: Admin role guard + workflow smoke tests.
- Shipwrecked rules: Sensitive actions auditable.
- Expected output/handoff: Admin workflow increment.

### 14. `skill-ui-component`
- Purpose: Add reusable UI component.
- When to use: Shared UI need across app surfaces.
- Inputs: Component API and accessibility requirements.
- May touch: Shared component libraries/tests/docs.
- Must not touch: Business logic unrelated to component.
- Checks/tests: Unit/render/accessibility checks.
- Shipwrecked rules: Maintain role-safe presentation defaults.
- Expected output/handoff: Reusable component package increment.

## Shipwrecked Feature Skills
### 15. `skill-pool-outline-workflow`
- Purpose: Pool outline/service point/marker workflow.
- When to use: Outline studio and marker feature changes.
- Inputs: Water-body context, marker schema, visibility rules.
- May touch: Outline models, APIs, screens, tests.
- Must not touch: Unrelated domains.
- Checks/tests: Rendering + marker visibility + note-type checks.
- Shipwrecked rules: Custom top-down outline is V1-critical.
- Expected output/handoff: End-to-end outline behavior.

### 16. `skill-report-workflow`
- Purpose: Manage maintenance/repair/green-to-clean/acid wash/final summary report flows.
- When to use: Report generation or publishing changes.
- Inputs: Report type, required artifacts, visibility targets.
- May touch: Report services/UIs/tests.
- Must not touch: Unrelated modules.
- Checks/tests: Report-type separation + publish/visibility tests.
- Shipwrecked rules: Report classes must remain distinct.
- Expected output/handoff: Stable report workflow update.

### 17. `skill-photo-gallery-workflow`
- Purpose: Before/after pairs, labels, hide controls, and visibility rules.
- When to use: Photo/report media behavior changes.
- Inputs: Photo categories, pair metadata, role visibility.
- May touch: Media services/UIs/tests.
- Must not touch: Unrelated storage features.
- Checks/tests: Pairing, label requiredness, hide/audit tests.
- Shipwrecked rules: Admin hide control must be enforced/auditable.
- Expected output/handoff: Photo workflow increment.

### 18. `skill-master-job-workflow`
- Purpose: Internal master-job grouping with visit/final summary behavior.
- When to use: Non-maintenance multi-visit work changes.
- Inputs: Job type, visit model, customer/internal visibility rules.
- May touch: Master job, report, quote, repair modules/tests.
- Must not touch: Weekly/biweekly maintenance model coupling.
- Checks/tests: Internal rollup vs customer-visible reporting tests.
- Shipwrecked rules: No generic customer master-job page.
- Expected output/handoff: Master-job flow update with visibility guarantees.

### 19. `skill-commercial-export-workflow`
- Purpose: Commercial account exports with admin approval gate.
- When to use: Export payload/workflow changes.
- Inputs: Export policy, recipient rules, review process.
- May touch: Export services/admin review UI/tests.
- Must not touch: Unrelated customer data flows.
- Checks/tests: Admin-approval gate + payload minimization tests.
- Shipwrecked rules: Exclude billing/profitability/internal notes.
- Expected output/handoff: Compliant export behavior.

### 20. `skill-quote-repair-workflow`
- Purpose: Request/quote/approval/signature/repair/payment trigger behavior.
- When to use: Quote/repair lifecycle changes.
- Inputs: Quote schema, approval requirements, payment integration points.
- May touch: Quote/repair modules/tests/docs.
- Must not touch: Unrelated billing internals.
- Checks/tests: Approval artifacts + audit + repair-report tests.
- Shipwrecked rules: Explicit approval action + checkbox + typed signature required.
- Expected output/handoff: Reliable decision/revenue flow.

### 21. `skill-billing-stripe-workflow`
- Purpose: Billing/payment method/invoice/payment event workflows.
- When to use: Payment integrations or billing behavior changes.
- Inputs: Provider reference model, invoice/payment requirements.
- May touch: Billing modules, webhooks, tests, docs.
- Must not touch: Raw card storage pathways.
- Checks/tests: Charge success/failure/idempotency + masking tests.
- Shipwrecked rules: Store provider references only.
- Expected output/handoff: Safe billing workflow increment.

### 22. `skill-notification-workflow`
- Purpose: Notification preferences, triggers, and delivery behavior.
- When to use: Notification changes.
- Inputs: Notification events, audience, channel preferences.
- May touch: Notification services/templates/tests.
- Must not touch: Unrelated messaging systems.
- Checks/tests: Preference routing + payload safety tests.
- Shipwrecked rules: Deal opt-out must be independent from essential notifications.
- Expected output/handoff: Reliable notification behavior.

### 23. `skill-context-aware-chat-workflow`
- Purpose: Context-confirmed chat routing and assignment logic.
- When to use: Customer/technician/admin chat behavior changes.
- Inputs: Entry points, context model, assignment policy.
- May touch: Chat services/UIs/tests.
- Must not touch: Unrelated messaging domains.
- Checks/tests: Context-confirmation, reassignment, reopen behavior tests.
- Shipwrecked rules: No auto-attach without customer confirmation; technician chat asynchronous only.
- Expected output/handoff: Safe chat workflow update.

### 24. `skill-chemical-guidance-workflow`
- Purpose: Internal suggested chemical guidance behavior.
- When to use: Guidance calculation/edit/approval changes.
- Inputs: Reading requirements, pool profile data, thresholds.
- May touch: Chemistry modules/guidance tables/tests.
- Must not touch: Customer-visible recommendation surfaces.
- Checks/tests: Required-data gating + role visibility tests.
- Shipwrecked rules: Suggestions internal-only; customers see applied chemicals only.
- Expected output/handoff: Safe recommendation workflow increment.

### 25. `skill-route-progress-workflow`
- Purpose: Route progress and technician route controls.
- When to use: Route visibility/reordering/status behavior changes.
- Inputs: Route model, privacy constraints, assignment context.
- May touch: Route services/UIs/tests.
- Must not touch: Other-customer identifying data surfaces.
- Checks/tests: Stops-before-you/ETA and privacy tests.
- Shipwrecked rules: No exact customer-facing GPS.
- Expected output/handoff: Privacy-safe route progress behavior.

### 26. `skill-privacy-export-deletion-workflow`
- Purpose: Customer export/deletion request workflow.
- When to use: Privacy data handling changes.
- Inputs: Request model, retention rules, approval flow.
- May touch: Privacy services/admin workflows/tests.
- Must not touch: Unscoped customer datasets.
- Checks/tests: Export/deletion process + audit tests.
- Shipwrecked rules: Sensitive actions must be auditable and role-gated.
- Expected output/handoff: Compliant privacy workflow increment.

## QA / Release Skills
### 27. `skill-test-writer`
- Purpose: Add tests aligned to testing philosophy by domain.
- When to use: Any behavior change.
- Inputs: Changed behavior, risk level, app area.
- May touch: Relevant test suites and fixtures.
- Must not touch: Unrelated code paths.
- Checks/tests: Coverage of changed behavior and deny paths.
- Shipwrecked rules: Prioritize permission/visibility and trust-critical flows.
- Expected output/handoff: Targeted test additions with results.

### 28. `skill-release-gate-check`
- Purpose: Evaluate gate readiness against `release-gates.md`.
- When to use: Milestone readiness assessment.
- Inputs: Current feature status, test results, known blockers.
- May touch: Readiness docs/checklists/handoff notes.
- Must not touch: Unrelated implementation files.
- Checks/tests: Gate checklist pass/fail evidence.
- Shipwrecked rules: No go decision without privacy/permission confidence.
- Expected output/handoff: Gate decision with blocker list.

### 29. `skill-beta-feedback-triage`
- Purpose: Organize beta findings and prioritize fixes.
- When to use: Active beta and post-beta hardening.
- Inputs: Support tickets, bug reports, usage notes.
- May touch: QA docs/triage boards/handoff notes.
- Must not touch: Implementation without linked fix pack.
- Checks/tests: Categorization by severity/risk/domain.
- Shipwrecked rules: Customer confidence issues prioritized first.
- Expected output/handoff: Prioritized remediation queue.

## Implementation Order Recommendation
1. Foundation/process skills first.
2. Permission/test/review skills second.
3. Domain-heavy skills (billing, exports, chat, chemistry guidance) after core contracts stabilize.
4. Release-gate and beta-triage skills before launch cycles.

## Non-Goals
- No automatic skill execution bypassing prompt-pack governance.
- No skill should permit cross-pack scope creep.
- No skill should bypass required reviews, tests, or handoffs.
