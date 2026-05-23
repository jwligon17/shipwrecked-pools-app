import { describe, expect, it } from 'vitest';

import * as sharedTypes from '../../packages/shared-types/src/index';

describe('shared-types smoke', () => {
  it('exports a module surface', () => {
    expect(Object.keys(sharedTypes).length).toBeGreaterThan(0);
  });
});
