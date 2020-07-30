import config from '../config';

const { HEX_STRING_LENGTH } = config;
const hexRegex = /^([0-9A-Fa-f])*$/;

const isHexString = (hexString: string): boolean => {
  hexString = hexString.trim();
  try {
    return hexRegex.test(hexString) && hexString.length === HEX_STRING_LENGTH;
  } catch {
    return false;
  }
};

export default isHexString;
