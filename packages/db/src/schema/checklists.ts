export const CHECKLIST_TEMPLATES_TABLE = 'checklist_templates' as const;
export const CHECKLIST_TEMPLATE_ITEMS_TABLE = 'checklist_template_items' as const;
export const SERVICE_VISIT_CHECKLIST_ITEMS_TABLE = 'service_visit_checklist_items' as const;

export const CHECKLIST_TEMPLATE_TYPES = [
  'weekly_maintenance',
  'biweekly_maintenance',
  'commercial_service',
  'repair',
  'green_to_clean',
  'inspection',
  'other',
] as const;
export type ChecklistTemplateType = (typeof CHECKLIST_TEMPLATE_TYPES)[number];

export const CHECKLIST_TEMPLATE_STATUSES = ['draft', 'active', 'inactive', 'archived'] as const;
export type ChecklistTemplateStatus = (typeof CHECKLIST_TEMPLATE_STATUSES)[number];

export const CHECKLIST_ITEM_TYPES = [
  'task',
  'photo_required',
  'chemistry_required',
  'equipment_check',
  'safety_acknowledgment',
  'arrival_acknowledgment',
  'other',
] as const;
export type ChecklistItemType = (typeof CHECKLIST_ITEM_TYPES)[number];

export const SERVICE_VISIT_CHECKLIST_ITEM_STATUSES = [
  'not_started',
  'completed',
  'skipped',
  'not_applicable',
  'needs_review',
] as const;
export type ServiceVisitChecklistItemStatus =
  (typeof SERVICE_VISIT_CHECKLIST_ITEM_STATUSES)[number];

export interface ChecklistTemplateRow {
  id: string;
  organization_id: string;
  name: string;
  description: string | null;
  template_type: ChecklistTemplateType;
  status: ChecklistTemplateStatus;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ChecklistTemplateInsert {
  id: string;
  organization_id: string;
  name: string;
  description?: string | null;
  template_type: ChecklistTemplateType;
  status?: ChecklistTemplateStatus;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ChecklistTemplateUpdate {
  name?: string;
  description?: string | null;
  template_type?: ChecklistTemplateType;
  status?: ChecklistTemplateStatus;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ChecklistTemplateItemRow {
  id: string;
  organization_id: string;
  checklist_template_id: string;
  label: string;
  description: string | null;
  item_type: ChecklistItemType;
  is_required: boolean;
  sort_order: number | null;
  applies_to_water_body_type: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ChecklistTemplateItemInsert {
  id: string;
  organization_id: string;
  checklist_template_id: string;
  label: string;
  description?: string | null;
  item_type: ChecklistItemType;
  is_required?: boolean;
  sort_order?: number | null;
  applies_to_water_body_type?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ChecklistTemplateItemUpdate {
  checklist_template_id?: string;
  label?: string;
  description?: string | null;
  item_type?: ChecklistItemType;
  is_required?: boolean;
  sort_order?: number | null;
  applies_to_water_body_type?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ServiceVisitChecklistItemRow {
  id: string;
  organization_id: string;
  service_visit_id: string;
  checklist_template_item_id: string | null;
  water_body_id: string | null;
  label: string;
  item_type: ChecklistItemType;
  is_required: boolean;
  status: ServiceVisitChecklistItemStatus;
  completed_by_app_user_id: string | null;
  completed_at: string | null;
  skipped_reason: string | null;
  technician_notes: string | null;
  internal_admin_notes: string | null;
  customer_visible_note: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ServiceVisitChecklistItemInsert {
  id: string;
  organization_id: string;
  service_visit_id: string;
  checklist_template_item_id?: string | null;
  water_body_id?: string | null;
  label: string;
  item_type: ChecklistItemType;
  is_required?: boolean;
  status?: ServiceVisitChecklistItemStatus;
  completed_by_app_user_id?: string | null;
  completed_at?: string | null;
  skipped_reason?: string | null;
  technician_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_note?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface ServiceVisitChecklistItemUpdate {
  checklist_template_item_id?: string | null;
  water_body_id?: string | null;
  label?: string;
  item_type?: ChecklistItemType;
  is_required?: boolean;
  status?: ServiceVisitChecklistItemStatus;
  completed_by_app_user_id?: string | null;
  completed_at?: string | null;
  skipped_reason?: string | null;
  technician_notes?: string | null;
  internal_admin_notes?: string | null;
  customer_visible_note?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
