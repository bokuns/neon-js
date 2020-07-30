import * as _ from 'lodash';
import config from '../../../config';
const { SAMPLE_PRIVATE_KEY } = config;
import { generatePrivateKey } from '../../../../src/neo-core/helper/crypto/privateKey';


describe('generatePrivateKey', () => {
  const key = SAMPLE_PRIVATE_KEY;

  it('Generate with ByteArray: ', () => {
    const result = generatePrivateKey(_.pick(key, 'byteArray'));
    expect(result.hexstring).toBe(key.hexstring);
    expect(result.wif).toBe(key.wif);
  });

  it('Generate with hexstring: ', () => {
    const result = generatePrivateKey(_.pick(key, 'hexstring'));
    expect(result.hexstring).toBe(key.hexstring);
    expect(result.wif).toBe(key.wif);
  });

  it('Generate with Wif: ', () => {
    const result = generatePrivateKey(_.pick(key, 'wif'));
    expect(result.hexstring).toBe(key.hexstring);
    expect(result.wif).toBe(key.wif);
  });

})
