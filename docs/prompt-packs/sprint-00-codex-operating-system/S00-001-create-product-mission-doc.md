# Prompt Pack S00-001 — Create Product Mission Doc

## Sprint
S00 — Codex Operating System

## Priority
P0 — Foundation

## Risk Level
Low, if scoped correctly. High if Codex starts modifying app code.

## Can Run In Parallel?
No. This is the first prompt pack and should be run alone.

## Goal
Create a clear, durable product mission document for the Shipwrecked Pools app at:

```txt
docs/product/mission.md
```

This document should teach Codex, future developers, and the Shipwrecked Pools team what the app is, why it exists, what experience it should create, and what business outcomes it must support.

This is not a generic app mission document. It must be specific to Shipwrecked Pools.

## Why This Matters
The app is intended to become more than a customer portal. It is meant to become the proprietary operating system for Shipwrecked Pools and eventually replace Skimmer for customer communication, service reports, service photos, route progress, chemistry readings, billing, repair approvals, customer records, and internal CRM.

The mission document will shape all future prompt packs. Codex should be able to read it and understand that the app exists to create a premium, confidence-building pool ownership experience for customers while making Shipwrecked more scalable, more systematized, and more valuable.

## Current Business Context
Shipwrecked Pools is already making real money from ongoing pool maintenance. The company has grown by being reliable, communicative, honest, and professional. The app should amplify those strengths, not replace them.

The customer experience should feel clean, premium, and professional. It should match the future direction of the Shipwrecked Pools website. It should not feel like a gimmicky pirate game, although tasteful brand personality is acceptable later.

The app should eventually become a moat for Shipwrecked Pools by making customers feel deeply connected to their exact pool, their service history, their chemistry, their technician progress, their quotes, their repairs, and their pool-care decisions.

## Core Product Vision
The app should help a customer like Paul move from:

```txt
“I have no idea what is happening with my pool.”
```

to:

```txt
“I know exactly what Shipwrecked did, what they noticed, what they recommend, and what decisions I need to make.”
```

The highest-level product promise is:

```txt
Shipwrecked Pools helps homeowners feel confident that their pool is being cared for, understood, documented, and protected.
```

## Required Themes To Include In The Mission Doc
The mission document must include these themes:

1. **Confidence as the product** — The app is not just about reports; it reduces uncertainty for homeowners.
2. **Customer connection to their actual pool** — The custom top-down pool outline is a central V1 feature, not a nice-to-have.
3. **Premium customer experience** — The app should feel clean, trustworthy, and professional.
4. **Operational systemization** — The app should make Shipwrecked easier to run, train, delegate, and scale.
5. **Future Skimmer replacement** — The app should eventually replace Skimmer for routing, reports, photos, chemistry, billing, and customer communication.
6. **Human-first communication** — V1 customer questions must be answered by Shipwrecked technicians/admins, not AI.
7. **Structured revenue workflows** — Quote requests, repair approvals, typed signatures, payment flows, repair reports, and product/deal opportunities should be part of the system.
8. **Data and history as a company asset** — The app should create a deep historical database of pool systems, service outcomes, chemistry, repairs, route behavior, product needs, and customer decisions.
9. **Privacy and role boundaries** — Customers see their own data; technicians see operational details but not billing/profitability; admins see business data.
10. **Future SaaS optionality** — The backend may eventually become useful as a separate SaaS product, so the architecture should not be overly locked to one hardcoded customer setup.

## Files Codex Should Create Or Modify
Codex should create:

```txt
docs/product/mission.md
```

Codex should update if it exists:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

Codex should create a handoff note:

```txt
docs/handoffs/S00-001-create-product-mission-doc.md
```

## Files Codex Must Not Touch
Codex must not modify:

```txt
apps/mobile/
apps/admin/
apps/api/
packages/db/
packages/shared-types/
packages/api-client/
packages/ui/
packages/auth/
packages/notifications/
packages/pool-outline/
package.json
pnpm-workspace.yaml
tsconfig.base.json
.env.example
```

Codex must not create database migrations, app screens, API routes, billing logic, or authentication logic.

## Build Prompt For Codex
Copy/paste the following prompt into Codex for this pack:

```txt
You are working in the Shipwrecked Pools app repo. Implement only Prompt Pack S00-001.

Before editing files, read:
- AGENTS.md
- docs/prompt-packs/MASTER_INDEX.md
- docs/prompt-packs/STATUS_BOARD.md, if it exists
- this prompt pack file: docs/prompt-packs/sprint-00-codex-operating-system/S00-001-create-product-mission-doc.md

First, briefly summarize your plan and list the exact files you expect to create or modify. Do not modify app code, database files, package files, API files, mobile files, or admin files.

Then create docs/product/mission.md.

The mission doc must be specific to Shipwrecked Pools. It should explain:

1. What the app is.
2. Why Shipwrecked Pools is building it.
3. Why confidence and visibility are the core customer value.
4. Why the custom top-down pool outline is central to V1.
5. How the app should improve customer communication, reports, chemistry visibility, quote approvals, repairs, route progress, billing, and product/deal opportunities.
6. How the app should help Shipwrecked systematize operations and eventually replace Skimmer.
7. How the app should protect privacy and role boundaries.
8. How the app should preserve future SaaS optionality.
9. What the app should not become.
10. A short “product promise” section that could guide future development decisions.

Use clear Markdown headings. Make the document practical enough that Codex and future developers can use it as product guidance.

Also create a handoff note at docs/handoffs/S00-001-create-product-mission-doc.md with:
- what changed
- files created or modified
- what was intentionally not changed
- suggested next prompt pack
- any risks or open questions

Update docs/prompt-packs/STATUS_BOARD.md by adding or updating a row for S00-001. Mark it as completed or implemented, depending on the existing status language in the file. If the status board has no structure yet, add a simple row while preserving the existing table.

Do not implement S00-002 or any other pack.
```

## Bite-Sized Implementation Steps
Codex should complete these steps:

1. Read existing repo guidance and the master index.
2. Confirm the exact expected file changes.
3. Create `docs/product/mission.md`.
4. Ensure the mission document is specific to Shipwrecked Pools and not generic.
5. Create the handoff note.
6. Update the status board.
7. Stop.

## Acceptance Criteria
This pack is complete when:

- `docs/product/mission.md` exists.
- The mission doc clearly describes the Shipwrecked Pools app as a premium customer experience and internal operating system.
- The mission doc includes the custom top-down pool outline as a central V1 feature.
- The mission doc includes Skimmer replacement as a future goal.
- The mission doc includes quote/repair approvals, billing, route progress, reports, chemistry, questions, deal notifications, and pool history as product areas.
- The mission doc includes privacy and role-boundary principles.
- `docs/handoffs/S00-001-create-product-mission-doc.md` exists.
- `docs/prompt-packs/STATUS_BOARD.md` has been updated for S00-001.
- No app code, database schema, package config, API code, mobile code, admin code, or billing code was changed.

## Codex Self-Review Prompt
After implementation, paste this into Codex:

```txt
Run a self-review for S00-001.

Check:
1. Did you only implement S00-001?
2. Did you avoid app code, database files, API files, mobile files, admin files, package files, and billing logic?
3. Is docs/product/mission.md specific to Shipwrecked Pools instead of a generic app mission?
4. Does it clearly state that customer confidence is the core product value?
5. Does it make the custom top-down pool outline a central V1 feature?
6. Does it explain future Skimmer replacement?
7. Does it include role/privacy boundaries?
8. Did you create the handoff note?
9. Did you update the status board?
10. Are there any unrelated changes?

If anything is missing or too generic, fix it now. Then summarize the final changed files.
```

## Expected Git Diff
Expected changed/created files:

```txt
docs/product/mission.md
docs/handoffs/S00-001-create-product-mission-doc.md
docs/prompt-packs/STATUS_BOARD.md
```

Anything outside those files should be treated as suspicious unless Codex gives a very good reason.

## Recommended Commit Message
After Codex completes and self-reviews this pack, commit with:

```bash
git add docs/product/mission.md docs/handoffs/S00-001-create-product-mission-doc.md docs/prompt-packs/STATUS_BOARD.md
git commit -m "Complete S00-001 product mission doc"
```
