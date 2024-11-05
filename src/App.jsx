import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </>
  );
}

export default App;
