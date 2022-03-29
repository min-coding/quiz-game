import React, { useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';

function App() {

const [cards, setCards] = React.useState([])
    
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=easy")
    .then(res=>res.json())
    .then(data =>{
      setCards(data.results.map(card => card ))
    })} ,[])

const [show, setShow] = React.useState(false)

function startQuiz() {
  setShow(prevShow => !prevShow)
}

function shit(){
  console.log('click clak')
}

  return (
    <main className='background container'>
     {!show && 
      <Welcome 
        startQuiz={()=> startQuiz()}/>
    }

     {show && 
      <Quiz 
        cards = {cards}
        // button = {()=> shit()}
     />
     }

    </main>
  );
}

export default App;

