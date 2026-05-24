# Mobile App Agent Rules

## Purpose

Build a premium true mobile app experience for customer and technician roles.
The product is one app with role-based experiences, not separate customer/technician apps.

## Local Priorities

- Customer UX must feel clean, clear, premium, and confidence-building.
- Home screen priority order: service-day technician status first, fresh report first when available, pending quote visibility, otherwise pool status and custom outline prominence.
- Route progress for customers must show stops-before-you and ETA only; never exact live GPS.

## Visibility And Data Rules

- Never expose internal notes to customer-facing screens.
- Never expose billing, profitability, or sensitive business financial data to technicians.
- Technician views may include assigned route details, access instructions, gate code context, pet notes, treat permission, and operational reminders.

## V1 Product Rules

- Custom top-down pool outline is V1-critical and should be treated as a core surface, not decorative polish.
- Customer questions in V1 are human-answered by Shipwrecked staff, not AI-generated.
- Customer chat must confirm context attachment explicitly before including screen context.
- Technician chat is asynchronous only.
- Technician service completion submissions must be blocked between 9:00 PM and 8:00 AM local time.
- Customers should see master-job outcomes through report/history flows only (visit reports + final summary), not a generic master-job page.

## UX Quality Rules

- Handle loading, empty, error, and success states on all user-facing screens.
- Use customer-facing language that reduces uncertainty and reinforces trust.
