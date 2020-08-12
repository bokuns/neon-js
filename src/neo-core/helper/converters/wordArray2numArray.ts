const wordArray2NumArray = (wordArray: any): number[] => {
  const len = wordArray.words.length;
  const u8_array = new Uint8Array(len << 2);
  let offset = 0;
  let word;

  for (let i = 0; i < len; i++) {
      word = wordArray.words[i];

      u8_array[offset++] = word >> 24;
      u8_array[offset++] = (word >> 16) & 0xff;
      u8_array[offset++] = (word >> 8) & 0xff;
      u8_array[offset++] = word & 0xff;
  }
  return Array.from(u8_array);
};

export default wordArray2NumArray;
