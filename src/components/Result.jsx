import React from 'react'
import "./Result.css"

export default function Result() {
  return (
    <>
      <div className='heading-nav'>
        <button className='toggle-btn2'>Light</button>
      </div>
      <h1 className='Heading'>QUIZWIZ</h1>

      <h1 className='head'>Results Page</h1>

      <h2>Total Questions  :  <span>5</span></h2>

      <div className='answers'>
        <h2>Correct  :  <span>2</span></h2>
        <h2>Incorrect  :  <span>3</span></h2>
      </div>

      <h2>Win Percentage  :  <span>40%</span></h2>

      <button className='restart-btn'> Restart </button>

    </>
  )
}
