# @shipwrecked/shared-types

## Purpose

This package centralizes stable shared TypeScript types used by mobile, admin, API, and other workspace packages.

## What belongs here

- Role and account-type unions.
- Visibility and note-type unions.
- Cross-surface status unions.
- Lightweight ID aliases.
- Generic API-adjacent result/pagination helpers.

## What does not belong here

- Database schema definitions.
- API endpoint implementations.
- Authentication logic.
- Business workflow logic.
- Billing, payment, notification, route, report, quote, or chat runtime behavior.

## Why this supports Shipwrecked

Shared contract types reduce role/visibility drift across one role-based app experience and internal systems. This helps preserve consistent naming and policy alignment as domain packages are implemented.

## Extension guidance

Add only stable cross-surface contracts. Keep new types small, review against security/visibility docs, and avoid encoding runtime business rules here.
