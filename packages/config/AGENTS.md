# Config Package Agent Rules

## Purpose

Manage runtime/configuration safety across environments.

## Rules

- Never commit secrets.
- Keep environment validation explicit and fail-fast.
- `.env.example` may define required keys but must not include secret values.
- Preserve clear staging vs production configuration behavior.
