import isHexString from '../isHexString';

const hexString2byteArray = (hexString: string): string[] => {
  if (!isHexString(hexString.trim())) {
    throw new Error('Failed to convert hexString to byteArray: Invalid hexString.');
  }

  return hexString.match(/..?/g).map((i: string) => `0x${i}`);
};

export default hexString2byteArray;
