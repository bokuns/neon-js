import CryptoJS from 'crypto-js';

const sha256 = (input: string): string => {
  if (!input) return;
  const hash = CryptoJS.SHA256(input);
  return hash.toString(CryptoJS.enc.Hex);
};

export default sha256;
