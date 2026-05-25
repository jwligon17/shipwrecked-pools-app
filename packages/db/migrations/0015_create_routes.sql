BEGIN;

CREATE TABLE routes (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  route_name text,
  route_date date NOT NULL,
  route_type text NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  assigned_technician_app_user_id uuid REFERENCES app_users (id),
  backup_technician_app_user_id uuid REFERENCES app_users (id),
  service_area text,
  route_zone text,
  scheduled_start_at timestamptz,
  scheduled_end_at timestamptz,
  started_at timestamptz,
  completed_at timestamptz,
  weather_status text,
  technician_visible_notes text,
  internal_admin_notes text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT routes_route_type_check CHECK (
    route_type IN (
      'maintenance',
      'repair',
      'green_to_clean',
      'commercial',
      'mixed',
      'other'
    )
  ),
  CONSTRAINT routes_status_check CHECK (
    status IN ('draft', 'scheduled', 'in_progress', 'completed', 'cancelled', 'archived')
  ),
  CONSTRAINT routes_weather_status_check CHECK (
    weather_status IS NULL
    OR weather_status IN (
      'clear',
      'rain_delay',
      'storm_delay',
      'freeze_weather',
      'extreme_heat',
      'other'
    )
  )
);

CREATE INDEX routes_organization_id_idx ON routes (organization_id);
CREATE INDEX routes_route_date_idx ON routes (route_date);
CREATE INDEX routes_status_idx ON routes (status);
CREATE INDEX routes_assigned_technician_app_user_id_idx
ON routes (assigned_technician_app_user_id);
CREATE INDEX routes_route_type_idx ON routes (route_type);
CREATE INDEX routes_service_area_idx ON routes (service_area);
CREATE INDEX routes_route_zone_idx ON routes (route_zone);

CREATE OR REPLACE FUNCTION set_routes_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER routes_set_updated_at
BEFORE UPDATE ON routes
FOR EACH ROW
EXECUTE FUNCTION set_routes_updated_at();

COMMIT;
