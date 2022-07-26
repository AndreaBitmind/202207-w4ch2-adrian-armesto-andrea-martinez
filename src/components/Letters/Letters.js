import "./Letters.css";

const Letters = (alphabetContainer) => {
  const alphabet = alphabetContainer.alphabet;

  return (
    <ul className="letters">
      {alphabet.map((letter) => (
        <li className="letter" key={letter}>
          <a href={letter.toLowerCase()}> {letter} </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
