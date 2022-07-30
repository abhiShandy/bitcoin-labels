import mempool from "@mempool/mempool.js";
import { Tx } from "@mempool/mempool.js/lib/interfaces/bitcoin/transactions";
import { MempoolReturn } from "@mempool/mempool.js/lib/interfaces/index";

export const handler: AWSLambda.APIGatewayProxyHandler = async (event) => {
  if (!event.body)
    return {
      statusCode: 400,
      body: "",
      headers: { "Access-Control-Allow-Origin": "*" },
    };

  const addressList = JSON.parse(event.body);

  const {
    bitcoin: { addresses },
  } = mempool({
    hostname: "mempool.space",
  }) as MempoolReturn;

  let allTxs: Tx[] = [];
  for (let index = 0; index < addressList.length; index++) {
    const address = addressList[index];
    try {
      const txs = await addresses.getAddressTxs({ address });
      allTxs.push(...txs);
    } catch (error) {
      console.log(error);
      break;
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(allTxs),
    headers: { "Access-Control-Allow-Origin": "*" },
  };
};
