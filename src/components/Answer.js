import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';


export default function Answer(props){
  let id = 0
  let clicked = false
  const optionsEle = props.allAnswers.map(option=>{
    function checkClicked(id){
      clicked = !clicked
      if(clicked){
        document.getElementById(option).classList.add('clicked')
      }
      else{
        document.getElementById(option).classList.remove('clicked')
      }

      if(id === props.cardsId){
        checkAns()
      } 
    }
    
    function checkAns(){
      if(document.getElementById(option).value === props.correctAnswers){
      props.setScore(props.score+1)
      // console.log(props.score)
      }
      else{
        // console.log('wrong')
      }
    }
    
    id++
    return (
      <button id={option} value={option} className='ansBtn' onClick={()=>checkClicked(props.cardsId)}> {option}</button>
      )
    })
  return (
    <>
    {optionsEle}
    </>
  )
}

/**
 * const optionsEle = answers.map(ans => {

    function checkAns(id){
      if(id === item.id){
        setClicked(prev => !prev)
        document.querySelector(`#button${id}`).classList.add('clicked')
        if(correct_answer === ans){
          score++
          // document.querySelector(`#button${id}`).classList.add('green')
        }
      }
    }
      return(
        <button className={clicked?'clicked':''} id={`button${id}`} onClick={()=>{checkAns(id)}}> {ans} </button>
      )
    })
 */

