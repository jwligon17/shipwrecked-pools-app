BEGIN;

CREATE TABLE app_users (
  id uuid PRIMARY KEY,
  auth_provider_user_id text,
  primary_email text,
  primary_phone text,
  display_name text,
  first_name text,
  last_name text,
  status text NOT NULL DEFAULT 'invited',
  preferred_contact_method text,
  two_factor_required boolean NOT NULL DEFAULT false,
  two_factor_enabled boolean NOT NULL DEFAULT false,
  last_login_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT app_users_status_check CHECK (
    status IN ('invited', 'active', 'inactive', 'suspended', 'archived')
  ),
  CONSTRAINT app_users_preferred_contact_method_check CHECK (
    preferred_contact_method IS NULL
    OR preferred_contact_method IN ('push', 'email', 'sms', 'phone', 'none')
  )
);

CREATE UNIQUE INDEX app_users_auth_provider_user_id_unique
ON app_users (auth_provider_user_id)
WHERE auth_provider_user_id IS NOT NULL;

CREATE INDEX app_users_primary_email_idx ON app_users (primary_email);
CREATE INDEX app_users_primary_phone_idx ON app_users (primary_phone);
CREATE INDEX app_users_status_idx ON app_users (status);

CREATE OR REPLACE FUNCTION set_app_users_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER app_users_set_updated_at
BEFORE UPDATE ON app_users
FOR EACH ROW
EXECUTE FUNCTION set_app_users_updated_at();

COMMIT;
