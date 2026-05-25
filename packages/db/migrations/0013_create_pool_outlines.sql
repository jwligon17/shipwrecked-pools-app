BEGIN;

CREATE TABLE pool_outlines (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  customer_id uuid NOT NULL REFERENCES customers (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  water_body_id uuid NOT NULL REFERENCES water_bodies (id),
  outline_name text,
  status text NOT NULL DEFAULT 'draft',
  source_type text NOT NULL,
  shape_type text NOT NULL DEFAULT 'unknown',
  normalized_width integer NOT NULL DEFAULT 1000,
  normalized_height integer NOT NULL DEFAULT 1000,
  outline_path_data text,
  outline_points jsonb NOT NULL DEFAULT '[]'::jsonb,
  view_box text,
  source_image_url text,
  source_image_metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  generation_metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  version_number integer NOT NULL DEFAULT 1,
  published_at timestamptz,
  published_by_app_user_id uuid REFERENCES app_users (id),
  created_by_app_user_id uuid REFERENCES app_users (id),
  notes_internal_admin_only text,
  notes_customer_visible text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT pool_outlines_status_check CHECK (
    status IN ('draft', 'published', 'archived', 'needs_review')
  ),
  CONSTRAINT pool_outlines_source_type_check CHECK (
    source_type IN (
      'manual_trace',
      'technician_photo',
      'customer_photo',
      'satellite_image',
      'ai_assisted',
      'admin_created',
      'other'
    )
  ),
  CONSTRAINT pool_outlines_shape_type_check CHECK (
    shape_type IN ('svg_path', 'polygon', 'freeform', 'unknown')
  ),
  CONSTRAINT pool_outlines_normalized_width_check CHECK (normalized_width > 0),
  CONSTRAINT pool_outlines_normalized_height_check CHECK (normalized_height > 0),
  CONSTRAINT pool_outlines_version_number_check CHECK (version_number >= 1)
);

CREATE UNIQUE INDEX pool_outlines_one_published_per_water_body_idx
ON pool_outlines (water_body_id)
WHERE deleted_at IS NULL AND status = 'published';

CREATE INDEX pool_outlines_organization_id_idx ON pool_outlines (organization_id);
CREATE INDEX pool_outlines_customer_id_idx ON pool_outlines (customer_id);
CREATE INDEX pool_outlines_property_id_idx ON pool_outlines (property_id);
CREATE INDEX pool_outlines_water_body_id_idx ON pool_outlines (water_body_id);
CREATE INDEX pool_outlines_status_idx ON pool_outlines (status);
CREATE INDEX pool_outlines_source_type_idx ON pool_outlines (source_type);
CREATE INDEX pool_outlines_published_at_idx ON pool_outlines (published_at);

CREATE OR REPLACE FUNCTION set_pool_outlines_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER pool_outlines_set_updated_at
BEFORE UPDATE ON pool_outlines
FOR EACH ROW
EXECUTE FUNCTION set_pool_outlines_updated_at();

COMMIT;
