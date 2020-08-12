export interface KeyPoint {
  X: string,
  Y: string
}

export interface PrivateKey {
  hexstring: string;
  wif: string;
}

export interface PublicKey {
  compressed: string;
  uncompressed: string;
}
