# API Client Package Agent Rules

## Purpose
Provide typed client access for mobile/admin business workflows.

## Rules
- Mobile/admin clients should use this layer for business workflows rather than direct DB access.
- Never bypass backend authorization and visibility rules.
- Keep client contracts aligned to API request/response behavior.
- Design client usage patterns to support clean loading/error handling.
