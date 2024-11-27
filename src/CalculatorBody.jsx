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

      <ButtonRed btn="C" display={display} />
      <ButtonYellow btn="%" display={display} />
      <ButtonYellow btn="/" display={display} />

      <ButtonYellow btn="7" display={display} />
      <ButtonYellow btn="8" display={display} />
      <ButtonYellow btn="9" display={display} />
      <ButtonYellow btn="*" display={display} />

      <ButtonYellow btn="4" display={display} />
      <ButtonYellow btn="5" display={display} />
      <ButtonYellow btn="6" display={display} />
      <ButtonYellow btn="-" display={display} />

      <ButtonYellow btn="1" display={display} />
      <ButtonYellow btn="2" display={display} />
      <ButtonYellow btn="3" display={display} />
      <ButtonYellow btn="+" display={display} />

      <ButtonYellow btn="0" display={display} />
      <ButtonYellow btn="." display={display} />
      <ButtonYellow btn="=" display={display} />
    </>
  );
};

export default CalculatorBody;
