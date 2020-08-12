import { createAccount } from './src/neo-core/account';
import { getFullPrivateKey, createPrivateKey } from './src/neo-core/key';
import { getAddressFromPublicKey,
  getAddressFromMultiplePublicKeys } from './src/neo-core/address';
import getCheckSignScript from './src/neo-core/helper/crypto/getCheckSignScript';
import * as converters from './src/neo-core/helper/converters';

const pubKey = '026ff03b949241ce1dadd43519e6960e0a85b41a69a05c328103aa2bce1594ca16';
// const checkSigScript = getCheckSignScript(pubKey);

const address = getAddressFromPublicKey(pubKey);
console.log(address);

export default {
  createAccount,
  createPrivateKey,
  getFullPrivateKey,
  ...converters
};
