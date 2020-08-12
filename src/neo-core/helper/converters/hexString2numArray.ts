import isHexString from '../isHexString';

const hexString2numArray = (hexString: string): number[] => {
  if (!isHexString(hexString)) {
    throw new Error('Failed to convert hexString to numArray: Invalid hexString.');
  }

  return hexString.trim().match(/..?/g).map((i: string) => {
    return parseInt(i, 16)
  });
};

export default hexString2numArray;
