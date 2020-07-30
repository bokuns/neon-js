const num2hex = (num: number): string => {
  let hex = num.toString(16).toUpperCase();
  if (hex.length % 2 > 0 ) hex = `0${hex}`;
  return `0x${hex}`.trim();
};

export default num2hex;
