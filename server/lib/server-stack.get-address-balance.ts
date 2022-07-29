import mempool from "@mempool/mempool.js";

export const handler: AWSLambda.APIGatewayProxyHandler = async (event) => {
  console.log(event);

  const {
    bitcoin: { addresses },
  } = mempool({
    hostname: "mempool.space",
  });

  const address = event.pathParameters?.address;

  if (!address)
    return {
      statusCode: 400,
      body: "",
      headers: { "Access-Control-Allow-Origin": "*" },
    };

  const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });

  let balance = 0;
  for (let index = 0; index < addressTxsUtxo.length; index++) {
    const utxo = addressTxsUtxo[index];
    balance += utxo.value;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ balance }),
    headers: { "Access-Control-Allow-Origin": "*" },
  };
};
