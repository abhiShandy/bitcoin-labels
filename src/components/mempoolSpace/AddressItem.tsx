import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MempoolSpaceContext from "../../contexts/MempoolSpace";
import Address from "../Address";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Label from "../Label";
import LabelFormModal from "../LabelFormModal";

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
  const [txCount, setTxCount] = useState(0);
  const [label, setLabel] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { url } = useContext(MempoolSpaceContext);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<GetAddress>(
          `${url}api/address/${address}`
        );
        setTxCount(
          response.data.chain_stats.tx_count +
            response.data.mempool_stats.tx_count
        );
        setBalance(
          response.data.mempool_stats.funded_txo_sum +
            response.data.chain_stats.funded_txo_sum -
            response.data.mempool_stats.spent_txo_sum -
            response.data.chain_stats.spent_txo_sum
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
      {!isLoading && (
        <div>
          <div className="flex">
            <Address address={address} className="w-3/6" />
            <div className="w-2/6 text-right">{balance} sats</div>
            <div className="w-1/6 pl-4 pt-1">
              <a
                className=""
                href={`${url}address/${address}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon className="h-4 text-blue-500" />
              </a>
            </div>
          </div>
          <div className="flex text-xs">
            <div className="w-4/6 flex my-1">
              {txCount > 0 && <Label label="used" color="red" />}
              {txCount === 0 && <Label label="unused" color="green" />}
              <Label label={label} color="indigo" />
              <LabelFormModal
                label={label}
                onSubmit={(label) => {
                  setLabel(label);
                }}
              />
            </div>
            <div className="w-1/6 text-right">{txCount} TX</div>
          </div>
        </div>
      )}
    </>
  );
}
