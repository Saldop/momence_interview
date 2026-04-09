import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CurrencyConverter } from "./index.tsx";

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

describe("CurrencyConverter", () => {
  it("converts from CZK to the selected currency in real time", async () => {
    const user = userEvent.setup();

    render(
      <CurrencyConverter data={mockData} isLoading={false} isError={false} />,
    );

    await user.type(screen.getByRole("spinbutton"), "50");

    expect(screen.getByText("50.00 CZK = 3.45 AUD")).toBeInTheDocument();
  });

  it("switches the conversion direction when the arrow button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <CurrencyConverter data={mockData} isLoading={false} isError={false} />,
    );

    await user.selectOptions(screen.getByRole("combobox"), "EUR");
    await user.type(screen.getByRole("spinbutton"), "4");
    await user.click(
      screen.getByRole("button", {
        name: "Switch input amount to EUR",
      }),
    );

    expect(screen.getByText("4.00 EUR = 100.00 CZK")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Switch input amount to CZK" }))
      .toHaveTextContent("Amount in EUR");
  });

  it("renders state messages for loading and error states", () => {
    const { rerender } = render(
      <CurrencyConverter isLoading={true} isError={false} />,
    );

    expect(screen.getByText("Loading exchange rates...")).toBeInTheDocument();

    rerender(<CurrencyConverter isLoading={false} isError={true} />);

    expect(
      screen.getByText("Failed to load exchange rates."),
    ).toBeInTheDocument();
  });
});
