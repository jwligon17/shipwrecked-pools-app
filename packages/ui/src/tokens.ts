export const uiTokens = {
  brand: {
    primary: '#0E7490',
    secondary: '#155E75',
    accent: '#14B8A6',
  },
  background: {
    app: '#F8FAFC',
    elevated: '#FFFFFF',
    muted: '#E2E8F0',
  },
  surface: {
    default: '#FFFFFF',
    subtle: '#F1F5F9',
    strong: '#E2E8F0',
  },
  text: {
    primary: '#0F172A',
    secondary: '#334155',
    muted: '#64748B',
    onBrand: '#FFFFFF',
  },
  border: {
    subtle: '#CBD5E1',
    strong: '#94A3B8',
  },
  success: {
    base: '#16A34A',
    soft: '#DCFCE7',
  },
  warning: {
    base: '#D97706',
    soft: '#FEF3C7',
  },
  danger: {
    base: '#DC2626',
    soft: '#FEE2E2',
  },
  info: {
    base: '#0284C7',
    soft: '#E0F2FE',
  },
  neutral: {
    base: '#64748B',
    soft: '#F1F5F9',
  },
} as const;

export type UiTokens = typeof uiTokens;
