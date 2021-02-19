import React from "react";
import ReactDOM from "react-dom";
import "./style.css";



class StopWatch extends React.Component {
  render(){
    return (
    <body> 
      <div id="timer" >00:00:00</div>
      <div className ="row_buttons">
        <div className ="buttons lap">Lap</div>
        <div className ="buttons start">Start</div>
        <div className ="buttons reset reset_hidden">Reset</div>
      </div>
      <div class="scroll_lap"></div>
    </body>
    );
  }
}

ReactDOM.render(<StopWatch /> , document.getElementById('root'));
