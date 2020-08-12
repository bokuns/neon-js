import bs58 from 'bs58';
import BS58Check from 'bs58check';
import { Buffer } from 'buffer';
import sha256 from '../crypto/sha256';

const bs58check = (input: string, useCsharpAlgo?: boolean): string => {
  if (useCsharpAlgo === false) {
    const buffer = Buffer.from(input, 'hex');
    return BS58Check.encode(buffer);
  } else {
    const suffix = sha256(sha256(input)).substring(0, 8);
    const value = BigInt(`0x${input}${suffix}`).toString(16);
    const buffer = Buffer.from(value, 'hex');
    return bs58.encode(buffer);
  }
};

export default bs58check;
