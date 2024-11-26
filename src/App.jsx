import { useState } from "react";
import "./App.css";
// import LoginForm from "./LoginForm";
// import Counter from "./counter";
// import SubCounter from "./subCounter";
import Calculator from "./Calculator";

function App() {
  const [result, setResult] = useState("0.00");
  return (
    <>
      <div>
        <Calculator result={result} setResult={setResult} />
      </div>
    </>
  );
}

export default App;
