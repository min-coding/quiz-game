import React from 'react';

export default function Answer(props){
  const [clicked,setClicked] = React.useState(false)


  return (
    <>
   
    </>
  )
}

/**
 * const answerEle = answerArray.map(ans => {

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

