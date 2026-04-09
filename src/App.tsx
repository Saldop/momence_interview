import "./App.css";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { CurrencyTable } from "./components/CurrencyTable";
import { useCurrencyData } from "./hooks/useCurrencyData.ts";

function App() {
  const { data, isLoading, isError } = useCurrencyData();

  return (
    <>
      <section id="spacer"></section>

      <section id="center">
        <CurrencyConverter
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
        <CurrencyTable data={data} isLoading={isLoading} isError={isError} />
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
