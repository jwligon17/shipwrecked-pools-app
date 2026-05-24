import { describe, expect, it } from 'vitest';

import * as db from '../../packages/db/src/index';

describe('db package smoke', () => {
  it('exports a module surface', () => {
    expect(db).toBeTypeOf('object');
    expect(db.ORGANIZATIONS_TABLE).toBe('organizations');
    expect(db.ORGANIZATION_STATUSES).toContain('active');
    expect(db.ORGANIZATION_TYPES).toContain('shipwrecked_internal');
  });
});
