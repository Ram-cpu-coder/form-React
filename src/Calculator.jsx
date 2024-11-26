import CalculatorBody from "./CalculatorBody";
const Calculator = (props) => {
  const result = props.result;
  const setResult = props.setResult;
  return (
    <>
      <h1>Prank Calculator</h1>
      <div className="wrapper">
        <div className="input">{result}</div>
        <div className="button-wrapper">
          <CalculatorBody setResult={setResult} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
