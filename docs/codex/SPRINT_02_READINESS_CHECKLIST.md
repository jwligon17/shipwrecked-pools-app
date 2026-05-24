# Sprint 02 Readiness Checklist

## 1. Sprint 02 Purpose

Sprint 02 is for core database/domain model implementation with strict sequencing and role/visibility safety.

## 2. Preconditions

- [ ] Sprint 01 changes are committed.
- [ ] Working tree is clean before starting first S02 pack.
- [x] Root package/workspace scripts are coherent.
- [x] App shells (`apps/mobile`, `apps/admin`, `apps/api`) exist.
- [x] Shared packages exist (`shared-types`, `api-client`, `ui`).
- [x] DB package foundation exists (`packages/db`).
- [x] Seed placeholders exist (`packages/db/seeds/*` and strategy docs).
- [x] Baseline testing/tooling docs and scripts exist.
- [x] `pnpm` is available locally and baseline checks can run.

## 3. Risk Rules

- Database migrations and schema packs are never parallelized.
- Domain model design must follow permission and data-visibility governance docs.
- No auth/billing/payment shortcut implementation in DB packs.
- Technician financial visibility restrictions are non-negotiable.
- Early schema planning must include master-job/commercial-export/chemical-guidance/chat implications.

## 4. Go / No-Go

Go only if all are true:

- [x] Status board is current through S01-016.
- [x] Handoffs exist for all completed S01 packs.
- [x] Local environment can run required baseline commands.
- [x] No unresolved Sprint 01 blockers remain.
- [x] Active S02 pack dependencies are satisfied.

No-Go conditions:

- [ ] `pnpm` unavailable or dependency install blocked.
- [ ] working tree not clean.
- [ ] status board/handoff mismatch.
- [ ] pack dependency conflict.

## 5. Current Readiness Note (2026-05-23)

- Sprint 01 baseline checks were rerun after `pnpm` setup and documented as passing in `docs/codex/SPRINT_01_CLOSEOUT.md` (section 11) and `docs/handoffs/sprint-01-baseline-check-fixes.md`.
- Sprint 02 can begin once current documentation reconciliation changes are merged/pushed and the working tree is clean.
- Sprint 02 execution must remain within S02 core database/domain-model scope and continue to honor protected role/visibility/security rules.

## 6. Blocker Handling

If blocked:

1. Stop before schema implementation.
2. Document exact blocker and impact in status board notes/handoff.
3. Resolve environment/tooling blocker first.
4. Re-run baseline checks.
5. Resume with the next valid S02 pack only.
