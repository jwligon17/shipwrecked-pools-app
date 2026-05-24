BEGIN;

CREATE TABLE properties (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  display_name text,
  service_address_line1 text,
  service_address_line2 text,
  service_city text,
  service_state text,
  service_postal_code text,
  service_country text NOT NULL DEFAULT 'US',
  timezone text,
  latitude numeric,
  longitude numeric,
  is_primary boolean NOT NULL DEFAULT false,
  service_area text,
  route_zone text,
  commercial_compliance_required boolean NOT NULL DEFAULT false,
  notes_customer_visible text,
  notes_technician_visible text,
  notes_internal_admin_only text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT properties_property_type_check CHECK (
    property_type IN ('residential', 'commercial', 'hoa', 'hotel', 'apartment_complex', 'other')
  ),
  CONSTRAINT properties_status_check CHECK (
    status IN ('active', 'inactive', 'paused', 'archived')
  )
);

CREATE INDEX properties_organization_id_idx ON properties (organization_id);
CREATE INDEX properties_customer_id_idx ON properties (customer_id);
CREATE INDEX properties_property_type_idx ON properties (property_type);
CREATE INDEX properties_status_idx ON properties (status);
CREATE INDEX properties_service_city_idx ON properties (service_city);
CREATE INDEX properties_service_state_idx ON properties (service_state);
CREATE INDEX properties_service_postal_code_idx ON properties (service_postal_code);
CREATE INDEX properties_service_area_idx ON properties (service_area);
CREATE INDEX properties_route_zone_idx ON properties (route_zone);
CREATE INDEX properties_commercial_compliance_required_idx ON properties (commercial_compliance_required);

CREATE OR REPLACE FUNCTION set_properties_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER properties_set_updated_at
BEFORE UPDATE ON properties
FOR EACH ROW
EXECUTE FUNCTION set_properties_updated_at();

COMMIT;
