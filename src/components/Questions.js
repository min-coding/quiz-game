import React from "react"; 

export default function Questions(props){ 
const optionEle = props.allOptions.map(item => { 

function checkAns(id){ 
  if(item.key===id){
    item.isClicked=!item.isClicked 
    props.handleClick()

    if(item.value === props.correct_answer){ 
    props.addScore() 
    } 
  } 
} 

  return( 
  <> 
  <button id={item.key} className={item.isClicked?'option clicked':'option'} onClick={()=>{checkAns(item.key)}}> {item.value}</button> 
  </> 
    ) 
  } 
) 

  return( 
  <div className="quiz-container"> 
    <h3 className='question'>{props.question}</h3> 
    <div className="option-container">
    {optionEle} 
    </div>
  </div> 
  ) 

} 