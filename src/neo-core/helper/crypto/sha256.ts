import CryptoJS from 'crypto-js';
import { numArray2hexString, wordArray2NumArray } from '../converters';

const sha256 = (input: string, useCsharpAlgo?: boolean): string => {
  const words = CryptoJS.enc.Hex.parse(input);
  const sha256 = CryptoJS.SHA256(words);
  if (useCsharpAlgo === false) {
    return sha256.toString(CryptoJS.enc.Hex);
  } else {
    const numArray = wordArray2NumArray(sha256);
    return numArray2hexString(numArray);
  }
};

export default sha256;

