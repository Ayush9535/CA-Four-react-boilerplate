import React, { useState } from "react";
import "./App.css"
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import StartPage from "./components/StartPage";



function App() {

  // states used for theme checking and current page
  const [theme , settheme] = useState(true)
  const [currPage , setPage]  = useState(0)

  // setting background color according to theme 
  document.body.style.backgroundColor = theme ? "#66BFBF" : "#323232"

  // function to toggle theme 
  let handleTheme = () =>{
    settheme(!theme)
  }

  // some styles according to theme  
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
    // rendering different pages based on page no  
      <div className='startPage flex' style={startPage}>

        {/* if page no = 0 render start page  */}
        {currPage === 0 && <StartPage setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}

        {/* if page no = 1 render questions page  */}
        {currPage === 1 && <QuestionBox setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}

        {/* if page no = 2 render result page  */}
        {currPage === 2 && <Result setPage={setPage} currentState={theme} toggleBtn={toggleBtnStyle} onbuttonClick={handleTheme}/>}
      </div>
  );
}

export default App;