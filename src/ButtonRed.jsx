const ButtonRed = (props) => {
  const btn = props.btn;
  const display = props.display;
  return (
    <>
      <button type="button" className="button red" onClick={display}>
        {btn}
      </button>
    </>
  );
};

export default ButtonRed;
