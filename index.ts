import { createAccount } from './src/neo-core/account';
import { generatePrivateKey } from './src/neo-core/helper/crypto/privateKey';

createAccount();

export default {
  createAccount,
  generatePrivateKey
};
