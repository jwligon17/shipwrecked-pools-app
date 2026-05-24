BEGIN;

CREATE TABLE household_members (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  app_user_id uuid REFERENCES app_users (id),
  invited_by_app_user_id uuid REFERENCES app_users (id),
  relationship text,
  status text NOT NULL DEFAULT 'invited',
  access_level text NOT NULL DEFAULT 'standard',
  can_receive_service_notifications boolean NOT NULL DEFAULT true,
  can_receive_billing_notifications boolean NOT NULL DEFAULT false,
  can_approve_quotes boolean NOT NULL DEFAULT false,
  can_manage_household_members boolean NOT NULL DEFAULT false,
  invite_email text,
  invite_phone text,
  invite_token_hash text,
  invite_expires_at timestamptz,
  accepted_at timestamptz,
  revoked_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT household_members_relationship_check CHECK (
    relationship IS NULL
    OR relationship IN ('spouse', 'resident', 'family_member', 'property_manager', 'other')
  ),
  CONSTRAINT household_members_status_check CHECK (
    status IN ('invited', 'active', 'inactive', 'revoked', 'expired')
  ),
  CONSTRAINT household_members_access_level_check CHECK (
    access_level IN ('view_only', 'standard', 'manage_profile')
  )
);

CREATE INDEX household_members_organization_id_idx ON household_members (organization_id);
CREATE INDEX household_members_customer_id_idx ON household_members (customer_id);
CREATE INDEX household_members_app_user_id_idx ON household_members (app_user_id);
CREATE INDEX household_members_status_idx ON household_members (status);
CREATE INDEX household_members_invite_email_idx ON household_members (invite_email);
CREATE INDEX household_members_invite_phone_idx ON household_members (invite_phone);

CREATE UNIQUE INDEX household_members_active_customer_app_user_unique_idx
ON household_members (customer_id, app_user_id)
WHERE app_user_id IS NOT NULL
  AND status = 'active'
  AND deleted_at IS NULL;

CREATE OR REPLACE FUNCTION set_household_members_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER household_members_set_updated_at
BEFORE UPDATE ON household_members
FOR EACH ROW
EXECUTE FUNCTION set_household_members_updated_at();

COMMIT;
