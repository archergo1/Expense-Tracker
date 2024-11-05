import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </>
  );
}

export default App;
