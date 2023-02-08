import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Question(props) {
  return (
    <div className="quiz-container">
      <h3 className="question"> {props.question}</h3>
      <div className="option-container">
        {props.answers.map((ans) => {
          function checked() {
            if (props.checked) {
              if (ans === props.correct_answer) {
                return 'correct';
              } else if (
                props.selected === ans &&
                ans !== props.correct_answer
              ) {
                return 'incorrect';
              } else return '';
            }
          }
          return (
            /**
             * button key != props.id because
             * button key is unique for every button
             * props.id is unique for each question (question id)
             *
             * and if we want to have only 1 selected answer PER QUESTION
             *
             * we need to send question id and update 'selected' property
             */

            <button
              key={uuid()}
              className={`option ${
                props.selected === ans ? 'selected' : ''
              } ${checked()}`}
              onClick={() => props.selectAns(props.id, ans)}
            >
              {ans}
            </button>
          );
        })}
      </div>
    </div>
  );
}
