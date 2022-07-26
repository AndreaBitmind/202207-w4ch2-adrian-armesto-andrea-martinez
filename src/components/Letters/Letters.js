import "./Letters.css";

const Letters = (props) => {
  const letter = props.letter;
  const actionOnclick = props.actionOnclick;

  return (
    <li onClick={actionOnclick} className="letter" key={letter}>
      <a href={letter}> {letter} </a>
    </li>
  );
};

export default Letters;
