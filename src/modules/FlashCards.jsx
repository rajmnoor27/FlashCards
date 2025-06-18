import React, { useState } from 'react';
import '../modules.css/FlashCards.css';

const FlashCards = () => {
    const [cards, setCards] = useState([
        // Sample card format
        // { id: 1, question: "Sample Question", answer: "Sample Answer" }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        }
        else {
            setCurrentIndex(0); // Loop back to the first cards
            setIsFlipped(false);
        }
    };

    return (
        <div className="flashcards-container">
            {cards.length > 0 ? (
                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                    <div className="card-content">
                        <div className="front">
                            {cards[currentIndex]?.question}
                        </div>
                        <div className="back">
                            {cards[currentIndex]?.answer}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-cards">No flashcards available</div>
            )}
            
            <div className="controls">
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === cards.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default FlashCards;