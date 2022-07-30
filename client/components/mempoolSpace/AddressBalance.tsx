import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MempoolSpaceContext from "../../contexts/MempoolSpace";

type Stats = {
  funded_txo_count: number;
  funded_txo_sum: number;
  spent_txo_count: number;
  spent_txo_sum: number;
  tx_count: number;
};

type GetAddress = {
  address: string;
  chain_stats: Stats;
  mempool_stats: Stats;
};

export default function AddressBalance({ address }) {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { url } = useContext(MempoolSpaceContext);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<GetAddress>(
          `${url}api/address/${address}`
        );
        setBalance(
          (response.data.mempool_stats.funded_txo_sum +
            response.data.chain_stats.funded_txo_sum -
            response.data.mempool_stats.spent_txo_sum -
            response.data.chain_stats.spent_txo_sum) /
            1e8
        );
      } catch (error) {
        console.log("Error getting balance");
      }
      setIsLoading(false);
    };

    getTransactions();
  }, [url, address]);

  return (
    <>
      {isLoading && "Loading..."}
      {!isLoading && `${balance} BTC`}
    </>
  );
}
