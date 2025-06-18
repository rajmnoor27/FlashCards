import React, { useState } from 'react';
import './App.css';
import './modules.css/FlashCards.css';

function App() {
  const [cards] = useState([
    { id: 1, question: "What is the first pillar of Islam?", answer: "Shahada (Faith)" },
    { id: 2, question: "What is the second pillar of Islam?", answer: "Salah (Prayer)" },
    { id: 3, question: "What is the third pillar of Islam?", answer: "Zakat (Charity)" },
    { id: 4, question: "What is the fourth pillar of Islam?", answer: "Sawm (Fasting)" },
    { id: 5, question: "What is the fifth pillar of Islam?", answer: "Hajj (Pilgrimage)" },
    { id: 6, question: "What is the holy book of Islam?", answer: "The Quran" },
    { id: 7, question: "Who is the last prophet in Islam?", answer: "Prophet Muhammad (PBUH)" },
    { id: 8, question: "What is the direction Muslims face during prayer?", answer: "Qibla (towards Kaaba in Mecca)" },
    { id: 9, question: "What is the night of power in Ramadan called?", answer: "Laylat al-Qadr" },
    { id: 10, question: "What does 'Islam' mean?", answer: "Submission to the will of Allah" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false); // Flip back to the front first
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentIndex(randomIndex); // Update the index after the flip animation
    }, 600); // Match the CSS transition duration (0.6s)
  };

  return (
    <div className="flashcards-container">
      <h1>Muslim Flash Cards</h1>
      {cards.length > 0 ? (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="card-content">
            <div className="front">
              {cards[currentIndex].question}
            </div>
            <div className="back">
              {cards[currentIndex].answer}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-cards">No flashcards available</div>
      )}
      <div className="controls">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
