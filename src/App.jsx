import React, { useEffect, useState } from "react";
import "./App.css"
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import StartPage from "./components/StartPage";



function App() {

  return (
    <div className='startPage flex'>
      {/* <StartPage /> */}
      <QuestionBox />
      {/* <Result /> */}
    </div>
  );
}

export default App;