import React from "react";
import Flashcard from "./flashcard";

const FlashcardList = ({ flashcardData }) => {
    return (
        <div className="card-list">
            {flashcardData.map(flashcard => {
                return <Flashcard question={flashcard.question} answer={flashcard.answer} />
            })}
        </div>
    )
}

export default FlashcardList;