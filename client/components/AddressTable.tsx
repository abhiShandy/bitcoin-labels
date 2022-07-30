import React, { useContext } from "react";
import Address from "./Address";
import AddressBalance from "./mempoolSpace/AddressBalance";
import MempoolSpaceContext from "../contexts/MempoolSpace";

export default function AddressTable({
  addressList,
}: {
  addressList: string[];
}) {
  const { enabled } = useContext(MempoolSpaceContext);

  if (addressList.length === 0) return <></>;

  return (
    <div className="mt-4">
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 text-sm font-semibold text-gray-900">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left sm:pl-6">
                      Depth
                    </th>
                    <th className="py-3.5 pl-4 pr-3 text-left">Address</th>
                    {enabled && (
                      <th className="py-3.5 pl-4 pr-3 text-right">Balance</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {addressList.map((address, index) => (
                    <tr key={address}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {index}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        <Address address={address} />
                      </td>
                      {enabled && (
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-right">
                          <AddressBalance address={address} />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
