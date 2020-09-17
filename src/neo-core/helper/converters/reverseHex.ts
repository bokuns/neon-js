const reverseHex = (hex: string): string => {
  if (!hex) return;

  const radix = '0x';
  let hasRadix = false;

  if (hex.trim().indexOf(radix) === 0) {
    hasRadix = true;
    hex = hex.substring(2);
  }

  const ret = hex.match(/..?/g).reverse().join('');
  return hasRadix ? `${radix}${ret}` : ret;
};

export default reverseHex;
