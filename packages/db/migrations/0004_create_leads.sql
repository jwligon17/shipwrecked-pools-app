BEGIN;

CREATE TABLE leads (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  app_user_id uuid REFERENCES app_users (id),
  lead_type text NOT NULL DEFAULT 'unknown',
  status text NOT NULL DEFAULT 'new',
  source text,
  first_name text,
  last_name text,
  company_name text,
  email text,
  phone text,
  service_address_line1 text,
  service_address_line2 text,
  service_city text,
  service_state text,
  service_postal_code text,
  requested_service_type text,
  has_pool boolean,
  has_spa boolean,
  pool_notes text,
  frustration_note text,
  preferred_contact_method text,
  assigned_admin_user_id uuid REFERENCES app_users (id),
  converted_customer_id uuid,
  lost_reason text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT leads_lead_type_check CHECK (
    lead_type IN ('residential', 'commercial', 'unknown')
  ),
  CONSTRAINT leads_status_check CHECK (
    status IN ('new', 'contacted', 'needs_review', 'qualified', 'quoted', 'converted', 'lost', 'archived')
  ),
  CONSTRAINT leads_source_check CHECK (
    source IS NULL
    OR source IN ('website', 'referral', 'phone', 'app', 'manual', 'other')
  ),
  CONSTRAINT leads_preferred_contact_method_check CHECK (
    preferred_contact_method IS NULL
    OR preferred_contact_method IN ('push', 'email', 'sms', 'phone', 'none')
  )
);

CREATE INDEX leads_organization_id_idx ON leads (organization_id);
CREATE INDEX leads_status_idx ON leads (status);
CREATE INDEX leads_lead_type_idx ON leads (lead_type);
CREATE INDEX leads_email_idx ON leads (email);
CREATE INDEX leads_phone_idx ON leads (phone);
CREATE INDEX leads_created_at_idx ON leads (created_at);
CREATE INDEX leads_assigned_admin_user_id_idx ON leads (assigned_admin_user_id);

CREATE OR REPLACE FUNCTION set_leads_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER leads_set_updated_at
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE FUNCTION set_leads_updated_at();

COMMIT;
