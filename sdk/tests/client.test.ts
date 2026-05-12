import { describe, it, expect } from 'vitest';
import { GrowStreams } from '../src/client';

describe('GrowStreams SDK', () => {
  it('should initialize with correct baseUrl', () => {
    const sdk = new GrowStreams({ baseUrl: 'https://api.test' });
    expect(sdk).toBeDefined();
  });
});
