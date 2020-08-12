import config from '../../config'
import { getKeyPointFromPublicKey } from '../../key';

const { COMP_PUBLIC_KEY_LENGTH, COMP_PUBLIC_KEY_PREFIXS, ADDRESS } = config;
const { PUSHBYTES33, OPCODE_PUSHNULL,
  OPCODE_SYSCALL, SIG_HEX } = ADDRESS;

const encodePoint = (compPubKey: string): string => {
  const keyPoint = getKeyPointFromPublicKey(compPubKey);
  const bigIntX = BigInt(`0x${keyPoint.X}`);
  const bigIntY = BigInt(`0x${keyPoint.Y}`);
  const prefixIndex = parseInt(bigIntY.toString(10).slice(-1)) % 2; // is Y even?
  return `${COMP_PUBLIC_KEY_PREFIXS[prefixIndex]}${bigIntX.toString(16)}`;
};

const getCheckSigScript = (compPubKey: string): string => {
  if (compPubKey.length !== COMP_PUBLIC_KEY_LENGTH) {
    throw new Error('Failed to perform checkSig: Invalid compPubKey.');
  }
  const encodedKey = encodePoint(compPubKey);
  return `${PUSHBYTES33}${encodedKey}${OPCODE_PUSHNULL}${OPCODE_SYSCALL}${SIG_HEX}`;
};

export default getCheckSigScript;
