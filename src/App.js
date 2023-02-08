import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Welcome from './components/Welcome';
import Question from './components/Question';

function App() {
  const [cards, setCards] = useState([]);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  function randomOrder(arr) {
    const sorted = arr.sort(() => {
      return 0.5 - Math.random();
    });
    return sorted;
  }

  function selectAns(questionId, ans) {
    // update 'selected' answer, to render selected button
    setCards((cards) =>
      cards.map((card) => {
        return questionId === card.id
          ? {
              ...card,
              selected: ans,
            }
          : card;
      })
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=10&encode=url3986'
      );
      const data = await res.json();

      // arrange and decode data
      const arrangedData = data.results.map((card) => {
        const allAns = [...card.incorrect_answers, card.correct_answer];
        const allDecode = allAns.map((ans) => {
          return decodeURIComponent(ans);
        });

        return {
          question: decodeURIComponent(card.question),
          id: uuid(),
          answers: randomOrder(allDecode),
          correct_answer: decodeURIComponent(card.correct_answer),
          selected: null,
          checked: false,
        };
      });
      setCards(arrangedData);
    };
    fetchData().catch(console.error);
  }, []);

  const quizzes = cards.map((card) => {
    return (
      <Question
        key={card.id}
        id={card.id}
        question={card.question}
        answers={card.answers}
        correct_answer={card.correct_answer}
        selected={card.selected}
        checked={card.checked}
        selectAns={selectAns}
      ></Question>
    );
  });

  function startQuiz() {
    setStart(true);
  }

  function checkScore() {
    cards.forEach((card) => {
      card.checked = true;
      if (card.selected === card.correct_answer) setScore((prev) => prev + 1);
    });
    setEnd(true);
  }

  function restartGame() {
    window.location.reload();
  }
  return (
    <main className="container background">
      {!start && <Welcome startQuiz={() => startQuiz()} />}

      {start && (
        <div className="container quiz">
          {quizzes}

          <div className="footer">
            {!end && (
              <button className="toggleBtn" onClick={checkScore}>
                {' '}
                Check answers{' '}
              </button>
            )}
            {end && (
              <>
                <h3>You score {score} /10 correct answers</h3>
                <button className="toggleBtn" onClick={restartGame}>
                  {' '}
                  Play again{' '}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
