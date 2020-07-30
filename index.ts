import * as _ from 'lodash';
import { createAccount } from './src/neo-core/account';
import { generatePrivateKey, createPrivateKey } from './src/neo-core/helper/crypto/key';

const keys = [];
for (let i = 0; i < 5; i++) {
  keys.push(createPrivateKey());
}
const newKeys = keys.map(key => _.pick(key, ['hexstring', 'wif']));
console.log(newKeys);

export default {
  createAccount,
  generatePrivateKey
};
