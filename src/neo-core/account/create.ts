import * as _ from 'lodash';
import { createPrivateKey } from '../helper/crypto/privateKey';

import { Account } from '../types/account';

export const createAccount = (input?: Partial<Account>): void => {
  const privateKey = createPrivateKey();


}
