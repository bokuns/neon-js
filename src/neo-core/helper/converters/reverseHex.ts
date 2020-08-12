const reverseHex = (hex: string): string => {
  if (!hex) return;
  return hex.match(/..?/g).reduce((accu: string, curr: string): string => {
    return curr + accu;
  }, '');

};

export default reverseHex;
