# Shipwrecked Pools App — Agent Instructions

## Project Mission
Build a premium true mobile app and internal operating system for Shipwrecked Pools that can replace Skimmer for customer communication, route management, service reports, photos, chemistry, billing, customer records, quote/repair approvals, technician workflows, and internal CRM.

The primary product outcome is customer confidence through clarity, consistency, and accountability.

## Source Product Docs
Use these as source-of-truth product context before major implementation work:
- `docs/product/mission.md`
- `docs/product/paul-story.md`
- `docs/product/v1-scope.md`
- `docs/prompt-packs/MASTER_INDEX.md`
- `docs/prompt-packs/STATUS_BOARD.md`

If prompt-level instructions conflict, resolve by following explicit `PACK_PATH` instructions for the active pack and report Pack ID conflicts before editing.

## Current Intended Architecture
Treat this as current intended direction, not guaranteed already-implemented state:
- Monorepo.
- True mobile app: Expo React Native + TypeScript.
- Backend API: TypeScript (NestJS preferred, or equivalent structured framework).
- Admin dashboard: Next.js + TypeScript.
- Source-of-truth database: PostgreSQL.
- Supabase may be used for hosted Postgres/storage/auth acceleration if architecture docs confirm it.
- Billing/payments: Stripe for payment method references and payment events.
- Notifications: Push-first with SMS/email fallback where appropriate.
- Mobile/admin clients should use the API/client layer for business workflows rather than direct DB access.

## Core Product Priorities
1. Customer experience is the top priority.
2. Build for trust, clarity, and operational consistency.
3. Preserve strict role boundaries and sensitive-data protection.
4. Build toward Skimmer replacement without compromising reliability.
5. Preserve future multi-tenant SaaS optionality.

## V1 Non-Negotiables
1. Deliver a true mobile app (not PWA-only).
2. Support both leads and customers.
3. Custom top-down customer pool outline is mandatory.
4. Route progress is stops-before-you and ETA, never exact live GPS.
5. Customer questions in V1 are answered by technicians/admins (humans), not AI.
6. Support connected and non-connected pool/spa setups.
7. Support separate bodies of water where applicable.
8. Keep weekly maintenance, repair, and green-to-clean reports as separate report types.
9. Reports include photos every time.
10. Chemistry includes exact readings plus plain-English explanation.
11. Quote approvals require approval action, checkbox, typed signature, audit log, and payment flow when applicable.
12. Billing and payment workflows are launch-critical.
13. Deal/product notifications must be independently toggleable from essential service notifications.
14. Sensitive actions must be auditable.

## User Roles And Visibility Rules
- Customer: can view only authorized household/property/service data relevant to their account.
- Household member: scoped access based on invitation/permissions.
- Lead: supported in app lifecycle with restricted non-customer access.
- Technician: may view assigned operational details only.
- Admin/Owner: operational and business access by role policy.

Technician-visible examples:
- Assigned route details and stop context.
- Access instructions, gate codes, pet/dog notes, dog treat permission.
- Customer phone number and operational reminders.

Technician-prohibited data:
- Billing/payment details.
- Route profitability and customer profitability.
- Sensitive business financial data.
- Admin-only business notes.

## Customer-Friendly Vs Internal Data
- Customer-facing notes must remain customer-friendly.
- Internal notes are operational/admin data and must never leak to customers.
- Data exposure should be minimized per role and tied to business necessity.

## Privacy, Security, And Audit Rules
- Treat role boundaries as product-critical requirements, not optional hardening.
- Enforce least-privilege access for sensitive data.
- Log sensitive actions with audit trails.
- Do not expose cross-customer route or identity data.
- Do not expose exact technician live GPS to customers.

## Prompt Pack Workflow
1. Execute one prompt pack at a time.
2. Treat `PACK_PATH` as source of truth for current execution scope.
3. If prompt text, prompt pack, or repo docs reference conflicting Pack IDs, stop and report conflict before changes.
4. Read required prerequisite docs first.
5. Summarize implementation plan before editing.
6. List exact files to create/modify before editing.
7. Keep changes tightly scoped to current pack.
8. Do not run ahead to other packs.
9. Update `docs/prompt-packs/STATUS_BOARD.md` for current pack.
10. Create handoff note in `docs/handoffs/` for current pack.
11. Run the pack self-review prompt/checklist.
12. Fix material issues before final handoff.
13. Stop after current pack completion.

## Planning Before Changes
Before edits:
1. Confirm current pack ID and title.
2. Verify prerequisites.
3. Identify acceptance criteria.
4. Identify exactly which files are in scope.
5. Call out risks, assumptions, and checks to run.

## File Scope And Do-Not-Touch Rules
- Only modify files required by the active prompt pack.
- Do not modify unrelated files, even for opportunistic cleanup.
- For documentation-only packs, do not touch app/API/database/package/auth/billing implementation code.
- Respect pack-level "Files Not To Touch" lists.

## Testing And Verification Rules
- For code packs: add/update tests required by the pack and run required checks.
- For docs-only packs: run only requested documentation checks.
- If no code/build tests apply, state that explicitly in final handoff.
- Report failing checks and either fix them or clearly document blockers.

## Handoff Requirements
Every completed pack must include:
- Updated status in `docs/prompt-packs/STATUS_BOARD.md`.
- Handoff note in `docs/handoffs/` with pack ID/title, files changed, checks run, self-review findings, fixes made, limitations, and next recommended pack.
- Final summary including exact git add/commit commands for the user.

Do not commit changes unless explicitly instructed. Default is human-managed commits.

## Review Guidelines
Review your diff for:
1. Scope creep.
2. Unrelated file changes.
3. Missing acceptance criteria.
4. Missing status board update.
5. Missing handoff note.
6. Wrong Pack ID references.
7. Generic language that ignores Shipwrecked-specific constraints.
8. Claims that features exist when they are not implemented.

Fix material issues before final response.

## When To Stop And Ask For Direction
Stop and ask for direction if:
- Instructions conflict on Pack ID or scope.
- Required prerequisites are missing.
- Requested changes require touching forbidden files.
- A destructive or high-risk action is required but not explicitly authorized.
- Acceptance criteria cannot be met within current pack scope.

## Current Things Not To Build Yet
Unless explicitly required by the active pack, do not start:
- Unrequested app/API/database feature implementation.
- AI-generated customer answer workflows for V1 questions.
- Exact live GPS customer tracking.
- Technician-visible billing/profitability/financial tooling.
- Cross-pack architecture rewrites or speculative refactors.
- Folder-level `AGENTS.md` files before S00-005.
