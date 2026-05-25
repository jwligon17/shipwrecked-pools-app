BEGIN;

CREATE TABLE pets (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid REFERENCES properties (id),
  name text NOT NULL,
  pet_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  temperament text,
  treat_allowed boolean NOT NULL DEFAULT false,
  treat_notes text,
  technician_visible_notes text,
  internal_admin_notes text,
  customer_visible_notes text,
  must_secure_before_entry boolean NOT NULL DEFAULT false,
  notify_customer_before_entry boolean NOT NULL DEFAULT false,
  last_confirmed_at timestamptz,
  confirmed_by_app_user_id uuid REFERENCES app_users (id),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT pets_pet_type_check CHECK (
    pet_type IN ('dog', 'cat', 'other')
  ),
  CONSTRAINT pets_status_check CHECK (
    status IN ('active', 'inactive', 'archived')
  ),
  CONSTRAINT pets_temperament_check CHECK (
    temperament IS NULL OR temperament IN ('friendly', 'barks', 'nervous', 'aggressive', 'unknown', 'other')
  )
);

CREATE INDEX pets_organization_id_idx ON pets (organization_id);
CREATE INDEX pets_customer_id_idx ON pets (customer_id);
CREATE INDEX pets_property_id_idx ON pets (property_id);
CREATE INDEX pets_status_idx ON pets (status);
CREATE INDEX pets_pet_type_idx ON pets (pet_type);
CREATE INDEX pets_treat_allowed_idx ON pets (treat_allowed);
CREATE INDEX pets_must_secure_before_entry_idx ON pets (must_secure_before_entry);

CREATE OR REPLACE FUNCTION set_pets_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER pets_set_updated_at
BEFORE UPDATE ON pets
FOR EACH ROW
EXECUTE FUNCTION set_pets_updated_at();

COMMIT;
