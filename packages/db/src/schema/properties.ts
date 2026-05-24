export const PROPERTIES_TABLE = 'properties' as const;

export const PROPERTY_TYPES = [
  'residential',
  'commercial',
  'hoa',
  'hotel',
  'apartment_complex',
  'other',
] as const;
export type PropertyType = (typeof PROPERTY_TYPES)[number];

export const PROPERTY_STATUSES = ['active', 'inactive', 'paused', 'archived'] as const;
export type PropertyStatus = (typeof PROPERTY_STATUSES)[number];

export interface PropertyRow {
  id: string;
  organization_id: string;
  customer_id: string;
  property_type: PropertyType;
  status: PropertyStatus;
  display_name: string | null;
  service_address_line1: string | null;
  service_address_line2: string | null;
  service_city: string | null;
  service_state: string | null;
  service_postal_code: string | null;
  service_country: string;
  timezone: string | null;
  latitude: string | number | null;
  longitude: string | number | null;
  is_primary: boolean;
  service_area: string | null;
  route_zone: string | null;
  commercial_compliance_required: boolean;
  notes_customer_visible: string | null;
  notes_technician_visible: string | null;
  notes_internal_admin_only: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PropertyInsert {
  id: string;
  organization_id: string;
  customer_id: string;
  property_type: PropertyType;
  status?: PropertyStatus;
  display_name?: string | null;
  service_address_line1?: string | null;
  service_address_line2?: string | null;
  service_city?: string | null;
  service_state?: string | null;
  service_postal_code?: string | null;
  service_country?: string;
  timezone?: string | null;
  latitude?: string | number | null;
  longitude?: string | number | null;
  is_primary?: boolean;
  service_area?: string | null;
  route_zone?: string | null;
  commercial_compliance_required?: boolean;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface PropertyUpdate {
  property_type?: PropertyType;
  status?: PropertyStatus;
  display_name?: string | null;
  service_address_line1?: string | null;
  service_address_line2?: string | null;
  service_city?: string | null;
  service_state?: string | null;
  service_postal_code?: string | null;
  service_country?: string;
  timezone?: string | null;
  latitude?: string | number | null;
  longitude?: string | number | null;
  is_primary?: boolean;
  service_area?: string | null;
  route_zone?: string | null;
  commercial_compliance_required?: boolean;
  notes_customer_visible?: string | null;
  notes_technician_visible?: string | null;
  notes_internal_admin_only?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
