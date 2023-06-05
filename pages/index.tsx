import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useGetCoins } from "@/api/queryHooks/useCoinsController";
import Link from "next/link";
import { utils } from "@/utils";

const Home: React.FC = () => {
  const { data, isLoading } = useGetCoins([{ vsCurrency: "usd", page: 1, perPage: 45 }, {}]);

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Market Pairs (USD)</h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* End hero unit */}
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : data?.length === 0 ? (
            <div className="text-center">Empty result</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              {data?.map((coin) => (
                <div key={coin.id} className="flex flex-col">
                  <div className="flex-1 p-4">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={200}
                      height={200}
                      className="object-cover object-center"
                    />
                    <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
                    <ul className="list-disc pl-5">
                      <li className="mt-2">Current Price: {utils.formatPrice(coin.current_price)}</li>
                      <li className="mt-2">24h High: {utils.formatPrice(coin.high_24h)}</li>
                      <li className="mt-2">24h Low: {utils.formatPrice(coin.low_24h)}</li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <Link
                      href={`/currency/${coin.symbol}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
