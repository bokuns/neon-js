import { Account } from './account';

export interface Scrypt {
  n: number;
  r: number;
  p: number;
}

export interface Wallet {
  name: string | null;
  version: string;
  scrypt: Scrypt;
  accounts: Account[];
  extra: string | null
}

export interface WalletInput {
  name?: string;
  version?: string;
  scrypt?: Scrypt;
  file: string;
  password: string;
}
