# Master Index Changelog

Purpose: Track every meaningful change to the Shipwrecked Pools app vision, architecture, sprint sequence, or protected rules.

## Change ID Format
`MI-YYYY-MM-DD-###`

## Status Values
- Proposed
- Accepted
- Mapped
- Implemented in Master Index
- Requires Retrofit
- Closed

---

## MI-2026-05-23-001 — Living Master Index V2 Updates

**Status:** Implemented in Master Index

**Reason:** Incorporate product decisions from the updated project conversation and make this repo the single source of truth.

**Decisions added:**
- Add Master Index changelog, dependency map, feature map, protected rules, and update protocol.
- Add dependency recalculation / Master Index integrity system.
- Add feature-oriented indexing.
- Add automated route optimization for initial build.
- Route optimization should understand geography clustering, expected service duration, green pools, repair visits, and commercial vs residential stops.
- Weekly and biweekly recurring services should stay on the same weekday unless intentionally changed.
- Add commercial pools/apartment complexes and property-management daily chemical logging.
- Keep repair workflows single-technician for now.
- Retain high-quality media for up to two years, then compress/archive older media.
- On account deletion, delete owner-specific account information except historical photos and report logs retained for liability.
- Pool outline style should be minimal modern line art, locked north-up, with landscaping and adjacent/detached bodies of water included where relevant.
- Billing must include monthly billing, one-time charges, autopay, grace periods, customer suspension, partial payments, customer invoicing, and technician skip-service notification after two failed payments.
- Conversations must support images, voice notes, unread indicators, technician typing indicators, escalation, message priority, and admin oversight of all technician messaging.
- Technician accountability should track missed checklist items, skipped photos, route speed anomalies, repeat chemistry corrections, complaint frequency, and dirty-pool flags, but not customer-visible quality scoring.
- Add full weather intelligence: freeze/pump warnings, rain/lightning service delays, route/ETA weather effects.
- Protect pool-outline marker relationships to operational data permanently.

**Affected sprints:** S00, S02, S03, S04, S06, S08, S10, S11, S13, S14, S16, S18, S19.

**Retrofit required if already implemented:** Yes. If any affected sprint packs are already merged, create retrofit prompt packs instead of silently changing future packs only.

**Protected rules updated:** Yes.

---

## Template for Future Changes

```txt
Change ID:
Date:
Requested by:
Status:
Summary:
Reason:
Affected features:
Affected sprints:
Affected pack IDs:
Already implemented packs affected? Yes/No
Retrofit packs required? Yes/No
Protected rules affected? Yes/No
Data model changes required? Yes/No
API contract changes required? Yes/No
Mobile changes required? Yes/No
Admin changes required? Yes/No
Technician workflow changes required? Yes/No
Billing/privacy/security impact:
Decision:
```
