# Billing Docs Agent Rules

## Purpose

Document billing/payment flows with strong safety and auditability expectations.

## Rules

- Protect payment/card data boundaries; never document or store raw card details.
- Stripe/payment references should be documented as tokenized/externalized flows.
- Quote approval flow must include approval action, checkbox, typed signature, and auditability.
- Payment-triggering actions should be traceable through auditable events.
