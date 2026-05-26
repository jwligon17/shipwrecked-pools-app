BEGIN;

CREATE TABLE service_visits (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  route_id uuid REFERENCES routes (id),
  route_stop_id uuid REFERENCES route_stops (id),
  assigned_technician_app_user_id uuid REFERENCES app_users (id),
  visit_date date NOT NULL,
  visit_type text NOT NULL,
  status text NOT NULL DEFAULT 'scheduled',
  scheduled_start_at timestamptz,
  scheduled_end_at timestamptz,
  on_the_way_at timestamptz,
  arrived_at timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  skipped_at timestamptz,
  skip_reason text,
  completion_source text,
  customer_visible_summary text,
  technician_visible_notes text,
  internal_admin_notes text,
  requires_admin_review boolean NOT NULL DEFAULT false,
  is_billable boolean NOT NULL DEFAULT false,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT service_visits_visit_type_check CHECK (
    visit_type IN (
      'weekly_maintenance',
      'biweekly_maintenance',
      'one_time_maintenance',
      'repair',
      'green_to_clean',
      'acid_wash',
      'drain_and_refill',
      'commercial_service',
      'inspection',
      'other'
    )
  ),
  CONSTRAINT service_visits_status_check CHECK (
    status IN (
      'scheduled',
      'on_the_way',
      'arrived',
      'in_progress',
      'completed',
      'skipped',
      'cancelled',
      'rescheduled',
      'needs_admin_review'
    )
  ),
  CONSTRAINT service_visits_skip_reason_check CHECK (
    skip_reason IS NULL
    OR skip_reason IN (
      'gate_locked',
      'aggressive_dog',
      'weather',
      'customer_requested_reschedule',
      'unsafe_conditions',
      'equipment_issue',
      'other'
    )
  ),
  CONSTRAINT service_visits_completion_source_check CHECK (
    completion_source IS NULL OR completion_source IN ('technician', 'admin', 'system')
  )
);

CREATE INDEX service_visits_organization_id_idx ON service_visits (organization_id);
CREATE INDEX service_visits_customer_id_idx ON service_visits (customer_id);
CREATE INDEX service_visits_property_id_idx ON service_visits (property_id);
CREATE INDEX service_visits_route_id_idx ON service_visits (route_id);
CREATE INDEX service_visits_route_stop_id_idx ON service_visits (route_stop_id);
CREATE INDEX service_visits_assigned_technician_app_user_id_idx
ON service_visits (assigned_technician_app_user_id);
CREATE INDEX service_visits_visit_date_idx ON service_visits (visit_date);
CREATE INDEX service_visits_visit_type_idx ON service_visits (visit_type);
CREATE INDEX service_visits_status_idx ON service_visits (status);
CREATE INDEX service_visits_completed_at_idx ON service_visits (completed_at);
CREATE INDEX service_visits_requires_admin_review_idx ON service_visits (requires_admin_review);

CREATE OR REPLACE FUNCTION set_service_visits_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER service_visits_set_updated_at
BEFORE UPDATE ON service_visits
FOR EACH ROW
EXECUTE FUNCTION set_service_visits_updated_at();

COMMIT;
