BEGIN;

CREATE TABLE water_body_relationships (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  property_id uuid NOT NULL REFERENCES properties (id),
  parent_water_body_id uuid NOT NULL REFERENCES water_bodies (id),
  child_water_body_id uuid NOT NULL REFERENCES water_bodies (id),
  relationship_type text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  shares_chemistry boolean NOT NULL DEFAULT false,
  shares_equipment boolean NOT NULL DEFAULT false,
  shares_report_section boolean NOT NULL DEFAULT false,
  requires_separate_service_notes boolean NOT NULL DEFAULT true,
  requires_separate_photos boolean NOT NULL DEFAULT true,
  relationship_notes_internal text,
  relationship_notes_customer_visible text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT water_body_relationships_distinct_bodies_check CHECK (
    parent_water_body_id <> child_water_body_id
  ),
  CONSTRAINT water_body_relationships_relationship_type_check CHECK (
    relationship_type IN (
      'connected_spa',
      'separate_spa',
      'shared_equipment',
      'shared_chemistry',
      'same_property_group',
      'other'
    )
  ),
  CONSTRAINT water_body_relationships_status_check CHECK (
    status IN ('active', 'inactive', 'archived')
  )
);

CREATE UNIQUE INDEX water_body_relationships_parent_child_type_active_unique_idx
ON water_body_relationships (parent_water_body_id, child_water_body_id, relationship_type)
WHERE deleted_at IS NULL AND status = 'active';

CREATE INDEX water_body_relationships_organization_id_idx
ON water_body_relationships (organization_id);
CREATE INDEX water_body_relationships_property_id_idx
ON water_body_relationships (property_id);
CREATE INDEX water_body_relationships_parent_water_body_id_idx
ON water_body_relationships (parent_water_body_id);
CREATE INDEX water_body_relationships_child_water_body_id_idx
ON water_body_relationships (child_water_body_id);
CREATE INDEX water_body_relationships_relationship_type_idx
ON water_body_relationships (relationship_type);
CREATE INDEX water_body_relationships_status_idx
ON water_body_relationships (status);

CREATE OR REPLACE FUNCTION set_water_body_relationships_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER water_body_relationships_set_updated_at
BEFORE UPDATE ON water_body_relationships
FOR EACH ROW
EXECUTE FUNCTION set_water_body_relationships_updated_at();

COMMIT;
