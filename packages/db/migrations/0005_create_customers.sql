BEGIN;

CREATE TABLE customers (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  primary_app_user_id uuid REFERENCES app_users (id),
  source_lead_id uuid REFERENCES leads (id),
  customer_type text NOT NULL,
  status text NOT NULL DEFAULT 'prospective',
  display_name text NOT NULL,
  legal_name text,
  first_name text,
  last_name text,
  company_name text,
  primary_email text,
  primary_phone text,
  preferred_contact_method text,
  default_service_schedule text,
  onboarding_status text NOT NULL DEFAULT 'not_started',
  billing_profile_status text NOT NULL DEFAULT 'not_configured',
  notes_customer_visible text,
  notes_internal_admin_only text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT customers_customer_type_check CHECK (
    customer_type IN ('residential', 'commercial')
  ),
  CONSTRAINT customers_status_check CHECK (
    status IN ('prospective', 'active', 'paused', 'past_due', 'inactive', 'cancelled', 'archived')
  ),
  CONSTRAINT customers_preferred_contact_method_check CHECK (
    preferred_contact_method IS NULL
    OR preferred_contact_method IN ('push', 'email', 'sms', 'phone', 'none')
  ),
  CONSTRAINT customers_default_service_schedule_check CHECK (
    default_service_schedule IS NULL
    OR default_service_schedule IN ('weekly', 'biweekly', 'commercial_custom', 'as_needed', 'none')
  ),
  CONSTRAINT customers_onboarding_status_check CHECK (
    onboarding_status IN ('not_started', 'in_progress', 'needs_review', 'complete')
  ),
  CONSTRAINT customers_billing_profile_status_check CHECK (
    billing_profile_status IN ('not_configured', 'pending', 'active', 'failed', 'external')
  )
);

CREATE INDEX customers_organization_id_idx ON customers (organization_id);
CREATE INDEX customers_status_idx ON customers (status);
CREATE INDEX customers_customer_type_idx ON customers (customer_type);
CREATE INDEX customers_primary_app_user_id_idx ON customers (primary_app_user_id);
CREATE INDEX customers_source_lead_id_idx ON customers (source_lead_id);
CREATE INDEX customers_primary_email_idx ON customers (primary_email);
CREATE INDEX customers_primary_phone_idx ON customers (primary_phone);
CREATE INDEX customers_created_at_idx ON customers (created_at);

CREATE OR REPLACE FUNCTION set_customers_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER customers_set_updated_at
BEFORE UPDATE ON customers
FOR EACH ROW
EXECUTE FUNCTION set_customers_updated_at();

COMMIT;
