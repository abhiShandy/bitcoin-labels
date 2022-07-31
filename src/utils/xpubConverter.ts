import bs58check from "bs58check";

const prefixes = new Map([
  ["xpub", "0488b21e"],
  ["ypub", "049d7cb2"],
  ["Ypub", "0295b43f"],
  ["zpub", "04b24746"],
  ["Zpub", "02aa7ed3"],
  ["tpub", "043587cf"],
  ["upub", "044a5262"],
  ["Upub", "024289ef"],
  ["vpub", "045f1cf6"],
  ["Vpub", "02575483"],
]);

export default function xpubConverter(xpub: string, targetFormat = "xpub") {
  if (!prefixes.has(targetFormat)) {
    return "Invalid target version";
  }

  xpub = xpub.trim();

  try {
    var data = bs58check.decode(xpub);
    data = data.slice(4);
    data = Buffer.concat([
      Buffer.from(prefixes.get(targetFormat) ?? "", "hex"),
      data,
    ]);
    return bs58check.encode(data);
  } catch (error) {
    throw new Error("Invalid extended public key");
  }
}
