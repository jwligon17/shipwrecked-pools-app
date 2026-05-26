BEGIN;

CREATE TABLE checklist_templates (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  name text NOT NULL,
  description text,
  template_type text NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT checklist_templates_template_type_check CHECK (
    template_type IN (
      'weekly_maintenance',
      'biweekly_maintenance',
      'commercial_service',
      'repair',
      'green_to_clean',
      'inspection',
      'other'
    )
  ),
  CONSTRAINT checklist_templates_status_check CHECK (
    status IN ('draft', 'active', 'inactive', 'archived')
  )
);

CREATE TABLE checklist_template_items (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  checklist_template_id uuid NOT NULL REFERENCES checklist_templates (id),
  label text NOT NULL,
  description text,
  item_type text NOT NULL,
  is_required boolean NOT NULL DEFAULT true,
  sort_order integer,
  applies_to_water_body_type text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT checklist_template_items_item_type_check CHECK (
    item_type IN (
      'task',
      'photo_required',
      'chemistry_required',
      'equipment_check',
      'safety_acknowledgment',
      'arrival_acknowledgment',
      'other'
    )
  )
);

CREATE TABLE service_visit_checklist_items (
  id uuid PRIMARY KEY,
  organization_id uuid NOT NULL REFERENCES organizations (id),
  service_visit_id uuid NOT NULL REFERENCES service_visits (id),
  checklist_template_item_id uuid REFERENCES checklist_template_items (id),
  water_body_id uuid REFERENCES water_bodies (id),
  label text NOT NULL,
  item_type text NOT NULL,
  is_required boolean NOT NULL DEFAULT true,
  status text NOT NULL DEFAULT 'not_started',
  completed_by_app_user_id uuid REFERENCES app_users (id),
  completed_at timestamptz,
  skipped_reason text,
  technician_notes text,
  internal_admin_notes text,
  customer_visible_note text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT service_visit_checklist_items_item_type_check CHECK (
    item_type IN (
      'task',
      'photo_required',
      'chemistry_required',
      'equipment_check',
      'safety_acknowledgment',
      'arrival_acknowledgment',
      'other'
    )
  ),
  CONSTRAINT service_visit_checklist_items_status_check CHECK (
    status IN ('not_started', 'completed', 'skipped', 'not_applicable', 'needs_review')
  )
);

CREATE INDEX checklist_templates_organization_id_idx ON checklist_templates (organization_id);
CREATE INDEX checklist_templates_template_type_idx ON checklist_templates (template_type);
CREATE INDEX checklist_templates_status_idx ON checklist_templates (status);

CREATE INDEX checklist_template_items_organization_id_idx ON checklist_template_items (organization_id);
CREATE INDEX checklist_template_items_checklist_template_id_idx
ON checklist_template_items (checklist_template_id);
CREATE INDEX checklist_template_items_item_type_idx ON checklist_template_items (item_type);
CREATE INDEX checklist_template_items_is_required_idx ON checklist_template_items (is_required);
CREATE INDEX checklist_template_items_sort_order_idx ON checklist_template_items (sort_order);

CREATE INDEX service_visit_checklist_items_organization_id_idx
ON service_visit_checklist_items (organization_id);
CREATE INDEX service_visit_checklist_items_service_visit_id_idx
ON service_visit_checklist_items (service_visit_id);
CREATE INDEX service_visit_checklist_items_checklist_template_item_id_idx
ON service_visit_checklist_items (checklist_template_item_id);
CREATE INDEX service_visit_checklist_items_water_body_id_idx
ON service_visit_checklist_items (water_body_id);
CREATE INDEX service_visit_checklist_items_status_idx ON service_visit_checklist_items (status);
CREATE INDEX service_visit_checklist_items_item_type_idx ON service_visit_checklist_items (item_type);
CREATE INDEX service_visit_checklist_items_completed_by_app_user_id_idx
ON service_visit_checklist_items (completed_by_app_user_id);
CREATE INDEX service_visit_checklist_items_completed_at_idx ON service_visit_checklist_items (completed_at);

CREATE OR REPLACE FUNCTION set_checklist_templates_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER checklist_templates_set_updated_at
BEFORE UPDATE ON checklist_templates
FOR EACH ROW
EXECUTE FUNCTION set_checklist_templates_updated_at();

CREATE OR REPLACE FUNCTION set_checklist_template_items_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER checklist_template_items_set_updated_at
BEFORE UPDATE ON checklist_template_items
FOR EACH ROW
EXECUTE FUNCTION set_checklist_template_items_updated_at();

CREATE OR REPLACE FUNCTION set_service_visit_checklist_items_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER service_visit_checklist_items_set_updated_at
BEFORE UPDATE ON service_visit_checklist_items
FOR EACH ROW
EXECUTE FUNCTION set_service_visit_checklist_items_updated_at();

COMMIT;
