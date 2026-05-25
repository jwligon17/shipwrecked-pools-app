export const WATER_BODY_RELATIONSHIPS_TABLE = 'water_body_relationships' as const;

export const WATER_BODY_RELATIONSHIP_TYPES = [
  'connected_spa',
  'separate_spa',
  'shared_equipment',
  'shared_chemistry',
  'same_property_group',
  'other',
] as const;
export type WaterBodyRelationshipType = (typeof WATER_BODY_RELATIONSHIP_TYPES)[number];

export const WATER_BODY_RELATIONSHIP_STATUSES = ['active', 'inactive', 'archived'] as const;
export type WaterBodyRelationshipStatus = (typeof WATER_BODY_RELATIONSHIP_STATUSES)[number];

export interface WaterBodyRelationshipRow {
  id: string;
  organization_id: string;
  property_id: string;
  parent_water_body_id: string;
  child_water_body_id: string;
  relationship_type: WaterBodyRelationshipType;
  status: WaterBodyRelationshipStatus;
  shares_chemistry: boolean;
  shares_equipment: boolean;
  shares_report_section: boolean;
  requires_separate_service_notes: boolean;
  requires_separate_photos: boolean;
  relationship_notes_internal: string | null;
  relationship_notes_customer_visible: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface WaterBodyRelationshipInsert {
  id: string;
  organization_id: string;
  property_id: string;
  parent_water_body_id: string;
  child_water_body_id: string;
  relationship_type: WaterBodyRelationshipType;
  status?: WaterBodyRelationshipStatus;
  shares_chemistry?: boolean;
  shares_equipment?: boolean;
  shares_report_section?: boolean;
  requires_separate_service_notes?: boolean;
  requires_separate_photos?: boolean;
  relationship_notes_internal?: string | null;
  relationship_notes_customer_visible?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface WaterBodyRelationshipUpdate {
  relationship_type?: WaterBodyRelationshipType;
  status?: WaterBodyRelationshipStatus;
  shares_chemistry?: boolean;
  shares_equipment?: boolean;
  shares_report_section?: boolean;
  requires_separate_service_notes?: boolean;
  requires_separate_photos?: boolean;
  relationship_notes_internal?: string | null;
  relationship_notes_customer_visible?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
