import { describe, expect, it } from 'vitest';

import { spacingScale, typographyScale, uiTokens } from '../../packages/ui/src/index';

describe('ui smoke', () => {
  it('exports base design tokens', () => {
    expect(uiTokens).toBeTypeOf('object');
    expect(spacingScale).toBeTypeOf('object');
    expect(typographyScale).toBeTypeOf('object');
  });
});
