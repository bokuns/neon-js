import { randomArray } from 'secure-random';
import { numArray2hexString, hexString2numArray, num2hex, hex2num ,
  hexString2wif, wif2hexString } from '../converters';
import config from '../../config';
import { PrivateKey } from '../../types/privateKey';

const { DEFAULT_BYTE_COUNT } = config;

const generatePrivateKey = (privateKey: Partial<PrivateKey>): PrivateKey => {
  const key = Object.keys(privateKey)[0];
  const value = privateKey[key];
  let numArray = [];
  let byteArray = [];
  let hexstring = '';
  let wif = '';

  switch(key) {
    case 'numArray':
      numArray = value;
      byteArray = numArray.map((i: number): string => num2hex(i));
      hexstring = numArray2hexString(numArray);
      wif = hexString2wif(hexstring);
      break;
    case 'byteArray':
      byteArray = value;
      numArray = byteArray.map((i: string): number => hex2num(i));
      hexstring = numArray2hexString(numArray);
      wif = hexString2wif(hexstring);
      break;
    case 'hexstring':
      hexstring = value;
      wif = hexString2wif(hexstring);
      numArray = hexString2numArray(hexstring);
      byteArray = numArray.map((i: number): string => num2hex(i));
      break;
    case 'wif':
      wif = value;
      hexstring = wif2hexString(wif);
      numArray = hexString2numArray(hexstring);
      byteArray = numArray.map((i: number): string => num2hex(i));
      break;
    default:
      throw new Error('Unable to generate PrivateKey: Invalid input.');
  }
  return {
    numArray,
    byteArray,
    hexstring,
    wif
  };
}

const createPrivateKey = (): PrivateKey => {
  const numArray = randomArray(DEFAULT_BYTE_COUNT);
  return generatePrivateKey({ numArray });
};

export {
  generatePrivateKey,
  createPrivateKey
};
