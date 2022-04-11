import React from 'react';
import Answer from './Answer';

export default function Quiz(props){
  /**
   * Map out each quiz question 
   */
  // const [click, setClick] = React.useState(false)
  
  const quizEle = props.cards.map(item =>{
    const {question,options,id,correct_answer} = item
    
  function selectAnswer(e){
    
      if(e.target.value === correct_answer){
        console.log('that is CORRECT')
      }
      else{
        console.log('that is WRONG')
      }
    
  }
  
  const allOptions = options.map(option => 
  <button value={option} onClick={(e)=>{selectAnswer(e)}}> {option} </button>
  )

  

  return(
    <div className='quizEle'>
    <h3> {question} </h3>
     {allOptions}
    </div>

  )
})

return(
<div> {quizEle} </div>
)
}

