import { getRandomIntInRange } from './number';

const getRandomCharacterFromString = (str: string): string =>
  str.charAt(Math.floor(Math.random() * str.length));


export const generateRandomString = (
  minTextLength: number,
  maxTextLength: number,
  includeNonAlphanumericCharacters: boolean = true,
): string => {
  const baseCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const nonAlphanumericCharacterSet = '+-=/!@#$%^&*()å∫ç∂´´©˙ˆˆ˚¬µ˜˜πœ®ß†¨¨∑≈¥Ω';
  return Array
    .from({length: getRandomIntInRange(minTextLength, maxTextLength)})
    .map((v, i) =>
      getRandomCharacterFromString(includeNonAlphanumericCharacters && i % 2 ?
        nonAlphanumericCharacterSet :
        baseCharacterSet
      )
    ).join('');
};
