import { randomArray } from 'secure-random';
import { numArray2hexString, hexString2wif, wif2hexString } from '../helper/converters';
import config from '../config';
import { KeyPoint, PrivateKey, PublicKey } from '../types/key';

const { DEFAULT_BYTE_COUNT, COMP_PUBLIC_KEY_PREFIXS, COMP_PUBLIC_KEY_LENGTH,
  HEX_STRING_LENGTH, WIF_LENGTH, P256_CURVE } = config;

const getFullPrivateKey = (pvtKey: string): PrivateKey => {
  let hexstring = '';
  let wif = '';

  switch(pvtKey.length) {
    case HEX_STRING_LENGTH:
      hexstring = pvtKey;
      wif = hexString2wif(hexstring);
      break;
    case WIF_LENGTH:
      wif = pvtKey;
      hexstring = wif2hexString(wif);
      break;
    default:
      throw new Error('Unable to generate PrivateKey: Invalid input.');
  }
  return {
    hexstring,
    wif
  };
};

const createPrivateKey = (): PrivateKey => {
  const numArray = randomArray(DEFAULT_BYTE_COUNT);
  const hexstring = numArray2hexString(numArray);
  return getFullPrivateKey(hexstring);
};

const getPubKeyFromKeyPair = (keyPair): PublicKey => {
  const pubPoint = keyPair.getPublic();
  const X = pubPoint.getX();
  const Y = pubPoint.getY();
  const bigIntY = BigInt(`0x${Y}`);
  const prefixIndex = parseInt(bigIntY.toString(10).slice(-1)) % 2;

  const ret = {
    compressed: `${COMP_PUBLIC_KEY_PREFIXS[prefixIndex]}${X.toString('hex')}`,
    uncompressed: pubPoint.encode('hex')
  };
  return ret;
};

const getPublicKeyFromPrivateKey = (pvtKey: string): PublicKey => {
  if (pvtKey.length === WIF_LENGTH) {
    pvtKey = wif2hexString(pvtKey);
  }
  const pvtKeyBuffer = Buffer.from(pvtKey, 'hex');
  const keyPair = P256_CURVE.keyFromPrivate(pvtKeyBuffer, 'hex');
  return getPubKeyFromKeyPair(keyPair);
};

const getFullPublicKey = (pubKey: string): PublicKey => {
  const pubKeyBuffer = Buffer.from(pubKey, 'hex');
  const keyPair = P256_CURVE.keyFromPublic(pubKeyBuffer, 'hex');
  return getPubKeyFromKeyPair(keyPair);
};

const getKeyPointFromPublicKey = (pubKey: string): KeyPoint => {
  const publicKey = getFullPublicKey(pubKey);
  const compPubKey = publicKey.compressed;
  const pubKeyBuffer = Buffer.from(compPubKey, 'hex');
  const keyPair = P256_CURVE.keyFromPublic(pubKeyBuffer, 'hex');
  const pubPoint = keyPair.getPublic();
  const X = pubPoint.getX().toString('hex');
  const Y = pubPoint.getY().toString('hex');
  return {
    X: X,
    Y: Y
  };
};

export {
  getFullPrivateKey,
  createPrivateKey,
  getPublicKeyFromPrivateKey,
  getFullPublicKey,
  getKeyPointFromPublicKey
};
