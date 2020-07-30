import * as _ from 'lodash';
import * as path from 'path';

import { createAccount } from '../account';
import { generateScrypt } from '../helper/crypto/scrypt';

import { Wallet, WalletInput } from '../types/wallet';


const DEFAULT_VERSION = '3.0';

export const createWallet = (input: Partial<WalletInput>): Wallet => {
  const { file, password } = input;
  const scrypt = generateScrypt(input.scrypt);
  const account = createAccount();
  const wallet: Wallet = {
    name: input.name || null,
    version: input.version || DEFAULT_VERSION,
    scrypt: scrypt,
    accounts: [

    ],
    extra: null
  };


  return wallet;
}
