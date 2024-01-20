import React from 'react'
import "./Result.css"
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

// taking all props from App.jsx 
export default function Result({setPage , currentState , toggleBtn , onbuttonClick}) {

  // some styles according to theme 
  let resultsStyle = {
    color : currentState ? "black" : "white"
  }

  // accessing the total score from local storage to show on page 
  let score = localStorage.getItem("score")

  return (
    <>
      <div className='heading-nav'>
        <h1 className='Heading'>QUIZWIZ</h1>
        
        {/* using ternery operator to toggle the icon on toggle button */}
        <button className='toggle-btn2' style={toggleBtn} onClick={()=>{onbuttonClick()}}>{currentState ? <MdDarkMode style={{fontSize:"30px"}}/> : <FaRegLightbulb style={{fontSize:"25px"}}/>}</button>
      </div>

      <h1 className='head' style={resultsStyle}>Results Page</h1>

      <h2>Total Questions  :  <span>5</span></h2>

      <div className='answers'>
        <h2>Correct  :  <span>{score}</span></h2>
        <h2>Incorrect  :  <span>{5 - score}</span></h2>
      </div>

      <h2>Win Percentage  :  <span>{(score / (5)) * 100} %</span></h2>

      {/* onclicking going back to start page  */}
      <button className='restart-btn' onClick={()=>{setPage(0)}}> Restart </button>

    </>
  )
}
