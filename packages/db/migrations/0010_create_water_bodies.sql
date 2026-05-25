BEGIN;

CREATE TABLE water_bodies (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  name text NOT NULL,
  water_body_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  service_status text NOT NULL DEFAULT 'not_started',
  sanitizer_type text,
  surface_type text,
  estimated_volume_gallons integer,
  is_primary boolean NOT NULL DEFAULT false,
  is_commercial_public_pool boolean NOT NULL DEFAULT false,
  requires_separate_chemistry boolean NOT NULL DEFAULT true,
  requires_separate_report_section boolean NOT NULL DEFAULT true,
  chemistry_profile_status text NOT NULL DEFAULT 'missing_required_data',
  notes_customer_visible text,
  notes_technician_visible text,
  notes_internal_admin_only text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT water_bodies_water_body_type_check CHECK (
    water_body_type IN ('pool', 'spa', 'connected_spa', 'separate_spa', 'hot_tub', 'fountain', 'other')
  ),
  CONSTRAINT water_bodies_status_check CHECK (
    status IN ('active', 'inactive', 'paused', 'archived')
  ),
  CONSTRAINT water_bodies_service_status_check CHECK (
    service_status IN ('not_started', 'active_service', 'watch', 'action_needed', 'out_of_service')
  ),
  CONSTRAINT water_bodies_sanitizer_type_check CHECK (
    sanitizer_type IS NULL OR sanitizer_type IN ('chlorine', 'salt', 'bromine', 'unknown', 'other')
  ),
  CONSTRAINT water_bodies_surface_type_check CHECK (
    surface_type IS NULL OR surface_type IN ('plaster', 'fiberglass', 'vinyl', 'pebble', 'tile', 'unknown', 'other')
  ),
  CONSTRAINT water_bodies_chemistry_profile_status_check CHECK (
    chemistry_profile_status IN ('missing_required_data', 'ready', 'needs_review')
  ),
  CONSTRAINT water_bodies_estimated_volume_gallons_check CHECK (
    estimated_volume_gallons IS NULL OR estimated_volume_gallons >= 0
  )
);

CREATE INDEX water_bodies_organization_id_idx ON water_bodies (organization_id);
CREATE INDEX water_bodies_customer_id_idx ON water_bodies (customer_id);
CREATE INDEX water_bodies_property_id_idx ON water_bodies (property_id);
CREATE INDEX water_bodies_water_body_type_idx ON water_bodies (water_body_type);
CREATE INDEX water_bodies_status_idx ON water_bodies (status);
CREATE INDEX water_bodies_service_status_idx ON water_bodies (service_status);
CREATE INDEX water_bodies_sanitizer_type_idx ON water_bodies (sanitizer_type);
CREATE INDEX water_bodies_surface_type_idx ON water_bodies (surface_type);
CREATE INDEX water_bodies_chemistry_profile_status_idx ON water_bodies (chemistry_profile_status);

CREATE OR REPLACE FUNCTION set_water_bodies_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER water_bodies_set_updated_at
BEFORE UPDATE ON water_bodies
FOR EACH ROW
EXECUTE FUNCTION set_water_bodies_updated_at();

COMMIT;
