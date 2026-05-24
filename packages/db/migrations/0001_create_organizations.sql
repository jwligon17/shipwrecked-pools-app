BEGIN;

CREATE TABLE organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL,
  legal_name text,
  status text NOT NULL DEFAULT 'active',
  organization_type text NOT NULL DEFAULT 'shipwrecked_internal',
  timezone text NOT NULL DEFAULT 'America/Chicago',
  primary_locale text NOT NULL DEFAULT 'en-US',
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT organizations_slug_unique UNIQUE (slug),
  CONSTRAINT organizations_status_check CHECK (status IN ('active', 'inactive', 'suspended', 'archived')),
  CONSTRAINT organizations_type_check CHECK (
    organization_type IN ('shipwrecked_internal', 'service_business', 'future_saas_tenant')
  )
);

CREATE INDEX organizations_status_idx ON organizations (status);
CREATE INDEX organizations_deleted_at_idx ON organizations (deleted_at);

CREATE OR REPLACE FUNCTION set_organizations_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER organizations_set_updated_at
BEFORE UPDATE ON organizations
FOR EACH ROW
EXECUTE FUNCTION set_organizations_updated_at();

COMMIT;
