BEGIN;

CREATE TABLE property_access_profiles (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  status text NOT NULL DEFAULT 'active',
  access_type text NOT NULL,
  gate_code_encrypted text,
  gate_code_last_four text,
  lockbox_location text,
  gate_location text,
  access_instructions_technician_visible text,
  access_instructions_internal_admin_only text,
  customer_visible_access_note text,
  requires_customer_confirmation boolean NOT NULL DEFAULT false,
  technician_ack_required boolean NOT NULL DEFAULT false,
  valid_from timestamptz,
  valid_until timestamptz,
  created_by_app_user_id uuid REFERENCES app_users (id),
  updated_by_app_user_id uuid REFERENCES app_users (id),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT property_access_profiles_status_check CHECK (
    status IN ('active', 'inactive', 'archived')
  ),
  CONSTRAINT property_access_profiles_access_type_check CHECK (
    access_type IN ('gate_code', 'lockbox', 'key', 'open_access', 'call_customer', 'other')
  ),
  CONSTRAINT property_access_profiles_gate_code_last_four_check CHECK (
    gate_code_last_four IS NULL OR gate_code_last_four ~ '^[0-9]{4}$'
  ),
  CONSTRAINT property_access_profiles_valid_window_check CHECK (
    valid_until IS NULL OR valid_from IS NULL OR valid_until >= valid_from
  )
);

CREATE INDEX property_access_profiles_organization_id_idx ON property_access_profiles (organization_id);
CREATE INDEX property_access_profiles_property_id_idx ON property_access_profiles (property_id);
CREATE INDEX property_access_profiles_status_idx ON property_access_profiles (status);
CREATE INDEX property_access_profiles_access_type_idx ON property_access_profiles (access_type);
CREATE INDEX property_access_profiles_valid_until_idx ON property_access_profiles (valid_until);

CREATE OR REPLACE FUNCTION set_property_access_profiles_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER property_access_profiles_set_updated_at
BEFORE UPDATE ON property_access_profiles
FOR EACH ROW
EXECUTE FUNCTION set_property_access_profiles_updated_at();

COMMIT;
