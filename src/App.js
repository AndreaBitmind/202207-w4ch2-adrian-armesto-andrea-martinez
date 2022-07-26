import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import wordList from "./components/utilities/wordList";
import alphabet from "./utilities/alphabet";

function App() {
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  const letters = randomWord
    .normalize("NFD")
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
    .normalize()
    .split("");

  const actionOnclickLetter = (letter) => {
    return;
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
              actionOnclick={() => actionOnclickLetter(letter)}
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
