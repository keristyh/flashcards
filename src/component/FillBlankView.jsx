import React from "react";
import { useState } from "react";
import flashcardData2 from "../flashcardData2.js";
import "../App.css";


const FillBlankView = ({ setMode }) => {
    const [current, setCurrent] = useState(Math.floor(Math.random() * flashcardData2.length));
    const [history, setHistory] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");
    const currentCard = flashcardData2[current];

    const handleAnswer = () => {
        if (userInput.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
            setFeedback("Correct! Keep it up!")
        } else {
            setFeedback(currentCard.answer)
        }
    };

    const handleNext = () => {
        let randomIndex = Math.floor(Math.random() * flashcardData2.length);
        while (randomIndex === current && flashcardData2.length > 1) {
            randomIndex = Math.floor(Math.random() * flashcardData2.length)
        }
        setHistory(prevHistory => [...prevHistory, current]);
        setCurrent(randomIndex);
        setUserInput("");
        setFeedback("");
    }

    const handlePrevious = () => {
        if (history.length === 0) return;
        const prev = history[history.length - 1];

        setHistory(prevHistory => prevHistory.slice(0, -1));
        setCurrent(prev);
        setUserInput("");
        setFeedback("");
    }


    return (
        <div className="App">

            <div className="fillBlank-container">
                <p>{currentCard.question}</p>
                <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                <h4> If there are mutiple blanks use ";" to sepearte answers</h4>
                <button className="navbuttons" onClick={handleAnswer}>Check Answer</button>
                {feedback && <h3>{feedback}</h3>}
            </div>

            <div className='button-row'>
                <button className='button' onClick={handlePrevious}>←</button>
                <button className='button' onClick={handleNext}>→</button>
            </div>
        </div>
    )
}

export default FillBlankView;