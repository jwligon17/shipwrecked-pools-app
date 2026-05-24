# Prompt Pack: S02-003 — Create Role and Organization Membership Schema

## Pack Metadata

- **Pack ID:** S02-003
- **Title:** Create Role and Organization Membership Schema
- **Sprint:** S02 — Core Database / Domain Model
- **Priority:** P0
- **Risk Level:** Critical
- **Expected Type:** Database/domain model foundation
- **Can Run In Parallel:** No
- **Depends On:** S02-001, S02-002
- **Blocks:** auth/permission guards, technician access, owner/admin permissions, customers/households/commercial contacts

## Goal

Create the role and organization membership schema that connects app users to organizations and role-based experiences.

This pack should support:

- owner/admin
- technician
- customer
- household member
- commercial contact
- export recipient
- system/service identity

It should also support the rule that owners may operate as technicians with additional permissions, while ordinary technicians do not receive admin/financial permissions.

## Why This Matters

Role and membership boundaries are a protected rule area. This schema is foundational for preventing data leaks:

- technicians must not see billing/profitability
- customers see their own data only
- household members see invited household/location data only
- commercial export recipients only receive approved export data
- owner/admin access is broader and auditable

## Common Sprint 02 Scope Guard

Sprint 02 is the core database/domain-model sprint.

This pack may create database/domain schema artifacts, migration files, type exports, schema documentation, seed-shape notes, and tests/checks related to the specific domain object in this pack.

This pack must not implement:

- auth flows or login screens
- billing/payment logic
- notification delivery
- customer/technician/admin screens
- reports/routes/quotes/repairs/master jobs beyond references required for relational planning
- live production database connections
- real customer data
- real gate codes
- real payment information
- secrets

Do not run migrations against a live database unless the repo already has an explicit safe local/test migration workflow and the prompt pack requires it. Prefer creating migrations/schema files and running static checks/tests first.

## Files Codex Should Read First

Before editing, read:

- `AGENTS.md`
- `docs/prompt-packs/PROTECTED_RULES.md`
- `docs/security/permission-matrix.md`
- `docs/security/data-visibility-rules.md`
- `docs/database/domain-model/organizations.md`
- `docs/database/domain-model/app-users.md`
- `packages/db/src/schema/organizations.ts`
- `packages/db/src/schema/app-users.ts`
- `packages/shared-types/src/roles.ts` if it exists
- `docs/prompt-packs/STATUS_BOARD.md`

## Files Codex Should Create or Modify

Expected files may include:

- `packages/db/migrations/0003_create_roles_and_memberships.sql` or next correctly numbered migration
- `packages/db/src/schema/roles.ts`
- `packages/db/src/schema/organization-memberships.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/index.ts`
- `docs/database/domain-model/roles-and-memberships.md`
- `docs/handoffs/S02-003-create-role-membership-schema.md`
- `docs/prompt-packs/STATUS_BOARD.md`

May modify:

- `packages/shared-types/src/roles.ts`
- tests/smoke tests if applicable

## Files Codex Must Not Touch

Do not implement:

- auth guards/API permissions
- login
- customer/property tables
- household invitations
- billing/payment
- app screens
- full permission engine

Do not create permission grants that contradict protected rules.

## Build Prompt For Codex

Execute S02-003 only.

Create the role and organization membership schema.

### Role model

Use a simple approach appropriate for early domain modeling.

Acceptable options:

1. A role type/check constraint on `organization_memberships`.
2. A `roles` reference table plus memberships.
3. Both, if justified and simple.

Prefer simplicity and strong protected-rule alignment.

Supported role values must include:

- `owner`
- `admin`
- `technician`
- `customer`
- `household_member`
- `commercial_contact`
- `export_recipient`
- `system`

### Organization memberships

Create `organization_memberships` table.

It should include:

- `id` UUID primary key
- `organization_id` UUID not null references `organizations(id)`
- `app_user_id` UUID not null references `app_users(id)`
- `role` role value not null
- `status` text/check constraint:
  - `invited`
  - `active`
  - `inactive`
  - `suspended`
  - `revoked`
- `is_primary` boolean default false
- `can_operate_as_technician` boolean default false
- `assigned_by_app_user_id` UUID nullable references `app_users(id)`
- `assigned_at` timestamptz default now
- `revoked_at` timestamptz nullable
- `metadata` jsonb default empty object
- `created_at`
- `updated_at`
- `deleted_at`

Constraints/indexes:

- unique `(organization_id, app_user_id, role)` where not deleted
- index organization_id
- index app_user_id
- index role
- index status
- check constraint that `can_operate_as_technician` is meaningful only for `owner`/`admin` or documented if looser

### Protected rule documentation

Document clearly:

- owner/admin can have broader permissions.
- owner may operate as technician.
- technician role alone does not grant billing/profitability/internal financial data.
- customer/household/commercial contact permissions require later domain linking.
- database schema is not the entire permission system; API/authorization guards in S03 must enforce these rules.
- future permission tests must check denied access.

### TypeScript schema/types

Create exports for:

- role values
- membership status values
- membership row/interface
- table name constants
- helper role groups if useful, such as:
  - admin roles
  - customer-facing roles
  - operational roles
  - external/export roles

No live auth guard logic yet.

### Documentation

Create `docs/database/domain-model/roles-and-memberships.md`.

Include:

- purpose
- tables/fields
- protected rules
- owner-as-technician behavior
- technician restrictions
- future relationship to customers/households/commercial contacts
- what Sprint 03 must enforce

### Tests/checks

Add safe import/smoke tests if project convention exists.

Run available checks and document results.

Update `STATUS_BOARD.md` for S02-003.

Create S02-003 handoff.

## Acceptance Criteria

S02-003 is complete only if:

- Role/membership migration/schema artifact exists.
- TypeScript role/membership exports exist.
- Documentation clearly preserves protected rules.
- Owner-as-technician behavior is represented or documented for future enforcement.
- Technician financial restrictions are documented.
- No auth guard/API logic is implemented.
- No customer/property/household invitation schema is created yet unless only referenced.
- `STATUS_BOARD.md` has S02-003 implemented/self-reviewed.
- S02-003 handoff exists.
- Checks are run or limitations documented.

## Codex Self-Review Prompt

Review S02-003 before finalizing.

Check:

1. Did you create role/membership schema only?
2. Does it align with protected role/visibility rules?
3. Did you avoid implementing auth guards or full permission engine?
4. Did you avoid customer/property/household schemas?
5. Is owner-as-technician behavior documented?
6. Are technician restrictions clearly preserved?
7. Did you update status board and handoff?
8. Did you run checks or document limitations?
9. Did you avoid unrelated files?

Fix material issues before completion.

## Expected Commit Message

```bash
git commit -m "Complete S02-003 role and membership schema"
```
