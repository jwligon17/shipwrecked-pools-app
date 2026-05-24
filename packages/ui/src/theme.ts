import { spacingScale } from './spacing';
import {
  reportStatusColors,
  routeStatusColors,
  poolStatusColors,
  quoteRepairStatusColors,
} from './status-colors';
import { uiTokens } from './tokens';
import { typographyScale } from './typography';

export const shipwreckedTheme = {
  tokens: uiTokens,
  spacing: spacingScale,
  typography: typographyScale,
  status: {
    pool: poolStatusColors,
    route: routeStatusColors,
    report: reportStatusColors,
    quoteRepair: quoteRepairStatusColors,
  },
} as const;

export type ShipwreckedTheme = typeof shipwreckedTheme;
