import React from 'react'
import "./QuestionBox.css"
import questions from "../questions.js"
import {useState} from 'react'

export default function QuestionBox() {

  const [currQues , setcurrQues] = useState(0)
  const [score , setscore] = useState(1)
  const [highlight , sethighlight] = useState(0)

  let handleOption = (id) =>{
    if (questions[currQues].options[id].isCorrect == true){
      setscore(score + 1)
      console.log(score)
    }
    if (currQues == 4){
      alert(score)
    }else{
    setcurrQues(currQues + 1)
  }
  }

  let handleHighlight = () => {
    sethighlight(1)
  }

  let handleUnHighlight = () => {
    sethighlight(0)
  }

  let quesStyle = {
    color : highlight == 0 ? "white" : "red"
  }

  return (
    <>
      <div className='heading-nav'>
        <button className='toggle-btn2'>Light</button>
      </div>
      <h1 className='Heading'>QUIZWIZ</h1>

      <h2>Question  :  <span>{currQues + 1}</span>  of  <span>{questions.length}</span></h2>

      <h1 style={quesStyle}>{questions[currQues].text}</h1>

      <button className='option' onClick={()=>{handleOption(0)}}> {questions[currQues].options[0].text} </button>
      <button className='option' onClick={()=>{handleOption(1)}}> {questions[currQues].options[1].text} </button>
      <button className='option' onClick={()=>{handleOption(2)}}> {questions[currQues].options[2].text} </button>
      <button className='option' onClick={()=>{handleOption(3)}}> {questions[currQues].options[3].text} </button>

      <div className='highlight-options flex'>
        <button className='highlight' onClick={handleHighlight}> Highlight </button>
        <button className='highlight' onClick={handleUnHighlight}> Unhighlight </button>
      </div>
    </>
  )
}
