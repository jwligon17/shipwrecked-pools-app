# Paul Demo Persona Specification

## 1. Persona Overview

- Name: Paul Bennett (demo persona).
- Household member/spouse: Megan Bennett.
- Dog/pet: Cooper.
- Dog treat allowed: Yes.
- Customer type: Residential.
- Account status: Active ongoing maintenance customer.
- Service schedule: Weekly Thursday service.
- Preferred notification style: Push-first.
- Deal notifications: Initially enabled; later disabled by customer while essential service notifications remain enabled.
- Role model: Paul is `customer`; Megan is invited `household_member` with scoped access.

## 2. Property and Access

Use placeholder demo data only.

- Property label: `Paul Home - Demo`.
- Address placeholder: `1234 Harbor View Dr, Demo City, TX 75000`.
- Property type: Single-family residential.
- Yard context: Backyard pool with attached equipment pad.
- Gate code placeholder: `GATE-2048-DEMO`.
- Gate access instructions: Use left side gate; relock after service.
- Dog/access note: Cooper may be in yard; friendly; keep side gate closed.
- Technician arrival reminder: Ring side bell once, then proceed to gate.

## 3. Bodies of Water

Default model for recurring demos: connected spa configuration.

- Body 1: Main pool (chlorinated salt system).
- Body 2: Connected spa (shared circulation profile with pool).
- Chemistry model: Shared chemistry trend, with spa-specific temperature/use context notes.
- Pool volume placeholder: `18,500 gal`.
- Spa volume placeholder: `650 gal`.
- Surface type placeholder: Pebble finish.
- Sanitizer system: Salt chlorine generator.
- Equipment placeholders:
  - Variable-speed pump.
  - Cartridge filter.
  - Robotic cleaner.
  - Gas heater.
  - Salt cell.

## 4. Pool Outline and Service Points

### Outline Expectations

- Custom top-down outline of Paul’s specific pool/spa geometry.
- Published customer-visible layout with internally managed marker metadata.

### Required Service Points / Markers

- Skimmer.
- Steps.
- Shallow end.
- Deep end.
- Spa.
- Tile line.
- Return jet / monitored staining area.
- Equipment pad.
- Pump.
- Filter.
- Cleaner.

### Marker Statuses

- Green (`normal`): healthy/expected condition.
- Yellow (`watch`): monitoring concern (for example light staining, filter pressure trend).
- Red (`action_needed`): intervention required for testing scenarios.

### Notes

- Customer-facing notes must be customer-friendly.
- Internal notes may include operational detail and must remain non-customer-visible.

## 5. Route / Technician Scenario

- Route day: Thursday.
- Customer route view: Stops-before-you plus ETA only.
- Exact live GPS: Never shown to customer.
- Technician route view: Assigned stop details including gate/access/pet notes.
- Arrival pop-up: Appears when configured and must be acknowledged.
- Route-start safety reminder: Must be acknowledged.
- Service completion guardrail: Technician cannot complete between 9:00 PM and 8:00 AM local time.

## 6. Weekly Service Scenario

### Required Capture

- Gate arrival photo.
- Pool photos (surface + water clarity).
- Spa photos (when applicable).
- Filter pressure photo.

### Chemistry Readings

- Free chlorine.
- pH.
- Total alkalinity.
- Salt.
- Cyanuric acid (CYA).
- Calcium hardness.

### Service Outcome Data

- Actual chemicals used.
- Customer-friendly summary.
- Positive baseline scenario: "Everything looks perfect!"
- Watch scenario: filter pressure trending high or light return-jet staining noted.

## 7. Report and Chemistry Scenario

- Latest report available immediately after completion.
- Previous reports available in history.
- Chemistry history includes plain-English explanations.
- Report comments supported.
- Before/after photos used where relevant.
- Report classes remain separate:
  - Weekly maintenance.
  - Repair.
  - Master-job visit/final summary where applicable.

## 8. Quote / Repair Scenario

- Sample quote: filter clean or return fitting repair.
- Customer asks question in app.
- Admin/technician provides response.
- Customer approval flow includes:
  - Approval action/button.
  - Confirmation checkbox.
  - Typed signature.
  - Payment method-on-file charge in sandbox/test.
- Approved quote creates repair job.
- Before/after photos captured.
- Repair report generated separately from weekly report.

## 9. Master Job Scenario

Non-maintenance demo scenario: green-to-clean (multi-visit).

- Internal master job groups multiple visits.
- Each visit produces a visit-level report.
- Customer sees visit reports and final summary report through normal report/history flows.
- No generic customer-facing master-job page.
- Admin sees rolled-up trips, time, chemicals, cost, profitability.
- Technician sees assignment and operational context but not profitability/billing details.

## 10. Context-Aware Chat Scenario

- Customer opens chat from chemistry surface.
- Customer must confirm whether chemistry context is attached.
- Customer may choose audience intent: admin, technician, or Shipwrecked team.
- Technician chat is available only with active/recent assigned service context and remains asynchronous.
- Admin can intercept, triage, and reassign conversations.
- Customer can upload photo attachments.
- Internal notes are clearly separated and never customer-visible.
- Closed chat automatically reopens when customer replies.

## 11. Notification Scenario

Expected examples:

- Service day reminder.
- Add water reminder.
- On the way.
- Arriving soon.
- Report ready.
- Quote ready.
- Repair scheduled.
- Repair complete.
- Deal/robot promotion.

Preference behavior:

- Paul can disable deal notifications.
- Essential service/report/quote/repair notifications remain enabled.

## 12. Billing Scenario

- Stored payment method placeholder only (provider reference, masked display).
- Invoice list visible to Paul/Megan per permissions.
- Quote approval triggers sandbox/test charge path.
- Maintenance billing history visible to customer/admin.
- Technician has no billing or payment visibility.

## 13. Admin Demo Scenario

Admin actions for Paul persona:

- Create/edit Paul customer record.
- Create/edit property and access profile.
- Create/edit Cooper pet profile and treat permission.
- Create/edit pool/spa profile.
- Create/publish pool outline and markers.
- Create route stop and assignment.
- View reports and chemistry history.
- Create/send quote.
- Respond/triage chat.
- Review before/after media and hide customer-visible photos where needed.
- Review audit logs for sensitive actions.

## 14. Test Assertions

- Paul cannot access any other customer account data.
- Megan can access only invited household/location scope.
- Technician can access only assigned operational data.
- Technician cannot access billing, payment, or profitability/margin details.
- Customer sees customer-friendly notes only.
- Internal notes remain internal.
- Commercial/export flows do not impact Paul unless explicitly configured for his account type.
- Route progress UI preserves privacy (stops-before-you + ETA, no exact GPS, no other-customer identities).

## Intended Usage In Future Packs

- Default seed/demo persona for Sprint 01/S02 planning and implementation.
- Default QA narrative for customer/technician/admin smoke checks.
- Default acceptance context for route/report/quote/repair/chat/notification behavior.
