import React from 'react'
import "./StartPage.css"

export default function StartPage({setPage , currentState, toggleBtn , onbuttonClick}) {
  return (
    <>
        <h1 className='appHeading'>QUIZWIZ</h1>
        <button className='start-btn btn' onClick={()=>{setPage(1)}}>Start</button>
        <button className='toggle-btn btn' onClick={()=>{onbuttonClick()}} style={toggleBtn}>{currentState ? "Dark" : "Light"}</button>
    </>
  )
}