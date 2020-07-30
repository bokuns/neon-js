import _ from 'lodash';

import { Scrypt } from '../../types/wallet';

const DEFAULT_SCRYPT: Scrypt = {
  n: 16384,
  r: 8,
  p: 8
};

export const generateScrypt = (input?: Partial<Scrypt>): Scrypt => {
  return {
    ...DEFAULT_SCRYPT,
    ..._.pickBy(input, _.isNumber)
  };
};
