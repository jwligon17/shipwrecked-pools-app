BEGIN;

CREATE TABLE photos (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid REFERENCES properties (id),
  water_body_id uuid REFERENCES water_bodies (id),
  service_visit_id uuid REFERENCES service_visits (id),
  checklist_item_id uuid REFERENCES service_visit_checklist_items (id),
  service_point_id uuid REFERENCES service_points (id),
  equipment_id uuid REFERENCES equipment (id),
  uploaded_by_app_user_id uuid REFERENCES app_users (id),
  photo_type text NOT NULL,
  capture_stage text,
  visibility text NOT NULL,
  storage_provider text,
  storage_bucket text,
  storage_key text,
  public_url text,
  original_file_name text,
  mime_type text,
  file_size_bytes integer,
  width_px integer,
  height_px integer,
  taken_at timestamptz,
  uploaded_at timestamptz NOT NULL DEFAULT now(),
  caption_customer_visible text,
  caption_internal_admin_only text,
  before_after_group_id uuid,
  before_after_label text,
  is_hidden_from_customer boolean NOT NULL DEFAULT false,
  hidden_from_customer_at timestamptz,
  hidden_from_customer_by_app_user_id uuid REFERENCES app_users (id),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT photos_photo_type_check CHECK (
    photo_type IN (
      'gate_arrival',
      'gate_departure',
      'pool_overview',
      'deep_end',
      'shallow_end',
      'steps',
      'spa',
      'filter_pressure',
      'equipment',
      'service_point',
      'before',
      'after',
      'progress',
      'issue',
      'other'
    )
  ),
  CONSTRAINT photos_capture_stage_check CHECK (
    capture_stage IS NULL OR capture_stage IN ('before', 'during', 'after', 'final')
  ),
  CONSTRAINT photos_visibility_check CHECK (
    visibility IN (
      'customer_visible',
      'technician_visible',
      'admin_only',
      'commercial_export_visible'
    )
  ),
  CONSTRAINT photos_file_size_bytes_check CHECK (file_size_bytes IS NULL OR file_size_bytes >= 0),
  CONSTRAINT photos_width_px_check CHECK (width_px IS NULL OR width_px >= 0),
  CONSTRAINT photos_height_px_check CHECK (height_px IS NULL OR height_px >= 0)
);

CREATE INDEX photos_organization_id_idx ON photos (organization_id);
CREATE INDEX photos_customer_id_idx ON photos (customer_id);
CREATE INDEX photos_property_id_idx ON photos (property_id);
CREATE INDEX photos_water_body_id_idx ON photos (water_body_id);
CREATE INDEX photos_service_visit_id_idx ON photos (service_visit_id);
CREATE INDEX photos_checklist_item_id_idx ON photos (checklist_item_id);
CREATE INDEX photos_service_point_id_idx ON photos (service_point_id);
CREATE INDEX photos_equipment_id_idx ON photos (equipment_id);
CREATE INDEX photos_photo_type_idx ON photos (photo_type);
CREATE INDEX photos_visibility_idx ON photos (visibility);
CREATE INDEX photos_before_after_group_id_idx ON photos (before_after_group_id);
CREATE INDEX photos_uploaded_at_idx ON photos (uploaded_at);
CREATE INDEX photos_is_hidden_from_customer_idx ON photos (is_hidden_from_customer);

CREATE OR REPLACE FUNCTION set_photos_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER photos_set_updated_at
BEFORE UPDATE ON photos
FOR EACH ROW
EXECUTE FUNCTION set_photos_updated_at();

COMMIT;
