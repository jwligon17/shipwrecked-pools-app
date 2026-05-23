import { describe, expect, it } from 'vitest';

import { ApiClientError, createApiClient } from '../../packages/api-client/src/index';

describe('api-client smoke', () => {
  it('exports ApiClientError and createApiClient', () => {
    expect(ApiClientError).toBeTypeOf('function');
    expect(createApiClient).toBeTypeOf('function');
  });
});
