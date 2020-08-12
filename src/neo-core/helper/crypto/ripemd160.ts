import CryptoJS from 'crypto-js';
import { wordArray2NumArray, numArray2hexString } from '../converters';

const RIPEMD160Csharp = (input: string, useCsharpAlgo?: boolean): string => {
  const words = CryptoJS.enc.Hex.parse(input);
  const encoded = CryptoJS.RIPEMD160(words);
  if (useCsharpAlgo === false) {
    return encoded.toString(CryptoJS.enc.Hex);
  } else {
    const numArray = wordArray2NumArray(encoded);
    return numArray2hexString(numArray);
  }
};

export default RIPEMD160Csharp;
