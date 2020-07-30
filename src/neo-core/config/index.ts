import { ec as EC } from 'elliptic';

export default {
  COMP_PUBLIC_KEY_PREFIXS: ['02', '03'],
  DEFAULT_BYTE_COUNT: 32,
  HEX_STRING_LENGTH: 64,
  P256_CURVE: new EC('p256'),
  UNCOMP_PUBLIC_KEY_PREFIX: '04',
  WIF_LENGTH: 52,
  WIF_PREFIX: '80',
  WIF_SUFFIX: '01'
}
