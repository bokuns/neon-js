import SHA256 from './sha256';
import RIPEMD160 from './ripemd160';

const hash160 = (input: string, useCsharpAlgo?: boolean): string => {
  if (!input) return;
  return useCsharpAlgo === false ?
    RIPEMD160(SHA256(input, false), false) : RIPEMD160(SHA256(input));
};

export default hash160;
