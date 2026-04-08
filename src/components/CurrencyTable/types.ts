interface CurrencyRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

export interface CurrencyRatesResponse {
  updatedAt: Date;
  rates: CurrencyRate[];
}
