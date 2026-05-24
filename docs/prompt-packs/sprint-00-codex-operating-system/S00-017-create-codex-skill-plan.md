# Prompt Pack: S00-017 — Create Codex Skill Plan

## Pack Metadata

- **Pack ID:** S00-017
- **Title:** Create Codex Skill Plan
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** High
- **Expected Type:** Documentation / Codex workflow planning only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-016, including S00-008A if present
- **Blocks:** Future repeatable Codex workflows, Sprint 01/S02 implementation consistency

## Goal

Create a Codex skill plan that defines which reusable skills should be created later to support repeated work patterns across backend, database, mobile, admin, billing, reports, notifications, pool outlines, permissions, testing, review, and release readiness.

This pack plans the skills; it does not need to implement them yet.

## Why This Matters

The user and wife will run many prompt packs through Codex. Some workflows will repeat constantly:

- create backend endpoint
- add database migration
- update API contract
- add mobile screen
- add admin page
- write permission tests
- add notification trigger
- create report workflow
- add billing/Stripe logic
- review a diff
- update docs/handoffs

A skill plan helps future Codex tasks stay consistent and reduces repeated prompt text.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/mission.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/product/paul-demo-persona.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/qa/testing-philosophy.md` if it exists
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists
- `docs/codex/PARALLEL_WORK_RULES.md` if it exists
- `docs/codex/ROLLBACK_RULES.md` if it exists
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `.agents/skills/README.md` if it exists

## Files Codex Should Create

Create:

- `docs/codex/CODEX_SKILL_PLAN.md`
- `docs/handoffs/S00-017-create-codex-skill-plan.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `.agents/skills/README.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify implementation code, package files, database migrations, auth/billing/notification implementation, or unrelated docs.

## Build Prompt For Codex

Execute S00-017 only.

Create `docs/codex/CODEX_SKILL_PLAN.md`, a plan for future reusable Codex skills.

The plan must explain:

- what Codex skills are for in this repo
- when to use a skill vs a prompt pack
- how skills should reduce repeated instructions
- how skills must still obey prompt pack scope, AGENTS.md, permissions, data visibility, and review rules
- that this pack creates a plan only; actual skill implementation may happen later

The plan must include at least these future skills:

## Foundation / Process Skills

1. `skill-prompt-pack-runner`
   - Runs one prompt pack or approved batch sequentially.
   - Enforces PACK_PATH source of truth.
   - Stops on scope conflicts.
   - Updates status board and handoffs.

2. `skill-codex-review`
   - Applies the Codex review checklist.
   - Produces PASS / PASS WITH NOTES / NEEDS FIX / STOP decision.

3. `skill-handoff-writer`
   - Uses handoff note template.

4. `skill-rollback-recovery`
   - Applies rollback rules.

## Backend / API Skills

5. `skill-backend-endpoint`
   - Adds endpoint with role guards, validation, tests, docs.

6. `skill-api-contract-update`
   - Updates OpenAPI/typed API client/shared types.

7. `skill-role-permission-test`
   - Adds permission and denial tests.

8. `skill-audit-log-workflow`
   - Adds audit logging for sensitive actions.

## Database Skills

9. `skill-database-migration`
   - Creates migration/schema changes safely.
   - Requires no parallel migration work.
   - Updates schema docs.

10. `skill-seed-data`

- Adds Paul/demo/beta seed data.

## Mobile/Admin UI Skills

11. `skill-mobile-screen`

- Adds customer/technician mobile screen with loading/empty/error/success states.

12. `skill-technician-workflow`

- Adds technician route/service/checklist/photo/chemistry workflows.

13. `skill-admin-page`

- Adds desktop admin portal page.

14. `skill-ui-component`

- Adds shared UI component.

## Shipwrecked Feature Skills

15. `skill-pool-outline-workflow`

- Pool outline, service points, markers, outline studio.

16. `skill-report-workflow`

- Maintenance, repair, green-to-clean, acid wash, final summary reports.

17. `skill-photo-gallery-workflow`

- Before/after pairs, labels, visibility, admin hide.

18. `skill-master-job-workflow`

- Internal grouping, visits, rollups, reports, profitability admin-only.

19. `skill-commercial-export-workflow`

- Commercial accounts, health department/property manager exports, admin approval.

20. `skill-quote-repair-workflow`

- Requests, quotes, approvals, signatures, repairs, payment trigger.

21. `skill-billing-stripe-workflow`

- Payment methods, invoices, Stripe references, webhooks, no raw card storage.

22. `skill-notification-workflow`

- Push/SMS/email preferences, logs, triggers.

23. `skill-context-aware-chat-workflow`

- Chat entry points, context confirmation, routing, technician/admin assignment, internal notes.

24. `skill-chemical-guidance-workflow`

- Suggested chemical guidance, required data checks, technician edits, admin tables, safety rules.

25. `skill-route-progress-workflow`

- Stops-before-you/ETA, privacy, technician route reorder.

26. `skill-privacy-export-deletion-workflow`

- Customer data export/deletion and privacy requirements.

## QA / Release Skills

27. `skill-test-writer`

- Adds tests according to testing philosophy.

28. `skill-release-gate-check`

- Checks release gate readiness.

29. `skill-beta-feedback-triage`

- Organizes beta issues and post-beta fixes.

For each skill, include:

- purpose
- when to use
- inputs the skill expects
- files it may touch
- files it must not touch
- required checks/tests
- Shipwrecked-specific rules
- expected output/handoff

Also update `.agents/skills/README.md` to reference the skill plan and explain that actual skill folders should be created later when needed.

Update `STATUS_BOARD.md` for S00-017 and create the handoff note.

## Acceptance Criteria

S00-017 is complete only if:

- `docs/codex/CODEX_SKILL_PLAN.md` exists.
- It explains when to use skills vs prompt packs.
- It includes at least the listed skills and their purpose/usage.
- It includes Shipwrecked-specific feature skills.
- It includes permissions, visibility, testing, review, and handoff expectations.
- `.agents/skills/README.md` is updated if present.
- `STATUS_BOARD.md` has S00-017 row.
- S00-017 handoff exists.
- No implementation code is modified.
- No actual skill implementation is required yet unless the prompt pack explicitly chooses to add only placeholders.

## Codex Self-Review Prompt

Review S00-017 changes before finalizing.

Check:

1. Did you create `docs/codex/CODEX_SKILL_PLAN.md`?
2. Does it include foundation, backend, database, mobile/admin, Shipwrecked feature, QA, and release skills?
3. Does it explain when to use skills vs prompt packs?
4. Does each skill include purpose, use cases, inputs, allowed files, disallowed files, checks, and expected output?
5. Does it include feature-amendment-specific skills for master jobs, commercial exports, before/after galleries, chemical guidance, context-aware chat, and route progress?
6. Did you update `.agents/skills/README.md` if appropriate?
7. Did you update status board and create handoff?
8. Did you avoid implementation code?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/codex/CODEX_SKILL_PLAN.md .agents/skills/README.md docs/prompt-packs/MASTER_INDEX.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-017-create-codex-skill-plan.md
git commit -m "Complete S00-017 Codex skill plan"
```

If optional files were not modified, omit them from `git add`.
