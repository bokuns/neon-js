const hexRegex = /^([0-9A-Fa-f])*$/;

const isHexString = (hexString: string): boolean => {
  try {
    hexString = hexString.trim();
    return hexRegex.test(hexString) && hexString.length % 2 === 0;
  } catch {
    return false;
  }
};

export default isHexString;
