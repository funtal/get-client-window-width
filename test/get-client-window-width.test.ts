import { getClientWindowWidth } from '../src';

describe('getClientWindowWidth function', () => {
  it('should return window width if window is supported', () => {
    const result = getClientWindowWidth();
    expect(result).toBe(1024);
  });
});
