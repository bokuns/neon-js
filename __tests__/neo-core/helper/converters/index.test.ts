import { hash2uint, hex2num,
  hexString2numArray,
  hexString2wif,
  wif2hexString,
  reverseHex } from '../../../../src/neo-core/helper/converters';

import config from '../../../config';
const { SAMPLE_PRIVATE_KEY } = config;

describe('Test Suite for Converters', () => {
  const { numArray, byteArray, hexstring, wif } = SAMPLE_PRIVATE_KEY;
  const reverseHexTest = {
    hex: 'c451ddf72fd80c41',
    reverse: '410cd82ff7dd51c4'
  }

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

  test('Reverse Hex String: ', () => {
    const result = reverseHex(reverseHexTest.hex);
    expect(result).toEqual(reverseHexTest.reverse);
  });

  test.skip('Hash to UInt: ', () => {
    const hash = 'Neo.Crypto.ECDsaVerify';
    const uint = 3563753482;
    const uintResult = hash2uint(hash);
    expect(uintResult).toEqual(uint);
  });

  test.skip('UInt to hex: ', () => {
    const uint = 3563753482;
    const expected = '0xd46a900a';
    const result = `0x${uint.toString(16)}`;
    expect(result).toEqual(expected);
  })
})

