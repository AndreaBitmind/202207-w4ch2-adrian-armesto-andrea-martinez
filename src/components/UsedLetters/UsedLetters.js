import "./UsedLetters.css";

const UsedLetters = (props) => {
  const usedLetters = props.usedLetters;

  const usedListLetter = usedLetters.map((usedLetter) => (
    <li key={usedLetter}>{`${usedLetter} , `}</li>
  ));

  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">{usedListLetter}</ul>
    </section>
  );
};

export default UsedLetters;
