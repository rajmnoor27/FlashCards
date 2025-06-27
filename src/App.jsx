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
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = () => {
    checkAnswer();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setUserAnswer('');
    setIsCorrect(null);
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setUserAnswer('');
    setIsCorrect(null);
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const checkAnswer = () => {
    const correctAnswer = cards[currentIndex].answer.toLowerCase();
    const userGuess = userAnswer.toLowerCase();
    // Fuzzy matching - checks if user's answer contains key parts of correct answer
    const isMatch = correctAnswer.includes(userGuess) || userGuess.includes(correctAnswer);
    setIsCorrect(isMatch);
  };

  return (
    <div className="flashcards-container">
      <h1>Muslim Flash Cards</h1>
      {cards.length > 0 ? (
        <>
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-content">
              <div className="front">
                <div>{cards[currentIndex].question}</div>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="submit-button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
                {isCorrect !== null && (
                  <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Correct!' : '✗ Try again'}
                  </div>
                )}
              </div>
              <div className="back">
                {cards[currentIndex].answer}
              </div>
            </div>
          </div>
          <div className="controls">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      ) : (
        <div className="no-cards">No flashcards available</div>
      )}
    </div>
  );
}

export default App;
