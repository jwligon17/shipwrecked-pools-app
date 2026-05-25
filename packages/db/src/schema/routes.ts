export const ROUTES_TABLE = 'routes' as const;

export const ROUTE_TYPES = [
  'maintenance',
  'repair',
  'green_to_clean',
  'commercial',
  'mixed',
  'other',
] as const;
export type RouteType = (typeof ROUTE_TYPES)[number];

export const ROUTE_STATUSES = [
  'draft',
  'scheduled',
  'in_progress',
  'completed',
  'cancelled',
  'archived',
] as const;
export type RouteStatus = (typeof ROUTE_STATUSES)[number];

export const ROUTE_WEATHER_STATUSES = [
  'clear',
  'rain_delay',
  'storm_delay',
  'freeze_weather',
  'extreme_heat',
  'other',
] as const;
export type RouteWeatherStatus = (typeof ROUTE_WEATHER_STATUSES)[number];

export interface RouteRow {
  id: string;
  organization_id: string;
  route_name: string | null;
  route_date: string;
  route_type: RouteType;
  status: RouteStatus;
  assigned_technician_app_user_id: string | null;
  backup_technician_app_user_id: string | null;
  service_area: string | null;
  route_zone: string | null;
  scheduled_start_at: string | null;
  scheduled_end_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  weather_status: RouteWeatherStatus | null;
  technician_visible_notes: string | null;
  internal_admin_notes: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface RouteInsert {
  id: string;
  organization_id: string;
  route_name?: string | null;
  route_date: string;
  route_type: RouteType;
  status?: RouteStatus;
  assigned_technician_app_user_id?: string | null;
  backup_technician_app_user_id?: string | null;
  service_area?: string | null;
  route_zone?: string | null;
  scheduled_start_at?: string | null;
  scheduled_end_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  weather_status?: RouteWeatherStatus | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}

export interface RouteUpdate {
  route_name?: string | null;
  route_date?: string;
  route_type?: RouteType;
  status?: RouteStatus;
  assigned_technician_app_user_id?: string | null;
  backup_technician_app_user_id?: string | null;
  service_area?: string | null;
  route_zone?: string | null;
  scheduled_start_at?: string | null;
  scheduled_end_at?: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  weather_status?: RouteWeatherStatus | null;
  technician_visible_notes?: string | null;
  internal_admin_notes?: string | null;
  metadata?: Record<string, unknown>;
  deleted_at?: string | null;
}
