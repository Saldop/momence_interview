import { useState } from "react";
import type { CurrencyRatesResponse } from "../../types.ts";
import {
  ConverterCard,
  Field,
  FieldLabel,
  Fields,
  Heading,
  Hint,
  Input,
  LabelSwitch,
  Result,
  Select,
  StateMessage,
  SwitchIcon,
  Title,
} from "./styles.ts";

interface CurrencyConverterProps {
  data?: CurrencyRatesResponse;
  isLoading: boolean;
  isError: boolean;
}

type ConversionDirection = "from-czk" | "to-czk";

const getResultString = (
  amount: string,
  selectedRate: CurrencyRatesResponse["rates"][0],
  conversionDirection: ConversionDirection,
) => {
  if (!amount) {
    return "Enter an amount to see the conversion.";
  }
  const parsedAmount = Number(amount);
  const convertedAmount =
    conversionDirection === "from-czk"
      ? (parsedAmount / selectedRate.rate) * selectedRate.amount
      : (parsedAmount / selectedRate.amount) * selectedRate.rate;
  const resultCurrencyCode =
    conversionDirection === "from-czk" ? selectedRate.code : "CZK";
  return `${parsedAmount.toFixed(2)} ${
    conversionDirection === "from-czk" ? "CZK" : selectedRate.code
  } = ${convertedAmount.toFixed(2)} ${resultCurrencyCode}`;
};

export const CurrencyConverter = ({
  data,
  isLoading,
  isError,
}: CurrencyConverterProps) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState("");
  const [conversionDirection, setConversionDirection] =
    useState<ConversionDirection>("from-czk");

  if (isLoading) {
    return <StateMessage>Loading exchange rates...</StateMessage>;
  }

  if (isError || !data?.rates?.length) {
    return <StateMessage>Failed to load exchange rates.</StateMessage>;
  }

  const selectedRate =
    data.rates.find((rate) => rate.code === selectedCurrencyCode) ??
    data.rates[0];
  const selectValue = selectedRate?.code ?? "";

  const inputCurrencyLabel =
    conversionDirection === "from-czk"
      ? "Amount in CZK"
      : `Amount in ${selectedRate?.code ?? "selected currency"}`;

  return (
    <ConverterCard>
      <Heading>
        <Title>Currency Converter</Title>
        <Hint>
          Switch the input direction and see the converted value instantly.
        </Hint>
      </Heading>

      <Fields>
        <Field>
          <LabelSwitch
            type="button"
            onClick={() =>
              setConversionDirection((currentDirection) =>
                currentDirection === "from-czk" ? "to-czk" : "from-czk",
              )
            }
          >
            <FieldLabel as="span">{inputCurrencyLabel}</FieldLabel>
            <SwitchIcon>↔</SwitchIcon>
          </LabelSwitch>
          <Input
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            placeholder={`Enter ${conversionDirection === "from-czk" ? "amount in CZK" : `amount in ${selectedRate?.code ?? "selected currency"}`}`}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel>Currency</FieldLabel>
          <Select
            value={selectValue}
            onChange={(event) => setSelectedCurrencyCode(event.target.value)}
          >
            {data.rates.map((rate) => (
              <option key={rate.code} value={rate.code}>
                {rate.code} ({rate.currency})
              </option>
            ))}
          </Select>
        </Field>
      </Fields>

      <Result>
        {getResultString(amount, selectedRate, conversionDirection)}
      </Result>
    </ConverterCard>
  );
};
