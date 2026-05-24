# Master Index Integrity Review Checklist

Purpose: Run a consistent integrity review of the Master Index V2 governance system before implementation resumes and after any major roadmap/feature change.

## 1) Required Files Check

Verify all required files exist and are current:

- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/MASTER_INDEX_CHANGELOG.md`
- `docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md`
- `docs/prompt-packs/FEATURE_MAP.md`
- `docs/prompt-packs/DEPENDENCY_MAP.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/prompt-packs/STATUS_BOARD.md`

## 2) Status Board Alignment

- Every pack listed in Master Index is represented or intentionally omitted with explicit rationale.
- Completed rows include corresponding handoff notes.
- Governance packs are present and tracked.
- `STATUS_BOARD.md` was updated in place (no seed/template overwrite).
- Pack IDs, titles, dependencies, and statuses are coherent.

## 3) Feature Map Alignment

- Every major feature area in product docs exists in `FEATURE_MAP.md`.
- Each feature includes:
  - roles involved
  - affected sprints
  - dependencies
  - protected rules involved
- Feature priorities match current product direction (Beta/V1/Post-V1/SaaS).

## 4) Dependency Alignment

- Sprint sequencing is coherent and up to date.
- Unsafe parallel domains are explicitly marked.
- Limited-parallel boundaries are clearly described.
- Already-implemented packs affected by dependency changes are identified for retrofit.

## 5) Protected Rule Alignment

- Non-negotiable role/privacy/billing/report/chat/chemical/export rules are represented.
- No sprint or feature mapping contradicts protected rules.
- Any new feature decision is checked against protected rules before implementation.

## 6) Master Index Counts and Pack IDs

- Sprint pack counts are plausible relative to registry content.
- No duplicate pack IDs.
- No ambiguous skipped IDs that obscure sequence intent.
- Retrofit/correction packs are clearly labeled.

## 7) Completed Work Reconciliation

- Completed S00/S01 governance and infra work still fits V2 direction.
- Handoffs match status board states.
- Historical packs are preserved as records.
- New V2 governance pack adoption is reflected in docs and status board.

## 8) Implementation Readiness

- Resume implementation only when no critical governance contradictions remain.
- Do not resume S01/S02 feature-changing work until source-of-truth updates are complete.
- Any critical mismatch yields `NEEDS FIX` or `STOP`.

## 9) Final Result Categories

Choose one result:

- `PASS`: No material contradictions; governance system is coherent.
- `PASS WITH NOTES`: Coherent enough to proceed with minor follow-ups.
- `NEEDS FIX`: Material inconsistencies require updates before proceeding.
- `STOP`: Unsafe contradiction/scope conflict; halt implementation until resolved.

## 10) Read-Only Integrity Review Prompt

```txt
Run a read-only Master Index Integrity Review for the Shipwrecked repo.

Read only:
- docs/prompt-packs/MASTER_INDEX.md
- docs/prompt-packs/MASTER_INDEX_CHANGELOG.md
- docs/prompt-packs/MASTER_INDEX_UPDATE_PROTOCOL.md
- docs/prompt-packs/FEATURE_MAP.md
- docs/prompt-packs/DEPENDENCY_MAP.md
- docs/prompt-packs/PROTECTED_RULES.md
- docs/prompt-packs/STATUS_BOARD.md
- docs/codex/CODEX_REVIEW_CHECKLIST.md

Do not modify any files.

Return:
1. Required files check results
2. Status board alignment findings
3. Feature map alignment findings
4. Dependency alignment findings
5. Protected-rule contradictions (if any)
6. Pack ID/count anomalies (if any)
7. Completed-work reconciliation findings
8. Implementation readiness decision
9. Final result category: PASS / PASS WITH NOTES / NEEDS FIX / STOP
10. Exact file edit recommendations (if fixes are needed)
```
