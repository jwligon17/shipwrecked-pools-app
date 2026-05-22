# Prompt Pack: S00-012 — Create Parallel Work Rules

## Pack Metadata

- **Pack ID:** S00-012
- **Title:** Create Parallel Work Rules
- **Sprint:** S00 — Codex Operating System
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Documentation / workflow governance only
- **Can Run In Parallel:** No
- **Depends On:** S00-001 through S00-011, including S00-008A if present
- **Blocks:** Safe multi-person/multi-Codex development workflow

## Goal

Create clear rules for how the user and their wife can safely use Codex in parallel without causing conflicts, broken migrations, duplicated logic, inconsistent API contracts, or accidental data/permission mistakes.

## Why This Matters

The user and their wife intend to run Codex prompt packs together. The app will eventually include intertwined backend schema, API contracts, mobile screens, admin pages, technician workflows, payments, permissions, reports, notifications, and commercial exports.

Parallel work can speed development, but only if the risky areas are controlled.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/product/v1-scope.md`
- `docs/product/feature-amendments.md` if it exists
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/codex/CODEX_REVIEW_CHECKLIST.md` if it exists
- `docs/handoffs/HANDOFF_NOTE_TEMPLATE.md` if it exists

## Files Codex Should Create

Create:

- `docs/codex/PARALLEL_WORK_RULES.md`
- `docs/handoffs/S00-012-create-parallel-work-rules.md`

## Files Codex May Modify

Modify only if useful and tightly scoped:

- `AGENTS.md`
- `docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md`
- `docs/prompt-packs/PROMPT_PACK_TEMPLATE.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Must Not Touch

Do not modify implementation code, package files, database migrations, auth/billing/notification implementation, or unrelated docs.

## Build Prompt For Codex

Execute S00-012 only.

Create `docs/codex/PARALLEL_WORK_RULES.md`, a practical guide for how the user and their wife should run Codex prompt packs safely in parallel.

The document must be written for non-expert operators who are about 65% technical and using Codex heavily.

It must include:

## 1. Core Rule

One prompt pack equals:

- one Codex task
- one self-review
- one handoff note
- one human `git status` / `git diff --stat` check
- one commit
- then the next pack

## 2. Roles for the User and Wife

Define suggested operator roles:

- **Mainline Owner**
  - owns `main`
  - controls merge order
  - watches status board
  - controls database migration order
  - decides when to pull latest
  - checks release gates

- **Feature Runner**
  - runs safe prompt packs
  - works on scoped branches/worktrees
  - checks handoff notes
  - does not change core schema/contracts without coordination

Make clear that these roles can rotate, but only one person should own mainline at a time.

## 3. Worktree / Branch Rules

Include practical rules for:

- create a branch/worktree per prompt pack
- start from latest main
- do not run a pack if working tree is dirty
- do not stack multiple uncommitted prompt packs
- commit after each pack
- pull latest before starting the next pack
- use the status board to avoid duplicate work

## 4. Never Run These in Parallel

List critical areas that must not be parallelized:

- database migrations/schema changes
- auth/role/permission guards
- shared API contracts/OpenAPI
- shared types used by multiple apps
- quote approval/signature/payment flows
- billing/payment processing
- Stripe/webhook logic
- notification preference model
- customer data export/deletion
- report generation engine
- pool outline data format
- master job data model
- commercial export data model
- suggested chemical guidance rules/tables
- gate code/access data handling
- internal note/customer note visibility model

## 5. Safe to Parallelize Later

List safer areas after contracts are stable:

- mobile empty/loading/error states
- visual polish
- copy improvements
- documentation
- seed data
- admin list/table views using existing APIs
- customer screens using existing APIs
- QA/review prompt packs
- handoff docs
- notification wording/templates
- report layout polish
- product/deal content screens

## 6. Limited Parallelization Areas

Define areas that can be parallel only after backend/API contracts are complete:

- customer mobile screens
- technician mobile screens
- admin dashboard screens
- notification triggers
- report UI
- quote UI
- chat UI
- commercial export UI

## 7. Conflict Detection Rules

Tell operators to pause when:

- Codex modifies files outside expected scope
- two people change the same folder or shared file
- status board pack IDs conflict
- a migration conflict appears
- Codex changes package files unexpectedly
- tests fail
- a handoff reports caveats
- a pack says “assumed” for a major decision

## 8. Coordination Protocol

Include a simple daily/session workflow:

1. Both pull latest.
2. Check `STATUS_BOARD.md`.
3. Choose non-conflicting packs.
4. Mainline owner approves risky packs.
5. Run one pack per branch/worktree.
6. Codex self-reviews.
7. Commit.
8. Push/share if remote is configured.
9. Update status board.
10. Decide next pack.

## 9. Special Rules for Shipwrecked Features

Include feature-specific coordination warnings:

- Pool outline work touches customer app, admin portal, service points, and database.
- Master jobs touch quotes, billing, reports, technician visits, and profitability.
- Commercial exports touch reports, permissions, data visibility, and external recipients.
- Suggested chemical guidance touches chemistry, body-of-water profiles, technician workflow, and safety rules.
- Context-aware chat touches many screens and routing/assignment permissions.
- Before/after galleries touch photos, reports, service points, and customer visibility.

## 10. Human Decision Gates

Define when the user should pause and ask ChatGPT or a developer:

- database redesign
- billing/payment ambiguity
- permission conflict
- commercial export privacy uncertainty
- suggested chemical liability/safety uncertainty
- Codex wants to delete/rewrite major docs
- Codex wants to modify many unrelated files
- test suite fails and Codex cannot fix it

Update `STATUS_BOARD.md` for S00-012 and create the handoff note.

## Bite-Sized Implementation Steps

1. Read required docs.
2. Create `docs/codex/PARALLEL_WORK_RULES.md`.
3. Include all required sections.
4. Make it practical for the user and wife, not a generic engineering doc.
5. Include Shipwrecked-specific risky features.
6. Optionally update root `AGENTS.md` or runner/template with a brief pointer to the parallel work rules.
7. Update `STATUS_BOARD.md`.
8. Create S00-012 handoff.
9. Self-review for completeness and scope.

## Acceptance Criteria

S00-012 is complete only if:

- `docs/codex/PARALLEL_WORK_RULES.md` exists.
- It clearly explains what can and cannot be parallelized.
- It includes Mainline Owner and Feature Runner responsibilities.
- It includes never-parallel, safe-parallel, and limited-parallel areas.
- It includes Shipwrecked-specific feature warnings.
- It includes conflict detection and decision-gate rules.
- It is practical for the user and wife to follow.
- `STATUS_BOARD.md` has S00-012 row.
- S00-012 handoff exists.
- No implementation code is changed.

## Codex Self-Review Prompt

Review the S00-012 changes before finalizing.

Check:

1. Did you create `docs/codex/PARALLEL_WORK_RULES.md`?
2. Are the rules practical for two non-full-time developers using Codex?
3. Did you identify never-parallel, limited-parallel, and safer-parallel work?
4. Did you include Shipwrecked-specific risks: pool outlines, master jobs, commercial exports, chemical guidance, chat, before/after galleries, permissions, billing?
5. Did you update status board and create handoff?
6. Did you avoid implementation code?
7. Did you avoid creating rules that conflict with existing AGENTS or prompt pack workflow docs?

Fix any material issues before reporting completion.

## Expected Git Commit Message

```bash
git add docs/codex/PARALLEL_WORK_RULES.md AGENTS.md docs/codex/UNIVERSAL_PROMPT_PACK_RUNNER.md docs/prompt-packs/PROMPT_PACK_TEMPLATE.md docs/prompt-packs/STATUS_BOARD.md docs/handoffs/S00-012-create-parallel-work-rules.md
git commit -m "Complete S00-012 parallel work rules"
```

If AGENTS/runner/template files were not modified, omit them from `git add`.
