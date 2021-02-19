import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Lap extends React.Component{

  
}
class Timer extends React.Component{
  render(){
    return (
      <div id="timer" >00:00:00</div>
    );
  }
}

class StopWatch extends React.Component {
  render(){
    return (
    <body> 
      <Timer/>
      <div className ="row_buttons">
        <div className ="buttons start">Start</div>
        <div className ="buttons reset reset_hidden">Reset</div>
      </div>
      <div class="scroll_lap"></div>
    </body>
    );
  }
}

ReactDOM.render(<StopWatch /> , document.getElementById('root'));
