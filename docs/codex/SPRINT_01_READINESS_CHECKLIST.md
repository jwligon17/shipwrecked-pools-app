# Sprint 01 Readiness Checklist

## 1. Sprint 01 Purpose

Sprint 01 is for repo, infrastructure, and tooling setup before feature implementation.

Sprint 01 should prepare:

- monorepo structure
- package manager/workspace configuration discipline
- mobile app shell
- admin dashboard shell
- API app shell
- shared types package
- database package shell
- API client package shell
- shared UI package shell
- linting and formatting
- testing frameworks
- environment templates
- local development scripts
- CI checks
- seed data strategy
- initial empty-app build verification

## 2. Preconditions Before Starting Sprint 01

- [ ] `git status` is clean
- [ ] All Sprint 00 docs are committed
- [ ] `docs/prompt-packs/STATUS_BOARD.md` is accurate through S00-018
- [ ] No uncommitted Codex output remains
- [ ] Current working branch is known and intentional
- [ ] Remote push is completed/recommended where available
- [ ] Mainline Owner is identified for merge decisions
- [ ] Batch-execution rule is understood (one pack at a time unless explicitly planned)
- [ ] No database/auth/billing implementation has begun outside approved Sprint 01 pack scope

## 3. Sprint 01 Risk Rules

- Do not start database schema implementation before repo/tooling stability is in place.
- Do not implement app features before mobile/admin/API shells and workspace foundations exist.
- Do not add billing/auth/payment logic in Sprint 01 unless a prompt pack explicitly requires it.
- Do not let Codex choose stack direction ad hoc; follow project docs and prompt packs.
- Keep Sprint 01 constrained to infrastructure/tooling execution.
- Continue enforcing prompt packs, self-review, handoffs, and status board updates.

## 4. Recommended Sprint 01 Stack Assumptions

Planning assumptions (to be refined by Sprint 01 prompt packs):

- monorepo
- TypeScript
- Expo React Native for mobile
- Next.js for admin dashboard
- NestJS or equivalent structured TypeScript API framework
- PostgreSQL/Supabase direction for data layer
- shared packages for types, API client, UI, config, auth, notifications, pool-outline, and test utilities

## 5. Sprint 01 Go/No-Go Checklist

- [ ] Sprint 00 is complete
- [ ] S00-018 is committed
- [ ] Working tree is clean
- [ ] Status board is complete through S00-018
- [ ] Master index references Sprint 01 sequencing
- [ ] Operator understands one-pack vs batched commit rules
- [ ] No unresolved Sprint 00 caveats remain
- [ ] Repo is ready to generate Sprint 01 prompt packs
