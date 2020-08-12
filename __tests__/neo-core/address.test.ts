import _ from 'lodash';
import config from '../config';
const { SAMPLE_ADDRESS, SAMPLE_MULTI_ADDRESS } = config;
import { getAddressFromPublicKey, getAddressFromMultiplePublicKeys } from '../../src/neo-core/address/create';

describe('Test Suite for Address Operations: ', () => {
  const sampleAddress = SAMPLE_ADDRESS;
  const sampleMultiAddress = SAMPLE_MULTI_ADDRESS;
  test('Generate Address with PublicKey: ', () => {
    const result = getAddressFromPublicKey(_.get(sampleAddress, 'publicKey'));
    expect(result.checksignScript).toEqual(sampleAddress.checksignScript);
    expect(result.address).toEqual(sampleAddress.address);
  });

  test('Generate Address with Multiple PublicKeys (MultiSig): ', () => {
    const result = getAddressFromMultiplePublicKeys(sampleMultiAddress.publicKeys, 1);
    // expect(result.checksignScript).toEqual(sampleMultiAddress.checksignScript);
    // expect(result.address).toEqual(sampleMultiAddress.address);
  });
});
