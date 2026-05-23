import { describe, expect, it } from 'vitest';

import { colors, spacing, typography } from '../../packages/ui/src/index';

describe('ui smoke', () => {
  it('exports base design tokens', () => {
    expect(colors).toBeTypeOf('object');
    expect(spacing).toBeTypeOf('object');
    expect(typography).toBeTypeOf('object');
  });
});
