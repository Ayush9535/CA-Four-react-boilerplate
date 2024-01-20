import React from 'react'
import "./QuestionBox.css"
import questions from "../questions.js"
import {useState} from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

// taking all props from App.jsx 
export default function QuestionBox({setPage , currentState , toggleBtn , onbuttonClick}) {

  // making states for current question number and highlight question feature 
  const [currQues , setcurrQues] = useState(0)
  const [highlight , sethighlight] = useState(0)

  // function to run when you choose any option for a question 
  const handleOption = (e) => {

    // if the answer is true update score in localstorage 
    if (e.target.value == "true"){
      localStorage.setItem("score" , Number(localStorage.getItem("score")) + 1)
    }

    // if all question completed then move to result page or show next question 
    if (currQues == 4){
      setPage(2)
    }else{
      setcurrQues(currQues + 1)
    }
  };

  // setting score 0 at the start  
  if (currQues == 0){
    localStorage.setItem("score", 0)
  }

  // function to handle highlight question feature
  let handleHighlight = () => {
    sethighlight(1)
  }

  // function to handle unhighlight question feature
  let handleUnHighlight = () => {
    sethighlight(0)
  }

  // setting some styles according to theme 
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
        <h1 className='Heading'>QUIZWIZ</h1>

        {/* using ternery operator to toggle the icon on toggle button */}
        <button className='toggle-btn2' style={toggleBtn} onClick={()=>{onbuttonClick()}}>{currentState ? <MdDarkMode style={{fontSize:"30px"}}/> : <FaRegLightbulb style={{fontSize:"25px"}}/>}</button>
      </div>

      <h2>Question  :  <span>{currQues + 1}</span>  of  <span>{questions.length}</span></h2>

      <h1 style={quesStyle}>{questions[currQues].text}</h1>

      {/* mapping the options array to show all options */}
      {questions[currQues].options.map((ele)=>(
        <button className='option' key={ele.id} value={ele.isCorrect} style={optionStyling} onClick={handleOption}> {ele.text} </button>
      ))}

      <div className='highlight-options flex'>
        <button className='highlight' onClick={handleHighlight}> Highlight </button>
        <button className='highlight' onClick={handleUnHighlight}> Unhighlight </button>
      </div>
      
    </>
  )
}
