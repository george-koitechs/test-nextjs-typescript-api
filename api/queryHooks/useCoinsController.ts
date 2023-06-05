import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { AxiosError } from "axios";
import { axiosClient } from "@/api/axiosBaseService";
import { endpoints } from "@/api/url";

interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any;
  last_updated: string;
}

export function useGetCoins<TSelectData = ICoin[], TError = AxiosError>(
  options: [
    { vsCurrency: string; page: number; perPage: number },
    Omit<UseQueryOptions<void, TError, TSelectData>, "queryKey" | "queryFn"> | undefined
  ]
): UseQueryResult<TSelectData, TError> {
  const { vsCurrency, page, perPage } = options[0];
  return useQuery<void, TError, TSelectData>(
    ["GetCoins", vsCurrency, page, perPage],
    () => axiosClient.get(endpoints.coinsController.list(vsCurrency, page, perPage)),
    options[1]
  );
}
