export const typographyScale = {
  fontFamilyBase: 'System',
  fontFamilyHeading: 'System',
  sizeXs: 12,
  sizeSm: 14,
  sizeMd: 16,
  sizeLg: 20,
  sizeXl: 24,
  sizeDisplay: 32,
  weightRegular: 400,
  weightMedium: 500,
  weightSemibold: 600,
  weightBold: 700,
  lineHeightTight: 1.2,
  lineHeightBase: 1.4,
  lineHeightRelaxed: 1.6,
} as const;

export type TypographyScale = typeof typographyScale;
