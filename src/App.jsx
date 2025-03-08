import React from 'react';
import './App.css';
import { useState } from 'react';
import Flashcard from './component/flashcard';
import flashcardData1 from './flashcardData1.js';
import flashcardData2 from './flashcardData2.js'
import FlashcardList from './component/flashcardList';
import FillBlankView from './component/FillBlankView';

const App = () => {

  const [current, setCurrent] = useState(Math.floor(Math.random() * flashcardData1.length));
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState("flashcards");
  const currentCard = flashcardData1[current];

  const handleNext = () => {
    let randomIndex = Math.floor(Math.random() * flashcardData1.length);
    while (randomIndex === current && flashcardData1.length > 1) {
      randomIndex = Math.floor(Math.random() * flashcardData1.length)
    }
    setHistory(prevHistory => [...prevHistory, current]);
    setCurrent(randomIndex);
  }

  const handlePrevious = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];

    setHistory(prevHistory => prevHistory.slice(0, -1));
    setCurrent(prev);
  }


  return (
    <div className="App">
      <div className='container'>
        <div className="header">
          <h1>Personal Finance Management 💳💸💚</h1>
          <nav className='navbar'>
            <div className='modes'>
              <button className="navbuttons" onClick={() => setMode("flashcards")}>Flashcards</button>
              <button className="navbuttons" onClick={() => setMode("FillInBlank")}>Fill the Blank</button>
            </div>
          </nav>
          <h2>Test or learn some finance knowledge!</h2>
          {mode === "flashcards" ? (<>
            <h2>Flashcards Mode</h2>
            <h3>Number of Flashcard Questions: {flashcardData1.length}</h3>
          </>) :
            (<>
              <h2>Fill in the Blank Mode</h2>
              <h3>Number of Fill in the Blank Questions: {flashcardData2.length}</h3> </>)}
        </div>

        <div className="flashcard-container">
          {mode === "flashcards" ? (<Flashcard question={currentCard.question} answer={currentCard.answer} />) :
            (<FillBlankView setMode={setMode} />)}
        </div>

        <div className='button-row'>
          {mode === "flashcards" && (<>
            <button className='button' onClick={handlePrevious}>←</button>
            <button className='button' onClick={handleNext}>→</button> </>
          )}
        </div>
      </div>

    </div>
  )
}


export default App;

