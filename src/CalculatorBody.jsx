import ButtonYellow from "./buttonYellow";
import ButtonRed from "./ButtonRed";

const CalculatorBody = ({ setResult }) => {
  const display = (e) => {
    const displayResult = e.target.innerText;

    // console.log(e.target.innerText);
    // console.log("clicked");

    setResult((prev) => {
      if (prev === "0.00") {
        return displayResult;
      }

      return prev + displayResult;
    });
  };
  return (
    <>
      <ButtonRed btn="AC" display={display} />

      <ButtonRed btn="C" />
      <ButtonYellow btn="%" />
      <ButtonYellow btn="/" />

      <ButtonYellow btn="7" />
      <ButtonYellow btn="8" />
      <ButtonYellow btn="9" />
      <ButtonYellow btn="*" />

      <ButtonYellow btn="4" />
      <ButtonYellow btn="5" />
      <ButtonYellow btn="6" />
      <ButtonYellow btn="-" />

      <ButtonYellow btn="1" />
      <ButtonYellow btn="2" />
      <ButtonYellow btn="3" />
      <ButtonYellow btn="+" />

      <ButtonYellow btn="0" />
      <ButtonYellow btn="." />
      <ButtonYellow btn="=" />
    </>
  );
};

export default CalculatorBody;
