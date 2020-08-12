import _ from 'lodash';
import config from '../config';
const { SAMPLE_PRIVATE_KEY, SAMPLE_PUBLIC_KEY } = config;
import { getPublicKeyFromPrivateKey, getFullPrivateKey,
  getFullPublicKey } from '../../src/neo-core/key';

describe('Test Suite for Pub/Pvt Key Operations: ', () => {
  const privateKey = SAMPLE_PRIVATE_KEY;
  const publicKey = SAMPLE_PUBLIC_KEY;
  const fullPrivateKeyPick = ['hexstring', 'wif'];

  test('Generate with hexstring: ', () => {
    const result = getFullPrivateKey(_.get(privateKey, 'hexstring'));
    expect(result).toEqual(_.pick(privateKey, fullPrivateKeyPick));
  });

  test('Generate with Wif: ', () => {
    const result = getFullPrivateKey(_.get(privateKey, 'wif'));
    expect(result).toEqual(_.pick(privateKey, fullPrivateKeyPick));
  });

  test('Generate PublicKey from HexString: ', () => {
    const input = _.get(privateKey, 'hexstring');
    const result = getPublicKeyFromPrivateKey(input);
    expect(result).toEqual(publicKey);
  });

  test('Generate PublicKey from WIF: ', () => {
    const input = _.get(privateKey, 'wif');
    const result = getPublicKeyFromPrivateKey(input);
    expect(result).toEqual(publicKey);
  });

  test('Get Full PublickKey from Uncompressed PubKey: ', () => {
    const input = _.get(publicKey, 'uncompressed');
    const result = getFullPublicKey(input);
    expect(result).toEqual(publicKey);
  });

  test('Get Full PublickKey from Compressed PubKey: ', () => {
    const input = _.get(publicKey, 'compressed');
    const result = getFullPublicKey(input);
    expect(result).toEqual(publicKey);
  });
});
