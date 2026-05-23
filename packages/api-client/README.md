# @shipwrecked/api-client

## Purpose
This package provides a shared typed API client foundation for Shipwrecked mobile and admin applications.

## Current scope
- Client factory with base URL and default header config.
- Generic request helper with JSON body support.
- Lightweight timeout/abort handling.
- Standard client error type.
- Health endpoint helper for `GET /health`.

## Out of scope in this pack
- Auth token refresh/login/session management.
- Domain API methods (customer, route, report, quote, billing, notifications, chat, etc.).
- App-specific data orchestration.

## Permission boundary reminder
This client is transport only. Authorization, role boundaries, and data visibility must be enforced by backend API logic and tested server-side.

## Future direction
Future packs can add domain-specific typed API methods and generated contract support (for example OpenAPI-driven clients) after backend contracts stabilize.
