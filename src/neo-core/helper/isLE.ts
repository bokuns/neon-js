const isLE = (): boolean => {
  const arrayBuffer = new ArrayBuffer(2);
  const uint8Array = new Uint8Array(arrayBuffer);
  const uint16array = new Uint16Array(arrayBuffer);
  uint8Array[0] = 0xAA; // set first byte
  uint8Array[1] = 0xBB; // set second byte
  if (uint16array[0] === 0xBBAA) return true;
  if (uint16array[0] === 0xAABB) return false;
  else throw new Error("Something crazy just happened.");
};

export default isLE;
