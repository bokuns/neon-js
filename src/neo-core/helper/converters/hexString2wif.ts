import bs58check from 'bs58check';
import { Buffer } from 'buffer';
import config from '../../config'

const { HEX_STRING_LENGTH, WIF_PREFIX, WIF_SUFFIX } = config;

const hexString2wif = (hexString: string): string => {
  if (hexString.length !== HEX_STRING_LENGTH) {
    throw new Error(`Invalid hexString: '${hexString}'.`);
  }
  const fullHex = `${WIF_PREFIX}${hexString}${WIF_SUFFIX}`;

  const bytes = Buffer.from(fullHex, 'hex');
  return bs58check.encode(bytes);
};

export default hexString2wif;
