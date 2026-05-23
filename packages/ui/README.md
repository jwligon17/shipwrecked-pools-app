# @shipwrecked/ui

## Purpose
This package provides shared design-token foundations for Shipwrecked mobile and admin interfaces.

## Current scope
- Semantic color tokens.
- Spacing scale.
- Typography scale.
- Status color mappings for pool, route, report, and quote/repair contexts.
- Composed theme object.

## Why this package stays minimal right now
Sprint 01 focuses on infrastructure. React Native and web component architecture is intentionally deferred until contracts and app shells are more stable.

## Placeholder guidance
Current token values and font families are placeholders until final Shipwrecked brand assets are finalized from the website refresh.

## What does not belong here
- Product screen implementation.
- Route/report/quote business logic.
- Permission logic.
- API/database/auth/billing behavior.

## Future usage
Mobile and admin should consume semantic tokens from this package to keep visual language consistent while each surface keeps platform-specific component implementation where appropriate.
