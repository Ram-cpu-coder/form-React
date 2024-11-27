const ButtonYellow = (props) => {
  const btn = props.btn;
  const display = props.display;
  return (
    <>
      <button type="button" className="button yellow" onClick={display}>
        {btn}
      </button>
    </>
  );
};

export default ButtonYellow;
