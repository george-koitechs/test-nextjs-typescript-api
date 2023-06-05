function formatPrice(price?: number) {
  if (!price) {
    return "---";
  }

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  return formatter.format(Number(price));
}

export const utils = { formatPrice };
