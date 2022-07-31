import BIP32Factory from "bip32";
import * as ecc from "tiny-secp256k1";
import * as bitcoin from "bitcoinjs-lib";
import xpubConverter from "./xpubConverter";

export default function publicKeyToAddressList(publicKey: string, depth = 10) {
  const xpub = xpubConverter(publicKey, "xpub");
  const bip32 = BIP32Factory(ecc);

  const addressList: string[] = [];
  for (let index = 0; index < depth; index++) {
    const { address } = bitcoin.payments.p2wpkh({
      pubkey: bip32.fromBase58(xpub).derive(0).derive(index).publicKey,
    });
    address && addressList.push(address);
  }
  return addressList;
}
