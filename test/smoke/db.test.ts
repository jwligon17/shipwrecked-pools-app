import { describe, expect, it } from 'vitest';

import * as db from '../../packages/db/src/index';

describe('db package smoke', () => {
  it('exports a module surface', () => {
    expect(db).toBeTypeOf('object');
  });
});
