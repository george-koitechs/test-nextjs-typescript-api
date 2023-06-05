function formatPrice(price?: number) {
  if (!price) {
    return "---";
  }

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  return formatter.format(Number(price));
}

function formatBigNumber(number: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);

  let formattedNumber = (number / Math.pow(1000, suffixIndex)).toFixed(2);
  formattedNumber = formattedNumber.endsWith(".00") ? formattedNumber.slice(0, -3) : formattedNumber;

  return "$" + formattedNumber + suffixes[suffixIndex];
}

export const utils = { formatPrice, formatBigNumber };
