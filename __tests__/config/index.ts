const samplePrivateKey = {
  numArray: [
    199,  19,  77, 111, 216, 231,  61, 129,
    158, 130, 117,  92, 100, 201,  55, 136,
    216, 219,   9,  97, 146, 158,   2,  90,
     83,  54,  60,  76, 192,  42, 105,  98
  ],
  byteArray: ['0xc7', '0x13', '0x4d', '0x6f', '0xd8', '0xe7', '0x3d', '0x81', '0x9e', '0x82', '0x75',
    '0x5c', '0x64', '0xc9', '0x37', '0x88', '0xd8', '0xdb', '0x09', '0x61', '0x92', '0x9e',
    '0x02', '0x5a', '0x53', '0x36', '0x3c', '0x4c', '0xc0', '0x2a', '0x69', '0x62'],
  hexstring: 'c7134d6fd8e73d819e82755c64c93788d8db0961929e025a53363c4cc02a6962',
  wif: 'L3tgppXLgdaeqSGSFw1Go3skBiy8vQAM7YMXvTHsKQtE16PBncSU'
}

const samplePublicKey = {
  compressed: '035a928f201639204e06b4368b1a93365462a8ebbff0b8818151b74faab3a2b61a',
  uncompressed: '045a928f201639204e06b4368b1a93365462a8ebbff0b8818151b74faab3a2b61a35dfabcb79ac492a2a88588d2f2e73f045cd8af58059282e09d693dc340e113f'
}

const config = {
  SAMPLE_PRIVATE_KEY: samplePrivateKey,
  SAMPLE_PUBLIC_KEY: samplePublicKey
}

export default config;
