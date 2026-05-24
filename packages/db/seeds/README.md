# DB Seeds (Placeholder System)

## Current State
This folder contains non-executing Sprint 01 seed placeholders only.

- No real DB writes.
- No live database connection.
- No schema-bound seed runner.

## Why It Exists
It provides stable demo/test structure so future packs can implement executable seeds consistently after schema and migrations are created.

## Included Files
- `demo-data-plan.md`: planned fixture categories.
- `paul-demo.seed.json`: fake, non-sensitive placeholder data only.
- `seed-runner-placeholder.md`: guidance for future executable seed runner.

## Safety Rules
- Never add real customer data.
- Never add real gate codes.
- Never add payment credentials or raw payment details.
- Use explicit placeholder constants for sensitive-like fields.
- Do not run writes from this folder until future DB packs explicitly add safe execution support.

## Future Conversion
Future Sprint 02+ packs can convert these placeholders into typed, schema-aligned seed modules and guarded non-production seed commands.
