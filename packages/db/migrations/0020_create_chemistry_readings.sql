BEGIN;

CREATE TABLE chemistry_readings (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  water_body_id uuid NOT NULL REFERENCES water_bodies (id),
  service_visit_id uuid REFERENCES service_visits (id),
  recorded_by_app_user_id uuid REFERENCES app_users (id),
  reading_source text NOT NULL,
  status text NOT NULL DEFAULT 'recorded',
  measured_at timestamptz NOT NULL,
  free_chlorine_ppm numeric,
  total_chlorine_ppm numeric,
  ph numeric,
  alkalinity_ppm numeric,
  salt_ppm numeric,
  cya_ppm numeric,
  calcium_hardness_ppm numeric,
  water_temperature_f numeric,
  saturation_index numeric,
  reading_notes_customer_visible text,
  reading_notes_technician_visible text,
  reading_notes_internal_admin_only text,
  requires_admin_review boolean NOT NULL DEFAULT false,
  corrected_from_reading_id uuid REFERENCES chemistry_readings (id),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT chemistry_readings_reading_source_check CHECK (
    reading_source IN ('technician', 'admin', 'customer', 'commercial_manager', 'system')
  ),
  CONSTRAINT chemistry_readings_status_check CHECK (
    status IN ('draft', 'recorded', 'corrected', 'voided')
  )
);

CREATE INDEX chemistry_readings_organization_id_idx ON chemistry_readings (organization_id);
CREATE INDEX chemistry_readings_customer_id_idx ON chemistry_readings (customer_id);
CREATE INDEX chemistry_readings_property_id_idx ON chemistry_readings (property_id);
CREATE INDEX chemistry_readings_water_body_id_idx ON chemistry_readings (water_body_id);
CREATE INDEX chemistry_readings_service_visit_id_idx ON chemistry_readings (service_visit_id);
CREATE INDEX chemistry_readings_recorded_by_app_user_id_idx
ON chemistry_readings (recorded_by_app_user_id);
CREATE INDEX chemistry_readings_reading_source_idx ON chemistry_readings (reading_source);
CREATE INDEX chemistry_readings_status_idx ON chemistry_readings (status);
CREATE INDEX chemistry_readings_measured_at_idx ON chemistry_readings (measured_at);
CREATE INDEX chemistry_readings_requires_admin_review_idx
ON chemistry_readings (requires_admin_review);

CREATE OR REPLACE FUNCTION set_chemistry_readings_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER chemistry_readings_set_updated_at
BEFORE UPDATE ON chemistry_readings
FOR EACH ROW
EXECUTE FUNCTION set_chemistry_readings_updated_at();

COMMIT;
