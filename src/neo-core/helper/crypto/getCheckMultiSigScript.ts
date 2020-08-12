import config from '../../config'
import { hash2uint, num2hex, reverseHex } from '../converters';
import isLE from '../isLE';

const { ADDRESS } = config;
const { PUSHBYTES33, OPCODE_PUSHNULL,
  OPCODE_SYSCALL, MULTI_SIG_STRING } = ADDRESS;
/*
let hash = hash2uint(MULTI_SIG_STRING).toString(16);
if (isLE()) {
  hash = reverseHex(hash);
}
*/
const checkMultiSig = (compPubKeys: string[], m: number): string => {
  if (m < 0 || m > compPubKeys.length || compPubKeys.length > 1024) {
    throw new Error('Invalid arguments.');
  }
  const keyFrames = compPubKeys.reduce((accu: string, curr: string) => `${accu}${PUSHBYTES33}${curr}`, '');
  return `${m}${keyFrames} ${compPubKeys.length} ${OPCODE_PUSHNULL} ${OPCODE_SYSCALL}`;
}

export default checkMultiSig;
