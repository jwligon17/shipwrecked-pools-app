BEGIN;

CREATE TABLE equipment (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  water_body_id uuid REFERENCES water_bodies (id),
  equipment_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  display_name text,
  manufacturer text,
  model text,
  serial_number_last_four text,
  install_date date,
  warranty_expiration_date date,
  filter_type text,
  pump_type text,
  sanitizer_related boolean NOT NULL DEFAULT false,
  supports_deal_targeting boolean NOT NULL DEFAULT true,
  supports_chemical_guidance boolean NOT NULL DEFAULT false,
  notes_customer_visible text,
  notes_technician_visible text,
  notes_internal_admin_only text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT equipment_type_check CHECK (
    equipment_type IN (
      'pump',
      'filter',
      'heater',
      'salt_system',
      'chlorinator',
      'cleaner',
      'robot',
      'automation',
      'valve',
      'plumbing',
      'light',
      'water_feature',
      'other'
    )
  ),
  CONSTRAINT equipment_status_check CHECK (
    status IN (
      'active',
      'inactive',
      'needs_attention',
      'recommended_replacement',
      'removed',
      'archived'
    )
  ),
  CONSTRAINT equipment_filter_type_check CHECK (
    filter_type IS NULL OR filter_type IN (
      'cartridge',
      'sand',
      'de',
      'unknown',
      'not_applicable'
    )
  ),
  CONSTRAINT equipment_pump_type_check CHECK (
    pump_type IS NULL OR pump_type IN (
      'single_speed',
      'dual_speed',
      'variable_speed',
      'unknown',
      'not_applicable'
    )
  ),
  CONSTRAINT equipment_serial_number_last_four_format_check CHECK (
    serial_number_last_four IS NULL OR serial_number_last_four ~ '^[A-Za-z0-9]{1,4}$'
  )
);

CREATE INDEX equipment_organization_id_idx ON equipment (organization_id);
CREATE INDEX equipment_customer_id_idx ON equipment (customer_id);
CREATE INDEX equipment_property_id_idx ON equipment (property_id);
CREATE INDEX equipment_water_body_id_idx ON equipment (water_body_id);
CREATE INDEX equipment_equipment_type_idx ON equipment (equipment_type);
CREATE INDEX equipment_status_idx ON equipment (status);
CREATE INDEX equipment_filter_type_idx ON equipment (filter_type);
CREATE INDEX equipment_pump_type_idx ON equipment (pump_type);
CREATE INDEX equipment_supports_deal_targeting_idx ON equipment (supports_deal_targeting);
CREATE INDEX equipment_supports_chemical_guidance_idx ON equipment (supports_chemical_guidance);

CREATE OR REPLACE FUNCTION set_equipment_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER equipment_set_updated_at
BEFORE UPDATE ON equipment
FOR EACH ROW
EXECUTE FUNCTION set_equipment_updated_at();

COMMIT;
