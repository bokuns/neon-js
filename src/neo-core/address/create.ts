import _ from 'lodash';
import bs58check from '../helper/crypto/bs58check';
import getCheckSignScript from '../helper/crypto/getCheckSignScript';
import hash160 from '../helper/crypto/hash160';
import { getFullPublicKey } from '../key';
import { Address } from '../types/address';
import config from '../config';
import getCheckMultiSigScript from '../helper/crypto/getCheckMultiSigScript';
import { reverseHex } from '../helper/converters';
import isLE from '../helper/isLE';

const VERSION_HEX = _.get(config, 'ADDRESS.VERSION_HEX');

const getAddressFromScriptHash = (scriptHash: string) => {
  const fullScriptHash = isLE() ? `${VERSION_HEX}${scriptHash}` : `${VERSION_HEX}${reverseHex(scriptHash)}`;
  return bs58check(fullScriptHash);
};

export const getAddressFromPublicKey = (pubKey: string): Address => {
  if (typeof pubKey !== 'string') {
    throw new Error('Fail to generate address from PublicKey: Invalid Input, expect String.');
  }
  const compKey = _.get(getFullPublicKey(pubKey), 'compressed');

  const checksignScript = getCheckSignScript(compKey);
  const scriptHash = hash160(checksignScript);
  const address = getAddressFromScriptHash(scriptHash);

  return {
    address: address,
    checksignScript: checksignScript
  };
};

export const getAddressFromMultiplePublicKeys = (pubKeys: string[], m: number): Address => {
  const compPubKeys = pubKeys.map(key =>
    _.get(getFullPublicKey(key), 'compressed', null)).filter(k => k);
  const checksignScript = getCheckMultiSigScript(compPubKeys, m);

  const scriptHash = `${VERSION_HEX}${hash160(checksignScript)}`;
  const scriptHashBuffer = Buffer.from(scriptHash, 'hex');
  const address = bs58check(scriptHash);
  return {
    address: address,
    checksignScript: checksignScript
  };
}
