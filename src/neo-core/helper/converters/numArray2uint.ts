const numArray2uint = (numArray: number[]): number => {
/*
  let multi = 1;
	let ret = 0;
	for (let i = 0; i < 4; i++) {
		ret += numArray[i] * multi;
		multi *= 256;
  }
  return ret;
*/

  const limit = 4;
  return numArray.reduce((accu, curr, index) => {
    if (index >= limit) return accu;
    return (accu + (curr << (index * 8 || 1)) >>> 0);
  });
};

export default numArray2uint;
