import bs58check from 'bs58check';
import config from '../../config'

const { WIF_LENGTH, WIF_PREFIX, WIF_SUFFIX } = config;

const wif2hexString = (wif: string): string => {
  if (!wif || wif.length !== WIF_LENGTH) {
    throw new Error(`Invalid WIF: '${wif}'.`);
  }
  const decoded = Buffer.from(bs58check.decode(wif)).toString('hex');
  return decoded.substring(WIF_PREFIX.length,
    decoded.length - WIF_SUFFIX.length);
};

export default wif2hexString;
