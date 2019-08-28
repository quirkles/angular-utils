import { generateRandomString } from './string';

describe('generateRandomString', () => {
  it('generates very long strings', () => {
    for (let i = 0; i < 10000; i++) {
      const str = generateRandomString(
        1000,
        1010
      );
      expect(str.length).toBeGreaterThanOrEqual(1000);
      expect(str.length).toBeLessThanOrEqual(1010);
    }
  });
  it('includes non alphanumeric chars by default', () => {
    const nonAlphanumericCharacterRegex = /[\+\-\=\/!@#$%^&*()å∫ç∂´´©˙ˆˆ˚¬µ˜˜πœ®ß†¨¨∑≈¥Ω]/;
    for (let i = 0; i < 100; i++) {
      const str = generateRandomString(
        10,
        20
      );
      expect(nonAlphanumericCharacterRegex.test(str)).toBe(true);
    }
  });
  it('can exclude non alphanumeric chars', () => {
    const nonAlphanumericCharacterRegex = /[\+\-\=\/!@#$%^&*()å∫ç∂´´©˙ˆˆ˚¬µ˜˜πœ®ß†¨¨∑≈¥Ω]/;
    for (let i = 0; i < 100; i++) {
      const str = generateRandomString(
        10,
        20,
        false
      );
      expect(nonAlphanumericCharacterRegex.test(str)).toBe(false);
    }
  });
});
