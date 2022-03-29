import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import Answer from './Answer';

export default function Quiz(props){

  let count = 0 
  let score = 0
  let clicked = false
  /**
   * Map out each quiz
   */
  const quizEle = props.cards.map(item => {
  count++
  item.id = count
   
  let {id, question, correct_answer, incorrect_answers } = item
  const answerArray = [correct_answer,...incorrect_answers]

  /**
   * Map out answer button
   */
  const answerEle = answerArray.map(ans => {

    function checkAns(id){
      if(id === item.id){
        clicked=!clicked
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

  return (
    <>
    <div> {question} </div>
    <div> {answerEle} </div>
    </>

  )
  }
)

  return (
    <div> {quizEle} </div>
  )
}

/**
 * 
 * {
 * id:1
 * question: what is the bla bla,
 * answers: [1,2,3,4],
 * correct_answer: 2
 * }
 * 
 * {
 * id:2
 * question: what is the bla bla,
 * answers: [1,2,3,4],
 * correct_answer: 3
 * }
 * 
 * {
 * id:3
 * question: what is the bla bla,
 * answers: [1,2,3,4],
 * correct_answer: 1
 * }
 * 
 * function clicked(id){
 * 
 * }
 * 
 * function checkAnswer(id){
 * 
 * 
 * }
 * 
 * function randomPlace(){
 * 
 * switch the position for correct and wrong answer
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 * 
 */