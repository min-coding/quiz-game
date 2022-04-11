import React, { useEffect } from 'react'; 
import './App.css'; 
import Welcome from './components/Welcome'; 
import Questions from './components/Questions'; 
 
function App() { 
const [cards, setCards] = React.useState([]) 
const [show1, setShow1] = React.useState(true) 
const [score, setScore] = React.useState(0) 
const [isClicked, setIsClicked] = React.useState(false) 

function addScore(){ 
  setScore(prev=> prev+1) 
} 

function handleClick(){
  setIsClicked(prev=> !prev)
}

React.useEffect(()=>{ 
fetch("https://opentdb.com/api.php?amount=10&encode=url3986") 
.then(res=>res.json()) 
.then(data =>{ 
    
    // Arranged data into the format that can be easily access 
    const arrangedData = data.results.map((data,index)=>{ 

      
      // Concat all answers into one array
      let optionsArray = data.incorrect_answers.concat(data.correct_answer)
      
      // Random index to switch position of correct answer
      const arr = [];
      while (arr.length < optionsArray.length) {
        const r = Math.floor(Math.random() * optionsArray.length);
        if (arr.indexOf(r) === -1) {
          arr.push(r);
        }
      }
      
      // Reassign switched value to optionsArray & convert options to string
      optionsArray = arr.map(item=> decodeURIComponent(optionsArray[item]))
      
      // Convert encoded question to string to prevent bug
      data.question=decodeURIComponent(data.question)

      const options = [] 
      for(let i=0; i<optionsArray.length; i++){ 
        options.push( 
        { 
        key:Math.floor(Math.random()*9999), 
        value:optionsArray[i], 
        isClicked:false
        } 
        ) 
      } 
      return ( 
          {...data, 
          id:index, 
          allOptions: options 
          }  
        ) 
    }) 
    setCards
    ([ ...arrangedData]) 
  })} ,[])  

const quizzes = cards.map(card =>{ 
        return ( 
        <Questions  
        key={card.id} 
        question = {card.question} 
        allOptions = {card.allOptions} 
        correct_answer = {card.correct_answer} 
        addScore = {()=>addScore()} 
        handleClick = {()=>handleClick()} 
        /> 
          )
        } 
      ) 

// Toggle first page 

    function startQuiz() { 
    setShow1(prevShow => !prevShow) 
    } 

    function checkAnswer(){
    cards.map(card=>{
      card.allOptions.map(item => { 
            if(item.value === card.correct_answer){ 
            document.getElementById(item.key).classList.add('green')
            }
            if(item.isClicked && item.value!==card.correct_answer){
              document.getElementById(item.key).classList.add('red')
            }
          } 
        )
      })
      document.querySelector('.checkAnswer').style.display = "none";
      document.querySelector('.restartGame').style.display = "block";
    }

    function restartGame(){
      window.location.reload()
    }

    return ( 
    <main className='container background'> 
    {show1 &&  
    <Welcome  
    startQuiz={()=> startQuiz()}/> 
    } 

    {!show1 &&  
    <div class='container quiz'> 
    {quizzes}

    <div class='footer checkAnswer'>
    <button className='toggleBtn' onClick={checkAnswer}> Check answers </button>
    </div> 

    <div class='footer restartGame'>
      <h3>You score {score} /10 correct answers</h3>
      <button className='toggleBtn' onClick={restartGame}> Play again </button>
    </div>

    </div>
    }

    </main> 

    ); 

} 



export default App; 