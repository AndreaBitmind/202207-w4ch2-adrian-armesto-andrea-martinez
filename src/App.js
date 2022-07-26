import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import wordList from "./components/utilities/wordList";

function App() {
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  const letters = randomWord
    .normalize("NFD")
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
    .normalize()
    .split("");

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters />
      </div>
    </>
  );
}

export default App;
