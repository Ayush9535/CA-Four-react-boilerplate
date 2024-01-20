import React from 'react'
import "./StartPage.css"

// taking all props from App.jsx 
export default function StartPage({setPage , currentState, toggleBtn , onbuttonClick}) {
  return (
    <>
        <h1 className='appHeading'>QUIZWIZ</h1>

        {/* using function for onclick which is accessed from props from app.jsx  */}
        <button className='start-btn btn' onClick={()=>{setPage(1)}}>Start</button>
        <button className='toggle-btn btn' onClick={()=>{onbuttonClick()}} style={toggleBtn}>{currentState ? "Dark" : "Light"}</button>
    </>
  )
}