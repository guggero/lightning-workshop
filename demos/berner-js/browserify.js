module.exports = {
  ECPair: require('bitcoinjs-lib/src/ecpair'),
  ECSignature: require('bitcoinjs-lib/src/ecsignature'),

  address: require('bitcoinjs-lib/src/address'),
  bufferutils: require('bitcoinjs-lib/src/bufferutils'),
  crypto: require('bitcoinjs-lib/src/crypto'),
  ecurve: require('ecurve'),
  varuint: require('varuint-bitcoin'),
  BigInteger: require('bigi'),
  Buffer: require('safe-buffer').Buffer,
  fastRoot: require('merkle-lib/fastRoot'),
  bs58check: require('bs58check'),
  pbkdf2: require('pbkdf2'),
  sha3: require('js-sha3'),
  CryptoJS: require('crypto-js'),
  randomBytes: require('randombytes')
};

window.CryptoJS = module.exports.CryptoJS;
window.pbkdf2Sync = module.exports.pbkdf2.pbkdf2Sync;
window.ECPair = module.exports.ECPair;
window.ECSignature = module.exports.ECSignature;
window.Buffer = module.exports.Buffer;
window.sha256 = module.exports.crypto.sha256;
window.ripemd160 = module.exports.crypto.ripemd160;
window.randomBytes = module.exports.randomBytes;

