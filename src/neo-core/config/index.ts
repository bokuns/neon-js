import { ec as EC } from 'elliptic';

const address = {
  PUSHBYTES33: '0c21',
  OPCODE_PUSHNULL: '0b',  // '0b' | '1E'
  OPCODE_SYSCALL: '41', // '41' | '00'
  SIG_HEX: '95440d78',
  SIG_STRING: 'Neo.Crypto.VerifyWithECDsaSecp256r1', // 'Neo.Crypto.ECDsaVerify' | 'Neo.Crypto.VerifyWithECDsaSecp256r1'
  MULTI_SIG_STRING: 'Neo.Crypto.CheckMultisigWithECDsaSecp256r1', // 'Neo.Crypto.ECDsaCheckMultiSig' | 'Neo.Crypto.CheckMultisigWithECDsaSecp256r1'
  VERSION_HEX: '35'
}

export default {
  ADDRESS: address,
  COMP_PUBLIC_KEY_LENGTH: 66,
  COMP_PUBLIC_KEY_PREFIXS: ['02', '03'],
  DEFAULT_BYTE_COUNT: 32,
  HEX_STRING_LENGTH: 64,
  P256_CURVE: new EC('p256'),
  UNCOMP_PUBLIC_KEY_PREFIX: '04',
  WIF_LENGTH: 52,
  WIF_PREFIX: '80',
  WIF_SUFFIX: '01'
}
