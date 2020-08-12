import SHA256 from '../crypto/sha256';
import { hex2num, numArray2uint } from '../converters';

const hash2uint = (input: string): number => {
  const hash = SHA256(input, true);
  const subHash = hash.substring(0, 8);
  const numArray = subHash.match(/..?/g).map((curr: string) => hex2num(curr));
  return numArray2uint(numArray);
};

export default hash2uint;
