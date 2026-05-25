BEGIN;

CREATE TABLE route_stops (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  route_id uuid NOT NULL REFERENCES routes (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  assigned_technician_app_user_id uuid REFERENCES app_users (id),
  stop_order integer NOT NULL,
  status text NOT NULL DEFAULT 'scheduled',
  delay_reason text,
  scheduled_arrival_window_start timestamptz,
  scheduled_arrival_window_end timestamptz,
  estimated_arrival_at timestamptz,
  actual_arrival_at timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  skipped_at timestamptz,
  rescheduled_at timestamptz,
  customer_notified_at timestamptz,
  admin_notified_at timestamptz,
  technician_visible_notes text,
  internal_admin_notes text,
  customer_visible_status_note text,
  route_progress_sort_key integer,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT route_stops_status_check CHECK (
    status IN (
      'scheduled',
      'on_the_way',
      'arrived',
      'in_progress',
      'completed',
      'skipped',
      'delayed',
      'rescheduled',
      'cancelled'
    )
  ),
  CONSTRAINT route_stops_delay_reason_check CHECK (
    delay_reason IS NULL
    OR delay_reason IN (
      'traffic',
      'weather',
      'gate_locked',
      'aggressive_dog',
      'customer_requested_reschedule',
      'equipment_issue',
      'technician_issue',
      'other'
    )
  )
);

CREATE UNIQUE INDEX route_stops_route_id_stop_order_unique_idx
ON route_stops (route_id, stop_order)
WHERE deleted_at IS NULL;

CREATE INDEX route_stops_organization_id_idx ON route_stops (organization_id);
CREATE INDEX route_stops_route_id_idx ON route_stops (route_id);
CREATE INDEX route_stops_customer_id_idx ON route_stops (customer_id);
CREATE INDEX route_stops_property_id_idx ON route_stops (property_id);
CREATE INDEX route_stops_assigned_technician_app_user_id_idx
ON route_stops (assigned_technician_app_user_id);
CREATE INDEX route_stops_status_idx ON route_stops (status);
CREATE INDEX route_stops_delay_reason_idx ON route_stops (delay_reason);
CREATE INDEX route_stops_estimated_arrival_at_idx ON route_stops (estimated_arrival_at);
CREATE INDEX route_stops_completed_at_idx ON route_stops (completed_at);

CREATE OR REPLACE FUNCTION set_route_stops_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER route_stops_set_updated_at
BEFORE UPDATE ON route_stops
FOR EACH ROW
EXECUTE FUNCTION set_route_stops_updated_at();

COMMIT;
