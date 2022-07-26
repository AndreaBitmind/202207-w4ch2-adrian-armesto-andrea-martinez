import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import alphabet from "./utilities/alphabet";

function App() {
  const actionOnclickLetter = () => {
    console.log("letter");
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <ul className="letters">
          {alphabet.map((letter) => (
            <Letters
              actionOnclick={actionOnclickLetter}
              letter={letter}
              key={letter}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
