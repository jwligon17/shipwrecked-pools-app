# Prompt Pack S00-002 — Create Paul Story Source Doc

## Sprint

S00 — Codex Operating System

## Priority

P0 — Foundation

## Risk Level

Low, if scoped correctly. High if Codex starts building screens or app features.

## Can Run In Parallel?

No. Run only after S00-001 has been completed and committed.

## Goal

Create a durable product narrative source document for Paul’s Shipwrecked Pools app experience at:

```txt
docs/product/paul-story.md
```

This document should preserve the customer journey and emotional product vision in story form so Codex and future developers understand what experience the app is supposed to create.

## Why This Matters

The Paul story is the clearest expression of the app’s desired customer experience. It shows how the app should feel from the customer’s perspective: premium, reassuring, clear, personal, and useful.

Most software projects lose the customer story as soon as development starts. This file prevents that. Future prompt packs should be able to reference Paul’s story when building the customer home screen, custom pool outline, route progress, reports, questions, quote approvals, repair reports, notifications, pet profiles, deal preferences, and onboarding.

## Dependency

S00-001 should be complete first.

Expected existing file:

```txt
docs/product/mission.md
```

If `docs/product/mission.md` does not exist, Codex should stop and report that S00-001 must be completed first.

## Story Context Codex Must Preserve

Paul is a homeowner who likes having a pool but does not understand pool maintenance. He is frustrated because he often does not know:

- whether his pool company showed up,
- what they did,
- what the chemistry numbers mean,
- whether an issue is urgent,
- what something will cost,
- whether a repair was actually completed,
- or whether his pool is being proactively watched.

Paul hears about Shipwrecked Pools from a neighbor who says:

```txt
“They’re the first pool company I’ve used where I actually know what’s happening.”
```

Paul contacts Shipwrecked for ongoing maintenance. Shipwrecked recommends that he download the Shipwrecked Pools app for constant updates and a better customer experience.

Paul’s app experience should include:

- account creation and login,
- two-factor authentication prompt/setup path,
- lead/customer onboarding,
- profile setup,
- property setup,
- pool/spa details,
- gate code,
- pet/dog profile,
- dog treat permission,
- preferred contact method,
- service window/reminder notes,
- optional pool photos,
- custom top-down outline of his exact pool,
- plus-marker service points around the pool,
- green/yellow/red marker statuses,
- customer-friendly marker notes,
- technician route progress,
- stops before him,
- ETA,
- service day notifications,
- arrival notifications,
- service complete notification,
- report ready notification,
- weekly service report,
- separate repair report when repairs happen,
- separate green-to-clean report when relevant,
- chemistry readings and plain-English explanations,
- report comments,
- customer questions answered by admin/technician,
- quote requests,
- small repair requests,
- quote approval with button, checkbox, typed signature, and payment method on file,
- repair job creation,
- before/after repair photos,
- product/deal notifications,
- robot deal example,
- ability to turn off deal notifications while keeping service notifications.

## Important Product Interpretation

The story should not imply that the app is valuable because it is flashy. The story should make clear that the app is valuable because it reduces uncertainty and creates confidence.

Paul should feel:

```txt
“I know what is happening with my pool.”
```

The story should also make clear that the custom pool outline is emotionally important. It makes Paul feel like Shipwrecked knows his actual pool — his steps, his skimmer, his spa, his return jet, his equipment pad, his service history, his dog note, his questions, and his repairs.

## Required Sections In The Document

Create `docs/product/paul-story.md` with these sections:

1. `# Paul’s Shipwrecked Pools App Experience`
2. `## Purpose of This Story`
3. `## Paul Before Shipwrecked`
4. `## How Paul Finds Shipwrecked Pools`
5. `## Contacting Shipwrecked for Ongoing Maintenance`
6. `## App Invitation and Onboarding`
7. `## Paul’s Custom Pool Home Screen`
8. `## Where’s My Tech? Route Progress`
9. `## Weekly Service and Report Ready Flow`
10. `## Chemistry Updates in Plain English`
11. `## Questions Answered by Shipwrecked Humans`
12. `## Quote and Small Repair Experience`
13. `## Separate Repair Reports and Before/After Proof`
14. `## Deals, Robots, and Notification Preferences`
15. `## What Paul Should Feel by the End`
16. `## Product Lessons for Development`
17. `## Features Implied by This Story`

The story should be readable, narrative, and detailed enough to guide product decisions. It should not be a dry bullet list only, though the final “Features Implied” section may use bullets.

## Files Codex Should Create Or Modify

Codex should create:

```txt
docs/product/paul-story.md
```

Codex should update:

```txt
docs/prompt-packs/STATUS_BOARD.md
```

Codex should create:

```txt
docs/handoffs/S00-002-create-paul-story-source-doc.md
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

Codex must not implement any screens, data models, app flows, auth logic, report logic, billing logic, or notification logic.

## Build Prompt For Codex

Copy/paste the following prompt into Codex for this pack:

```txt
You are working in the Shipwrecked Pools app repo. Implement only Prompt Pack S00-002.

Before editing files, read:
- AGENTS.md
- docs/product/mission.md
- docs/prompt-packs/MASTER_INDEX.md
- docs/prompt-packs/STATUS_BOARD.md, if it exists
- this prompt pack file: docs/prompt-packs/sprint-00-codex-operating-system/S00-002-create-paul-story-source-doc.md

First, briefly summarize your plan and list the exact files you expect to create or modify. Do not modify app code, database files, package files, API files, mobile files, admin files, billing files, or authentication files.

If docs/product/mission.md does not exist, stop and report that S00-001 must be completed first.

Then create docs/product/paul-story.md.

The document should preserve Paul’s customer journey in story form. It should be detailed and narrative, but also practical enough for future development prompts to reference.

The story should cover:

1. Paul’s uncertainty before Shipwrecked.
2. How he hears about Shipwrecked Pools.
3. How he contacts Shipwrecked for ongoing maintenance.
4. How Shipwrecked recommends the app.
5. How onboarding collects profile, property, pool/spa, gate, pet, dog treat, contact preference, and reminder information.
6. How Paul sees a custom top-down outline of his exact pool.
7. How plus markers show service points and concern areas.
8. How route progress shows stops before him and ETA without revealing exact GPS or other customers.
9. How he receives on-the-way, arriving soon, service complete, and report ready notifications.
10. How he views reports, photos, chemistry, plain-English explanations, and “Everything looks perfect!” states.
11. How he asks a question and receives a human answer from a technician/admin.
12. How he requests a quote or small repair.
13. How he approves a quote with approval button, checkbox, typed signature, and payment method on file.
14. How repair reports are separate from weekly maintenance reports and include before/after proof.
15. How deal/product notifications work, including robot deals.
16. How he turns off deal notifications while keeping service/report/quote/urgent notifications.
17. Why the final emotional result is confidence.

Include a final section called “Features Implied by This Story” with a structured feature list. Do not turn the whole story into a generic requirements list; preserve the narrative.

Also create a handoff note at docs/handoffs/S00-002-create-paul-story-source-doc.md with:
- what changed
- files created or modified
- what was intentionally not changed
- suggested next prompt pack
- any risks or open questions

Update docs/prompt-packs/STATUS_BOARD.md by adding or updating a row for S00-002. Mark it as completed or implemented, depending on the existing status language in the file.

Do not implement S00-003 or any other pack.
```

## Bite-Sized Implementation Steps

Codex should complete these steps:

1. Confirm S00-001 output exists.
2. Read mission and master index.
3. Create `docs/product/paul-story.md`.
4. Preserve narrative style while embedding the required feature context.
5. Add the final “Features Implied by This Story” section.
6. Create the S00-002 handoff note.
7. Update the status board.
8. Stop.

## Acceptance Criteria

This pack is complete when:

- `docs/product/paul-story.md` exists.
- The document reads like a real customer journey, not only a feature list.
- Paul’s uncertainty before Shipwrecked is clear.
- The neighbor referral quote or concept is included.
- The custom pool outline is described as central to the emotional experience.
- Route progress uses stops-before-you and ETA, not exact GPS surveillance.
- Customer questions are answered by humans in V1.
- Quote approval includes approval button, checkbox, typed signature, and payment method on file.
- Repair reports are separate from weekly maintenance reports.
- Deal notifications can be turned off independently from important service notifications.
- A final feature list is included.
- `docs/handoffs/S00-002-create-paul-story-source-doc.md` exists.
- `docs/prompt-packs/STATUS_BOARD.md` is updated for S00-002.
- No app code, database code, API code, mobile screens, admin screens, auth logic, notification logic, or billing logic was changed.

## Codex Self-Review Prompt

After implementation, paste this into Codex:

```txt
Run a self-review for S00-002.

Check:
1. Did you only implement S00-002?
2. Did you avoid app code, database files, API files, mobile files, admin files, package files, auth logic, billing logic, and notification logic?
3. Does docs/product/paul-story.md read like a real customer journey instead of only a requirements list?
4. Does it clearly preserve the emotional value: Paul feels confident because he knows what is happening?
5. Does it include the custom pool outline as a central experience?
6. Does it include route progress without exact GPS or other-customer leakage?
7. Does it include human-answered questions, not AI answers?
8. Does it include quote approval with button, checkbox, typed signature, and payment method on file?
9. Does it include separate repair reports and before/after proof?
10. Does it include deal notification preferences?
11. Did you create the handoff note?
12. Did you update the status board?
13. Are there any unrelated changes?

If anything is missing, too generic, or outside scope, fix it now. Then summarize the final changed files.
```

## Expected Git Diff

Expected changed/created files:

```txt
docs/product/paul-story.md
docs/handoffs/S00-002-create-paul-story-source-doc.md
docs/prompt-packs/STATUS_BOARD.md
```

Anything outside those files should be treated as suspicious unless Codex gives a very good reason.

## Recommended Commit Message

After Codex completes and self-reviews this pack, commit with:

```bash
git add docs/product/paul-story.md docs/handoffs/S00-002-create-paul-story-source-doc.md docs/prompt-packs/STATUS_BOARD.md
git commit -m "Complete S00-002 Paul story source doc"
```
