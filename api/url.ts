export const endpoints = {
  coinsController: {
    list: (vsCurrency: string, page: number, perPage: number) =>
      `/coins/markets?vs_currency=${vsCurrency}&page=${page}&per_page=${perPage}`,
  },
};
