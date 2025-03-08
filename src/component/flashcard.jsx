import React from "react";
import { useState } from "react";


const Flashcard = ({ question, answer }) => {
    const [flipped, setFlipped] = useState(false);
    const handleClick = () => setFlipped(!flipped);

    return (
        <div className="flashcard-container" onClick={handleClick}>
            <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
                <div className="flashcard-front">
                    {question}
                </div>
                <div className="flashcard-back" style={{ whiteSpace: 'pre-line' }}>
                    {answer}
                </div>
            </div>
        </div>
    )
}


export default Flashcard;