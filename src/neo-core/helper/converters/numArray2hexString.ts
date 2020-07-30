const numArray2hexString = (input: number[]): string => {
  if (!Array.isArray(input)) {
    throw new Error(`ab2hexstring expects an number[]. Input was ${typeof input}.`);
  }

  return input.reduce((accu: string, curr: number): string => {
    let hex = curr.toString(16);
    if (hex.length < 2) hex = `0${hex}`;
    return accu + hex + '';
  }, '');
};

export default numArray2hexString;
