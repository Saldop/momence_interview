import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CurrencyTable } from "./index.tsx";

const mockData = {
  updatedAt: new Date("2026-04-09"),
  rates: [
    {
      country: "Australia",
      currency: "dollar",
      amount: 1,
      code: "AUD",
      rate: 14.5,
    },
    {
      country: "EMU",
      currency: "euro",
      amount: 1,
      code: "EUR",
      rate: 25,
    },
  ],
};

describe("CurrencyTable", () => {
  it("renders the fetched exchange rates", () => {
    render(<CurrencyTable data={mockData} isLoading={false} isError={false} />);

    expect(screen.getByText("Currency Rates")).toBeInTheDocument();
    expect(screen.getByText("Updated: 09 Apr 2026")).toBeInTheDocument();
    expect(screen.getByText("Australia")).toBeInTheDocument();
    expect(screen.getByText("EMU")).toBeInTheDocument();
    expect(screen.getByText("14.500")).toBeInTheDocument();
    expect(screen.getByText("25.000")).toBeInTheDocument();
  });

  it("renders state messages for loading and error states", () => {
    const { rerender } = render(
      <CurrencyTable isLoading={true} isError={false} />,
    );

    expect(screen.getByText("Loading exchange rates...")).toBeInTheDocument();

    rerender(<CurrencyTable isLoading={false} isError={true} />);

    expect(
      screen.getByText("Failed to load exchange rates."),
    ).toBeInTheDocument();
  });
});
