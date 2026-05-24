BEGIN;

CREATE TABLE organization_memberships (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  app_user_id uuid NOT NULL REFERENCES app_users (id),
  role text NOT NULL,
  status text NOT NULL DEFAULT 'invited',
  is_primary boolean NOT NULL DEFAULT false,
  can_operate_as_technician boolean NOT NULL DEFAULT false,
  assigned_by_app_user_id uuid REFERENCES app_users (id),
  assigned_at timestamptz NOT NULL DEFAULT now(),
  revoked_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT organization_memberships_role_check CHECK (
    role IN (
      'owner',
      'admin',
      'technician',
      'customer',
      'household_member',
      'commercial_contact',
      'export_recipient',
      'system'
    )
  ),
  CONSTRAINT organization_memberships_status_check CHECK (
    status IN ('invited', 'active', 'inactive', 'suspended', 'revoked')
  ),
  CONSTRAINT organization_memberships_can_operate_as_technician_check CHECK (
    can_operate_as_technician = false
    OR role IN ('owner', 'admin')
  )
);

CREATE UNIQUE INDEX organization_memberships_org_user_role_unique_active
ON organization_memberships (organization_id, app_user_id, role)
WHERE deleted_at IS NULL;

CREATE INDEX organization_memberships_organization_id_idx ON organization_memberships (organization_id);
CREATE INDEX organization_memberships_app_user_id_idx ON organization_memberships (app_user_id);
CREATE INDEX organization_memberships_role_idx ON organization_memberships (role);
CREATE INDEX organization_memberships_status_idx ON organization_memberships (status);

CREATE OR REPLACE FUNCTION set_organization_memberships_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER organization_memberships_set_updated_at
BEFORE UPDATE ON organization_memberships
FOR EACH ROW
EXECUTE FUNCTION set_organization_memberships_updated_at();

COMMIT;
