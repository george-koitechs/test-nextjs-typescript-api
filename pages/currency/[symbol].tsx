import Head from "next/head";
import React, { useMemo } from "react";
import { useGetCoins } from "@/api/queryHooks/useCoinsController";
import Link from "next/link";
import { utils } from "@/utils";
import { useParam } from "@/hooks/useParam";

const Symbol: React.FC = () => {
  const { param: symbol } = useParam("symbol");
  const { data, isLoading } = useGetCoins([{ vsCurrency: "usd", page: 1, perPage: 45 }, {}]);

  const coin = useMemo(() => data?.find((el) => el.symbol === symbol), [data, symbol]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (!coin) {
    return <div className="text-center">Empty result</div>;
  }

  return (
    <>
      <Head>
        <title>{coin.symbol.toUpperCase()}/USD | CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          <div className="">
            <h1 className="text-5xl font-semibold mb-10 text-center">{coin.name}</h1>
            <div className="max-w-2xl mx-auto">
              <ul className="list-disc pl-5">
                <li className="mt-2">Current Price: {utils.formatPrice(coin.current_price)}</li>
                <li className="mt-2">All time high price: {utils.formatPrice(coin.ath)}</li>
                <li className="mt-2">Market Cap: {utils.formatBigNumber(coin.market_cap)}</li>
                <li className="mt-2">Market Cap Rank: {coin.market_cap_rank}</li>
              </ul>
              <Link
                href="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block max-w-fit mt-8"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Symbol;
