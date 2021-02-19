import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class StopWatch extends React.Component {
  render(){
    return (
    <body> 
      <div id="timer" >00:00:00</div>
      <div class="row_buttons">
        <div class="buttons lap">Lap</div>
        <div class="buttons start">Start</div>
        <div class="buttons reset reset_hidden">Reset</div>
      </div>
      <div class="scroll_lap"></div>
    </body>
    );
  }
}

ReactDOM.render(<StopWatch /> , document.getElementById('root'));
