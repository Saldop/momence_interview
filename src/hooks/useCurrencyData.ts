import { useQuery } from "@tanstack/react-query";
import type { CurrencyRatesResponse } from "../types.ts";

const parseCurrencyRates = (
  currencyResponse: string,
): CurrencyRatesResponse => {
  const lines = currencyResponse
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 3) {
    throw new Error("Invalid currency rates response");
  }

  const [dateLine, , ...rateLines] = lines;
  const [rawUpdatedAt] = dateLine.split(" #");
  const updatedAt = new Date(rawUpdatedAt);

  if (Number.isNaN(updatedAt.getTime())) {
    throw new Error("Invalid currency rates date");
  }

  const rates = rateLines.map((line) => {
    const [country, currency, amount, code, rate] = line.split("|");

    if (!country || !currency || !amount || !code || !rate) {
      throw new Error("Invalid currency rate row");
    }

    return {
      country,
      currency,
      amount: Number(amount),
      code,
      rate: Number(rate),
    };
  });

  return {
    updatedAt,
    rates,
  };
};

const fetchCurrencyRates = async (): Promise<CurrencyRatesResponse> => {
  const response = await fetch("/api/cnb");

  if (!response.ok) {
    throw new Error("Failed to fetch currency rates");
  }

  return parseCurrencyRates(await response.text());
};

export const useCurrencyData = () =>
  useQuery<CurrencyRatesResponse>({
    queryKey: ["currency-rates"],
    queryFn: fetchCurrencyRates,
  });
