# Parallel Work Rules (Shipwrecked Pools)

## 1. Core Rule
One prompt pack equals exactly:
- one Codex task
- one self-review
- one handoff note
- one human `git status` and `git diff --stat` check
- one commit
- then the next pack

Do not stack multiple uncommitted packs in one working tree.

## 2. Suggested Operator Roles
Roles can rotate, but only one person owns mainline at a time.

### Mainline Owner
- Owns `main` branch merge order.
- Maintains `docs/prompt-packs/STATUS_BOARD.md` as source of truth.
- Approves or blocks risky packs.
- Controls database migration sequencing.
- Decides when both operators must pull latest before continuing.
- Checks release-gate readiness and unresolved blockers.

### Feature Runner
- Executes safe packs on scoped branch/worktree.
- Follows `PACK_PATH` exactly and stays in pack scope.
- Creates handoff notes and runs self-review per pack.
- Does not change core schema/contracts without coordination.
- Escalates conflicts to Mainline Owner before proceeding.

## 3. Worktree / Branch Rules
- Create one branch or worktree per prompt pack.
- Start each pack from latest mainline state.
- Do not run a pack with a dirty working tree.
- Commit after each completed pack.
- Pull latest again before starting next pack.
- Use `STATUS_BOARD.md` to prevent duplicate or conflicting pack execution.
- If two operators selected overlapping scope, stop and reassign before coding.

## 4. Never Run These In Parallel
Do not parallelize these areas:
- database migrations and schema changes
- auth, role, and permission guards
- shared API contracts/OpenAPI definitions
- shared types used by multiple apps
- quote approval/signature/payment flows
- billing/payment processing and reconciliation
- Stripe and webhook logic
- notification preference model
- customer data export/deletion logic
- report generation engine
- pool outline data format
- master-job data model
- commercial export data model
- suggested chemical guidance rules/tables
- gate code/access handling
- internal note/customer note visibility model

## 5. Safe To Parallelize Later (After Contracts Stabilize)
- mobile empty/loading/error states
- visual polish and copy improvements
- documentation updates
- seed data updates
- admin list/table views using existing APIs
- customer screens using existing APIs
- QA/review prompt packs
- handoff documentation
- notification wording/templates
- report layout polish
- product/deal content screens

## 6. Limited Parallelization Areas
These can run in parallel only after backend/API contracts are stable and reviewed:
- customer mobile screens
- technician mobile screens
- admin dashboard screens
- notification triggers
- report UI
- quote UI
- chat UI
- commercial export UI

## 7. Conflict Detection Rules
Pause immediately when any of these happen:
- Codex modifies files outside expected pack scope.
- Two operators touch the same shared file/folder.
- Status board pack IDs or statuses conflict.
- Migration conflicts appear.
- Package/workspace config files change unexpectedly.
- Required tests/checks fail.
- Handoff notes report unresolved caveats.
- A major decision is labeled as "assumed" without confirmation.

## 8. Coordination Protocol (Per Session)
1. Both operators pull latest.
2. Check `docs/prompt-packs/STATUS_BOARD.md`.
3. Choose non-conflicting packs.
4. Mainline Owner approves risky packs.
5. Run one pack per branch/worktree.
6. Run Codex self-review.
7. Commit pack result.
8. Push/share branch if remote is configured.
9. Update status board.
10. Decide next pack.

## 9. Shipwrecked-Specific Coordination Warnings
- Pool outline work spans customer app, admin portal, service points, and data model.
- Master-job work spans quotes, billing, reports, technician visits, and profitability boundaries.
- Commercial export work spans reports, permissions, data visibility, and external recipients.
- Suggested chemical guidance spans chemistry readings, body-of-water profiles, technician flow, and safety controls.
- Context-aware chat spans entry points, routing, assignment, and visibility rules.
- Before/after galleries span photos, reports, service points, and customer visibility controls.

## 10. Human Decision Gates (Pause And Escalate)
Pause and ask ChatGPT/developer help when:
- database redesign is required
- billing/payment behavior is ambiguous
- permission or visibility rules conflict
- commercial export privacy is unclear
- suggested chemical guidance has safety/liability uncertainty
- Codex proposes deleting or rewriting major governance docs
- Codex modifies many unrelated files
- tests fail and Codex cannot fix within scope

## Operator Reminders
- Keep one-pack-at-a-time discipline even during parallel operation.
- Prefer stopping early over merging uncertain changes.
- Protect customer trust by enforcing role boundaries and data minimization in every pack.
