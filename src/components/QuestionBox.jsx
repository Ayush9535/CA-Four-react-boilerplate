import React from 'react'
import "./QuestionBox.css"
import questions from "../questions.js"
import {useState} from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

export default function QuestionBox({setPage , currentState , toggleBtn , onbuttonClick}) {

  const [currQues , setcurrQues] = useState(0)
  const [score , setscore] = useState(0)
  const [highlight , sethighlight] = useState(0)

  let handleOption = (id) =>{

    if (questions[currQues].options[id].isCorrect === true){
      setscore((score)=>score+1)
      console.log(score)
    }
    if (currQues === 4){
      localStorage.setItem("score" , score)
      setPage(2)
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
    color : highlight === 0 ? currentState ? "black" : "white" : "red"
  }

  let optionStyling = {
    backgroundColor : currentState ? "#D9D9D9" : "#323232",
    color : currentState ? "black" : "white"
  }

  return (
        <>
      <div className='heading-nav'>
        <button className='toggle-btn2' style={toggleBtn} onClick={()=>{onbuttonClick()}}>{currentState ? <MdDarkMode style={{fontSize:"30px"}}/> : <FaRegLightbulb style={{fontSize:"25px"}}/>}</button>
      </div>
      <h1 className='Heading'>QUIZWIZ</h1>

      <h2>Question  :  <span>{currQues + 1}</span>  of  <span>{questions.length}</span></h2>

      <h1 style={quesStyle}>{questions[currQues].text}</h1>

      <button className='option' style={optionStyling} onClick={()=>{handleOption(0)}}> {questions[currQues].options[0].text} </button>

      <button className='option' style={optionStyling} onClick={()=>{handleOption(1)}}> {questions[currQues].options[1].text} </button>

      <button className='option' style={optionStyling} onClick={()=>{handleOption(2)}}> {questions[currQues].options[2].text} </button>

      <button className='option' style={optionStyling} onClick={()=>{handleOption(3)}}> {questions[currQues].options[3].text} </button>

      <div className='highlight-options flex'>
        <button className='highlight' onClick={handleHighlight}> Highlight </button>
        <button className='highlight' onClick={handleUnHighlight}> Unhighlight </button>
      </div>
    </>
  )
}
