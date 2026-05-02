# Paul’s Shipwrecked Pools App Experience

## Purpose of This Story
This document preserves the customer story Shipwrecked Pools is building toward so product and engineering decisions stay grounded in a real homeowner experience. It is a narrative source, not just a requirements list. The goal is to keep the team focused on one outcome: Paul feels confident because he knows what is happening with his pool.

## Paul Before Shipwrecked
Paul likes having a pool, but he does not like feeling confused about pool care. With previous service experiences, he often felt out of the loop. He could not tell if a company actually came by, what work was performed, whether chemistry issues were serious, what repairs might cost, or whether recommended repairs were ever completed correctly.

His recurring frustration was not one single bad visit. It was uncertainty.

## How Paul Finds Shipwrecked Pools
Paul hears about Shipwrecked from a neighbor who says, “They’re the first pool company I’ve used where I actually know what’s happening.”

That line matters to Paul. He is not looking for flashy branding or gimmicks. He wants trust, clarity, and consistency.

## Contacting Shipwrecked for Ongoing Maintenance
Paul contacts Shipwrecked and asks about ongoing maintenance. The team explains how they run weekly service, document work, and communicate clearly. They position the app as part of the service itself, not a separate add-on.

From the beginning, Paul understands that Shipwrecked wants him to see what was done, what was noticed, and what he should decide next.

## App Invitation and Onboarding
After sign-up, Paul receives an invitation to the Shipwrecked Pools app and creates his account. He follows login and two-factor authentication setup steps so his account is secure.

Onboarding is practical and service-oriented. Paul provides:
- profile details,
- property information,
- pool and spa details,
- gate code and access notes,
- pet profile details,
- dog treat permission,
- preferred contact method,
- service window and reminder notes,
- optional pool photos.

This does not feel like paperwork for paperwork’s sake. It feels like Shipwrecked is preparing to care for his exact property correctly.

## Paul’s Custom Pool Home Screen
When Paul opens the app home experience, he sees a custom top-down outline of his actual pool and spa, not a generic diagram. This is a core emotional moment in V1. It signals that Shipwrecked understands his real environment.

The outline includes plus-marker service points around meaningful areas such as steps, skimmer zones, returns, spa sections, and equipment context. Marker statuses use green/yellow/red indicators and customer-friendly notes.

Paul can quickly understand what looks good, what needs monitoring, and where issues exist in relation to the physical pool he uses with his family.

## Where’s My Tech? Route Progress
On service day, Paul can check route progress in a privacy-safe way. He sees:
- stops before him,
- estimated arrival time,
- clear progress updates.

He does not see exact live GPS surveillance, and he does not see other customer identities or addresses. The experience is informative without violating anyone’s privacy.

## Weekly Service and Report Ready Flow
Paul receives service notifications at the right moments: on-the-way, arriving soon, service complete, and report ready.

When the report is ready, he sees what was completed during weekly maintenance with photos and plain-language notes. If everything is in good shape, the report can clearly communicate that state, including simple reassurance language like “Everything looks perfect.”

The goal is that he never has to guess whether service happened or what happened during service.

## Chemistry Updates in Plain English
Paul can review chemistry readings and chemical additions, but the app does not leave him alone with raw numbers. It translates readings into plain English so he can interpret condition and urgency.

Instead of wondering whether a value is “bad,” he gets context about whether water balance is normal, trending, or needs action. This keeps him informed without forcing him to become a pool chemistry expert.

## Questions Answered by Shipwrecked Humans
When Paul has a question, he asks it in the app and receives answers from Shipwrecked technicians or admins. In V1, these answers are human-provided, not AI-generated.

This preserves accountability and trust. Paul knows the answer came from the same team caring for his pool.

## Quote and Small Repair Experience
If Paul notices an issue or wants something addressed, he can request a quote or a small repair in the app. Shipwrecked can send a structured quote with clear scope and pricing context.

Approval is explicit and auditable. Paul approves using:
- an approval action/button,
- a confirmation checkbox,
- typed signature,
- payment method on file.

This makes decision-making fast while preserving clear consent.

## Separate Repair Reports and Before/After Proof
When repairs happen, Paul receives a separate repair report rather than having repair details buried inside a regular weekly maintenance report.

Repair reports include before/after photo proof and clear summaries of completed work. This separation helps Paul distinguish routine maintenance from one-off repair outcomes and cost-bearing actions.

## Deals, Robots, and Notification Preferences
Shipwrecked can send relevant product or deal opportunities, such as a robot cleaner offer that fits Paul’s setup. These notifications are part of value delivery, not spam.

Paul can tune preferences so he can turn off deal notifications while keeping important operational communications on, including service updates, report notifications, quote-related messages, and urgent pool issue alerts.

## What Paul Should Feel by the End
By the end of this journey, Paul should feel informed, supported, and confident.

He should be able to say: “I know what is happening with my pool.”

That confidence is the product outcome. The interface, reports, notifications, and workflows are all in service of reducing uncertainty.

## Product Lessons for Development
The app should prioritize clarity over novelty. Every feature should answer a practical customer question, reduce confusion, or speed a decision.

The custom pool outline is not decorative. It is a trust mechanism tied to understanding and context.

Operational integrity matters as much as visual polish. If updates are late, unclear, or inconsistent, customer confidence falls.

Role boundaries are mandatory. Technicians need operational context, but must not see billing/profitability data. Customers should only see their own data. Sensitive actions must remain auditable.

## Features Implied by This Story
- Account lifecycle: invitation, signup/login, two-factor setup path, and secure access.
- Onboarding: profile, property, pool/spa, gate/access, pet profile, dog treat preference, contact preference, and reminder intake.
- Pool context: custom top-down pool outline with service-point marker model and customer-safe marker notes.
- Route transparency: stops-before-you and ETA model without exact live GPS exposure or cross-customer leakage.
- Notification events: on-the-way, arriving soon, service complete, report ready, quote-related, urgent issue, and optional deals.
- Reporting model: weekly maintenance reports distinct from repair reports and green-to-clean reports when relevant.
- Chemistry UX: readable chemistry history with plain-English interpretation.
- Questions workflow: customer asks questions; Shipwrecked humans respond in V1.
- Quote workflow: request, structured quote delivery, approval action, checkbox, typed signature, and payment method on file.
- Repair workflow: approved repair job tracking with before/after proof.
- Preferences: independent control for deal notifications versus essential service notifications.
- Audit and permissions: action logging and strict role/data boundaries aligned with Shipwrecked policy.
