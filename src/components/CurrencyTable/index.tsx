import {
  BodyRow,
  Cell,
  HeadCell,
  Heading,
  NumericCell,
  StateMessage,
  Table,
  TableCard,
  TableHead,
  TableScroll,
  Title,
  UpdatedAt,
} from "./styles.ts";
import type { CurrencyRatesResponse } from "../../types.ts";

interface CurrencyTableProps {
  data?: CurrencyRatesResponse;
  isLoading: boolean;
  isError: boolean;
}

export const CurrencyTable = ({
  data,
  isLoading,
  isError,
}: CurrencyTableProps) => {
  if (isLoading) {
    return <StateMessage>Loading exchange rates...</StateMessage>;
  }

  if (isError || !data) {
    return <StateMessage>Failed to load exchange rates.</StateMessage>;
  }

  return (
    <TableCard>
      <Heading>
        <Title>Currency Rates</Title>
        <UpdatedAt>
          Updated:{" "}
          {data.updatedAt.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </UpdatedAt>
      </Heading>

      <TableScroll>
        <Table>
          <TableHead>
            <tr>
              <HeadCell>Country</HeadCell>
              <HeadCell>Currency</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell>Code</HeadCell>
              <HeadCell>Rate</HeadCell>
            </tr>
          </TableHead>
          <tbody>
            {data.rates.map((rate) => (
              <BodyRow key={rate.code}>
                <Cell>{rate.country}</Cell>
                <Cell>{rate.currency}</Cell>
                <NumericCell>{rate.amount}</NumericCell>
                <Cell>{rate.code}</Cell>
                <NumericCell>{rate.rate.toFixed(3)}</NumericCell>
              </BodyRow>
            ))}
          </tbody>
        </Table>
      </TableScroll>
    </TableCard>
  );
};
