import { hex2num,
  hexString2numArray,
  hexString2wif,
  wif2hexString } from '../../../../src/neo-core/helper/converters';

import config from '../../../config';
const { SAMPLE_PRIVATE_KEY } = config;

describe('Test Suite for Converters', () => {
  const { numArray, byteArray, hexstring, wif } = SAMPLE_PRIVATE_KEY;

  const hex2numCases: unknown = [ byteArray, numArray];
  test.each(hex2numCases as TemplateStringsArray, (byte, num) => {
    const result = hex2num(byte);
    expect(result).toEqual(num);
  });

  test('Convert hexstring to numArray:', () => {
    const result = hexString2numArray(hexstring);
    expect(result).toEqual(numArray);
  });

  test('Convert hexstring to wif:', () => {
    const result = hexString2wif(hexstring);
    expect(result).toEqual(wif);
  });

  test('Convert wif to hexstring: ', () => {
    const result = wif2hexString(wif);
    expect(result).toEqual(hexstring);
  });

})

