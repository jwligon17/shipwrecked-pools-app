export const poolStatusColors = {
  normal: '#16A34A',
  watch: '#D97706',
  action_needed: '#DC2626',
} as const;

export const routeStatusColors = {
  scheduled: '#64748B',
  en_route: '#0284C7',
  arrived: '#0EA5E9',
  servicing: '#14B8A6',
  completed: '#16A34A',
  delayed: '#D97706',
  skipped: '#DC2626',
} as const;

export const reportStatusColors = {
  draft: '#64748B',
  ready_for_review: '#0284C7',
  published: '#16A34A',
  corrected: '#D97706',
} as const;

export const quoteRepairStatusColors = {
  draft: '#64748B',
  sent: '#0284C7',
  approved: '#16A34A',
  declined: '#DC2626',
  expired: '#D97706',
  in_progress: '#0EA5E9',
  completed: '#16A34A',
} as const;
