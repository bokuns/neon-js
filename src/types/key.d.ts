export interface PrivateKey {
  hexstring: string;
  wif: string;
}

export interface PublicKey {
  compressed: string;
  uncompressed: string;
}
