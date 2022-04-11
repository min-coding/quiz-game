import React from 'react';

export default function Welcome(props){  
  return(
    <>
      <div className='welcome container'>
        <h1> Quizzical</h1>
        <p>Welcome to Min's first quizzical project</p>
      <button className='toggleBtn' onClick={props.startQuiz}> Start Quiz </button>
      </div>
    </>
  )
};