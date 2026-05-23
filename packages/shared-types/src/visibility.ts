export const VISIBILITY_SCOPES = [
  "internal_admin_only",
  "technician_visible",
  "customer_visible",
  "commercial_export_visible"
] as const;

export type VisibilityScope = (typeof VISIBILITY_SCOPES)[number];

export const NOTE_VISIBILITY = [
  "customer_friendly_note",
  "technician_operational_note",
  "admin_internal_note",
  "owner_financial_note",
  "audit_note"
] as const;

export type NoteVisibility = (typeof NOTE_VISIBILITY)[number];
