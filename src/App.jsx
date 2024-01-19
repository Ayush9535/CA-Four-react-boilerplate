import React, { useState } from "react";
import "./App.css"
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import StartPage from "./components/StartPage";



function App() {

  const [theme , settheme] = useState(true)
  const [currPage , setPage]  = useState(0)

  document.body.style.backgroundColor = theme ? "#66BFBF" : "#323232"

  let handleTheme = () =>{
    settheme(!theme)
  }

  let startPage = {
    backgroundColor : theme ? "#E3F6F5" : "black",
    color : theme ? "black" : "white"
  }

  let toggleBtnStyle = {
    backgroundColor : theme ? "#66BFBF" : "#323232",
    boxShadow : currPage == 0 ? theme ? "5px 5px 0px 0px #66bfbf58" : "5px 5px 0px 0px #dcdcdc6f" : "none",
    color : theme ? "black" : "white"
  }

  return (
      <div className='startPage flex' style={startPage}>
        {currPage === 0 && <StartPage setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}

        {currPage === 1 && <QuestionBox setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}

        {currPage === 2 && <Result setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}
      </div>
  );
}

export default App;