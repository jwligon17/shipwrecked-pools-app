BEGIN;

CREATE TABLE service_points (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  water_body_id uuid NOT NULL REFERENCES water_bodies (id),
  pool_outline_id uuid REFERENCES pool_outlines (id),
  equipment_id uuid REFERENCES equipment (id),
  label text NOT NULL,
  service_point_type text NOT NULL,
  status text NOT NULL DEFAULT 'normal',
  marker_x numeric,
  marker_y numeric,
  coordinate_system text NOT NULL DEFAULT 'unknown',
  sort_order integer,
  is_customer_visible boolean NOT NULL DEFAULT true,
  is_technician_visible boolean NOT NULL DEFAULT true,
  customer_visible_summary text,
  technician_visible_notes text,
  internal_admin_notes text,
  last_status_changed_at timestamptz,
  last_status_changed_by_app_user_id uuid REFERENCES app_users (id),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT service_points_service_point_type_check CHECK (
    service_point_type IN (
      'skimmer',
      'steps',
      'shallow_end',
      'deep_end',
      'spa',
      'tile_line',
      'return_jet',
      'light',
      'drain',
      'equipment_pad',
      'pump',
      'filter',
      'heater',
      'cleaner',
      'robot',
      'stain_area',
      'crack_area',
      'general_area',
      'other'
    )
  ),
  CONSTRAINT service_points_status_check CHECK (
    status IN ('normal', 'watch', 'action_needed', 'resolved', 'inactive', 'archived')
  ),
  CONSTRAINT service_points_coordinate_system_check CHECK (
    coordinate_system IN ('normalized_outline', 'image_pixel', 'manual', 'unknown')
  )
);

CREATE INDEX service_points_organization_id_idx ON service_points (organization_id);
CREATE INDEX service_points_customer_id_idx ON service_points (customer_id);
CREATE INDEX service_points_property_id_idx ON service_points (property_id);
CREATE INDEX service_points_water_body_id_idx ON service_points (water_body_id);
CREATE INDEX service_points_pool_outline_id_idx ON service_points (pool_outline_id);
CREATE INDEX service_points_equipment_id_idx ON service_points (equipment_id);
CREATE INDEX service_points_service_point_type_idx ON service_points (service_point_type);
CREATE INDEX service_points_status_idx ON service_points (status);
CREATE INDEX service_points_is_customer_visible_idx ON service_points (is_customer_visible);
CREATE INDEX service_points_pool_outline_sort_order_idx
ON service_points (pool_outline_id, sort_order);

CREATE OR REPLACE FUNCTION set_service_points_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER service_points_set_updated_at
BEFORE UPDATE ON service_points
FOR EACH ROW
EXECUTE FUNCTION set_service_points_updated_at();

COMMIT;
