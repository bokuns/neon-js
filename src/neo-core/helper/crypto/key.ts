import { randomArray } from 'secure-random';
import { numArray2hexString, hexString2wif, wif2hexString } from '../converters';
import config from '../../config';
import { PrivateKey, PublicKey } from '../../../types/key';

const { DEFAULT_BYTE_COUNT, COMP_PUBLIC_KEY_PREFIXS,
  HEX_STRING_LENGTH, WIF_LENGTH, P256_CURVE } = config;

const getFullPrivateKey = (privateKey: string): PrivateKey => {
  let hexstring = '';
  let wif = '';

  switch(privateKey.length) {
    case HEX_STRING_LENGTH:
      hexstring = privateKey;
      wif = hexString2wif(hexstring);
      break;
    case WIF_LENGTH:
      wif = privateKey;
      hexstring = wif2hexString(wif);
      break;
    default:
      throw new Error('Unable to generate PrivateKey: Invalid input.');
  }
  return {
    hexstring,
    wif
  };
}

const createPrivateKey = (): PrivateKey => {
  const numArray = randomArray(DEFAULT_BYTE_COUNT);
  const hexstring = numArray2hexString(numArray);
  return getFullPrivateKey(hexstring);
};

const generatePublicKey = (privateKey: string): PublicKey => {
  if (privateKey.length === WIF_LENGTH) {
    privateKey = wif2hexString(privateKey);
  }
  const privateKeyBuffer = Buffer.from(privateKey, 'hex');
  const keyPair = P256_CURVE.keyFromPrivate(privateKeyBuffer, 'hex');
  const pubPoint = keyPair.getPublic();
  const X = pubPoint.getX();
  const pub = pubPoint.encode('hex');

  const tail = parseInt(pub.substr(64 * 2, 2), 16);
  const index = (tail % 2 === 1) ? 1 : 0;
  const ret = {
    compressed: `${COMP_PUBLIC_KEY_PREFIXS[index]}${X.toString('hex')}`,
    uncompressed: `${pub}`
  };
  return ret;
};

export {
  getFullPrivateKey,
  createPrivateKey,
  generatePublicKey
};
